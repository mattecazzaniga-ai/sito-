import { Camera, Handshake, Heart, UsersRound, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { valuesContent } from "@/lib/content";

const pillarIcons: Record<string, LucideIcon> = {
  handshake: Handshake,
  users: UsersRound,
  heart: Heart,
  camera: Camera,
};

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
      </div>
    </section>
  );
}
