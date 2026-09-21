import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { contact, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Contatta il team di ${siteConfig.name} per informazioni o per diventare partner dell'evento.`,
};

export default function ContattiPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-neutral-100 pt-36 pb-24" id="partner">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-red">
              Contatti
            </span>
            <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] text-ink sm:text-5xl">
              Parliamone.
            </h1>
            <p className="max-w-md text-neutral-600">
              Per informazioni sull&rsquo;evento, sull&rsquo;iscrizione o per proposte di partnership,
              scrivici tramite il form oppure direttamente ai contatti qui sotto.
            </p>
            <div className="flex flex-col gap-1 pt-4 text-sm">
              <a href={`mailto:${contact.email}`} className="font-medium text-ink hover:text-red">
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="font-medium text-ink hover:text-red">
                {contact.phone}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
