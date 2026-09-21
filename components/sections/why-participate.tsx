import { Award, Camera, Coffee, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
                <div className="group flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-red/30 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/10 text-red transition-colors duration-300 group-hover:bg-red group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
