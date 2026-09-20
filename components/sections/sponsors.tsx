import { Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { sponsors, type SponsorTier } from "@/lib/content";
import { cn } from "@/lib/utils";

const tierConfig: Record<
  SponsorTier,
  { label: string; spanClass: string; cardClass: string; iconClass: string }
> = {
  main: {
    label: "Main Partner",
    spanClass: "col-span-2",
    cardClass: "h-28 sm:h-36",
    iconClass: "h-9 w-9",
  },
  gold: {
    label: "Gold Partner",
    spanClass: "",
    cardClass: "h-24 sm:h-28",
    iconClass: "h-7 w-7",
  },
  partner: {
    label: "Partner",
    spanClass: "",
    cardClass: "h-20 sm:h-24",
    iconClass: "h-5 w-5",
  },
};

export function Sponsors() {
  const tiers: SponsorTier[] = ["main", "gold", "partner"];

  return (
    <section id="sponsor" className="section-y bg-white">
      <div className="container-page flex flex-col gap-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Sponsor"
            title="Partner che rendono possibile l'evento."
          />
          <Reveal>
            <Button href="/contatti#partner" variant="secondary" size="lg" className="shrink-0">
              <Handshake className="h-4 w-4" aria-hidden="true" />
              Diventa partner
            </Button>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          {tiers.map((tier) => {
            const items = sponsors.filter((sponsor) => sponsor.tier === tier);
            if (items.length === 0) return null;
            const config = tierConfig[tier];

            return (
              <div key={tier} className="flex flex-col gap-4">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  {config.label}
                </span>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((sponsor, index) => (
                    <Reveal key={sponsor.name} delay={index * 0.03} className={config.spanClass}>
                      <div
                        className={cn(
                          "flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-red/30 hover:bg-white hover:text-ink hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.2)]",
                          config.cardClass
                        )}
                      >
                        <Handshake className={config.iconClass} strokeWidth={1.5} aria-hidden="true" />
                        <span className="font-display text-sm font-semibold uppercase tracking-wide sm:text-base">
                          {sponsor.name}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
