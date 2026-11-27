import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Badge, Card } from "@/components/ui";
import { hasLink } from "@/data/projects";
import type { Project } from "@/types/portfolio";

type CaseStudyCardProps = {
  project: Project;
  index: number;
  /** "feature" = large card spanning two rows; "compact" = smaller card. */
  layout: "feature" | "compact";
  tone?: "paper" | "mist" | "beige";
};

export default function CaseStudyCard({
  project,
  index,
  layout,
  tone = "paper",
}: CaseStudyCardProps) {
  const isFeature = layout === "feature";

  return (
    <Card
      as="article"
      id={project.slug}
      tone={tone}
      className="group flex h-full min-w-0 flex-col overflow-hidden"
    >
      <div
        className={`relative shrink-0 overflow-hidden bg-navy ${
          isFeature ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes={isFeature ? "(max-width: 1024px) 100vw, 680px" : "(max-width: 1024px) 100vw, 320px"}
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 font-serif text-sm italic text-burgundy">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${isFeature ? "p-6 sm:p-8" : "p-6"}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">
          {project.category}
        </p>
        <h2
          className={`mt-2 font-serif font-medium leading-tight text-navy ${
            isFeature ? "text-3xl sm:text-[2.4rem]" : "text-2xl"
          }`}
        >
          {project.title}
        </h2>

        <dl className={`mt-5 grid gap-4 ${isFeature ? "sm:grid-cols-2 sm:gap-6" : ""}`}>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Problem
            </dt>
            <dd className="mt-1.5 text-sm leading-6 text-ink">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Solution
            </dt>
            <dd className="mt-1.5 text-sm leading-6 text-ink">{project.description}</dd>
          </div>
        </dl>

        <ul className="mb-6 mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <Badge className="px-2.5 py-0.5 text-[0.72rem]">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-sm">
          {hasLink(project.caseStudyUrl) ? (
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 font-medium text-burgundy hover:text-burgundy-dark"
            >
              View Case Study <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="text-ink-muted">Full case study coming soon</span>
          )}

          {hasLink(project.githubUrl) ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-navy hover:text-burgundy"
            >
              <FaGithub aria-hidden="true" /> Source code
            </a>
          ) : null}

          {hasLink(project.demoUrl) ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-navy hover:text-burgundy"
            >
              Live demo <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
