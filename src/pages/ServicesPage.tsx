import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { STUDIO_SERVICES } from '../data/studioData';

type ProjectStage = 'Pre-Production' | 'Vertical Slice' | 'Full Production';

const STAGES: ProjectStage[] = ['Pre-Production', 'Vertical Slice', 'Full Production'];

const STAGE_NOTES: Record<ProjectStage, string> = {
  'Pre-Production':
    'Focuses on architecture validation, greybox combat or traversal feel, and risk-reducing technical prototypes.',
  'Vertical Slice':
    'Delivers a representative, polished 15–20 minute build ready for publisher greenlight or investor demos.',
  'Full Production':
    'Scales into sustained multi-sprint feature delivery, performance profiling, and platform compliance.',
};

export function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(STUDIO_SERVICES[0].id);
  const [selectedStage, setSelectedStage] = useState<ProjectStage>('Vertical Slice');

  const activeService =
    STUDIO_SERVICES.find((service) => service.id === selectedServiceId) ?? STUDIO_SERVICES[0];

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
      <div className="max-w-3xl border-b border-slate-900/10 pb-10">
        <p className="text-xs font-semibold text-[#1E40AF]">Studio Capabilities</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-tight text-[#0F172A] [text-wrap:balance]">
          Co-development & engineering services
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Alongside our original games, we partner with studios and publishers on high-leverage
          gameplay engineering, shaders, multiplayer architecture, and console optimization.
        </p>
      </div>

      <section className="mt-12 divide-y divide-slate-900/10 border-b border-slate-900/10">
        {STUDIO_SERVICES.map((service) => (
          <div
            key={service.id}
            className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0F172A]">
                <span className="mr-2 font-mono text-base font-medium text-[#1E40AF] tabular-nums">
                  {service.number}.
                </span>
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {service.summary}
              </p>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-xs font-semibold text-slate-500">Core Deliverables</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40AF]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-4 lg:col-span-3">
              <div>
                <h3 className="text-xs font-semibold text-slate-500">Typical Timeline</h3>
                <p className="mt-1.5 text-sm font-semibold text-[#0F172A] tabular-nums">
                  {service.typicalTimeline}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {service.idealFor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-slate-900/10 bg-white p-6 sm:p-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#1E40AF]">Interactive Scope Planner</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Configure a sample engagement pod
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Select a technical discipline and your current production stage to inspect a typical
            team structure.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <div>
              <h3 className="text-xs font-semibold text-slate-500">1. Choose Discipline</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {STUDIO_SERVICES.map((service) => {
                  const isActive = service.id === selectedServiceId;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#1E40AF] ${
                        isActive
                          ? 'border-[#1E40AF] bg-[#1E40AF]/6 text-[#0F172A]'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0F172A]'
                      }`}
                    >
                      <span className="mr-1.5 font-mono text-xs text-[#1E40AF] tabular-nums">
                        {service.number}
                      </span>
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-500">2. Production Stage</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {STAGES.map((stage) => {
                  const isActive = stage === selectedStage;
                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setSelectedStage(stage)}
                      className={`rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                        isActive
                          ? 'bg-[#0F172A] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0F172A]'
                      }`}
                    >
                      {stage}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-[#F4F5F7] p-6 lg:col-span-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 border-b border-slate-900/10 pb-4">
                <div>
                  <span className="text-xs font-medium text-slate-500">Recommended Pod</span>
                  <h3 className="mt-0.5 font-display text-xl font-semibold text-[#0F172A]">
                    {activeService.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#1E40AF] whitespace-nowrap">
                  {selectedStage}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500">Pod Composition</h4>
                <p className="mt-1 text-sm font-medium text-[#0F172A]">
                  {activeService.teamComposition}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500">Stage Focus</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {STAGE_NOTES[selectedStage]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500">Estimated Cadence</h4>
                <p className="mt-1 text-sm font-medium text-[#0F172A] tabular-nums">
                  {activeService.typicalTimeline}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#1E40AF]"
              >
                <span>Discuss this engagement</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
