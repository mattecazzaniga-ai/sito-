"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { history } from "@/lib/content";

export function History() {
  const containerRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <section className="bg-neutral-100 pb-20 pt-12 sm:pb-32 sm:pt-16">
      <div className="container-page">
        <ol
          ref={containerRef}
          className="relative grid gap-10 sm:grid-cols-3 sm:gap-6"
        >
          <div
            className="absolute left-4 top-4 hidden h-[2px] w-[calc(100%-2rem)] bg-neutral-300 sm:block"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-4 top-4 hidden h-[2px] origin-left bg-red sm:block"
            style={{ scaleX: scrollYProgress, width: "calc(100% - 2rem)" }}
            aria-hidden="true"
          />

          {history.map((entry, index) => (
            <Reveal as="li" key={entry.year} delay={index * 0.08} className="relative flex flex-col gap-3">
              <span
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-red bg-neutral-100"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-red" />
              </span>
              <span className="font-display text-3xl font-bold tabular-nums text-ink sm:text-4xl">
                {entry.year}
              </span>
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                {entry.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-600">{entry.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
