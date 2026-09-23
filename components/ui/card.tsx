import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Card standard del sito: stesso raggio, bordo e padding ovunque.
 * `interactive` aggiunge il sollevamento in hover (per card che invitano a leggere o cliccare).
 */
export function Card({
  children,
  interactive = false,
  className,
}: {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-7",
        interactive &&
          "group transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-green/30 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Badge quadrato con icona Lucide su fondo verde tenue. */
export function IconBadge({ icon: Icon, tone = "dark" }: { icon: LucideIcon; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
        tone === "light" ? "bg-green/20 text-green-light" : "bg-green/10 text-green group-hover:bg-green group-hover:text-white"
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
