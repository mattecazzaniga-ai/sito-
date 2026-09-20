import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faqItems } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Domande frequenti"
          title="Tutto quello che devi sapere."
          description="Non hai trovato la risposta che cercavi? Scrivici, ti rispondiamo volentieri."
        />
        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
