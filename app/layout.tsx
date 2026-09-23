import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { contact, eventInfo, siteConfig } from "@/lib/content";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#273460",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Torneo di calcio a 5 tra aziende a Oristano`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Aziende in Campo",
    "torneo calcio a 5 aziende",
    "calcio a 5 Oristano",
    "torneo aziendale Oristano",
    "calcetto tra aziende",
    "eventi sportivi aziendali Oristano",
  ],
  authors: [{ name: siteConfig.organizer }],
  creator: siteConfig.organizer,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Torneo di calcio a 5 tra aziende a Oristano`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Torneo di calcio a 5 tra aziende a Oristano`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // SportsOrganization, non SportsEvent: schema.org richiede uno startDate per
  // Event e la data della prossima edizione non è ancora confermata. Un Event
  // senza startDate è markup non valido (errore in Search Console) — quando la
  // data sarà nota, aggiungere un SportsEvent dedicato con startDate reale.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    sport: eventInfo.sport,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.organizer,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: eventInfo.location,
      addressLocality: "Oristano",
      addressCountry: "IT",
    },
    sameAs: [contact.instagram, contact.tiktok],
  };

  return (
    <html lang="it" className={`${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
