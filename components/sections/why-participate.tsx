import { Award, Camera, Coffee, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
import { whyParticipate } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  award: Award,
  camera: Camera,
  coffee: Coffee,
  sparkles: Sparkles,
};

export function WhyParticipate() {
  return (
    <section id="perche-partecipare" className="section-y bg-white">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow={whyParticipate.eyebrow}
          title={whyParticipate.title}
          description={whyParticipate.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyParticipate.benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <Card interactive>
                  <IconBadge icon={Icon} />
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{benefit.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
