import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import type { GameProject } from '../data/studioData';
import { MediaFrame } from './MediaFrame';

interface ProjectModalProps {
  project: GameProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-900/10 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-16/9 w-full">
          <MediaFrame
            src={project.image}
            alt={project.imageAlt}
            scrim="bottom"
            fallbackTitle={project.title}
            className="h-full w-full"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-black/55 text-white backdrop-blur-xs transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-6 bottom-6 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-200">
              <span>{project.genre}</span>
              <span aria-hidden="true">·</span>
              <span>{project.engine}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
            </div>
            <h2
              id="project-modal-title"
              className="mt-1.5 font-display text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-slate-700">{project.summary}</p>

          <div className="grid gap-6 border-y border-slate-200 py-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold text-slate-500">Engineering & Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {project.engineeringFocus}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-slate-500">Target Specifications</h3>
                <p className="mt-1 text-sm font-medium text-[#0F172A] tabular-nums">
                  {project.targetSpecs}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-500">Platforms & Window</h3>
                <p className="mt-1 text-sm text-slate-700">
                  {project.platforms} · {project.releaseWindow}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-500">Production Scope</h3>
                <p className="mt-1 text-sm text-slate-700">{project.teamScope}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 whitespace-nowrap transition-colors hover:bg-slate-100"
            >
              Back to catalog
            </button>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1E40AF]"
            >
              <span>Request build access</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
