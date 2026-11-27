import type { ReactNode } from "react";

type CardTone = "paper" | "cream" | "beige" | "mist" | "rose";

type CardProps = {
  children: ReactNode;
  tone?: CardTone;
  /** Adds a lift + border highlight on hover (only for clickable cards). */
  interactive?: boolean;
  className?: string;
  as?: "div" | "article" | "li";
  id?: string;
};

export const cardToneClasses: Record<CardTone, string> = {
  paper: "bg-paper border-line",
  cream: "bg-cream border-line",
  beige: "bg-beige border-line",
  mist: "bg-mist border-mist-deep",
  rose: "bg-burgundy-soft border-rose/50",
};

export default function Card({
  children,
  tone = "paper",
  interactive = false,
  className = "",
  as: Tag = "div",
  id,
}: CardProps) {
  return (
    <Tag
      id={id}
      className={`rounded-[var(--radius-card)] border shadow-[0_1px_2px_rgba(20,33,61,0.04),0_8px_24px_-12px_rgba(20,33,61,0.12)] ${cardToneClasses[tone]} ${
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-[0_18px_40px_-18px_rgba(20,33,61,0.28)]"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
