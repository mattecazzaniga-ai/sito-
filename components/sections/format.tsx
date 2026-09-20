import { Award, Clock, Sparkles, Swords, Trophy, Users, UsersRound, Layers } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatDetails } from "@/lib/content";

const rows = [
  { icon: Trophy, label: "Sport", value: formatDetails.sport },
  { icon: Users, label: "Giocatori per squadra", value: formatDetails.playersPerTeam },
  { icon: Clock, label: "Durata partite", value: formatDetails.matchDuration },
  { icon: UsersRound, label: "Squadre", value: formatDetails.teams },
  { icon: Layers, label: "Fase a gironi", value: formatDetails.groupStage },
  { icon: Swords, label: "Fase finale", value: formatDetails.finalStage },
  { icon: Award, label: "Premi", value: formatDetails.prizes },
  { icon: Sparkles, label: "Attività extra", value: formatDetails.extras },
];

export function Format() {
  return (
    <section className="section-y bg-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Il format"
          title="Le regole del gioco"
          description="La struttura della giornata, in breve. I dettagli definitivi verranno confermati a ridosso dell'evento."
          tone="light"
        />

        <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((row, index) => (
            <Reveal key={row.label} delay={index * 0.04} className="bg-ink p-7">
              <row.icon className="h-5 w-5 text-red" strokeWidth={1.75} aria-hidden="true" />
              <dt className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                {row.label}
              </dt>
              <dd className="mt-1.5 text-balance font-display text-lg font-medium leading-snug text-white sm:text-xl">
                {row.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
