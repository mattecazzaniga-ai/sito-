import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display uppercase tracking-wide transition-all duration-300 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-green text-white shadow-[0_8px_24px_-8px_rgba(23,114,53,0.6)] hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(23,114,53,0.75)] active:translate-y-0",
  secondary:
    "bg-white text-ink border border-neutral-200 hover:border-ink hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink hover:bg-neutral-100",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:bg-white hover:text-ink hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string };

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {rest.children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {buttonRest.children}
    </button>
  );
}
