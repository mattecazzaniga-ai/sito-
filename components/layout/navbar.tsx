"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ease-out",
          isScrolled
            ? "mt-3 rounded-full border border-white/10 bg-ink/80 px-5 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md sm:mx-4 lg:mx-auto"
            : "px-5 py-6 sm:px-8"
        )}
      >
        <Link
          href="/#home"
          className="font-display text-lg font-bold uppercase tracking-tight text-white sm:text-xl"
        >
          Aziende<span className="text-red">In</span>Campo
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#iscrizione" size="md">
            Iscrivi la tua azienda
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={isMobileOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          <Menu className={cn("h-6 w-6 transition-all", isMobileOpen && "scale-0 opacity-0")} />
          <X
            className={cn(
              "absolute h-6 w-6 scale-0 opacity-0 transition-all",
              isMobileOpen && "scale-100 opacity-100"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="mx-4 mt-3 rounded-3xl border border-white/10 bg-ink/95 p-6 shadow-2xl backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Navigazione mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: EASE_OUT }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block rounded-xl px-3 py-3 font-display text-base font-medium uppercase tracking-wide text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Button
              href="/#iscrizione"
              size="lg"
              className="mt-4 w-full"
              onClick={() => setIsMobileOpen(false)}
            >
              Iscrivi la tua azienda
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
