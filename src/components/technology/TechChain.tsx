import { FiChevronRight } from "react-icons/fi";
import { Icon } from "@/components/ui";
import type { SkillCategory } from "@/types/portfolio";

const toneClasses: Record<SkillCategory["tone"], string> = {
  slate: "border-slate/70 from-slate/25",
  gold: "border-gold/80 from-gold/25",
  rose: "border-rose from-rose/30",
};

function ChainCard({ category }: { category: SkillCategory }) {
  return (
    <div
      className={`rounded-[30px] border-[7px] bg-gradient-to-b to-transparent p-1 shadow-[0_18px_36px_-22px_rgba(20,33,61,0.45)] ${toneClasses[category.tone]}`}
    >
      <div className="flex h-[176px] w-[196px] flex-col items-center justify-center gap-3 rounded-[22px] bg-paper px-4 text-center sm:h-[190px] sm:w-[214px]">
        <Icon icon={category.icon} className="text-[2.6rem] text-navy" />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-burgundy">
          {category.title}
        </p>
        <p className="text-[0.98rem] font-semibold leading-snug text-navy">
          {category.highlights.join(" · ")}
        </p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center">
      <span className="h-[3px] w-4 rounded-full bg-line-strong" />
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-burgundy shadow-sm">
        <FiChevronRight />
      </span>
      <span className="h-[3px] w-4 rounded-full bg-line-strong" />
    </span>
  );
}

function Chain({ categories, hidden = false }: { categories: SkillCategory[]; hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center py-6 ${hidden ? "motion-reduce:hidden" : ""}`}
    >
      {categories.map((category) => (
        <li key={category.title} className="flex items-center">
          <ChainCard category={category} />
          <Connector />
        </li>
      ))}
    </ul>
  );
}

/**
 * Horizontally connected technology cards that drift slowly in a loop.
 * The list is rendered twice so the loop is seamless; hovering or focusing
 * pauses it, and reduced-motion users get a static, scrollable row.
 */
export default function TechChain({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="marquee-pause relative overflow-hidden motion-reduce:overflow-x-auto">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-20"
      />

      <div className="flex w-max animate-marquee">
        <Chain categories={categories} />
        <Chain categories={categories} hidden />
      </div>
    </div>
  );
}
