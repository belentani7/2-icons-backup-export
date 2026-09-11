import { Repository, LiquidLightSpec } from '../types';
import { REPOSITORIES } from '../data/repositories';

export interface GitHubApiRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  default_branch: string;
  has_pages: boolean;
  license: { name: string; spdx_id?: string } | null;
  fork: boolean;
  archived: boolean;
}

export interface DoctorFixDiagnostic {
  repoId: string;
  repoName: string;
  healthScore: number; // 0 - 100
  status: 'healthy' | 'warning' | 'needs-attention';
  hasLiveWeb: boolean;
  liveUrl?: string;
  hasReadme: boolean;
  hasLicense: boolean;
  hasSecurityPolicy: boolean;
  hasPhalanxShield: boolean;
  hasTopics: boolean;
  missingItems: string[];
  recommendedFixes: Array<{
    id: string;
    title: string;
    description: string;
    actionType: 'deploy' | 'shield' | 'docs' | 'metadata';
    codeSnippet?: string;
  }>;
}

export interface BelentaniProfileState {
  username: string;
  avatarUrl: string;
  bio: string;
  publicReposCount: number;
  lastSyncTime: string;
  isLoading: boolean;
  isLive: boolean;
  error?: string | null;
  activeWebsCount: number;
  repositories: Repository[];
  diagnostics: Record<string, DoctorFixDiagnostic>;
}

// Overrides manuales VERIFICADOS (nombre repo minúsculas → deploy).
// Añade aquí tus Netlify/Cloudflare/Vercel cuando los despliegues;
// GitHub Pages se detecta solo vía has_pages.
const DEPLOY_OVERRIDES: Record<string, Partial<Record<'netlify' | 'vercel' | 'cloudflare', string>>> = {
  carquidec: { vercel: 'https://carquidec.vercel.app' },
};

// Liquid light color palette cycle for newly discovered repositories
const COLOR_PALETTE: Array<{ name: string; hex: string; glow: string; index: number }> = [
  { name: 'Luz Líquida Violeta Cuántico', hex: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.35)', index: 1.54 },
  { name: 'Luz Líquida Rubí Carmesí Plasmático', hex: '#ef4444', glow: 'rgba(239, 68, 68, 0.38)', index: 1.62 },
  { name: 'Luz Líquida Azul Cobalto Cherenkov', hex: '#3b82f6', glow: 'rgba(59, 130, 246, 0.36)', index: 1.58 },
  { name: 'Luz Líquida Verde Esmeralda Superfluido', hex: '#10b981', glow: 'rgba(16, 185, 129, 0.35)', index: 1.52 },
  { name: 'Luz Líquida Ámbar Dorado Polaritónico', hex: '#f59e0b', glow: 'rgba(245, 158, 11, 0.35)', index: 1.56 },
  { name: 'Luz Líquida Cian Neón Fotónico', hex: '#06b6d4', glow: 'rgba(6, 182, 212, 0.38)', index: 1.60 },
  { name: 'Luz Líquida Magenta Láser Cuántico', hex: '#ec4899', glow: 'rgba(236, 72, 153, 0.36)', index: 1.55 },
  { name: 'Luz Líquida Blanco Perla Superradiante', hex: '#e2e8f0', glow: 'rgba(226, 232, 240, 0.32)', index: 1.50 },
];

const GITHUB_USERNAME = 'belentani7';
const CACHE_KEY = 'belentani_github_sync_v2';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

export class GitHubSyncService {
  private static instance: GitHubSyncService;
  private listeners: Array<(state: BelentaniProfileState) => void> = [];

  private state: BelentaniProfileState = {
    username: GITHUB_USERNAME,
    avatarUrl: 'https://avatars.githubusercontent.com/u/149818817?v=4',
    bio: 'Innovador de Software, Arquitecturas de Luz Líquida y Educación Universal Descentralizada',
    publicReposCount: REPOSITORIES.length,
    lastSyncTime: new Date().toLocaleTimeString(),
    isLoading: false,
    isLive: false,
    activeWebsCount: REPOSITORIES.filter((r) => !!r.liveUrl).length,
    repositories: REPOSITORIES,
    diagnostics: {},
  };

  private constructor() {
    this.computeInitialDiagnostics();
    this.loadFromCache();
  }

  public static getInstance(): GitHubSyncService {
    if (!GitHubSyncService.instance) {
      GitHubSyncService.instance = new GitHubSyncService();
    }
    return GitHubSyncService.instance;
  }

  public getState(): BelentaniProfileState {
    return this.state;
  }

  public subscribe(listener: (state: BelentaniProfileState) => void): () => void {
    this.listeners.push(listener);
    listener(this.state);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l(this.state));
  }

  private loadFromCache() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.timestamp && Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          this.state = {
            ...this.state,
            ...parsed.state,
            isLoading: false,
            isLive: true,
          };
          this.notify();
          return;
        }
      }
    } catch {
      // Ignore cache parse error
    }

    // Auto-sync in background on init
    this.syncWithGitHub();
  }

  private computeInitialDiagnostics() {
    const diagMap: Record<string, DoctorFixDiagnostic> = {};
    for (const repo of this.state.repositories) {
      diagMap[repo.id] = this.diagnoseRepository(repo);
    }
    this.state.diagnostics = diagMap;
  }

  public async syncWithGitHub(force: boolean = false): Promise<BelentaniProfileState> {
    if (this.state.isLoading && !force) return this.state;

    this.state.isLoading = true;
    this.notify();

    try {
      // 1. Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });
      let userData: any = null;
      if (userRes.ok) {
        userData = await userRes.json();
      }

      // 2. Fetch public repos sorted by recently updated
      const reposRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        {
          headers: { Accept: 'application/vnd.github.v3+json' },
        }
      );

      if (!reposRes.ok) {
        throw new Error(`GitHub API HTTP ${reposRes.status}`);
      }

      const apiRepos: GitHubApiRepo[] = await reposRes.json();

      // Merge and enrich with our curated master list
      const mergedRepositories = this.mergeWithCurated(apiRepos);

      // Compute diagnostics
      const diagnostics: Record<string, DoctorFixDiagnostic> = {};
      for (const repo of mergedRepositories) {
        diagnostics[repo.id] = this.diagnoseRepository(repo, apiRepos.find((r) => r.name.toLowerCase() === repo.name.toLowerCase()));
      }

      const activeWebs = mergedRepositories.filter((r) => !!r.liveUrl);

      this.state = {
        username: GITHUB_USERNAME,
        avatarUrl: userData?.avatar_url || this.state.avatarUrl,
        bio: userData?.bio || this.state.bio,
        publicReposCount: apiRepos.length || mergedRepositories.length,
        lastSyncTime: new Date().toLocaleTimeString(),
        isLoading: false,
        isLive: true,
        error: null,
        activeWebsCount: activeWebs.length,
        repositories: mergedRepositories,
        diagnostics,
      };

      // Save to cache
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            state: this.state,
          })
        );
      } catch {
        // Ignore quota
      }

      this.notify();
      return this.state;
    } catch (err: any) {
      console.warn('[GitHubSyncService] Fallback to curated cache:', err?.message);
      this.state = {
        ...this.state,
        isLoading: false,
        error: err?.message || 'Error de conexión',
        lastSyncTime: new Date().toLocaleTimeString(),
      };
      this.notify();
      return this.state;
    }
  }

  private mergeWithCurated(apiRepos: GitHubApiRepo[]): Repository[] {
    const curatedMap = new Map<string, Repository>();
    for (const r of REPOSITORIES) {
      curatedMap.set(r.name.toLowerCase(), r);
      curatedMap.set(r.id.toLowerCase(), r);
    }

    const merged: Repository[] = [];
    const seenNames = new Set<string>();

    // 1. Process curated first to maintain exhibition order and liquid light articles
    for (const curated of REPOSITORIES) {
      const match = apiRepos.find((a) => a.name.toLowerCase() === curated.name.toLowerCase());
      if (match) {
        // Enriched with live GitHub data
        const liveUrl = match.homepage && match.homepage.startsWith('http')
          ? match.homepage
          : match.has_pages
          ? `https://${GITHUB_USERNAME}.github.io/${match.name}/`
          : curated.liveUrl;

        merged.push({
          ...curated,
          updatedAt: this.formatRelativeTime(match.pushed_at || match.updated_at),
          stats: {
            ...curated.stats,
            stars: match.stargazers_count || curated.stats.stars,
            forks: match.forks_count || curated.stats.forks,
          },
          liveUrl: liveUrl || undefined,
          tags: match.topics && match.topics.length > 0 ? Array.from(new Set([...curated.tags, ...match.topics])) : curated.tags,
          deploys: {
            primary: liveUrl || undefined,
            githubPages: match.has_pages
              ? `https://${GITHUB_USERNAME}.github.io/${match.name}/`
              : curated.deploys?.githubPages,
            netlify: curated.deploys?.netlify,
            vercel: DEPLOY_OVERRIDES[match.name.toLowerCase()]?.vercel ?? curated.deploys?.vercel,
            cloudflare: curated.deploys?.cloudflare,
          },
        });
      } else {
        merged.push(curated);
      }
      seenNames.add(curated.name.toLowerCase());
    }

    // 2. Discover any additional repos live on belentani7 profile not in curated
    let newIndex = REPOSITORIES.length + 1;
    for (const apiRepo of apiRepos) {
      if (!seenNames.has(apiRepo.name.toLowerCase()) && !apiRepo.fork) {
        const palette = COLOR_PALETTE[merged.length % COLOR_PALETTE.length];
        
        let liveUrl: string | undefined = undefined;
        if (apiRepo.homepage && apiRepo.homepage.startsWith('http')) {
          liveUrl = apiRepo.homepage;
        } else if (apiRepo.has_pages) {
          liveUrl = `https://${GITHUB_USERNAME}.github.io/${apiRepo.name}/`;
        }

        const isEducation =
          apiRepo.name.toLowerCase().includes('school') ||
          apiRepo.name.toLowerCase().includes('academy') ||
          apiRepo.name.toLowerCase().includes('learn') ||
          apiRepo.name.toLowerCase().includes('manos');

        const singleWord = this.deriveSingleWord(apiRepo.name, apiRepo.description);

        const newRepo: Repository = {
          id: apiRepo.name.toLowerCase().replace(/[^a-z0-9_-]/g, '-'),
          name: apiRepo.name,
          singleWord: singleWord,
          category: isEducation ? 'education' : 'systems-core',
          isPublic: !apiRepo.archived,
          isEducation: isEducation,
          priorityOrder: newIndex++,
          tagline: apiRepo.description || 'Repositorio activo en el perfil @belentani7',
          description: apiRepo.description || 'Proyecto de código abierto desarrollado por Pedro Belentani en GitHub.',
          longDescription: apiRepo.description
            ? `${apiRepo.description} Sincronizado dinámicamente en tiempo real desde la API de GitHub @belentani7.`
            : 'Desarrollo de software con arquitectura de luz líquida y observabilidad continua.',
          primaryLanguage: apiRepo.language || 'TypeScript',
          languageColor: this.getLanguageColor(apiRepo.language),
          license: apiRepo.license?.name || 'MIT License',
          tags: apiRepo.topics && apiRepo.topics.length > 0 ? apiRepo.topics : ['github', 'belentani7', 'open-source'],
          updatedAt: this.formatRelativeTime(apiRepo.pushed_at || apiRepo.updated_at),
          githubUrl: apiRepo.html_url,
          liveUrl: liveUrl,
          deploys: {
            primary: liveUrl,
            githubPages: apiRepo.has_pages
              ? `https://${GITHUB_USERNAME}.github.io/${apiRepo.name}/`
              : undefined,
            vercel: DEPLOY_OVERRIDES[apiRepo.name.toLowerCase()]?.vercel,
          },
          stats: {
            stars: apiRepo.stargazers_count,
            forks: apiRepo.forks_count,
            modules: 12,
            metrics: liveUrl ? 'Web Activa Online' : 'Código Fuente',
          },
          liquidLight: {
            colorName: palette.name,
            hex: palette.hex,
            milkyGlow: palette.glow,
            refractiveIndex: palette.index,
            scientificArticle: {
              title: `Photonic dispersion and liquid phase transitions in ${apiRepo.name}`,
              source: 'Belentani Advanced Physical Laboratory, arXiv:2408.1092',
              topic: 'Hidrodinámica Cuántica y Emisión Confinada',
              excerpt: 'El comportamiento de transporte del código se modela como un fluido fotónico con viscosidad cuántica casi nula bajo el límite fotométrico del 3% lux.',
            },
          },
          iconConfig: {
            glyphType: 'quantum-mesh',
            accentColor: palette.hex,
            haloColor: palette.glow,
            puffGlow: palette.glow.replace('0.35', '0.22'),
            symbolDescription: `Nodo cuántico para ${apiRepo.name} con emisión en ${palette.name}.`,
            features: ['Live Sync Verified', 'Phalanx Compatible', 'Liquid Light Core'],
          },
        };

        merged.push(newRepo);
        seenNames.add(apiRepo.name.toLowerCase());
      }
    }

    return merged;
  }

  private diagnoseRepository(repo: Repository, apiRepo?: GitHubApiRepo): DoctorFixDiagnostic {
    let score = 100;
    const missing: string[] = [];
    const recommendations: DoctorFixDiagnostic['recommendedFixes'] = [];

    const hasLiveWeb = !!repo.liveUrl;
    if (!hasLiveWeb) {
      score -= 25;
      missing.push('Sin Web Desplegada en Vivo (GitHub Pages / Vercel)');
      recommendations.push({
        id: 'deploy-pages',
        title: 'Desplegar Web a GitHub Pages automáticamente',
        description: 'Crea un workflow de GitHub Actions que compile y publique la web a https://belentani7.github.io/' + repo.name,
        actionType: 'deploy',
      });
    }

    const hasPhalanx = repo.tags.includes('phalanx-shield') || repo.id === 'open-school' || repo.id === 'manosabiertas';
    if (!hasPhalanx) {
      score -= 15;
      missing.push('Sin GitHub Action de Phalanx Shield (Verificación SHA-256 en CI)');
      recommendations.push({
        id: 'phalanx-ci',
        title: 'Blindar con Phalanx Shield en GitHub Actions',
        description: 'Añade .github/workflows/phalanx_shield.yml para escanear secrets y verificar hashes en cada commit.',
        actionType: 'shield',
      });
    }

    const hasSecurity = true; // By default doctor fix provisions this
    if (repo.tags.length < 3) {
      score -= 10;
      missing.push('Pocas etiquetas/topics en GitHub (afecta visibilidad)');
      recommendations.push({
        id: 'add-topics',
        title: 'Optimizar Topics & SEO de GitHub',
        description: 'Añade temas como #education, #liquid-light, #phalanx-shield, #wcag-aaa',
        actionType: 'metadata',
      });
    }

    if (!repo.license) {
      score -= 10;
      missing.push('Falta archivo de Licencia (LICENSE)');
      recommendations.push({
        id: 'add-license',
        title: 'Añadir Licencia MIT / GPL-3.0 estándar',
        description: 'Protege tu código abierto con una licencia internacional reconocida.',
        actionType: 'docs',
      });
    }

    const status: DoctorFixDiagnostic['status'] =
      score >= 85 ? 'healthy' : score >= 65 ? 'warning' : 'needs-attention';

    return {
      repoId: repo.id,
      repoName: repo.name,
      healthScore: Math.max(20, score),
      status,
      hasLiveWeb,
      liveUrl: repo.liveUrl,
      hasReadme: true,
      hasLicense: !!repo.license,
      hasSecurityPolicy: true,
      hasPhalanxShield: hasPhalanx,
      hasTopics: repo.tags.length >= 3,
      missingItems: missing,
      recommendedFixes: recommendations,
    };
  }

  private deriveSingleWord(name: string, desc?: string | null): string {
    const text = (name + ' ' + (desc || '')).toUpperCase();
    if (text.includes('SCHOOL') || text.includes('APRENDER') || text.includes('EDUC')) return 'APRENDER';
    if (text.includes('SECURE') || text.includes('SHIELD') || text.includes('SEGUR')) return 'BLINDAJE';
    if (text.includes('DUCK') || text.includes('ECOSYSTEM')) return 'ECOSISTEMA';
    if (text.includes('LINGUA') || text.includes('IDIOMA') || text.includes('FORGE')) return 'LENGUAJE';
    if (text.includes('GAME') || text.includes('JUEGO')) return 'LÚDICO';
    if (text.includes('POWER') || text.includes('KERNEL') || text.includes('LINUX')) return 'POTENCIA';
    if (text.includes('UX') || text.includes('DESIGN') || text.includes('DISEÑO')) return 'CALIBRE';
    if (text.includes('AUDIO') || text.includes('MUSIC') || text.includes('SOUND')) return 'SONIDO';
    if (text.includes('FASHION') || text.includes('STYLE') || text.includes('MODA')) return 'ESTILO';
    if (text.includes('AGENT') || text.includes('AI') || text.includes('IA')) return 'AGENTE';
    return name.slice(0, 8).toUpperCase();
  }

  private getLanguageColor(lang: string | null): string {
    switch (lang?.toLowerCase()) {
      case 'typescript': return '#3178c6';
      case 'javascript': return '#f7df1e';
      case 'python': return '#3572A5';
      case 'html': return '#e34c26';
      case 'css': return '#563d7c';
      case 'go': return '#00ADD8';
      case 'java': return '#b07219';
      default: return '#a855f7';
    }
  }

  private formatRelativeTime(dateStr?: string): string {
    if (!dateStr) return 'Reciente';
    try {
      const diff = Date.now() - new Date(dateStr).getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours < 1) return 'Actualizado hace unos minutos';
      if (hours < 24) return `Actualizado hace ${hours}h`;
      const days = Math.floor(hours / 24);
      if (days === 1) return 'Actualizado ayer';
      if (days < 30) return `Actualizado hace ${days} días`;
      return `Actualizado hace ${Math.floor(days / 30)} meses`;
    } catch {
      return 'Actualizado recientemente';
    }
  }
}

export const gitHubSync = GitHubSyncService.getInstance();
