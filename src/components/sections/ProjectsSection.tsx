import Image from "next/image";
import { Button, Card, IconBox } from "@/components/ui";
import { projects } from "@/data/projects";

function getProjectIcon(category: string) {
  const lowerCategory = category.toLowerCase();

  if (lowerCategory.includes("machine")) return "brain";
  if (lowerCategory.includes("data")) return "chart";
  if (lowerCategory.includes("ai")) return "neural";

  return "folder";
}

function hasValidLink(url?: string) {
  return Boolean(url && url.trim() !== "" && url !== "#");
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
    <div className="relative h-44 overflow-hidden rounded-2xl border border-[#24304A]/75 bg-[#0A0F1C]">
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

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/45 to-transparent" />

      <div className="absolute left-4 top-4 z-10">
        <IconBox
          icon={icon}
          className="h-11 w-11 rounded-2xl border-[#22D3EE]/50 bg-[#111827]/80 backdrop-blur-md"
          iconClassName="text-lg text-[#22D3EE]"
        />
      </div>

      <div className="absolute right-4 top-4 z-10 max-w-[70%]">
        <span className="line-clamp-1 rounded-full border border-[#24304A]/80 bg-[#111827]/80 px-3 py-1 text-xs text-[#CBD5E1] backdrop-blur-md">
          {category}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10">
        <p className="font-heading line-clamp-1 text-lg font-semibold text-[#F8FAFC]">
          {title}
        </p>

        <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container relative px-4 py-10 lg:py-12">
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[#22D3EE]/8 blur-3xl" />
      <div className="absolute bottom-16 left-0 h-64 w-64 rounded-full bg-[#8B5CF6]/8 blur-3xl" />

      <div className="relative z-10">
        {/* Compact Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.45em] text-[#22D3EE]">
            Projects
          </p>

          <h2
            className="font-heading mt-4 font-semibold tracking-tight text-[#F8FAFC]"
            style={{
              fontSize: "clamp(2.7rem, 4vw, 4rem)",
              lineHeight: 1.05,
            }}
          >
            Selected Case Studies
          </h2>

          <div className="mx-auto mt-5 flex max-w-[180px] items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B5CF6]" />
            <div className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_16px_rgba(34,211,238,0.65)]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#22D3EE]" />
          </div>

          <p className="mx-auto mt-5 max-w-[820px] text-base leading-7 text-[#AEBED1] md:text-lg">
            Practical AI, data, and full-stack projects documented from problem
            and architecture to implementation, tech stack, and lessons learned.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const visibleTechStack = project.techStack.slice(0, 5);
            const hiddenTechCount =
              project.techStack.length - visibleTechStack.length;

            return (
              <Card
                key={project.title}
                className="group flex h-full min-h-[560px] flex-col overflow-hidden rounded-3xl border-[#24304A]/75 bg-[#111827]/65 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/55 hover:shadow-lg hover:shadow-[#22D3EE]/5"
              >
                <ProjectPreview
                  title={project.title}
                  category={project.category}
                  image={project.image}
                />

                <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="line-clamp-1 rounded-full border border-[#24304A]/80 px-3 py-1 text-xs font-medium text-[#CBD5E1]">
                      {project.category}
                    </span>

                    <span className="shrink-0 rounded-full bg-[#22D3EE]/10 px-3 py-1 text-xs font-medium text-[#22D3EE]">
                      Case Study
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-semibold leading-tight text-[#F8FAFC]">
                    {project.title}
                  </h3>

                  <p className="mt-4 line-clamp-6 flex-1 text-sm leading-6 text-[#AEBED1]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-[#94A3B8]">
                    {visibleTechStack.map((tech, index) => (
                      <div key={tech} className="flex items-center gap-3">
                        <span className="transition hover:text-[#22D3EE]">
                          {tech}
                        </span>

                        {index !== visibleTechStack.length - 1 ||
                        hiddenTechCount > 0 ? (
                          <span className="text-[#475569]">•</span>
                        ) : null}
                      </div>
                    ))}

                    {hiddenTechCount > 0 ? (
                      <span className="text-[#22D3EE]">
                        +{hiddenTechCount} more
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-[#24304A]/70 pt-5 text-sm">
                    <a
                      href={project.caseStudyUrl}
                      className="font-heading font-semibold text-[#22D3EE] transition hover:text-[#8B5CF6]"
                    >
                      Case Study →
                    </a>

                    {hasValidLink(project.githubUrl) ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-heading font-semibold text-[#94A3B8] transition hover:text-[#22D3EE]"
                      >
                        GitHub →
                      </a>
                    ) : (
                      <span className="font-heading font-semibold text-[#64748B]">
                        GitHub soon
                      </span>
                    )}

                    {hasValidLink(project.demoUrl) ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-heading font-semibold text-[#94A3B8] transition hover:text-[#22D3EE]"
                      >
                        Demo →
                      </a>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contact" variant="secondary">
            Let&apos;s Connect
          </Button>
        </div>
      </div>
    </section>
  );
}