import { Medal, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { hallOfFame, individualAwards } from "@/lib/content";

export function HallOfFame() {
  return (
    <section className="section-y bg-white">
      <div className="container-page flex flex-col gap-16">
        <div>
          <SectionHeading eyebrow="La storia sul campo" title="Albo d'oro" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {hallOfFame.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                  <span className="font-display text-4xl font-bold tabular-nums text-ink sm:text-5xl">
                    {entry.year}
                  </span>
                  {entry.verified ? (
                    <>
                      <p className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-ink sm:text-xl">
                        <Trophy className="h-5 w-5 shrink-0 text-red" aria-hidden="true" />
                        {entry.winner}
                      </p>
                      <p className="text-sm leading-relaxed text-neutral-600">{entry.note}</p>
                    </>
                  ) : (
                    <p className="font-display text-base font-medium uppercase tracking-wide text-neutral-400">
                      Risultato da inserire
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-3xl">
              Premi individuali
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {individualAwards.map((award, index) => (
              <Reveal key={`${award.year}-${award.award}`} delay={index * 0.04}>
                <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                    <Medal className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      {award.award} · {award.year}
                    </p>
                    <p className="font-display text-base font-semibold text-ink">{award.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
