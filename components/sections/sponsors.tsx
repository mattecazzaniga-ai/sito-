import { Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ctaLabels, sponsorsContent } from "@/lib/content";

export function Sponsors() {
  return (
    <section id="sponsor" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-ink px-8 py-14 text-center sm:px-16 sm:py-20">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/20 text-green-light">
              <Handshake className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <SectionHeading
              eyebrow={sponsorsContent.eyebrow}
              title={sponsorsContent.title}
              description={sponsorsContent.description}
              tone="light"
              align="center"
            />
            <Button href="/contatti#partner" size="lg">
              {ctaLabels.partner}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
