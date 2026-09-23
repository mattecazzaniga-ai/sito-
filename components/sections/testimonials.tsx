import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-y bg-neutral-100">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Parola alle aziende"
          title="Chi c'era, lo racconta così."
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
              <Reveal key={testimonial.author} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-7">
                  <Quote className="h-6 w-6 text-green" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-neutral-700">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="font-display text-sm font-semibold text-ink">{testimonial.author}</p>
                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
