import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { History } from "@/components/sections/history";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Storia",
  description: `La storia di ${siteConfig.name}, il torneo di calcio a 5 tra aziende del territorio di Oristano.`,
};

export default function StoriaPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-white pt-32 sm:pt-40">
        <div className="container-page pb-10">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-red">
            La storia
          </span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
            Come nasce Aziende in Campo.
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            Il racconto completo del percorso del torneo è in arrivo. Qui sotto intanto le tappe
            principali.
          </p>
        </div>
        <History />
      </main>
      <Footer />
    </>
  );
}
