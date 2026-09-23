import { Camera, Handshake, Heart, UsersRound, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
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
                <Card>
                  <IconBadge icon={Icon} />
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                    {pillar.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{pillar.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
