import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#24304A] bg-[#111827]/70 px-3 py-1 text-xs font-medium text-[#CBD5E1] transition hover:border-[#22D3EE] hover:text-[#22D3EE] ${className}`}
    >
      {children}
    </span>
  );
}