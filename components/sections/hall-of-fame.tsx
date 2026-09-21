"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Medal, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PlaceholderVisual } from "@/components/ui/placeholder-visual";
import { hallOfFame, individualAwards, type HallOfFameEntry } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HallOfFame() {
  const [openYear, setOpenYear] = useState<string | null>(hallOfFame[hallOfFame.length - 1]?.year ?? null);

  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="La storia sul campo"
          title="Albo d'oro"
          description="Clicca su un'edizione per scoprire il vincitore e i premi individuali."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {hallOfFame.map((entry, index) => (
            <Reveal key={entry.year} delay={index * 0.06}>
              <HallOfFameCard
                entry={entry}
                isOpen={openYear === entry.year}
                onToggle={() =>
                  setOpenYear((current) => (current === entry.year ? null : entry.year))
                }
                awards={individualAwards.filter((award) => award.year === entry.year)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HallOfFameCard({
  entry,
  isOpen,
  onToggle,
  awards,
}: {
  entry: HallOfFameEntry;
  isOpen: boolean;
  onToggle: () => void;
  awards: { year: string; award: string; name: string; photo?: string }[];
}) {
  const panelId = useId();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex flex-col text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.28)]"
      >
        {entry.verified && entry.photo ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={entry.photo}
              alt={`Squadra vincitrice ${entry.winner} — edizione ${entry.year} di Aziende in Campo`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <span className="absolute bottom-4 left-5 font-display text-4xl font-bold tabular-nums text-white sm:text-5xl">
              {entry.year}
            </span>
          </div>
        ) : (
          <span className="p-8 pb-0 font-display text-4xl font-bold tabular-nums text-ink sm:text-5xl">
            {entry.year}
          </span>
        )}

        <div className="flex flex-1 items-start justify-between gap-4 p-8">
          {entry.verified ? (
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-ink sm:text-xl">
                <Trophy className="h-5 w-5 shrink-0 text-red" aria-hidden="true" />
                {entry.winner}
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">{entry.note}</p>
            </div>
          ) : (
            <p className="font-display text-base font-medium uppercase tracking-wide text-neutral-400">
              Risultato da inserire
            </p>
          )}
          {awards.length > 0 ? (
            <span
              className={cn(
                "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-ink transition-transform duration-300",
                isOpen && "rotate-180 border-red bg-red text-white"
              )}
              aria-hidden="true"
            >
              <ChevronDown size={16} strokeWidth={2.5} />
            </span>
          ) : null}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && awards.length > 0 ? (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden border-t border-neutral-200"
          >
            <div className="grid gap-4 p-8 sm:grid-cols-2">
              {awards.map((award) => (
                <div key={award.award} className="flex flex-col gap-3">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    {award.photo ? (
                      <Image
                        src={award.photo}
                        alt={`${award.name} — ${award.award} edizione ${award.year}`}
                        fill
                        sizes="(min-width: 640px) 25vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <PlaceholderVisual
                        icon={Medal}
                        label="Foto in arrivo"
                        tone="paper"
                        className="h-full w-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      {award.award}
                    </p>
                    <p className="font-display text-base font-semibold text-ink">{award.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
