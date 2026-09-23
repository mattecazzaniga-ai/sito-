import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faqContent, faqItems } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Faq() {
  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <SectionHeading
            eyebrow={faqContent.eyebrow}
            title={faqContent.title}
            description={faqContent.description}
          />
          <Reveal delay={0.15}>
            <Button href="/contatti" variant="secondary">
              Scrivici
            </Button>
          </Reveal>
        </div>
        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
