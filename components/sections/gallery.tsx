"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryPhotos } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((current) => (current === null ? current : (current - 1 + galleryPhotos.length) % galleryPhotos.length)),
    []
  );
  const showNext = useCallback(
    () => setOpenIndex((current) => (current === null ? current : (current + 1) % galleryPhotos.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [openIndex, close, showPrev, showNext]);

  return (
    <section id="galleria" className="section-y bg-white">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="La libreria"
          title="I momenti che raccontano Aziende in Campo."
          description="Una raccolta in crescita, edizione dopo edizione: sfoglia le foto della giornata."
        />

        {galleryPhotos.length === 0 ? (
          <Reveal>
            <div className="flex aspect-[21/9] w-full flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 text-neutral-300">
              <ImageIcon className="h-8 w-8" strokeWidth={1.25} aria-hidden="true" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest">
                Foto in arrivo
              </span>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <button
              type="button"
              onClick={() => setOpenIndex(0)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green sm:aspect-[21/9]"
              aria-label={`Sfoglia tutte le foto della libreria (${galleryPhotos.length})`}
            >
              <Image
                src={galleryPhotos[0].src}
                alt={galleryPhotos[0].alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 ease-out group-hover:scale-110">
                  <ImageIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
                  Sfoglia tutte le foto ({galleryPhotos.length})
                </span>
              </div>
            </button>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {openIndex !== null && galleryPhotos[openIndex] ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Galleria fotografica"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi la galleria"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-green hover:bg-green sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {galleryPhotos.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Foto precedente"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-green hover:bg-green sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="Foto successiva"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-green hover:bg-green sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            ) : null}

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="relative flex max-h-full max-w-4xl flex-col items-center gap-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative max-h-[80vh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={galleryPhotos[openIndex].src}
                  alt={galleryPhotos[openIndex].alt}
                  width={1280}
                  height={1280}
                  sizes="90vw"
                  className="h-auto max-h-[80vh] w-auto rounded-2xl object-contain"
                />
              </div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/60">
                {openIndex + 1} / {galleryPhotos.length}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
