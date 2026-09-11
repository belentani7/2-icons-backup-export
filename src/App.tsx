import React, { useState, useEffect, Suspense, lazy } from 'react';
import { REPOSITORIES } from './data/repositories';
import { Repository, LightingMode, AppViewVersion, AppleCascadeMode } from './types';
import { PlasmaCanvas } from './components/PlasmaCanvas';
import { X, Layers } from 'lucide-react';

// Code-split: cada vista y modal pesado viaja en su propio chunk.
// Antes todo iba en un JS único de 666KB.
const Cascade3DStream = lazy(() =>
  import('./components/Cascade3DStream').then((m) => ({ default: m.Cascade3DStream }))
);
const SmartWatchCascadeTV = lazy(() =>
  import('./components/SmartWatchCascadeTV').then((m) => ({ default: m.SmartWatchCascadeTV }))
);
const NetflixGrandScreen = lazy(() =>
  import('./components/NetflixGrandScreen').then((m) => ({ default: m.NetflixGrandScreen }))
);
const ZeroTextScreen = lazy(() =>
  import('./components/ZeroTextScreen').then((m) => ({ default: m.ZeroTextScreen }))
);
const HarmoniaEscaparatismoModal = lazy(() =>
  import('./components/HarmoniaEscaparatismoModal').then((m) => ({
    default: m.HarmoniaEscaparatismoModal,
  }))
);
const LiquidLightArticleDrawer = lazy(() =>
  import('./components/LiquidLightArticleDrawer').then((m) => ({
    default: m.LiquidLightArticleDrawer,
  }))
);
const DevOpsCliBackend = lazy(() =>
  import('./components/DevOpsCliBackend').then((m) => ({ default: m.DevOpsCliBackend }))
);
const IconStudioModal = lazy(() =>
  import('./components/IconStudioModal').then((m) => ({ default: m.IconStudioModal }))
);
const CustomIconStudio = lazy(() =>
  import('./components/CustomIconStudio').then((m) => ({ default: m.CustomIconStudio }))
);
const DoctorFixModal = lazy(() =>
  import('./components/DoctorFixModal').then((m) => ({ default: m.DoctorFixModal }))
);

const ViewFallback: React.FC = () => (
  <div
    role="status"
    aria-label="Cargando vista"
    className="relative z-10 w-full h-full flex items-center justify-center"
  >
    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-purple-300/70 uppercase">
      <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" aria-hidden="true" />
      Cargando vista…
    </div>
  </div>
);
import { appleHaptics } from './utils/appleHaptics';
import { gitHubSync } from './services/githubSync';

export default function App() {
  // Defaulting strictly to 3% liquid light (ultra-noir-3) as requested
  const [lightingMode, setLightingMode] = useState<LightingMode>('ultra-noir-3');
  // Primary view version: 'cascade-3d' (Identical 3D Suspended Glass Stream matching image.png)
  const [viewVersion, setViewVersion] = useState<AppViewVersion>('cascade-3d');
  // Apple Cascade Transition Mode ('wallet-stack' | 'cover-flow' | 'cylinder-crown')
  const [appleMode, setAppleMode] = useState<AppleCascadeMode>('wallet-stack');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [targetRepoIndex, setTargetRepoIndex] = useState<number | null>(null);

  // Dynamic GitHub Sync state (Live from @belentani7)
  const [syncState, setSyncState] = useState(gitHubSync.getState());
  const repositories = syncState.repositories;

  // Modals & Drawers
  const [show1000RulesModal, setShow1000RulesModal] = useState<boolean>(false);
  const [showCliBackend, setShowCliBackend] = useState<boolean>(false);
  const [isDoctorFixOpen, setIsDoctorFixOpen] = useState<boolean>(false);
  const [doctorFixRepo, setDoctorFixRepo] = useState<Repository | undefined>(undefined);
  const [selectedRepoForArticle, setSelectedRepoForArticle] = useState<Repository | null>(null);
  const [selectedRepoForModal, setSelectedRepoForModal] = useState<Repository | null>(null);
  const [showStudioWorkbench, setShowStudioWorkbench] = useState<boolean>(false);

  // Subscribe to live GitHub Sync service on mount
  useEffect(() => {
    const unsubscribe = gitHubSync.subscribe((newState) => {
      setSyncState(newState);
    });
    // Trigger initial background sync
    gitHubSync.syncWithGitHub(false);
    return unsubscribe;
  }, []);

  // Global listener for backend CLI shortcut (backtick key ` or ~)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setShowCliBackend((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black text-[#e8e0f5] font-sans selection:bg-purple-900 selection:text-white">
      {/* ─── 1. Ultra-Dark 3% Liquid Light Plasma Canvas ─── */}
      <PlasmaCanvas mode={lightingMode} />

      {/* ─── 2. Faint Milky Diffuse Clouds (3% lux ceiling) ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-1000"
        style={{
          opacity: lightingMode === 'ultra-noir-3' ? 0.04 : lightingMode === 'hbo-noir' ? 0.16 : 0.3,
          background: `
            radial-gradient(ellipse at 25% 25%, rgba(192, 132, 252, 0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 75%, rgba(147, 51, 234, 0.06) 0%, transparent 65%),
            radial-gradient(ellipse at 50% 50%, rgba(216, 180, 254, 0.03) 0%, transparent 70%)
          `,
          filter: 'blur(90px)',
        }}
      />

      {/* ─── 3. HBO Max Cinematic Grain Texture ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── 4. Active Experience Version Switcher (lazy chunks) ─── */}
      <div className="relative z-10 w-full h-full">
        <Suspense fallback={<ViewFallback />}>
          {viewVersion === 'cascade-3d' ? (
          <Cascade3DStream
            repositories={repositories}
            lightingMode={lightingMode}
            onLightingChange={setLightingMode}
            onInspectIcon={(repo) => setSelectedRepoForModal(repo)}
            onOpenRulesModal={() => setShow1000RulesModal(true)}
            onOpenCliBackend={() => setShowCliBackend(true)}
            onOpenLiquidLightArticle={(repo) => setSelectedRepoForArticle(repo)}
            onOpenDoctorFix={(repo) => {
              setDoctorFixRepo(repo);
              setIsDoctorFixOpen(true);
            }}
            appleMode={appleMode}
            onAppleModeChange={setAppleMode}
            soundEnabled={soundEnabled}
            onToggleSound={() => {
              const next = appleHaptics.toggleMute();
              setSoundEnabled(next);
            }}
            targetRepoIndex={targetRepoIndex}
            onSelectRepoIndex={setTargetRepoIndex}
          />
        ) : viewVersion === 'smartwatch-cascade' ? (
          <SmartWatchCascadeTV
            repositories={repositories}
            lightingMode={lightingMode}
            onLightingChange={setLightingMode}
            onInspectIcon={(repo) => setSelectedRepoForModal(repo)}
            onOpenStudioWorkbench={() => setShowStudioWorkbench(true)}
            onSwitchVersion={setViewVersion}
            onOpenRulesModal={() => setShow1000RulesModal(true)}
            onOpenCliBackend={() => setShowCliBackend(true)}
            onOpenLiquidLightArticle={(repo) => setSelectedRepoForArticle(repo)}
          />
        ) : viewVersion === 'zero-text' ? (
          <ZeroTextScreen
            repositories={repositories}
            lightingMode={lightingMode}
            onLightingChange={setLightingMode}
            onInspectIcon={(repo) => setSelectedRepoForModal(repo)}
            onSwitchVersion={setViewVersion}
            onOpenRulesModal={() => setShow1000RulesModal(true)}
            onOpenStudioWorkbench={() => setShowStudioWorkbench(true)}
          />
        ) : (
          <NetflixGrandScreen
            repositories={repositories}
            lightingMode={lightingMode}
            onLightingChange={setLightingMode}
            onInspectIcon={(repo) => setSelectedRepoForModal(repo)}
            onSwitchVersion={setViewVersion}
            onOpenRulesModal={() => setShow1000RulesModal(true)}
            onOpenStudioWorkbench={() => setShowStudioWorkbench(true)}
          />
        )}
        </Suspense>
      </div>

      {/* ─── 5. 1,000 Reglas de Diseño, Armonía, Escaparatismo y Real Glass Glossy ─── */}
      <Suspense fallback={null}>
        <HarmoniaEscaparatismoModal
          isOpen={show1000RulesModal}
          onClose={() => setShow1000RulesModal(false)}
        />
      </Suspense>

      {/* ─── 6. Liquid Light Scientific Articles Drawer (Polaritons & Superfluidity) ─── */}
      <Suspense fallback={null}>
        <LiquidLightArticleDrawer
          repo={selectedRepoForArticle}
          isOpen={Boolean(selectedRepoForArticle)}
          onClose={() => setSelectedRepoForArticle(null)}
        />
      </Suspense>

      {/* ─── 7. DevOps CLI Backend Terminal (Accessed internally via [ ` ] or button) ─── */}
      <Suspense fallback={null}>
      <DevOpsCliBackend
        isOpen={showCliBackend}
        onClose={() => setShowCliBackend(false)}
        onOpenDoctorFix={(repo) => {
          setDoctorFixRepo(repo);
          setIsDoctorFixOpen(true);
        }}
        onSelectRepo={(repoId) => {
          const idx = repositories.findIndex(
            (r) => r.id.toLowerCase() === repoId.toLowerCase() || r.name.toLowerCase().includes(repoId.toLowerCase())
          );
          if (idx !== -1) {
            setTargetRepoIndex(idx);
            setViewVersion('cascade-3d');
          }
        }}
        onOpenArticle={(repoId) => {
          const r = repositories.find(
            (repo) => repo.id.toLowerCase() === repoId.toLowerCase() || repo.name.toLowerCase().includes(repoId.toLowerCase())
          );
          if (r) setSelectedRepoForArticle(r);
        }}
        onInspectIcon={(repoId) => {
          const r = repositories.find(
            (repo) => repo.id.toLowerCase() === repoId.toLowerCase() || repo.name.toLowerCase().includes(repoId.toLowerCase())
          );
          if (r) setSelectedRepoForModal(r);
        }}
        onOpenRules={() => setShow1000RulesModal(true)}
        onOpenHarmonia={() => setShow1000RulesModal(true)}
        onSwitchView={(v) => setViewVersion(v)}
        onChangeLighting={(m) => setLightingMode(m)}
        onChangeAppleMode={(m) => {
          setAppleMode(m);
          setViewVersion('cascade-3d');
        }}
        onToggleSound={(enable) => {
          const next = enable !== undefined ? appleHaptics.toggleMute(!enable) : appleHaptics.toggleMute();
          setSoundEnabled(next);
          return next;
        }}
      />
      </Suspense>

      {/* ─── 8. 4K High-Resolution Icon Studio Modal ─── */}
      <Suspense fallback={null}>
      <IconStudioModal
        repo={selectedRepoForModal}
        onClose={() => setSelectedRepoForModal(null)}
        lightingMode={lightingMode}
        onLightingChange={setLightingMode}
      />
      </Suspense>

      {/* ─── 9. Doctor Fix Agent: Clínica de Repositorios, Despliegues & Blindaje GitHub ─── */}
      <Suspense fallback={null}>
      <DoctorFixModal
        isOpen={isDoctorFixOpen}
        onClose={() => setIsDoctorFixOpen(false)}
        initialRepo={doctorFixRepo}
      />
      </Suspense>

      {/* ─── 10. Custom Icon Studio Drawer / Laboratory Modal ─── */}
      {showStudioWorkbench && (
        <Suspense fallback={null}>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-3xl overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl my-8 bg-black/95 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/20">
              <div>
                <h3 className="text-base font-mono uppercase tracking-wider text-white">
                  LABORATORIO DE ICONOS PROCEDURALES EN VIVO
                </h3>
                <p className="text-xs font-mono text-purple-300/60 mt-0.5">
                  Prueba de halo fino, puff puff y dispersión cromática para repositorios públicos
                </p>
              </div>
              <button
                onClick={() => setShowStudioWorkbench(false)}
                className="p-1.5 rounded-xl border border-purple-500/20 bg-purple-950/40 text-purple-300 hover:text-white hover:border-purple-400/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <CustomIconStudio />
          </div>
        </div>
        </Suspense>
      )}
    </div>
  );
}
