import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  ENGINEERING_STACK,
  STUDIO_MILESTONES,
  STUDIO_PILLARS,
  STUDIO_PROFILE,
} from '../data/studioData';
import { MediaFrame } from '../components/MediaFrame';

const STUDIO_PRINCIPLES = [
  {
    number: '01',
    title: 'Small, Senior-Led Pods',
    description:
      'Every project is led directly by engineers and technical artists who write code and ship scenes daily—no layers of distant account managers.',
  },
  {
    number: '02',
    title: 'Frame Budget Discipline',
    description:
      'Visual ambition never excuses hitching. We profile GPU and memory footprints from week one rather than scrambling before certification.',
  },
  {
    number: '03',
    title: 'Transparent Milestones',
    description:
      'Playable builds every two weeks, shared Perforce/Git branches, and honest scope tradeoffs so partners always know where production stands.',
  },
];

export function StudioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 border-b border-slate-900/10 pb-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold text-[#1E40AF]">About {STUDIO_PROFILE.name}</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-tight text-[#0F172A] [text-wrap:balance]">
            Built by engineers who care how games feel
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Founded in {STUDIO_PROFILE.foundedYear}, {STUDIO_PROFILE.name} operates as a focused
            independent studio bridging tactile game design with low-level rendering and systems
            engineering.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {STUDIO_PROFILE.location}
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-4/3 overflow-hidden rounded-2xl border border-slate-900/10">
            <MediaFrame
              src={STUDIO_PILLARS[2].image}
              alt={STUDIO_PILLARS[2].imageAlt}
              scrim="bottom"
              fallbackTitle="Studio Material & Terrain R&D"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      <section className="py-14 lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold text-[#1E40AF]">How We Work</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F172A]">
            Operating principles
          </h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {STUDIO_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="rounded-2xl border border-slate-900/10 bg-white p-7"
            >
              <span className="font-mono text-xs font-medium text-[#1E40AF] tabular-nums">
                {principle.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-[#0F172A]">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-900/10 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold text-[#1E40AF]">Production Pipeline</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F172A]">
              Core technology stack
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Proven engines, graphics debuggers, and source-control pipelines configured for
              distributed teams.
            </p>
          </div>

          <div className="divide-y divide-slate-900/10 rounded-2xl border border-slate-900/10 bg-white lg:col-span-8">
            {ENGINEERING_STACK.map((item) => (
              <div key={item.category} className="p-6 sm:p-7">
                <h3 className="text-xs font-semibold text-slate-500">{item.category}</h3>
                <p className="mt-1.5 font-display text-lg font-semibold text-[#0F172A]">
                  {item.tools}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-900/10 py-14 lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold text-[#1E40AF]">Studio History</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F172A]">
            Production milestones
          </h2>
        </div>

        <div className="mt-8 divide-y divide-slate-900/10 border-y border-slate-900/10">
          {STUDIO_MILESTONES.map((milestone) => (
            <div
              key={milestone.title}
              className="grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline"
            >
              <div className="font-mono text-sm font-medium text-[#1E40AF] tabular-nums sm:col-span-2">
                {milestone.year}
              </div>
              <div className="font-display text-lg font-semibold text-[#0F172A] sm:col-span-4">
                {milestone.title}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 sm:col-span-6">
                {milestone.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Interested in collaborating with our team on an upcoming release?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1E40AF]"
          >
            <span>Get in touch</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
