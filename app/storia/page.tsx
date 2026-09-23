import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StoryNarrative } from "@/components/sections/story-narrative";
import { History } from "@/components/sections/history";
import { siteConfig } from "@/lib/content";

const title = "Storia";
const description =
  "Come è nato Aziende in Campo, il torneo di calcio a 5 tra aziende di Oristano: l'idea, le edizioni e l'ambizione di crescere con il territorio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/storia" },
  openGraph: {
    title: `${title} — ${siteConfig.name}`,
    description,
    url: "/storia",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { title: `${title} — ${siteConfig.name}`, description },
};

export default function StoriaPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-white pt-32 sm:pt-40">
        <StoryNarrative />
        <History />
      </main>
      <Footer />
    </>
  );
}
