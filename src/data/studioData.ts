import heroCitadelImg from '../assets/images/hero_unreal_citadel_1794760273859.jpg';
import originalIpImg from '../assets/images/pillar_original_ip_1794760275310.jpg';
import codevWorldImg from '../assets/images/pillar_codev_world_1794760276152.jpg';
import engineTechImg from '../assets/images/pillar_engine_tech_1794760275618.jpg';
import verdantKeepImg from '../assets/images/game_moss_chronicle_1794760277310.jpg';

export interface StudioProfile {
  name: string;
  tagline: string;
  foundedYear: string;
  location: string;
  email: string;
  responseTime: string;
  heroImage: string;
  heroCaptionTitle: string;
  heroCaptionMeta: string;
}

export interface StudioPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  linkTo: string;
  linkLabel: string;
}

export type GameStatus = 'In Production' | 'Tech Demo' | 'Shipped';

export interface GameProject {
  id: string;
  slug: string;
  title: string;
  genre: string;
  engine: string;
  platforms: string;
  releaseWindow: string;
  status: GameStatus;
  summary: string;
  engineeringFocus: string;
  targetSpecs: string;
  teamScope: string;
  image: string;
  imageAlt: string;
}

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  idealFor: string;
  typicalTimeline: string;
  teamComposition: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  detail: string;
}

export interface StackCategory {
  category: string;
  tools: string;
  purpose: string;
}

export const STUDIO_PROFILE: StudioProfile = {
  name: 'Kestrel Interactive',
  tagline: 'Interactive worlds engineered from the inside out.',
  foundedYear: '2024',
  location: 'Remote-First · London & Montreal Timezones',
  email: 'hello@kestrel-interactive.example',
  responseTime: 'Within 2 business days',
  heroImage: heroCitadelImg,
  heroCaptionTitle: 'Project Meridian — Vertical Slice Environment',
  heroCaptionMeta: 'Unreal Engine 5.4 · Real-Time Global Illumination · 60 FPS Target',
};

export const STUDIO_PILLARS: StudioPillar[] = [
  {
    id: 'original-ip',
    index: '01',
    title: 'Original IP',
    subtitle: 'Narrative-driven action & worldbuilding',
    description:
      'We design compact, deeply atmospheric original titles anchored by tactile combat systems, grounded art direction, and responsive world physics.',
    image: originalIpImg,
    imageAlt: 'Armored traveler facing towering basalt monoliths in a misty valley',
    linkTo: '/games',
    linkLabel: 'Explore our games',
  },
  {
    id: 'co-development',
    index: '02',
    title: 'Co-Development',
    subtitle: 'Embedded engineering & vertical slices',
    description:
      'Senior C++ gameplay programmers, technical artists, and environment leads integrating directly into partner studio pipelines to ship milestones on schedule.',
    image: codevWorldImg,
    imageAlt: 'High-detail hard-surface sci-fi orbital research bay environment',
    linkTo: '/services',
    linkLabel: 'View studio services',
  },
  {
    id: 'engine-tech',
    index: '03',
    title: 'Engine & Tools',
    subtitle: 'Shaders, profiling & custom pipelines',
    description:
      'From custom shader authoring and procedural terrain tooling to frame-time optimization, we build the technical foundations that keep games fluid.',
    image: engineTechImg,
    imageAlt: 'Real-time physically based materials and terrain mesh cross-section render',
    linkTo: '/studio',
    linkLabel: 'Inside our studio',
  },
];

export const GAMES_CATALOG: GameProject[] = [
  {
    id: 'ashen-meridian',
    slug: 'ashen-meridian',
    title: 'Ashen Meridian',
    genre: 'Third-Person Action RPG',
    engine: 'Unreal Engine 5.4',
    platforms: 'PC · PlayStation 5 · Xbox Series X|S',
    releaseWindow: '2027 Target',
    status: 'In Production',
    summary:
      'An atmospheric highland action RPG set across weathered basalt monoliths and storm-swept sanctuaries, centered on deliberate melee pacing and environmental storytelling.',
    engineeringFocus:
      'Custom GAS-backed combat state machine, Nanite architectural ruins, and dynamic volumetric fog synchronized with day-night weather transitions.',
    targetSpecs: '60 FPS Performance Mode · Native 1440p Upscaled',
    teamScope: '12 Core Developers · Playable Vertical Slice Complete',
    image: originalIpImg,
    imageAlt: 'Ashen Meridian protagonist overlooking ancient stone monoliths',
  },
  {
    id: 'orbital-drift',
    slug: 'orbital-drift',
    title: 'Orbital Drift',
    genre: 'Co-Op Tactical Extraction',
    engine: 'Unreal Engine 5',
    platforms: 'PC · Steam',
    releaseWindow: '2026 Prototype',
    status: 'In Production',
    summary:
      'Zero-gravity salvage operations inside derelict orbital research stations, pairing tense squad coordination with physically simulated bulkhead breaches.',
    engineeringFocus:
      'Server-authoritative replicated movement, modular hard-surface kitbash pipeline, and spatial acoustic occlusion across pressurized zones.',
    targetSpecs: '120 Hz PC Target · Dedicated Server Architecture',
    teamScope: 'Co-Development Showcase · Alpha Networked Build',
    image: codevWorldImg,
    imageAlt: 'Orbital Drift pressurized sci-fi research corridor',
  },
  {
    id: 'verdant-keep',
    slug: 'verdant-keep',
    title: 'Verdant Keep',
    genre: 'Turn-Based Tactical Adventure',
    engine: 'Unity 6 URP',
    platforms: 'PC · Nintendo Switch Successor',
    releaseWindow: '2025 Release',
    status: 'Shipped',
    summary:
      'A handcrafted diorama tactics game where players guide a small expedition up cliffside watchtowers above shifting cloud seas.',
    engineeringFocus:
      'Deterministic grid pathfinding, custom stylized foliage wind shaders, and ultra-fast asynchronous scene streaming under a 2.5 GB memory budget.',
    targetSpecs: 'Locked 60 FPS Handheld & Desktop · < 2s Level Load',
    teamScope: '6-Person Core Team · Full Production & Release',
    image: verdantKeepImg,
    imageAlt: 'Verdant Keep stylized mossy cliffside watchtower diorama',
  },
  {
    id: 'lumen-forge',
    slug: 'lumen-forge',
    title: 'Lumen Forge Material Suite',
    genre: 'Rendering & Shader Study',
    engine: 'Custom C++ / Vulkan & UE5',
    platforms: 'PC Workstation · Open Technical Study',
    releaseWindow: '2026 Internal R&D',
    status: 'Tech Demo',
    summary:
      'An interactive material calibration and geological terrain tessellation benchmark built to standardize look-dev across all Kestrel Interactive environments.',
    engineeringFocus:
      'Anisotropic brushed metal BRDFs, dual-layer clearcoat glass refraction, and GPU-driven virtual heightfield strata blending.',
    targetSpecs: 'Real-Time Raytraced Reflections · 8.3ms Frame Budget',
    teamScope: '3 Graphics Engineers · Internal Pipeline Tooling',
    image: engineTechImg,
    imageAlt: 'Lumen Forge PBR material and terrain mesh cross-section study',
  },
];

export const STUDIO_SERVICES: ServiceOffering[] = [
  {
    id: 'co-dev',
    number: '01',
    title: 'Full-Cycle Co-Development',
    summary:
      'Senior engineering and environment art pods that embed cleanly into your existing repository, sprint cadence, and milestone reviews.',
    deliverables: [
      'Core gameplay systems in C++ and Blueprint',
      'Playable vertical slice & publisher pitch builds',
      'Environment assembly, lighting & set dressing',
    ],
    idealFor: 'Indie & AA studios scaling up for vertical slice or alpha milestones',
    typicalTimeline: '3 to 9 months per milestone arc',
    teamComposition: '2 Gameplay Engineers · 1 Tech Artist · 1 Environment Lead',
  },
  {
    id: 'rendering',
    number: '02',
    title: 'Engine & Shader Pipelines',
    summary:
      'Custom rendering features, look-dev calibration, and technical art automation designed to hit visual quality targets without blowing frame budgets.',
    deliverables: [
      'Custom HLSL / GLSL shaders and post-process passes',
      'Houdini procedural terrain & kitbash workflows',
      'Automated LOD, texture streaming & asset validation',
    ],
    idealFor: 'Teams establishing visual fidelity standards early in pre-production',
    typicalTimeline: '6 to 12 weeks',
    teamComposition: '1 Graphics Programmer · 1 Senior Technical Artist',
  },
  {
    id: 'multiplayer',
    number: '03',
    title: 'Multiplayer & Netcode Architecture',
    summary:
      'Low-latency replication, server-authoritative combat mechanics, and lobby/matchmaking integration built for resilient online sessions.',
    deliverables: [
      'Client-side prediction and lag compensation',
      'Dedicated server orchestration & profiling',
      'Steamworks / EOS cross-play session wrappers',
    ],
    idealFor: 'Co-op or competitive projects moving from single-player prototype to online',
    typicalTimeline: '8 to 16 weeks',
    teamComposition: '2 Network Engineers · 1 Backend Systems Engineer',
  },
  {
    id: 'porting',
    number: '04',
    title: 'Console Porting & Optimization',
    summary:
      'Deep GPU/CPU frame profiling, memory footprint reduction, and platform certification readiness for current-generation consoles and handheld PCs.',
    deliverables: [
      'RenderDoc, Unreal Insights & PIX frame audits',
      'Memory budget reduction and async I/O tuning',
      'TRC / XR compliance & controller ergonomics',
    ],
    idealFor: 'PC-first titles preparing for multi-platform launch or Steam Deck verification',
    typicalTimeline: '10 to 16 weeks',
    teamComposition: '1 Systems Architect · 2 Platform Engineers · 1 QA Lead',
  },
];

export const STUDIO_MILESTONES: MilestoneItem[] = [
  {
    year: '2024',
    title: 'Studio Founded',
    detail:
      'Established by veteran gameplay and rendering engineers focused on small, senior-led production pods without middle-management bloat.',
  },
  {
    year: '2025',
    title: 'Verdant Keep Shipped',
    detail:
      'Delivered our debut stylized tactical title on PC with zero post-launch critical regressions and a 94% positive player reception.',
  },
  {
    year: '2025',
    title: 'Co-Development Division',
    detail:
      'Partnered with external AA teams on multiplayer systems, Unreal Engine 5 lighting upgrades, and console frame-time optimization.',
  },
  {
    year: '2026',
    title: 'Ashen Meridian Vertical Slice',
    detail:
      'Completed the internal playable slice for our flagship action RPG, validating our core combat loop and Nanite environment pipeline.',
  },
];

export const ENGINEERING_STACK: StackCategory[] = [
  {
    category: 'Engines & Runtime',
    tools: 'Unreal Engine 5.4 · Unity 6 · Custom C++20',
    purpose: 'Primary production environments for AAA-grade 3D worlds and stylized tactics.',
  },
  {
    category: 'Graphics & Technical Art',
    tools: 'HLSL · Vulkan · Houdini · Substance 3D',
    purpose: 'Deterministic PBR look-dev, procedural world assembly, and shader profiling.',
  },
  {
    category: 'Profiling & QA',
    tools: 'Unreal Insights · RenderDoc · PIX · Perforce',
    purpose: 'Frame-budget enforcement, binary asset locking, and automated nightly builds.',
  },
];
