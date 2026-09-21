import { Volleyball } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { eventIntro } from "@/lib/content";
import { scaleIn } from "@/lib/motion";

export function EventIntro() {
  return (
    <section id="evento" className="section-y bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal variants={scaleIn} className="order-2 lg:order-1">
          <PlaceholderVisual
            icon={Volleyball}
            label="Foto squadra calcio a 5"
            tone="paper"
            className="aspect-[4/5] w-full rounded-3xl sm:aspect-[3/4]"
          />
        </Reveal>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeading
            eyebrow={eventIntro.eyebrow}
            title={eventIntro.title}
          />

          <div className="flex flex-col gap-4">
            {eventIntro.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.05 * index}>
                <p className="max-w-lg text-balance text-base leading-relaxed text-neutral-600 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              {eventIntro.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-2xl border border-neutral-200 px-4 py-3"
                >
                  <p className="font-display text-xs uppercase tracking-widest text-neutral-500">
                    {highlight.label}
                  </p>
                  <p className="font-display text-lg font-semibold text-ink">{highlight.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
