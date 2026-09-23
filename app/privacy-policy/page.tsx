import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { contact, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Informativa sulla privacy di ${siteConfig.name}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-white pt-36 pb-24">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-4xl font-bold uppercase text-ink sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-neutral-500">
            Testo segnaposto — da sostituire con l&rsquo;informativa privacy definitiva redatta con il
            supporto di un consulente legale/DPO prima della pubblicazione online.
          </p>

          <div className="mt-10 flex flex-col gap-8 text-neutral-700">
            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Titolare del trattamento</h2>
              <p className="mt-2 leading-relaxed">
                {siteConfig.organizer} — contattabile all&rsquo;indirizzo{" "}
                <a href={`mailto:${contact.email}`} className="text-green underline underline-offset-2">
                  {contact.email}
                </a>
                . [PLACEHOLDER: ragione sociale completa, sede legale, P.IVA]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Dati raccolti</h2>
              <p className="mt-2 leading-relaxed">
                Attraverso il form di iscrizione e il form contatti raccogliamo: nome azienda, nome del
                referente, email, telefono ed eventuali informazioni fornite volontariamente nel campo
                note. [PLACEHOLDER: dettagliare ogni finalità e base giuridica]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Finalità del trattamento</h2>
              <p className="mt-2 leading-relaxed">
                I dati vengono utilizzati esclusivamente per gestire l&rsquo;iscrizione all&rsquo;evento,
                le comunicazioni relative allo stesso e le richieste di partnership. [PLACEHOLDER]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Diritti dell&rsquo;interessato</h2>
              <p className="mt-2 leading-relaxed">
                In qualsiasi momento è possibile richiedere accesso, rettifica o cancellazione dei propri
                dati scrivendo a{" "}
                <a href={`mailto:${contact.email}`} className="text-green underline underline-offset-2">
                  {contact.email}
                </a>
                . [PLACEHOLDER: riferimenti completi al GDPR]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
