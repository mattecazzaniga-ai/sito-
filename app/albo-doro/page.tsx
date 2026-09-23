import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HallOfFame } from "@/components/sections/hall-of-fame";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { hallOfFame, hallOfFameCta, siteConfig } from "@/lib/content";

const title = "Albo d'oro";
const description = `Le squadre e i giocatori premiati nelle edizioni di ${siteConfig.name}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/albo-doro" },
  openGraph: {
    title: `${title} — ${siteConfig.name}`,
    description,
    url: "/albo-doro",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { title: `${title} — ${siteConfig.name}`, description },
};

export default function AlboDoroPage() {
  // Solo le edizioni con isoDate confermato: SportsEvent richiede startDate,
  // le altre voci dell'Albo d'oro restano fuori dai dati strutturati.
  const pastEditionsJsonLd = hallOfFame
    .filter((entry) => entry.verified && entry.isoDate)
    .map((entry) => ({
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: `${siteConfig.name} — Edizione ${entry.year}`,
      startDate: entry.isoDate,
      sport: "Calcio a 5",
      location: {
        "@type": "Place",
        name: "MC Sport Oristano",
        address: { "@type": "PostalAddress", addressLocality: "Oristano", addressCountry: "IT" },
      },
      organizer: { "@type": "Organization", name: siteConfig.organizer },
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      description: entry.note,
    }));

  return (
    <>
      {pastEditionsJsonLd.map((jsonLd) => (
        <script
          key={jsonLd.startDate}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <Navbar forceSolid />
      <main className="flex-1 bg-white pt-32 sm:pt-40">
        <div className="container-page pb-10">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-green">
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
