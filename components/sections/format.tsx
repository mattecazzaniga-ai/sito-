import { Calendar, Volleyball, Trophy, UsersRound, Whistle, Coffee, Award } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatDetails, formatIdentity } from "@/lib/content";

const identityIcons = {
  ball: Volleyball,
  trophy: Trophy,
  users: UsersRound,
  calendar: Calendar,
} as const;

const rows = [
  { icon: Whistle, label: "Struttura del torneo", value: formatDetails.structure },
  { icon: Coffee, label: "Pausa pranzo", value: formatDetails.lunch },
  { icon: Award, label: "Premiazione", value: formatDetails.awards },
];

export function Format() {
  return (
    <section className="section-y bg-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Il format"
          title="Le regole del gioco"
          description="Gironi, eliminazione diretta e una pausa pranzo per tutti: la struttura di una giornata pensata per giocare, non solo per vincere."
          tone="light"
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {formatIdentity.map(({ icon, label }) => {
              const Icon = identityIcons[icon];
              return (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/85"
                >
                  <Icon className="h-4 w-4 text-red" strokeWidth={1.75} aria-hidden="true" />
                  {label}
                </span>
              );
            })}
          </div>
        </Reveal>

        <dl className="mt-8 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
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
