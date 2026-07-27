import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/25 hover:bg-[#8B5CF6]",
  secondary:
    "border border-[#24304A] bg-[#111827]/70 text-[#F8FAFC] hover:border-[#22D3EE] hover:text-[#22D3EE]",
  ghost:
    "text-[#94A3B8] hover:text-[#22D3EE]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
 const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-heading text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
<button type={type} disabled={disabled} className={classes}>
  {children}
</button>
  );
}