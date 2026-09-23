import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials, testimonialsContent } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="section-y bg-neutral-100">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow={testimonialsContent.eyebrow}
          title={testimonialsContent.title}
          description={testimonialsContent.description}
        />

        {testimonials.length === 0 ? (
          <div className="grid gap-5 sm:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-dashed border-neutral-300 bg-white p-7">
                  <Quote className="h-6 w-6 text-neutral-300" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-neutral-400">
                    Le testimonianze delle aziende partecipanti arriveranno presto qui.
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-2">
                    <span className="h-10 w-10 rounded-full bg-neutral-200" aria-hidden="true" />
                    <div>
                      <p className="h-3 w-24 rounded bg-neutral-200" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.quote} delay={index * 0.05}>
                <Card>
                  <Quote className="h-6 w-6 text-green" aria-hidden="true" />
                  <blockquote className="text-base leading-relaxed text-neutral-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <div className="mt-auto border-t border-neutral-200 pt-4">
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">{testimonial.author}</p>
                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
