import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { contact, contactPage, siteConfig } from "@/lib/content";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/icons/social-icons";

const title = "Contatti";
const description =
  "Contatta Aziende in Campo per iscrivere la tua azienda al torneo di calcio a 5 di Oristano o per diventare partner dell'evento.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: `${title} — ${siteConfig.name}`,
    description,
    url: "/contatti",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { title: `${title} — ${siteConfig.name}`, description },
};

export default function ContattiPage() {
  return (
    <>
      <Navbar forceSolid />
      <main className="flex-1 bg-neutral-100 pt-32 pb-20 sm:pt-40 sm:pb-32" id="partner">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <PageHeader eyebrow={contactPage.eyebrow} title={contactPage.title} description={contactPage.description}>
            <ul className="flex flex-col gap-3 pt-4">
              {[
                { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
                { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
              ].map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a href={href} className="group inline-flex items-center gap-3 font-medium text-ink transition-colors hover:text-green">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: "Instagram", href: contact.instagram, Icon: InstagramIcon },
                { label: "TikTok", href: contact.tiktok, Icon: TikTokIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-ink transition-colors hover:border-green hover:bg-green hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </PageHeader>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
