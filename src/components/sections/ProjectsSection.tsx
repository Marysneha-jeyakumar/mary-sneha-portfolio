import Image from "next/image";
import { Badge, Button, Card, IconBox, SectionHeader } from "@/components/ui";
import { projects } from "@/data/projects";

function getProjectIcon(category: string) {
  const lowerCategory = category.toLowerCase();

  if (lowerCategory.includes("machine")) return "brain";
  if (lowerCategory.includes("data")) return "chart";
  if (lowerCategory.includes("ai")) return "neural";

  return "folder";
}

function ProjectPreview({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: string;
}) {
  const icon = getProjectIcon(category);

  return (
    <div className="relative h-52 overflow-hidden rounded-2xl border border-[#24304A] bg-[#0A0F1C]">
      {image ? (
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 via-transparent to-[#22D3EE]/10" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/40 to-transparent" />

      <div className="absolute left-5 top-5 z-10">
        <IconBox
          icon={icon}
          className="h-12 w-12 rounded-2xl border-[#22D3EE]/60 bg-[#111827]/80 backdrop-blur-md"
          iconClassName="text-xl"
        />
      </div>

      <div className="absolute right-5 top-5 z-10">
        <span className="rounded-full border border-[#24304A] bg-[#111827]/80 px-3 py-1 text-xs text-[#CBD5E1] backdrop-blur-md">
          {category}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10">
        <p className="font-heading line-clamp-1 text-lg font-bold text-[#F8FAFC]">
          {title}
        </p>

        <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container relative px-4 py-24">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#22D3EE]/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

      <div className="relative z-10">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Case Studies"
          subtitle="Practical AI, data, and full-stack projects documented with problem, solution, architecture, tech stack, and lessons learned."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex h-full flex-col overflow-hidden p-4"
            >
              <ProjectPreview
                title={project.title}
                category={project.category}
                image={project.image}
              />

              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge>{project.category}</Badge>

                  <span className="rounded-full bg-[#22D3EE]/10 px-3 py-1 text-xs font-medium text-[#22D3EE]">
                    Case Study
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-[#94A3B8]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-[#24304A] pt-5 text-sm">
                  <a
                    href={project.caseStudyUrl}
                    className="font-heading font-semibold text-[#22D3EE] transition hover:text-[#8B5CF6]"
                  >
                    Case Study →
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading font-semibold text-[#94A3B8] transition hover:text-[#22D3EE]"
                  >
                    GitHub →
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading font-semibold text-[#94A3B8] transition hover:text-[#22D3EE]"
                  >
                    Demo →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#contact" variant="secondary">
            Let&apos;s Connect
          </Button>
        </div>
      </div>
    </section>
  );
}