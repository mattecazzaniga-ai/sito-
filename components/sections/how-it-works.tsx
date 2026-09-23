"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorksContent, howItWorksSteps } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function HowItWorks() {
  return (
    <section id="come-funziona" className="section-y bg-neutral-100">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow={howItWorksContent.eyebrow}
          title={howItWorksContent.title}
          description={howItWorksContent.description}
        />

        <motion.ol
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          {howItWorksSteps.map((step) => (
            <motion.li
              key={step.number}
              variants={fadeUp}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-green/30 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]"
            >
              <span
                className="absolute right-5 top-3 font-display text-7xl font-bold leading-none text-neutral-100 transition-colors duration-300 group-hover:text-green/10"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span className="relative font-display text-sm font-semibold uppercase tracking-widest text-green">
                {step.number}
              </span>
              <h3 className="relative font-display text-xl font-semibold uppercase leading-tight text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
