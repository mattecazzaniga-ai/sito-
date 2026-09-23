import { Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function Sponsors() {
  return (
    <section id="sponsor" className="section-y bg-ink">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center sm:px-16 sm:py-20">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red">
              <Handshake className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <SectionHeading
              eyebrow="Partnership"
              title="Diventa partner di Aziende in Campo."
              description="Un'azienda che sceglie di sostenere l'evento entra in una giornata che il territorio ricorda: raccontaci la tua idea di partnership, la costruiamo insieme."
              tone="light"
              align="center"
            />
            <Button href="/contatti#partner" size="lg">
              Diventa partner
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
