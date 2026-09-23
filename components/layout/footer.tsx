import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/icons/social-icons";
import { contact, footerLinks, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div className="flex flex-col gap-4">
          <span className="font-display text-2xl font-bold uppercase tracking-tight">
            Aziende<span className="text-red">In</span>Campo
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Evento organizzato da <span className="text-white/90">{siteConfig.organizer}</span>.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <SocialLink href={contact.instagram} label="Instagram">
              <InstagramIcon size={18} />
            </SocialLink>
            <SocialLink href={contact.tiktok} label="TikTok">
              <TikTokIcon size={18} />
            </SocialLink>
            <SocialLink href={`mailto:${contact.email}`} label="Email">
              <Mail size={18} />
            </SocialLink>
          </div>
        </div>

        {footerLinks.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {column.title}
            </span>
            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Contatti
          </span>
          <a href={`mailto:${contact.email}`} className="text-sm text-white/70 hover:text-white">
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-sm text-white/70 hover:text-white">
            {contact.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti riservati.</p>
          <p>Un progetto {siteConfig.organizer}.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-red hover:bg-red hover:text-white"
    >
      {children}
    </a>
  );
}
