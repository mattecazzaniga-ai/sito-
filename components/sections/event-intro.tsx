import { Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { eventIntro, heroStats } from "@/lib/content";
import { scaleIn } from "@/lib/motion";

export function EventIntro() {
  return (
    <section id="evento" className="section-y bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal variants={scaleIn} className="order-2 lg:order-1">
          <PlaceholderVisual
            icon={Trophy}
            label="Foto squadra in campo"
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

          <Reveal delay={0.2}>
            <dl className="grid grid-cols-2 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl font-bold text-ink sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <p className="mt-1 font-display text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
