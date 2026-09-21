import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { EventIntro } from "@/components/sections/event-intro";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Format } from "@/components/sections/format";
import { History } from "@/components/sections/history";
import { Timeline } from "@/components/sections/timeline";
import { Participants } from "@/components/sections/participants";
import { HallOfFame } from "@/components/sections/hall-of-fame";
import { Sponsors } from "@/components/sections/sponsors";
import { Registration } from "@/components/sections/registration";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Vai al contenuto principale
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <EventIntro />
        <HowItWorks />
        <Format />
        <History />
        <Timeline />
        <Participants />
        <HallOfFame />
        <Sponsors />
        <Registration />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
