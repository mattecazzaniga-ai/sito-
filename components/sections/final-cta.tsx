import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/azione-portiere-ondulor.jpg"
          alt="Portiere in azione durante una partita di Aziende in Campo"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" />
      </div>

      <div className="container-page flex flex-col items-center gap-8 text-center">
        <Reveal variants={fadeUp}>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            La prossima squadra di calcio a 5 potrebbe essere la tua azienda.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/#iscrizione" size="lg">
              Iscrivi la tua azienda
            </Button>
            <Button href="/contatti#partner" size="lg" variant="outline-light">
              Diventa partner
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
