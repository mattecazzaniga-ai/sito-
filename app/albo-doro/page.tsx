import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HallOfFame } from "@/components/sections/hall-of-fame";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ctaLabels, hallOfFame, hallOfFameCta, hallOfFamePage, siteConfig } from "@/lib/content";

const title = "Albo d'oro";
const description =
  "Vincitori, risultati delle finali e premi individuali di ogni edizione di Aziende in Campo, il torneo di calcio a 5 tra aziende di Oristano.";

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
          <PageHeader
            eyebrow={hallOfFamePage.eyebrow}
            title={hallOfFamePage.title}
            description={hallOfFamePage.description}
          />
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
              <p className="max-w-xl text-balance text-lg text-white/75">{hallOfFameCta.description}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <Button href="/#iscrizione" size="lg">
                {ctaLabels.register}
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
