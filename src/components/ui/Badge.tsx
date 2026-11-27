import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "outline" | "accent" | "inverse";
  className?: string;
};

const variants = {
  outline: "border-line-strong/70 bg-paper/70 text-ink",
  accent: "border-transparent bg-burgundy-soft text-burgundy",
  inverse: "border-white/35 bg-white/10 text-white",
};

/** Small rounded tag for technologies, categories and statuses. */
export default function Badge({
  children,
  variant = "outline",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
