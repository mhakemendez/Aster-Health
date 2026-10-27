import type { ReactNode } from "react";

export type CtaVariant = "primary" | "secondary" | "light" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<CtaVariant, string> = {
  primary: "bg-primary text-white shadow-sm hover:bg-primary-dark",
  secondary:
    "border border-border bg-white text-foreground hover:border-primary/40 hover:bg-mint",
  light: "bg-white text-primary hover:bg-mint",
  "outline-light": "border border-white/30 text-white hover:bg-white/10",
};

export function ctaClasses(variant: CtaVariant, className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a href={href} className={ctaClasses(variant, className)} onClick={onClick}>
      {children}
    </a>
  );
}
