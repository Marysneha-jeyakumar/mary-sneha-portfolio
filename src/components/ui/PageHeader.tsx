import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  /** Use <Accent> inside the title for the italic burgundy word. */
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** h1 for page titles, h2 for sections inside a page. */
  level?: "h1" | "h2";
  size?: "xl" | "lg" | "md";
  className?: string;
};

const sizes = {
  xl: "text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem]",
  lg: "text-[2.3rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
  md: "text-3xl leading-tight sm:text-4xl",
};

export function Accent({ children }: { children: ReactNode }) {
  return <em className="accent-word">{children}</em>;
}

export function Eyebrow({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-burgundy sm:text-sm ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      {align === "center" ? (
        <span aria-hidden="true" className="h-px w-12 shrink-0 bg-burgundy/60 sm:w-20" />
      ) : null}
      <span>{children}</span>
      <span aria-hidden="true" className="hidden h-px w-12 shrink-0 bg-burgundy/60 sm:block sm:w-20" />
    </p>
  );
}

export default function PageHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  level = "h1",
  size = "lg",
  className = "",
}: PageHeaderProps) {
  const Heading = level;
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      <Eyebrow align={align}>{eyebrow}</Eyebrow>
      <Heading
        className={`mt-5 font-serif font-medium tracking-[-0.02em] text-navy ${sizes[size]}`}
      >
        {title}
      </Heading>
      {intro ? (
        <div
          className={`mt-5 max-w-2xl text-base leading-7 text-ink sm:text-lg sm:leading-8 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {intro}
        </div>
      ) : null}
    </div>
  );
}
