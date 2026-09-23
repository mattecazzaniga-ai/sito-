import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { contact, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Informativa sui cookie di ${siteConfig.name}.`,
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-white pt-36 pb-24">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-4xl font-bold uppercase text-ink sm:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-sm text-neutral-500">
            Testo segnaposto — da aggiornare in base ai cookie/servizi terzi realmente in uso (analytics,
            eventuale pixel di remarketing, ecc.) prima della pubblicazione online.
          </p>

          <div className="mt-10 flex flex-col gap-8 text-neutral-700">
            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Cosa sono i cookie</h2>
              <p className="mt-2 leading-relaxed">
                I cookie sono piccoli file di testo che i siti visitati inviano al browser dell&rsquo;utente,
                dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Cookie utilizzati da questo sito</h2>
              <p className="mt-2 leading-relaxed">
                Al momento il sito non installa cookie di profilazione. [PLACEHOLDER: elencare qui ogni
                cookie tecnico, analitico o di terze parti effettivamente attivo, con finalità e durata]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold uppercase text-ink">Gestione delle preferenze</h2>
              <p className="mt-2 leading-relaxed">
                È possibile gestire le preferenze sui cookie direttamente dalle impostazioni del proprio
                browser. Per domande scrivere a{" "}
                <a href={`mailto:${contact.email}`} className="text-green underline underline-offset-2">
                  {contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
