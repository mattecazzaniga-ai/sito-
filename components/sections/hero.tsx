"use client";

import { motion } from "framer-motion";
import { Calendar, Volleyball, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { eventInfo } from "@/lib/content";
import { DUR, EASE_OUT, staggerContainer } from "@/lib/motion";

const metaItems = [
  { icon: Volleyball, label: eventInfo.sport },
  { icon: Calendar, label: eventInfo.dateLabel },
  { icon: MapPin, label: eventInfo.location },
];

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE_OUT } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh items-end overflow-hidden bg-ink pt-32 pb-16 sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <PlaceholderVisual tone="anthracite" icon={Volleyball} label="Foto azione calcio a 5" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/40" />
      </div>

      <motion.div
        className="container-page relative flex flex-col gap-10"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.12, 0.1)}
      >
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red" aria-hidden="true" />
            Il torneo di calcio a 5 tra aziende
          </span>
        </motion.div>

        <div>
          <motion.h1
            variants={item}
            className="font-display text-[16vw] font-bold uppercase leading-[0.85] tracking-tight text-white sm:text-[9rem] lg:text-[10rem]"
          >
            Aziende
            <br />
            <span className="text-red">In Campo</span>
          </motion.h1>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            variants={item}
            className="max-w-xl text-balance text-lg font-medium text-white/80 sm:text-xl"
          >
            Il calcio a 5 delle aziende: un torneo che porta colleghi e
            aziende del territorio in campo, trasformando una giornata di
            sport in un&rsquo;esperienza da vivere insieme.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button href="/#iscrizione" size="lg">
              Iscrivi la tua azienda
            </Button>
            <Button href="/#evento" size="lg" variant="outline-light">
              Scopri il torneo
            </Button>
          </motion.div>
        </div>

        <motion.dl
          variants={item}
          className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-3"
        >
          {metaItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="h-4 w-4 shrink-0 text-red" strokeWidth={2} aria-hidden="true" />
              <dd className="font-display text-sm font-medium uppercase tracking-wide text-white/85 sm:text-base">
                {label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
