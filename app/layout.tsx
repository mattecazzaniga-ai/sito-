import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { eventInfo, siteConfig } from "@/lib/content";

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
    default: `${siteConfig.name} — Il torneo di calcio a 5 tra aziende`,
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
    title: `${siteConfig.name} — Il torneo di calcio a 5 tra aziende`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Il torneo di calcio a 5 tra aziende`,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: siteConfig.name,
    description: siteConfig.description,
    organizer: {
      "@type": "Organization",
      name: siteConfig.organizer,
    },
    sport: eventInfo.sport,
    location: {
      "@type": "Place",
      name: eventInfo.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oristano",
        addressCountry: "IT",
      },
    },
    // PLACEHOLDER — aggiornare con data e location definitive quando confermate
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
