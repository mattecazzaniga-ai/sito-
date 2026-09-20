import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.25em]",
              isLight ? "text-red-light" : "text-red"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance font-display text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl lg:text-6xl",
            isLight ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-balance text-base leading-relaxed sm:text-lg",
              isLight ? "text-white/70" : "text-neutral-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
