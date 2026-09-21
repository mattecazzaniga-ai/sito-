import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HallOfFame } from "@/components/sections/hall-of-fame";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { hallOfFameCta, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Albo d'oro",
  description: `Le squadre e i giocatori premiati nelle edizioni di ${siteConfig.name}.`,
};

export default function AlboDoroPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-white pt-32 sm:pt-40">
        <div className="container-page pb-10">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-red">
            La storia sul campo
          </span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
            Albo d&rsquo;oro.
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            Clicca su un&rsquo;edizione per scoprire il vincitore e i premi individuali.
          </p>
        </div>

        <HallOfFame />

        <section className="bg-ink py-20 sm:py-28">
          <div className="container-page flex flex-col items-center gap-6 text-center">
            <Reveal>
              <h2 className="max-w-2xl text-balance font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                {hallOfFameCta.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-white/70">{hallOfFameCta.description}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <Button href="/#iscrizione" size="lg">
                Iscrivi la tua azienda
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
