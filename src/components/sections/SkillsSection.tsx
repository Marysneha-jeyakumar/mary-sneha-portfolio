import { Badge, Button, Card, IconBox, SectionHeader } from "@/components/ui";
import { focusAreas } from "@/data/focusAreas";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container relative px-4 py-24">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4F46E5]/10 blur-3xl" />

      <div className="relative z-10">
        <SectionHeader
          eyebrow="Skills"
          title="Skills & Focus Areas"
          subtitle="Technologies and concepts I use to build practical AI, data, and full-stack projects."
        />

        {/* Skills by Category */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <IconBox icon="layers" className="h-11 w-11" />

            <div>
              <h3 className="font-heading text-3xl font-bold text-[#F8FAFC]">
                Skills by Category
              </h3>
              <div className="mt-2 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((item) => (
              <Card key={item.title} className="group">
                <div className="flex items-start gap-4">
                  <IconBox
                    icon={item.icon}
                    className="h-14 w-14 shrink-0 rounded-2xl transition group-hover:border-[#22D3EE]"
                  />

                  <div>
                    <h4 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <IconBox
              icon="brain"
              className="h-11 w-11 border-[#8B5CF6]/70"
              iconClassName="text-[#8B5CF6]"
            />

            <div>
              <h3 className="font-heading text-3xl font-bold text-[#F8FAFC]">
                What I Focus On
              </h3>
              <div className="mt-2 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((item) => (
              <Card
                key={item.title}
                className="relative overflow-hidden p-7 text-center"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#22D3EE]/10 blur-2xl" />

                <div className="relative z-10">
                  <IconBox
                    icon={item.icon}
                    className="mx-auto h-16 w-16 rounded-full border-[#4F46E5]/70"
                    iconClassName="text-[#22D3EE]"
                  />

                  <h4 className="font-heading mt-5 text-2xl font-bold text-[#F8FAFC]">
                    {item.title}
                  </h4>

                  <div className="mx-auto mt-3 h-[2px] w-12 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

                  <p className="mt-5 text-sm leading-6 text-[#94A3B8]">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button href="#projects">View Projects</Button>
        </div>
      </div>
    </section>
  );
}