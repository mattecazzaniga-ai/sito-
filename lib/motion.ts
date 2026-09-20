import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion tokens so every section in the site moves with the same
 * rhythm (duration/easing), per the "motion-consistency" rule.
 */
export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: Transition["ease"] = [0.65, 0, 0.35, 1];

export const DUR = {
  fast: 0.18,
  base: 0.45,
  slow: 0.7,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DUR.slow, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DUR.base, ease: EASE_OUT },
  },
};

/** Stagger a group of children entering together (30-50ms rule). */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" as const };
