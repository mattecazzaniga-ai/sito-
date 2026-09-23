"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { adminNavSections, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-ink px-5 py-6 lg:flex">
      <div className="mb-8 px-2">
        <p className="font-display text-lg font-bold uppercase leading-tight text-white">
          {siteConfig.name}
        </p>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-green">Admin</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1" aria-label="Navigazione amministrazione">
        {adminNavSections.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "rounded-xl px-3 py-2.5 font-display text-sm font-medium uppercase tracking-wide transition-colors",
                isActive ? "bg-green text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/"
        className="mt-6 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white/50 transition-colors hover:text-white"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        Vai al sito pubblico
      </Link>
    </aside>
  );
}
