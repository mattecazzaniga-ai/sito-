import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { standings } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Standings() {
  return (
    <section className="section-y bg-white">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Risultati"
          title="Classifica"
          description="Struttura pronta per essere collegata ai risultati reali il giorno dell'evento. I dati mostrati sono di esempio."
        />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-neutral-200">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100">
                  <th scope="col" className="w-20 py-4 pl-6 font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Pos.
                  </th>
                  <th scope="col" className="py-4 font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Azienda
                  </th>
                  <th scope="col" className="hidden py-4 font-display text-xs font-semibold uppercase tracking-widest text-neutral-500 sm:table-cell">
                    Giocate
                  </th>
                  <th scope="col" className="py-4 pr-6 text-right font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Punti
                  </th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row) => (
                  <tr key={row.team} className="border-b border-neutral-100 last:border-0 even:bg-neutral-50/60">
                    <td className="py-4 pl-6">
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold tabular-nums",
                          row.position === 1 ? "bg-red text-white" : "bg-neutral-100 text-neutral-600"
                        )}
                      >
                        {row.position}
                      </span>
                    </td>
                    <td className="py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink sm:text-base">
                      <span className="flex items-center gap-2">
                        {row.position === 1 ? (
                          <Trophy className="h-4 w-4 text-red" aria-hidden="true" />
                        ) : null}
                        {row.team}
                      </span>
                    </td>
                    <td className="hidden py-4 text-sm tabular-nums text-neutral-500 sm:table-cell">
                      {row.played}
                    </td>
                    <td className="py-4 pr-6 text-right font-display text-lg font-bold tabular-nums text-ink">
                      {row.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
