import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import {
  GAMES_CATALOG,
  STUDIO_PROFILE,
  type GameProject,
} from '../data/studioData';
import { ExpandingPillars } from '../components/ExpandingPillars';
import { MediaFrame } from '../components/MediaFrame';
import { ProjectModal } from '../components/ProjectModal';

const PROOF_METRICS = [
  { value: '60 FPS', label: 'Locked console & desktop frame target' },
  { value: '94%', label: 'Positive reception on debut release' },
  { value: '12+', label: 'Years avg. senior engineering experience' },
  { value: '48 hrs', label: 'Repository & pipeline onboarding window' },
];

export function HomePage() {
  const [selectedProject, setSelectedProject] = useState<GameProject | null>(null);
  const flagshipGame = GAMES_CATALOG[0];
  const shippedGame = GAMES_CATALOG[2];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-12 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#1E40AF]">
            Independent Game Development Studio · Est. {STUDIO_PROFILE.foundedYear}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.35rem,4.4vw,3.75rem)] leading-[1.08] font-bold tracking-tight text-[#0F172A] [text-wrap:balance]">
            Interactive worlds engineered from the inside out.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {STUDIO_PROFILE.name} builds atmospheric original games and embeds senior C++,
            rendering, and multiplayer engineers directly into partner production pipelines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
            >
              <span>Explore our games</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-[#1E40AF]"
            >
              <span>Co-development capabilities</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#111827] shadow-sm">
          <div className="relative aspect-16/9 w-full">
            <MediaFrame
              src={STUDIO_PROFILE.heroImage}
              alt="Twilight courtyard of an ancient stone citadel rendered in Unreal Engine 5"
              scrim="vignette"
              fallbackTitle={STUDIO_PROFILE.heroCaptionTitle}
              className="h-full w-full"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-slate-200">
                  Unreal Engine 5.4 · Real-Time Showcase
                </span>
                <span className="hidden font-mono text-xs text-slate-300 tabular-nums sm:inline">
                  1440p · 60 FPS Target
                </span>
              </div>

              <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
                <div className="max-w-lg">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {STUDIO_PROFILE.heroCaptionTitle}
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-200">
                    {STUDIO_PROFILE.heroCaptionMeta}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(flagshipGame)}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-[#0F172A] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>Inspect flagship build</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpandingPillars />

      <section className="border-y border-slate-900/8 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-semibold text-[#1E40AF]">Studio Proof</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F172A] [text-wrap:balance]">
                  Shipped discipline before scale
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Before launching our flagship action RPG, our core team shipped{' '}
                  <span className="font-semibold text-[#0F172A]">{shippedGame.title}</span> on time
                  and under memory budget. Every partnership and original title is built on those
                  same engineering habits.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                  {PROOF_METRICS.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-display text-2xl font-bold tracking-tight text-[#0F172A] tabular-nums sm:text-3xl">
                        {metric.value}
                      </div>
                      <p className="mt-1 text-xs leading-snug text-slate-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(shippedGame)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] whitespace-nowrap transition-colors duration-150 hover:border-[#0F172A] hover:bg-slate-50"
                >
                  <span>Inspect {shippedGame.title}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <Link
                  to="/studio"
                  className="text-sm font-semibold text-slate-600 whitespace-nowrap transition-colors hover:text-[#1E40AF]"
                >
                  Read our story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-slate-900/10">
                <MediaFrame
                  src={shippedGame.image}
                  alt={shippedGame.imageAlt}
                  scrim="bottom"
                  fallbackTitle={shippedGame.title}
                  className="h-full w-full"
                />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <span>{shippedGame.genre}</span>
                    <span aria-hidden="true">·</span>
                    <span>{shippedGame.engine}</span>
                    <span aria-hidden="true">·</span>
                    <span>{shippedGame.releaseWindow}</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                    {shippedGame.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-900/10 bg-white p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0F172A] [text-wrap:balance] sm:text-3xl">
              Planning a vertical slice, co-development arc, or publishing discussion?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              We take on a small number of aligned co-development partnerships each year alongside
              our internal IP roadmap.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF]"
          >
            <span>Start a conversation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
