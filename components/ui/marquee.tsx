"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
};

/**
 * CSS-driven infinite marquee (no JS animation loop) so it stays smooth on
 * mobile. Pauses automatically when prefers-reduced-motion is set.
 */
export function Marquee({ children, className, durationSeconds = 32, reverse = false }: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
      <div
        className={cn(
          "flex w-max gap-10 will-change-transform",
          !prefersReducedMotion && "animate-marquee group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${durationSeconds}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
