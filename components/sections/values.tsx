import { Camera, Handshake, Heart, UsersRound, ShieldCheck, Smile, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { valuesContent } from "@/lib/content";

const pillarIcons: Record<string, LucideIcon> = {
  handshake: Handshake,
  users: UsersRound,
  heart: Heart,
  camera: Camera,
};

const solutionIcons = [UsersRound, ShieldCheck, Smile];

export function Values() {
  return (
    <section className="section-y bg-neutral-100">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow={valuesContent.eyebrow}
          title={valuesContent.title}
          description={valuesContent.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valuesContent.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon];
            return (
              <Reveal key={pillar.label} delay={index * 0.05}>
                <div className="flex h-full flex-col items-start gap-4 rounded-3xl border border-neutral-200 bg-white p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/10 text-red">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                    {pillar.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl bg-ink p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                {valuesContent.solution.title}
              </p>
              <p className="max-w-xl text-balance text-white/70">
                {valuesContent.solution.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {valuesContent.solution.highlights.map((highlight, index) => {
                const Icon = solutionIcons[index] ?? Smile;
                return (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-white/85"
                  >
                    <Icon className="h-4 w-4 text-red" strokeWidth={1.75} aria-hidden="true" />
                    {highlight}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
