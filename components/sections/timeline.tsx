"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { timeline, timelineContent } from "@/lib/content";

export function Timeline() {
  const containerRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow={timelineContent.eyebrow}
          title={timelineContent.title}
          description={timelineContent.description}
        />

        <ol ref={containerRef} className="relative mt-16 flex flex-col gap-12 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-neutral-200 sm:left-[11px]" aria-hidden="true" />
          <motion.div
            className="absolute left-[7px] top-2 w-[2px] origin-top bg-green sm:left-[11px]"
            style={{ scaleY: scrollYProgress, height: "calc(100% - 1rem)" }}
            aria-hidden="true"
          />

          {timeline.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.03} className="relative">
              <span
                className="absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-green bg-white sm:-left-10 sm:h-5 sm:w-5"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-display text-2xl font-bold tabular-nums text-green sm:w-16 sm:shrink-0 sm:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
