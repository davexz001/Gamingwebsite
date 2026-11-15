import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  GAMES_CATALOG,
  type GameProject,
  type GameStatus,
} from '../data/studioData';
import { MediaFrame } from '../components/MediaFrame';
import { ProjectModal } from '../components/ProjectModal';

type FilterOption = 'All' | GameStatus;

const FILTER_OPTIONS: FilterOption[] = ['All', 'In Production', 'Tech Demo', 'Shipped'];

export function GamesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [selectedProject, setSelectedProject] = useState<GameProject | null>(null);

  const filteredGames =
    activeFilter === 'All'
      ? GAMES_CATALOG
      : GAMES_CATALOG.filter((game) => game.status === activeFilter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between gap-6 border-b border-slate-900/10 pb-10 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#1E40AF]">Portfolio & R&D</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-tight text-[#0F172A] [text-wrap:balance]">
            Games and real-time technical studies
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Original titles in active production, shipped releases, and internal shader/engine
            benchmarks used across our studio.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter projects by production status"
          className="flex flex-wrap items-center gap-1 rounded-xl bg-slate-200/75 p-1 self-start lg:self-auto"
        >
          {FILTER_OPTIONS.map((option) => {
            const isSelected = activeFilter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#1E40AF] ${
                  isSelected
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                {option === 'All' ? 'All Projects' : option}
              </button>
            );
          })}
        </div>
      </div>

      {filteredGames.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-slate-900/10 bg-white p-12 text-center">
          <p className="text-sm text-slate-600">No projects match the selected filter.</p>
          <button
            type="button"
            onClick={() => setActiveFilter('All')}
            className="mt-4 rounded-lg bg-[#0F172A] px-4 py-2 text-xs font-semibold text-white"
          >
            Reset filter
          </button>
        </div>
      ) : (
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredGames.map((game) => (
            <article
              key={game.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <MediaFrame
                  src={game.image}
                  alt={game.imageAlt}
                  scrim="bottom"
                  fallbackTitle={game.title}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-5 bottom-4 flex items-center justify-between gap-2 text-xs font-medium text-slate-200">
                  <span>{game.status}</span>
                  <span className="font-mono tabular-nums">{game.releaseWindow}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span>{game.genre}</span>
                    <span aria-hidden="true">·</span>
                    <span>{game.engine}</span>
                  </div>

                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0F172A]">
                    {game.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{game.summary}</p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <span className="text-xs font-medium text-slate-500 truncate">
                    {game.platforms}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(game)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] whitespace-nowrap shrink-0 transition-colors hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-[#1E40AF]"
                  >
                    <span>Inspect specs</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
