import Link from "next/link";
import { siteConfig } from "@/data/site";

type LogoProps = {
  inverse?: boolean;
};

export default function Logo({ inverse = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className="group flex shrink-0 items-center gap-3"
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl border font-serif text-lg font-semibold transition-colors ${
          inverse
            ? "border-white/40 text-white"
            : "border-burgundy/70 text-burgundy group-hover:bg-burgundy group-hover:text-white"
        }`}
      >
        {siteConfig.monogram}
      </span>
      <span
        aria-hidden="true"
        className={`h-7 w-px ${inverse ? "bg-white/30" : "bg-line-strong"}`}
      />
      <span
        className={`font-serif text-xl font-medium tracking-tight sm:text-2xl ${
          inverse ? "text-white" : "text-navy"
        }`}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
