import { cn } from "@/lib/utils";

/** Occhiello sopra i titoli: identico in tutte le sezioni e pagine (vedi docs/brand-guidelines.md). */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.25em]",
        tone === "light" ? "text-green-light" : "text-green",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
