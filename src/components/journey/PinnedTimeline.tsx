import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Icon } from "@/components/ui";
import type { JourneyItem } from "@/types/portfolio";

// Small, alternating tilts and vertical offsets give the "pinned on a board" look.
const tilts = ["-rotate-[3deg]", "rotate-[2deg]", "-rotate-[1.5deg]", "rotate-[2.5deg]", "-rotate-[2deg]"];
const offsets = ["lg:mt-0", "lg:mt-12", "lg:mt-2", "lg:mt-14", "lg:mt-4"];
const pinColors = ["bg-burgundy", "bg-slate", "bg-navy", "bg-gold", "bg-burgundy"];

const toneClasses: Record<JourneyItem["tone"], string> = {
  beige: "bg-beige",
  mist: "bg-mist",
  rose: "bg-burgundy-soft",
  paper: "bg-paper",
};

function Pin({ color }: { color: string }) {
  return (
    <span aria-hidden="true" className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
      <span
        className={`block h-7 w-7 rounded-full ${color} shadow-[inset_-3px_-4px_0_rgba(0,0,0,0.18),0_4px_6px_rgba(20,33,61,0.35)]`}
      />
      <span className="mx-auto block h-2 w-[3px] rounded-b bg-navy/40" />
    </span>
  );
}

export default function PinnedTimeline({ items }: { items: JourneyItem[] }) {
  return (
    <div className="relative">
      {/* Dotted connecting line (behind the cards) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 hidden h-24 w-full lg:block"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          d="M10 40 C 120 0, 180 90, 300 55 S 480 10, 600 45 S 800 95, 990 40"
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="2"
          strokeDasharray="2 9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <ol className="relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-10 pt-8 md:-mx-8 md:scroll-px-8 md:px-8 lg:mx-0 lg:grid lg:px-1 lg:snap-none lg:grid-cols-5 lg:gap-5 lg:overflow-visible">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`relative w-[78%] shrink-0 snap-center after:absolute after:-right-6 after:top-20 after:w-6 after:border-t-2 after:border-dotted after:border-line-strong last:after:hidden sm:w-[46%] lg:w-auto lg:after:hidden ${offsets[index % offsets.length]}`}
          >
            <article
              tabIndex={0}
              className={`group relative h-full rounded-[22px] border border-line bg-paper p-3 shadow-[0_14px_30px_-18px_rgba(20,33,61,0.45)] outline-none transition duration-300 ease-out hover:z-20 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_26px_44px_-20px_rgba(20,33,61,0.5)] focus-visible:z-20 focus-visible:-translate-y-2 focus-visible:rotate-0 focus-visible:ring-2 focus-visible:ring-burgundy motion-reduce:rotate-0 ${tilts[index % tilts.length]}`}
            >
              <Pin color={pinColors[index % pinColors.length]} />

              <div className={`rounded-2xl px-4 pb-4 pt-6 ${toneClasses[item.tone]}`}>
                <p className="font-serif text-3xl italic text-burgundy">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  {item.label}
                </p>
                <h2 className="mt-1 font-serif text-xl font-medium leading-snug text-navy">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink">{item.description}</p>

                {item.link ? (
                  item.link.href.endsWith(".pdf") ? (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-burgundy hover:text-burgundy-dark"
                    >
                      {item.link.label} <FiArrowRight aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      href={item.link.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-burgundy hover:text-burgundy-dark"
                    >
                      {item.link.label} <FiArrowRight aria-hidden="true" />
                    </Link>
                  )
                ) : null}
              </div>

              <div className="flex items-center gap-3 px-2 pb-1 pt-3 text-sm text-ink">
                <Icon icon={item.icon} className="text-lg text-burgundy" />
                <span aria-hidden="true" className="h-4 w-px bg-line-strong" />
                <span className={item.period ? "font-medium text-navy" : "italic text-ink-muted"}>
                  {item.period ?? "Date to be added"}
                </span>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
