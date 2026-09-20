"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "li";
};

/**
 * Scroll-triggered fade/slide-up wrapper used across sections so entrance
 * motion stays consistent. Renders children immediately (no hidden state)
 * when the user prefers reduced motion, handled globally via CSS.
 */
export function Reveal({ children, className, variants = fadeUp, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
