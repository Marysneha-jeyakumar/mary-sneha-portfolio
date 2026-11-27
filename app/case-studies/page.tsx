import type { Metadata } from "next";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { Accent, PageHeader, Reveal } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies of Mary Sneha's AI, data, and full-stack projects: the problem, the solution, and the technologies used.",
  alternates: { canonical: "/case-studies" },
};

const tones = ["paper", "mist", "beige"] as const;

export default function CaseStudiesPage() {
  const [feature, ...rest] = projects;

  return (
    <>
      <section className="container-page grid gap-6 pb-10 pt-12 sm:pt-16 lg:grid-cols-[1fr_auto] lg:items-end">
        <PageHeader
          eyebrow="Case Studies"
          size="xl"
          title={
            <>
              Selected <Accent>case studies</Accent>
            </>
          }
          intro={
            <p>
              Practical AI, data, and full-stack projects documented from problem
              and architecture to implementation, tech stack, and lessons
              learned.
            </p>
          }
        />
        <p className="font-serif text-lg italic text-ink-muted lg:pb-2">
          {String(projects.length).padStart(2, "0")} projects
        </p>
      </section>

      {/* Asymmetric editorial grid: one tall feature, the rest stacked beside it */}
      <section className="container-page grid gap-6 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
        {feature ? (
          <Reveal className="lg:sticky lg:top-28 lg:col-span-7 lg:row-span-2 lg:self-start">
            <CaseStudyCard project={feature} index={0} layout="feature" />
          </Reveal>
        ) : null}

        {rest.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={0.08 * (i + 1)}
            className="h-full lg:col-span-5"
          >
            <CaseStudyCard
              project={project}
              index={i + 1}
              layout="compact"
              tone={tones[(i + 1) % tones.length]}
            />
          </Reveal>
        ))}
      </section>
    </>
  );
}
