import { Card, IconBox } from "@/components/ui";
import { focusAreas } from "@/data/focusAreas";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container relative px-4 py-20">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#8B5CF6]/8 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#22D3EE]/8 blur-3xl" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
         
          <h2 className="font-heading mt-6 text-5xl font-semibold tracking-tight text-[#F8FAFC] md:text-[3.4rem]">
            Skills & Focus Areas
          </h2>

          <div className="mx-auto mt-6 flex max-w-[180px] items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B5CF6]" />
            <div className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_16px_rgba(34,211,238,0.65)]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#22D3EE]" />
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#AEBED1] md:text-lg">
            Technologies, tools, and engineering concepts I use across AI, data,
            and software projects.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">
              Technical Skills
            </p>
            <div className="h-px flex-1 bg-[#24304A]/70" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="group flex min-h-[165px] flex-col justify-between rounded-3xl border-[#24304A]/75 bg-[#111827]/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/55 hover:shadow-lg hover:shadow-[#22D3EE]/5"
              >
                <div className="flex items-center gap-4">
                  <IconBox
                    icon={category.icon}
                    className="h-12 w-12 shrink-0 rounded-2xl border-[#24304A]/80 transition group-hover:border-[#22D3EE]/60"
                    iconClassName="text-[#22D3EE]"
                  />

                  <h3 className="font-heading text-2xl font-semibold text-[#F8FAFC]">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-[#94A3B8]">
                  {category.skills.map((skill, index) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="transition duration-300 hover:text-[#22D3EE]">
                        {skill}
                      </span>

                      {index !== category.skills.length - 1 ? (
                        <span className="text-[#475569]">•</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-10 rounded-3xl border border-[#24304A]/70 bg-[#111827]/45 px-5 py-5 md:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4 lg:min-w-fit">
              <IconBox
                icon="brain"
                className="h-11 w-11 rounded-2xl border-[#8B5CF6]/60"
                iconClassName="text-[#8B5CF6]"
              />

              <div>
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-[#8B5CF6]">
                  Current Focus
                </p>
                <h3 className="font-heading mt-1 text-xl font-semibold text-[#F8FAFC]">
                  What I’m improving next
                </h3>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-[#24304A] lg:block" />

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {focusAreas.map((area, index) => (
                <div key={area.title} className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <IconBox
                      icon={area.icon}
                      className="h-8 w-8 rounded-xl border-[#24304A]/70 bg-[#0A0F1C]/55"
                      iconClassName="text-sm text-[#22D3EE]"
                    />

                    <span className="font-heading text-sm font-medium text-[#CBD5E1] transition hover:text-[#22D3EE]">
                      {area.title}
                    </span>
                  </div>

                  {index !== focusAreas.length - 1 ? (
                    <span className="hidden text-[#475569] md:inline">•</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}