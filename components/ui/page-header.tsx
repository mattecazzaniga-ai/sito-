import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Intestazione standard delle pagine interne (albo d'oro, contatti, pagine legali). */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="max-w-3xl text-balance font-display text-4xl font-bold uppercase leading-[0.95] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="max-w-xl text-balance text-base leading-relaxed text-neutral-600 sm:text-lg">{description}</p>
        </Reveal>
      ) : null}
      {children}
    </div>
  );
}
