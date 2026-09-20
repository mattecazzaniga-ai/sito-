import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { companies } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Companies() {
  return (
    <section id="aziende" className="section-y bg-neutral-100">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="I partecipanti"
          title="Chi scende in campo."
          description="Le aziende che hanno già confermato la propria presenza. Il roster si aggiorna man mano che arrivano nuove iscrizioni."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {companies.map((company, index) => (
            <Reveal key={company.name} delay={index * 0.03}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red/30 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.2)]">
                <CompanyMark name={company.name} />
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                    {company.name}
                  </p>
                  <p className="text-xs text-neutral-500">{company.sector}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Marquee className="py-2" durationSeconds={36}>
            {companies.map((company) => (
              <div
                key={`marquee-${company.name}`}
                className="flex shrink-0 items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2.5"
              >
                <CompanyMark name={company.name} size="sm" />
                <span className="font-display text-sm font-medium uppercase tracking-wide text-neutral-700">
                  {company.name}
                </span>
              </div>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}

function CompanyMark({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-xl bg-ink font-display font-bold text-white",
        size === "md" ? "h-14 w-14 text-xl" : "h-7 w-7 text-xs"
      )}
      aria-hidden="true"
    >
      {initial || <Building2 className="h-4 w-4" />}
    </span>
  );
}
