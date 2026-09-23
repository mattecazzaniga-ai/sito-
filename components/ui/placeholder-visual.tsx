import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderVisualProps = {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  tone?: "anthracite" | "green" | "paper";
};

/**
 * Stand-in for real event photography/video. Swap for a real <Image> /
 * <video> once assets are available — the small corner tag makes every
 * placeholder easy to find across the codebase.
 */
export function PlaceholderVisual({
  icon: Icon = ImageIcon,
  label = "Foto evento",
  className,
  tone = "anthracite",
}: PlaceholderVisualProps) {
  const toneClasses = {
    anthracite: "bg-anthracite text-white",
    green: "bg-gradient-to-br from-green to-green-dark text-white",
    paper: "bg-neutral-100 text-ink",
  } as const;

  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden",
        toneClasses[tone],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -inset-x-10 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"
        aria-hidden="true"
      />
      <Icon className="relative h-10 w-10 opacity-30 sm:h-14 sm:w-14" strokeWidth={1.25} aria-hidden="true" />
      <span className="absolute bottom-3 right-3 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
