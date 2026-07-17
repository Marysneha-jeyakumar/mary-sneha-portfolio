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
}: {
  title: string;
  category: string;
}) {
  const icon = getProjectIcon(category);

  return (
    <div className="relative h-52 overflow-hidden rounded-2xl border border-[#24304A] bg-[#0A0F1C]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 via-transparent to-[#22D3EE]/10" />
      <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
      <div className="absolute bottom-4 right-4 h-28 w-28 rounded-full bg-[#22D3EE]/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <IconBox
            icon={icon}
            className="h-14 w-14 rounded-2xl border-[#22D3EE]/60 bg-[#111827]/80"
          />

          <span className="rounded-full border border-[#24304A] bg-[#111827]/80 px-3 py-1 text-xs text-[#94A3B8]">
            {category}
          </span>
        </div>

        <div>
          <div className="mb-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-xl border border-[#24304A] bg-[#111827]/80" />
            <div className="h-14 rounded-xl border border-[#24304A] bg-[#111827]/80" />
            <div className="h-14 rounded-xl border border-[#24304A] bg-[#111827]/80" />
          </div>

          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-[#22D3EE]/50" />
            <div className="h-2 w-1/2 rounded-full bg-[#8B5CF6]/50" />
          </div>

          <p className="font-heading mt-4 line-clamp-1 text-sm font-semibold text-[#F8FAFC]">
            {title}
          </p>
        </div>
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
                    className="font-heading font-semibold text-[#94A3B8] transition hover:text-[#22D3EE]"
                  >
                    GitHub →
                  </a>

                  <a
                    href={project.demoUrl}
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