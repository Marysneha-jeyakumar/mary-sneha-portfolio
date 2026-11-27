import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost";
type ButtonSize = "md" | "sm";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Opens in a new tab (external links, PDFs). */
  newTab?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white shadow-sm shadow-burgundy/20 hover:bg-burgundy-dark",
  secondary:
    "border border-navy/25 bg-paper/60 text-navy hover:border-burgundy hover:text-burgundy",
  inverse:
    "border border-white/70 text-white hover:bg-white hover:text-navy",
  ghost: "text-burgundy hover:text-burgundy-dark underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-7 py-3.5 text-[0.98rem]",
  sm: "px-4 py-2 text-sm",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  newTab = false,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    const isInternalRoute = href.startsWith("/") && !href.includes(".");

    if (isInternalRoute && !newTab) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
