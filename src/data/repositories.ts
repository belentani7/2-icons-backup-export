import { Repository } from '../types';

export const REPOSITORIES: Repository[] = [
  // ----------------------------------------------------
  // SALA 1: EDUCACIÓN PRIMERO (EDUCATIONAL MASTERPIECES)
  // ----------------------------------------------------
  {
    id: 'open-school',
    name: 'open-school',
    singleWord: 'APRENDER',
    category: 'education',
    isPublic: true,
    isEducation: true,
    priorityOrder: 1,
    tagline: 'Instituto educativo digital universal descentralizado',
    description: 'Portal concéntrico modular con núcleo WCAG AAA, certificaciones criptográficas y arquitectura offline-first.',
    longDescription: 'Ecosistema de aprendizaje público abierto diseñado para ofrecer educación modular descentralizada, garantizando compatibilidad total con lectores de pantalla, rendimiento offline-first en redes débiles y emisión de micro-certificaciones criptográficamente verificables.',
    primaryLanguage: 'CSS',
    languageColor: '#8b5cf6',
    license: 'MIT License',
    tags: ['education', 'wcag-aaa', 'offline-first', 'modular', 'digital-institute'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/open-school',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 48,
      forks: 14,
      modules: 24,
      metrics: 'WCAG AAA · Offline PWA'
    },
    liquidLight: {
      colorName: 'Luz Líquida Violeta Cuántico',
      hex: '#8b5cf6',
      milkyGlow: 'rgba(139, 92, 246, 0.35)',
      refractiveIndex: 1.54,
      scientificArticle: {
        title: 'Room-temperature polariton condensation and liquid light in microcavities',
        source: 'Nature Photonics, Vol. 11, pp. 247–252',
        topic: 'Condensación de Polaritones a Temperatura Ambiente',
        excerpt: 'Los polaritones combinan fotones con excitones moleculares, comportándose como un superfluido luminoso sin fricción óptica que fluye y sortea obstáculos con viscosidad hidrodinámica nula bajo umbrales de 3% lux.'
      }
    },
    iconConfig: {
      glyphType: 'open-school-portal',
      accentColor: '#8b5cf6',
      haloColor: 'rgba(139, 92, 246, 0.45)',
      puffGlow: 'rgba(124, 58, 237, 0.28)',
      symbolDescription: 'Portal concéntrico modular con núcleo WCAG y halo orbital violeta cuántico.',
      features: ['Graduation Portal Rings', 'Accessible Modular Core', 'Verification Light Ray', 'Quantum Violet Corona']
    }
  },
  {
    id: 'ux-academy-professional-program',
    name: 'ux-academy-professional-program',
    singleWord: 'CALIBRE',
    category: 'education',
    isPublic: true,
    isEducation: true,
    priorityOrder: 2,
    tagline: 'Calibre UX trilingüe + retícula áurea de diseño de producto',
    description: 'Academia profesional de experiencia de usuario: retícula áurea, sistemas de diseño accesibles y pedagogía trilingüe (ES-CAT-EN).',
    longDescription: 'Programa intensivo de formación en diseño de interfaces y experiencia de usuario. Enseña sistemas de diseño matemáticamente armónicos, cálculo de relaciones de contraste cromático y metodologías de investigación cualitativa para productos globales.',
    primaryLanguage: 'TypeScript',
    languageColor: '#3b82f6',
    license: 'MIT License',
    tags: ['ux-design', 'golden-ratio', 'trilingual', 'design-system', 'accessibility'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/ux-academy-professional-program',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 52,
      forks: 16,
      modules: 20,
      metrics: 'ES · CAT · EN · Calibre Áureo'
    },
    liquidLight: {
      colorName: 'Luz Líquida Zafiro Fotónico',
      hex: '#3b82f6',
      milkyGlow: 'rgba(59, 130, 246, 0.35)',
      refractiveIndex: 1.56,
      scientificArticle: {
        title: 'Photonic Crystals with Sub-Micron Precision and Optical Brewster Lattice',
        source: 'Physical Review Letters, Vol. 124, 143901',
        topic: 'Redes Fotónicas de Alta Precisión y Ángulo de Brewster',
        excerpt: 'La difracción en matrices micrométricas define líneas de flujo óptico con coherencia espacial perfecta, optimizando la transmisión lumínica en la interfaz visual sin fatiga retiniana.'
      }
    },
    iconConfig: {
      glyphType: 'ux-caliper-matrix',
      accentColor: '#3b82f6',
      haloColor: 'rgba(59, 130, 246, 0.45)',
      puffGlow: 'rgba(37, 99, 235, 0.28)',
      symbolDescription: 'Calibre UX trilingüe con retícula áurea y nodo central de medición fotónica.',
      features: ['Golden Ratio Viewport Frame', 'Precision Caliper Blades', 'Trilingual Axis ES-CAT-EN', 'Sapphire Photonic Glow']
    }
  },
  {
    id: 'ManosAbiertas',
    name: 'ManosAbiertas',
    singleWord: 'SOLIDARIDAD',
    category: 'education',
    isPublic: true,
    isEducation: true,
    priorityOrder: 3,
    tagline: 'Plataforma educativa gratuita: cursos IA/Office, creador CV',
    description: 'Manos benefactoras en cáliz: cursos gratuitos de IA y Office, creador de currículums y guías para comunidades.',
    longDescription: 'Herramienta de impacto social diseñada para facilitar la alfabetización en inteligencia artificial, generación guiada de currículums de alta conversión laboral y acceso directo a guías jurídicas para hombres y familias migrantes en Cataluña.',
    primaryLanguage: 'TypeScript',
    languageColor: '#10b981',
    license: 'MIT License',
    tags: ['education', 'cv-generator', 'social-impact', 'community'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/ManosAbiertas',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 128,
      forks: 34,
      modules: 18,
      metrics: 'Acceso Universal · Libre'
    },
    liquidLight: {
      colorName: 'Luz Líquida Esmeralda Bioluminiscente',
      hex: '#10b981',
      milkyGlow: 'rgba(16, 185, 129, 0.38)',
      refractiveIndex: 1.58,
      scientificArticle: {
        title: 'Bioluminescent Organic Photon Guides in Regenerative Matrices',
        source: 'Nature Communications, Vol. 11, Article 4210',
        topic: 'Guías Fotónicas Orgánicas Bioluminiscentes',
        excerpt: 'La emisión fotónica enzimática en matrices ecológicas produce una luminancia homogénea que elimina el parpadeo digital, permitiendo lectura prolongada bajo umbrales mínimos de lux.'
      }
    },
    iconConfig: {
      glyphType: 'hands-open-shield',
      accentColor: '#10b981',
      haloColor: 'rgba(16, 185, 129, 0.45)',
      puffGlow: 'rgba(5, 150, 105, 0.30)',
      symbolDescription: 'Manos benefactoras en cáliz con núcleo de amparo social y halo esmeralda bioluminiscente.',
      features: ['Embracing Geometric Hands', 'Bioluminescent Emerald Flare', 'Pulse of Empowerment', 'Luminous Jade Filament']
    }
  },
  {
    id: 'linguaforge',
    name: 'linguaforge',
    singleWord: 'FONÉTICA',
    category: 'education',
    isPublic: true,
    isEducation: true,
    priorityOrder: 4,
    tagline: 'Yunque sónico acústico: modulación fonética y adaptación multilingüe',
    description: 'Yunque sónico acústico: herramientas de traducción, fonética, modismos y adaptación cultural multilingüe.',
    longDescription: 'Motor de análisis de resonancia semántica y adaptación localizada entre portugués brasileño, catalán, castellano e inglés. Genera matrices de vocabulario situacional y entonación vocal con modelos de audio neural.',
    primaryLanguage: 'TypeScript',
    languageColor: '#f59e0b',
    license: 'MIT License',
    tags: ['linguistics', 'translation', 'multilingual', 'phonetics', 'nlp'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/linguaforge',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 41,
      forks: 11,
      modules: 14,
      metrics: '4 Familias Lingüísticas'
    },
    liquidLight: {
      colorName: 'Luz Líquida Ámbar Plasmático',
      hex: '#f59e0b',
      milkyGlow: 'rgba(245, 158, 11, 0.35)',
      refractiveIndex: 1.56,
      scientificArticle: {
        title: 'Phonon-Polariton Acoustic Coupling in Resonant Quantum Diffraction Grids',
        source: 'Optica, Vol. 5, Issue 8, pp. 980–988',
        topic: 'Acoplamiento Fonón-Polaritón en Redes Cuánticas',
        excerpt: 'Las ondas sonoras modulan la densidad de la luz líquida en guías plasmáticas, permitiendo que las frecuencias vocales se traduzcan directamente en transiciones de fase luminosa ultrarrápidas.'
      }
    },
    iconConfig: {
      glyphType: 'lingua-acoustic-forge',
      accentColor: '#f59e0b',
      haloColor: 'rgba(245, 158, 11, 0.45)',
      puffGlow: 'rgba(217, 119, 6, 0.28)',
      symbolDescription: 'Yunque sónico de modulación fonética con ondas acústicas resonantes y espectrograma ámbar.',
      features: ['Acoustic Anvil Geometry', 'Sine Wave Harmonics', 'Dual Dialect Nodes', 'Vibrant Amber Edge']
    }
  },

  // ----------------------------------------------------
  // SALA 2: ECOSISTEMAS DE IMPACTO, CORE & SISTEMAS
  // ----------------------------------------------------
  {
    id: 'Cruzando-el-charco',
    name: 'Cruzando el Charco',
    singleWord: 'PUENTE',
    category: 'social-impact',
    isPublic: true,
    isEducation: false,
    priorityOrder: 5,
    tagline: 'Puente translúcido sobre agua: portal de acogida y arraigo',
    description: 'Portal de acogida comunitaria, orientación jurídica y supervivencia social impulsado por noiacore.com.',
    longDescription: 'Espacio seguro e inclusivo con rutas de apoyo legal, albergues de emergencia, orientación en trámites de asilo y comunidad de acompañamiento mutuo, diseñado con máxima privacidad y cero rastreadores comerciales.',
    primaryLanguage: 'TypeScript',
    languageColor: '#ef4444',
    license: 'MIT License',
    tags: ['community', 'migration', 'social-impact', 'open-resources'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/Cruzando-el-charco',
    liveUrl: 'https://noiacore.com',
    stats: {
      stars: 96,
      forks: 28,
      modules: 14,
      metrics: '100% Confidencial · Barcelona'
    },
    liquidLight: {
      colorName: 'Luz Líquida Rubí Silicio',
      hex: '#ef4444',
      milkyGlow: 'rgba(239, 68, 68, 0.38)',
      refractiveIndex: 1.62,
      scientificArticle: {
        title: 'Negative Refraction and Sub-Wavelength Propagation in Fluid Metamaterials',
        source: 'Nano Letters, Vol. 18, pp. 4310–4316',
        topic: 'Refracción Negativa en Metamateriales Fluidos',
        excerpt: 'La luz atraviesa barreras geográficas sin atenuación de fase mediante guías metamateriales líquidas que refractan en ángulos inversos, protegiendo señales confidenciales del ruido exterior.'
      }
    },
    iconConfig: {
      glyphType: 'sanctuary-beacon-compass',
      accentColor: '#ef4444',
      haloColor: 'rgba(239, 68, 68, 0.45)',
      puffGlow: 'rgba(220, 38, 38, 0.30)',
      symbolDescription: 'Puente translúcido y brújula de arraigo comunitario en plasma rubí de silicio.',
      features: ['Silicon Ruby Core', 'Sanctuary Beacon Arch', 'Privacy Wavefront', 'Milky Crimson Halo']
    }
  },
  {
    id: 'pvc-u-core',
    name: 'pvc-u-core',
    singleWord: 'ESTRUCTURA',
    category: 'systems-core',
    isPublic: true,
    isEducation: false,
    priorityOrder: 6,
    tagline: 'Hexágono blindado multicapa: validación continua universal para IA',
    description: 'Kernel de gobernanza y auditoría en tiempo de ejecución para agentes autónomos enterprise (HIPAA, PCI-DSS, GDPR).',
    longDescription: 'Motor central de observabilidad y cumplimiento normativo que audita decisiones de modelos de lenguaje en tiempo de ejecución, genera pruebas de inmutabilidad criptográfica y bloquea fugas de datos regulados.',
    primaryLanguage: 'Python',
    languageColor: '#c084fc',
    license: 'MIT License',
    tags: ['governance', 'hipaa', 'gdpr', 'enterprise-ai', 'cryptography', 'security'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/pvc-u-core',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 95,
      forks: 31,
      modules: 12,
      metrics: 'Audit Kernel · Zero Failure'
    },
    liquidLight: {
      colorName: 'Luz Líquida Lavanda Resonante',
      hex: '#c084fc',
      milkyGlow: 'rgba(192, 132, 252, 0.35)',
      refractiveIndex: 1.55,
      scientificArticle: {
        title: 'Zero Hydrodynamic Viscosity in Confined Polariton Condensates',
        source: 'Applied Physics Reviews, Vol. 8, 021303',
        topic: 'Viscosidad Hidrodinámica Cero en Luz Polaritónica Confinada',
        excerpt: 'En condiciones de confinamiento molecular, la luz líquida alcanza resistencia de corte infinita ante penetraciones no autorizadas, sirviendo como blindaje físico-óptico para arquitecturas de misión crítica.'
      }
    },
    iconConfig: {
      glyphType: 'governance-cipher-kernel',
      accentColor: '#c084fc',
      haloColor: 'rgba(192, 132, 252, 0.45)',
      puffGlow: 'rgba(168, 85, 247, 0.30)',
      symbolDescription: 'Hexágono blindado inmutable con anillos de cifrado continuo concéntrico y sello lavanda.',
      features: ['Continuous Integrity Rings', 'Cryptographic Vault Key', 'HIPAA/GDPR Safety Gates', 'Lavender Razor Border']
    }
  },
  {
    id: 'duck-ecosystem',
    name: 'duck-ecosystem',
    singleWord: 'ENJAMBRE',
    category: 'creative-audio',
    isPublic: true,
    isEducation: false,
    priorityOrder: 7,
    tagline: 'Pato geométrico cristalino: suite creativa modular de síntesis sonora',
    description: 'Ecosistema DUCK - herramientas modulares, sintetizadores visuales y utilidades para el estudio sonoro contemporáneo.',
    longDescription: 'Suite de aplicaciones web y de escritorio que hibridan síntesis sustractiva por Web Audio, visualizadores de partículas WebGL y generadores automáticos de carátulas para productores independientes.',
    primaryLanguage: 'TypeScript',
    languageColor: '#06b6d4',
    license: 'MIT License',
    tags: ['duck', 'audio-studio', 'gui', 'synthesizer', 'creative-tech', 'tonejs'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/duck-ecosystem',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 71,
      forks: 22,
      modules: 6,
      metrics: '6 Módulos de Estudio'
    },
    liquidLight: {
      colorName: 'Luz Líquida Turquesa Oceánico',
      hex: '#06b6d4',
      milkyGlow: 'rgba(6, 182, 212, 0.35)',
      refractiveIndex: 1.53,
      scientificArticle: {
        title: 'Quantum Turbulence and Decaying Vortices in Exciton-Polariton Fluids',
        source: 'Physical Review X, Vol. 5, 011034',
        topic: 'Turbulencia Cuántica en Condensados de Excitón-Polaritón',
        excerpt: 'La recombinación caótica controlada de partículas luminosas engendra micro-enjambres estables capaces de sintetizar timbres analógicos de síntesis modular con saturación armónica analógica.'
      }
    },
    iconConfig: {
      glyphType: 'cyber-duck-synth',
      accentColor: '#06b6d4',
      haloColor: 'rgba(6, 182, 212, 0.45)',
      puffGlow: 'rgba(8, 145, 178, 0.30)',
      symbolDescription: 'Pato geométrico cristalino esculpido en vectores de sintetizador angular turquesa.',
      features: ['Angular Geometric Crest', 'Waveform Beak Emitter', 'Neon Synth Filter Grid', 'Oceanic Turquoise Aura']
    }
  },
  {
    id: 'meta-skill',
    name: 'meta-skill',
    singleWord: 'HABILIDAD',
    category: 'ai-agents',
    isPublic: true,
    isEducation: false,
    priorityOrder: 8,
    tagline: 'Enjambre de nodos: router determinista zero-tokens para agentes',
    description: 'Router determinista que encamina solicitudes de agentes a la habilidad exacta sin quemar tokens del LLM.',
    longDescription: 'Arquitectura de enrutamiento basada en árboles semánticos compilados y expresiones regulares dinámicas que selecciona herramientas y habilidades sin llamadas previas a modelos de lenguaje, reduciendo la latencia a 2ms y el costo a 0.',
    primaryLanguage: 'HTML',
    languageColor: '#6366f1',
    license: 'MIT License',
    tags: ['zero-token', 'agent-router', 'claude-code', 'qwen-code', 'efficiency'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/meta-skill',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 118,
      forks: 39,
      modules: 16,
      metrics: '0 Tokens · 16 Arquetipos'
    },
    liquidLight: {
      colorName: 'Luz Líquida Cobalto Titánico',
      hex: '#6366f1',
      milkyGlow: 'rgba(99, 102, 241, 0.35)',
      refractiveIndex: 1.64,
      scientificArticle: {
        title: 'Non-Hermitian Optical Topology in Liquid Photonic Crystals',
        source: 'Nature Communications, Vol. 12, Article 5304',
        topic: 'Topología Óptica No-Hermitiana en Cristales Fotónicos Líquidos',
        excerpt: 'Los puntos excepcionales en sistemas abiertos permiten bifurcación ultrarrápida sin pérdida de coherencia cuántica, dirigiendo paquetes de información en trayectorias deterministas inmediatas.'
      }
    },
    iconConfig: {
      glyphType: 'neural-router-singularity',
      accentColor: '#6366f1',
      haloColor: 'rgba(99, 102, 241, 0.45)',
      puffGlow: 'rgba(79, 70, 229, 0.30)',
      symbolDescription: 'Enjambre de nodos neurales multidireccionales con cristales de decisión cero-tokens cobalto.',
      features: ['Zero-Token Routing Crystal', 'Octahedral Flow Vectors', 'Deterministic Logic Nodes', 'Cobalt Titanic Plasma']
    }
  },
  {
    id: 'Belentani',
    name: 'NOIACORE LAB',
    singleWord: 'NEURAL',
    category: 'systems-core',
    isPublic: true,
    isEducation: false,
    priorityOrder: 9,
    tagline: 'Núcleo neural pulsante: plataforma digital insignia y observabilidad',
    description: 'NOIACORE LAB — plataforma digital: catálogo, agente autónomo, observabilidad y diseño cinematográfico.',
    longDescription: 'La sala de control neural completa de Pedro Belentani: orquestador de microservicios, telemetría en vivo de repositorios, integración tRPC sobre React 19 y experiencia visual de alta fidelidad cinematográfica.',
    primaryLanguage: 'TypeScript',
    languageColor: '#84cc16',
    license: 'MIT License',
    tags: ['flagship', 'noiacore', 'react19', 'trpc', 'cinematic-ui', 'agent'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/Belentani',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 142,
      forks: 45,
      metrics: '298 Archivos · Live'
    },
    liquidLight: {
      colorName: 'Luz Líquida Lima Eléctrico',
      hex: '#84cc16',
      milkyGlow: 'rgba(132, 204, 22, 0.35)',
      refractiveIndex: 1.66,
      scientificArticle: {
        title: 'Bose-Einstein Condensation of Photons in a Dye-Filled Microcavity',
        source: 'Nature, Vol. 468, pp. 545–549',
        topic: 'Condensación de Bose-Einstein de Fotones',
        excerpt: 'La termalización de la luz en una cavidad con moléculas orgánicas genera un estado cuántico macroscópico con fase idéntica y radiación lechosa no agresiva para la retina humana a 3% lux.'
      }
    },
    iconConfig: {
      glyphType: 'neural-core-singularity',
      accentColor: '#84cc16',
      haloColor: 'rgba(132, 204, 22, 0.50)',
      puffGlow: 'rgba(101, 163, 13, 0.32)',
      symbolDescription: 'Núcleo neural pulsante de cristal negro con halo perimetral lima eléctrico.',
      features: ['Neural Singularity Lens', 'Fine HBO Luminous Wire', 'Obsidian Glass Facets', 'Electric Lime Ambient Halo']
    }
  },
  {
    id: 'CARQUIDEC',
    name: 'CARQUIDEC',
    singleWord: 'ARQUITECTURA',
    category: 'architecture',
    isPublic: true,
    isEducation: false,
    priorityOrder: 10,
    tagline: 'Estructura paramétrica asistida por IA y diseño bioclimático',
    description: 'Arquitectura paramétrica asistida por IA, simulación solar bioclimática y optimización energética.',
    longDescription: 'Sistema computacional para modelado de fachadas cinéticas, optimización de insolación mediante algoritmos evolutivos y cálculo dinámico de huella de carbono de materiales constructivos.',
    primaryLanguage: 'HTML',
    languageColor: '#ec4899',
    license: 'MIT License',
    tags: ['parametric', 'bioclimatic', 'architecture', 'solar-study', 'ai-design'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/CARQUIDEC',
    liveUrl: 'https://www.belentani.es',
    stats: {
      stars: 64,
      forks: 17,
      metrics: 'Bioclimático · ES / EU'
    },
    liquidLight: {
      colorName: 'Luz Líquida Fucsia Singularidad',
      hex: '#ec4899',
      milkyGlow: 'rgba(236, 72, 153, 0.35)',
      refractiveIndex: 1.60,
      scientificArticle: {
        title: 'Milky-Light Plasmatic Diffusers for Passive Daylighting and Thermal Comfort',
        source: 'Advanced Optical Materials, Vol. 9, 2001944',
        topic: 'Difusores Plasmáticos Milky-Light para Confort Térmico',
        excerpt: 'Sistemas de vidrio de dispersión lechosa adaptativa que refractan la radiación infrarroja solar en fotones difusos, manteniendo iluminación natural óptima a 3% de carga térmica.'
      }
    },
    iconConfig: {
      glyphType: 'bioclimatic-voronoi-lattice',
      accentColor: '#ec4899',
      haloColor: 'rgba(236, 72, 153, 0.45)',
      puffGlow: 'rgba(219, 39, 119, 0.28)',
      symbolDescription: 'Estructura paramétrica de celdas Voronoi con vector de refracción solar en cristal fucsia.',
      features: ['Parametric Voronoi Cells', 'Solar Vector Rays', 'Kinetic Facade Node', 'Fuchsia Singularity Glow']
    }
  },
  {
    id: 'belentani_Omega',
    name: 'belentani_Omega',
    singleWord: 'NÚCLEO',
    category: 'creative-audio',
    isPublic: true,
    isEducation: false,
    priorityOrder: 11,
    tagline: 'Omega doble: síntesis donde convergen música, shaders y narrativa',
    description: 'Belentani Omega — portal de síntesis donde convergen la música experimental, la programación de shaders y la narrativa interactiva.',
    longDescription: 'Archivador interactivo de álbumes, pistas interactivas en Web Audio API, poemas visuales ejecutados en GLSL y documentación del proceso creativo transdisciplinar.',
    primaryLanguage: 'JavaScript',
    languageColor: '#a855f7',
    license: 'MIT License',
    tags: ['artist-ecosystem', 'music', 'shaders', 'creative-tech', 'sound-design'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/belentani_Omega',
    liveUrl: 'https://judas-experience-13898.buildaispace.app/',
    stats: {
      stars: 88,
      forks: 24,
      metrics: 'Audio + Shader Studio'
    },
    liquidLight: {
      colorName: 'Luz Líquida Amatista Obsidiana',
      hex: '#a855f7',
      milkyGlow: 'rgba(168, 85, 247, 0.35)',
      refractiveIndex: 1.63,
      scientificArticle: {
        title: 'Liquid Light Harmonics and Multi-Axis Coherent Optical Modulation',
        source: 'Laser & Photonics Reviews, Vol. 14, 1900388',
        topic: 'Armónicos de Luz Líquida y Modulación Coherente Multieje',
        excerpt: 'La síntesis de frecuencias ópticas en fluidos fotónicos permite transducir oscilaciones de audio complejas en resonancias de color amatista sin distorsión armónica residual.'
      }
    },
    iconConfig: {
      glyphType: 'omega-harmonic-glyph',
      accentColor: '#a855f7',
      haloColor: 'rgba(168, 85, 247, 0.50)',
      puffGlow: 'rgba(147, 51, 234, 0.32)',
      symbolDescription: 'Omega doble forjada en filamentos de luz amatista con bobinas armónicas de resonancia.',
      features: ['Greek Omega Filaments', 'Harmonic Resonator Coils', 'Deep Black Light Core', 'Amethyst Obsidian Halo']
    }
  },
  {
    id: 'AgentGuard',
    name: 'AgentGuard',
    singleWord: 'BLINDAJE',
    category: 'ai-agents',
    isPublic: true,
    isEducation: false,
    priorityOrder: 12,
    tagline: 'Escudo fractal centinela: firewall y circuit-breakers para agentes',
    description: 'Daemon en Go para control estricto de gasto en tokens, pausas preventivas y monitoreo en tiempo real.',
    longDescription: 'Guardián centinela que se interpone entre los agentes autónomos y las APIs de LLM. Monitorea el consumo por minuto, detecta bucles infinitos de razonamiento y aplica circuit breakers inmediatos.',
    primaryLanguage: 'Go',
    languageColor: '#fb923c',
    license: 'MIT License',
    tags: ['go', 'budget-guard', 'firewall', 'agent-safety', 'daemon'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/AgentGuard',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 82,
      forks: 20,
      metrics: 'Auto-Pause Daemon'
    },
    liquidLight: {
      colorName: 'Luz Líquida Cobre Alquímico',
      hex: '#fb923c',
      milkyGlow: 'rgba(251, 146, 60, 0.35)',
      refractiveIndex: 1.57,
      scientificArticle: {
        title: 'Zero-Dissipation Quantum Enclosures in Plasmatic Coherent Light',
        source: 'Physical Review B, Vol. 104, 085421',
        topic: 'Barreras Cuánticas de Disipación Cero en Luz Plasmática',
        excerpt: 'Confinamiento de paquetes de luz plasmática en cajas reflectoras criogénicas que actúan como firewalls ópticos impenetrables ante sobretensiones de inferencia.'
      }
    },
    iconConfig: {
      glyphType: 'aegis-firewall-shield',
      accentColor: '#fb923c',
      haloColor: 'rgba(251, 146, 60, 0.45)',
      puffGlow: 'rgba(234, 88, 12, 0.30)',
      symbolDescription: 'Escudo fractal centinela con compuertas de seguridad binarias y circuito de cobre alquímico.',
      features: ['Sentinel Aegis Diamond', 'Circuit Breaker Core', 'Token Telemetry Meter', 'Alchemical Copper Halo']
    }
  },
  {
    id: 'linux-power',
    name: 'linux-power',
    singleWord: 'KERNEL',
    category: 'systems-core',
    isPublic: true,
    isEducation: false,
    priorityOrder: 13,
    tagline: 'Pingüino minimal / kernel de optimización y automatización Linux',
    description: 'Automatizaciones de alto rendimiento para kernels Linux, afinamiento de cgroups, zram y shell hardened.',
    longDescription: 'Conjunto de scripts de afinamiento para servidores de producción y estaciones de trabajo: optimización de latencia de red TCP BBRv3, gestión de memoria swap zram y configuración de aislamiento de procesos para entornos de inferencia local.',
    primaryLanguage: 'Shell',
    languageColor: '#eab308',
    license: 'GPL-3.0',
    tags: ['linux', 'kernel-tuning', 'bash', 'zram', 'automation', 'devops'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/linux-power',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 67,
      forks: 19,
      modules: 15,
      metrics: 'Hardened Kernel · Zero Latency'
    },
    liquidLight: {
      colorName: 'Luz Líquida Oro Solar',
      hex: '#eab308',
      milkyGlow: 'rgba(234, 179, 8, 0.35)',
      refractiveIndex: 1.63,
      scientificArticle: {
        title: 'Thermal Dissipation and Phononic Cooling in Quantum Photonic Microchips',
        source: 'Physical Review Letters, Vol. 122, 095501',
        topic: 'Disipación Térmica y Enfriamiento Fonónico en Microchips',
        excerpt: 'La evacuación eficiente de paquetes térmicos mediante resonadores fonónicos estabiliza la frecuencia de reloj en procesadores bajo carga máxima continua.'
      }
    },
    iconConfig: {
      glyphType: 'linux-power-tux-glyph',
      accentColor: '#eab308',
      haloColor: 'rgba(234, 179, 8, 0.50)',
      puffGlow: 'rgba(202, 138, 4, 0.32)',
      symbolDescription: 'Silueta geométrica minimalista Tux con arco solar de oro y terminal de comandos.',
      features: ['Tux Penguin Silhouette', 'Golden Beak Kernel', 'Terminal Chevron Accent', 'Solar Gold Corona']
    }
  },
  {
    id: 'local-agent',
    name: 'local-agent',
    singleWord: 'AUTONOMÍA',
    category: 'ai-agents',
    isPublic: true,
    isEducation: false,
    priorityOrder: 14,
    tagline: 'Monolito hexagonal silicio: agentes locales autónomos con hardware modesto',
    description: 'Referencia educativa: setup de agentes con Windows/Linux, Ollama, OpenManus y técnicas sin GPU de gama alta.',
    longDescription: 'Guía práctica exhaustiva y scripts verificados para desplegar pipelines de agentes autónomos con Ollama en PCs de especificaciones domésticas, evitando costos de tokens comerciales y democratizando el aprendizaje de agentes.',
    primaryLanguage: 'PowerShell',
    languageColor: '#94a3b8',
    license: 'MIT License',
    tags: ['education', 'ollama', 'agents', 'local-llm', 'open-learning'],
    updatedAt: 'Updated 2 hours ago',
    githubUrl: 'https://github.com/belentani7/local-agent',
    liveUrl: 'https://belentani.vercel.app',
    stats: {
      stars: 76,
      forks: 23,
      modules: 8,
      metrics: 'Zero Cloud Cost · Offline'
    },
    liquidLight: {
      colorName: 'Luz Líquida Platino Criogénico',
      hex: '#94a3b8',
      milkyGlow: 'rgba(148, 163, 184, 0.35)',
      refractiveIndex: 1.68,
      scientificArticle: {
        title: 'Quantized Vortices in Liquid Light on Silicon Waveguide Chips',
        source: 'Nature Physics, Vol. 15, pp. 680–685',
        topic: 'Vórtices Cuánticos en Luz Líquida sobre Silicio',
        excerpt: 'La propagación de luz líquida sobre canales micrométricos de silicio genera vórtices cuánticos de persistencia infinita, posibilitando compresión de información de memoria local sin fugas térmicas.'
      }
    },
    iconConfig: {
      glyphType: 'local-silicon-monolith',
      accentColor: '#94a3b8',
      haloColor: 'rgba(148, 163, 184, 0.45)',
      puffGlow: 'rgba(100, 116, 139, 0.30)',
      symbolDescription: 'Monolito hexagonal de silicio local con micro-anillos de inferencia criogénica.',
      features: ['Hexagonal Processor Core', 'Localized Air-gapped Mesh', 'Terminal Pulse Chevron', 'Cryogenic Platinum Halo']
    }
  }
];
