import type { Metadata } from "next";
import PinnedTimeline from "@/components/journey/PinnedTimeline";
import { Accent, PageHeader } from "@/components/ui";
import { journeyItems } from "@/data/journey";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Mary Sneha's journey: education, certifications, projects, and current focus.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <>
      <section className="container-page pb-4 pt-12 sm:pt-16">
        <PageHeader
          eyebrow="My Story"
          size="xl"
          title={
            <>
              My <Accent>Journey</Accent>
            </>
          }
          intro={
            <p>
              From academic study to building practical projects — the
              education, certifications, and work that shape how I build
              software, data, and AI products.
            </p>
          }
        />
      </section>

      <section className="container-page" aria-label="Timeline">
        <PinnedTimeline items={journeyItems} />
        <p className="text-center text-sm text-ink-muted lg:hidden">
          Swipe to see the full timeline →
        </p>
      </section>
    </>
  );
}
