import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryPhotos } from "@/lib/content";

export function Gallery() {
  return (
    <section id="galleria" className="section-y bg-white">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="La libreria"
          title="I momenti che raccontano Aziende in Campo."
          description="Una raccolta in crescita, edizione dopo edizione: qui trovano spazio le foto della giornata."
        />

        {galleryPhotos.length === 0 ? (
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <Reveal key={index} delay={index * 0.04}>
                <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 text-neutral-300">
                  <ImageIcon className="h-7 w-7" strokeWidth={1.25} aria-hidden="true" />
                  <span className="font-display text-[11px] font-semibold uppercase tracking-widest">
                    In arrivo
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryPhotos.map((photo, index) => (
              <Reveal key={photo.src} delay={index * 0.04}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
