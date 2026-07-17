import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#24304A] bg-[#162033]/70 p-6 shadow-lg shadow-black/10 backdrop-blur-md transition duration-300 hover:border-[#22D3EE]/70 hover:shadow-[#22D3EE]/10 ${className}`}
    >
      {children}
    </div>
  );
}