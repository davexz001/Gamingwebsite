import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_PILLARS } from '../data/studioData';
import { MediaFrame } from './MediaFrame';

export function ExpandingPillars() {
  const [activeId, setActiveId] = useState<string>(STUDIO_PILLARS[0].id);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-xs font-semibold text-[#1E40AF]">Core Disciplines</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F172A] [text-wrap:balance] sm:text-4xl">
            Built around three studio pillars
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
          Select or hover any discipline below to inspect how we balance original game creation with
          partner engineering.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:h-[440px] lg:flex-row">
        {STUDIO_PILLARS.map((pillar) => {
          const isActive = pillar.id === activeId;

          return (
            <article
              key={pillar.id}
              onMouseEnter={() => setActiveId(pillar.id)}
              onFocus={() => setActiveId(pillar.id)}
              className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-900/10 bg-[#111827] transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-0 ${
                isActive ? 'lg:flex-[2.2]' : 'lg:flex-1'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveId(pillar.id)}
                aria-expanded={isActive}
                aria-label={`Select ${pillar.title}`}
                className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white lg:hidden"
              />

              <MediaFrame
                src={pillar.image}
                alt={pillar.imageAlt}
                scrim="bottom"
                fallbackTitle={pillar.title}
                className="absolute inset-0 h-full w-full"
                imgClassName={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'
                }`}
              />

              <div className="relative z-20 flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-medium text-slate-300 tabular-nums">
                      {pillar.index}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-200">{pillar.subtitle}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveId(pillar.id)}
                    aria-label={`Focus ${pillar.title}`}
                    className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150 lg:inline-flex ${
                      isActive
                        ? 'border-white/30 bg-white text-[#0F172A]'
                        : 'border-white/20 bg-black/30 text-white hover:bg-white/15'
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div
                  className={`mt-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'translate-y-0 opacity-100'
                      : 'lg:pointer-events-none lg:translate-y-2 lg:opacity-0'
                  }`}
                >
                  <p className="max-w-md text-sm leading-relaxed text-slate-200">
                    {pillar.description}
                  </p>
                  <Link
                    to={pillar.linkTo}
                    className="relative z-30 mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#0F172A] whitespace-nowrap transition-colors duration-150 hover:bg-[#1E40AF] hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span>{pillar.linkLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
