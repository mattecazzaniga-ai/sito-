"use client";

import { useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { Eyebrow } from "@/components/ui/eyebrow";
import { storyNarrative, type StoryBeat } from "@/lib/content";
import { EASE_OUT, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

function HighlightWord({ text, word }: { text: string; word?: string }) {
  if (!word) return <>{text}</>;

  const index = text.indexOf(word);
  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const after = text.slice(index + word.length);

  return (
    <>
      {before}
      <motion.span
        initial={{ color: "var(--color-neutral-400, #a1a1aa)" }}
        whileInView={{ color: "var(--color-green)" }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="font-semibold"
      >
        {word}
      </motion.span>
      {after}
    </>
  );
}

function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-28, 28]);

  return (
    <div ref={ref} className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[3/4]">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[8%] h-[116%]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
      </motion.div>
    </div>
  );
}

function ParagraphBeat({ beat, index }: { beat: Extract<StoryBeat, { type: "paragraph" }>; index: number }) {
  if (!beat.photo && !beat.photoPending) {
    return (
      <Reveal>
        <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-neutral-700 sm:text-xl">
          <HighlightWord text={beat.text} word={beat.highlight} />
        </p>
      </Reveal>
    );
  }

  const imageFirst = index % 2 === 0;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(imageFirst ? "lg:order-1" : "lg:order-2")}>
        {beat.photo ? (
          <ParallaxPhoto src={beat.photo} alt="Momento di una giornata di Aziende in Campo" />
        ) : (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[3/4]">
            <PlaceholderVisual icon={Camera} label="Foto in arrivo" tone="anthracite" className="h-full w-full" />
          </div>
        )}
      </Reveal>
      <Reveal delay={0.08} className={cn(imageFirst ? "lg:order-2" : "lg:order-1")}>
        <p className="text-balance text-lg leading-relaxed text-neutral-700 sm:text-xl">
          <HighlightWord text={beat.text} word={beat.highlight} />
        </p>
      </Reveal>
    </div>
  );
}

export function StoryNarrative() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-page flex flex-col gap-20 sm:gap-28">
        <div>
          <Reveal>
            <Eyebrow>{storyNarrative.eyebrow}</Eyebrow>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-ink sm:text-6xl lg:text-7xl"
          >
            {storyNarrative.title}
          </motion.h1>
        </div>

        {storyNarrative.beats.map((beat, index) => {
          if (beat.type === "lead") {
            return (
              <Reveal key={`lead-${index}`}>
                <p className="mx-auto max-w-3xl text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                  {beat.text}
                </p>
              </Reveal>
            );
          }

          if (beat.type === "pullquote") {
            return (
              <motion.div
                key={`quote-${index}`}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: EASE_OUT }}
                className="flex flex-col items-center gap-1 py-6 text-center"
              >
                {beat.lines.map((line, lineIndex) => (
                  <p
                    key={line}
                    className={cn(
                      "font-display text-3xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl",
                      lineIndex === beat.lines.length - 1 ? "text-green" : "text-ink"
                    )}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            );
          }

          return <ParagraphBeat key={`p-${index}`} beat={beat} index={index} />;
        })}
      </div>

      <div className="mt-24 bg-ink py-24 sm:mt-32 sm:py-32">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <Reveal>
            <p className="max-w-xl text-balance text-lg text-white/70 sm:text-xl">
              {storyNarrative.closing.lead}
            </p>
          </Reveal>
          <motion.p
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.15 }}
            className="max-w-2xl text-balance font-display text-4xl font-bold uppercase leading-tight text-white sm:text-6xl"
          >
            {storyNarrative.closing.final}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
