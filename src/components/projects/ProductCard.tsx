import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge, Card } from "@/components/ui";
import type { Project } from "@/types/portfolio";

/** Compact horizontal card: small image left, name + short text + tags right. */
export default function ProductCard({ project }: { project: Project }) {
  return (
    <Card as="article" interactive className="group flex min-w-0 gap-4 p-3.5 sm:p-4">
      <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl border border-line bg-navy sm:w-36">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="144px"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col border-l border-line pl-4">
        <h3 className="font-serif text-lg font-medium leading-snug text-navy">
          {project.shortTitle}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-5 text-ink-muted">
          {project.category}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.techStack.slice(0, 3).map((tech) => (
            <li key={tech}>
              <Badge className="px-2.5 py-0.5 text-[0.7rem]">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3">
          <Link
            href={`/case-studies#${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-burgundy px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-burgundy-dark"
          >
            View Project <FiArrowRight aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}
