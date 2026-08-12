import Image from "next/image";
import { Badge, Card, IconBox } from "@/components/ui";
import { certificationItems, educationItems } from "@/data/education";
import { principles } from "@/data/principles";
import { currentlyLearningTags } from "@/data/techTags";

export default function AboutSection() {
  return (
    <section id="about" className="section-container relative px-4 py-20">
      {/* About main card */}
      <Card className="relative overflow-hidden border-[#22D3EE]/25 p-6 md:p-8">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#8B5CF6]/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#22D3EE]/8 blur-3xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Text content */}
          <div>
            <h2 className="font-heading text-5xl font-semibold tracking-tight text-[#F8FAFC] md:text-[3.4rem]">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#D7E0EC] md:text-lg md:leading-8">
              I’m Mary Sneha, a developer focused on building practical
              software, data, and AI systems. I enjoy working across the
              development lifecycle — from interfaces and backend services to
              data pipelines, machine learning, analytics, and intelligent
              automation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#AEBED1] md:text-lg md:leading-8">
              My portfolio is built around case studies that document the
              problem, architecture, technical decisions, challenges, results,
              and lessons behind each project.
            </p>
          </div>

          {/* Profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs rounded-3xl border border-[#24304A]/80 bg-[#0A0F1C]/70 p-5 shadow-xl shadow-[#4F46E5]/10">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#22D3EE]/15 blur-3xl" />
              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[#8B5CF6]/15 blur-3xl" />

              <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-[#8B5CF6]/80 bg-gradient-to-br from-[#162033] to-[#0A0F1C] p-2 shadow-lg shadow-[#8B5CF6]/20">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-[#22D3EE]/35 bg-[#111827]">
                  <Image
                    src="/images/profile/profile.jpeg"
                    alt="Mary Sneha profile photo"
                    fill
                    priority
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative mt-5 text-center">
                <h3 className="font-heading text-2xl font-semibold text-[#F8FAFC]">
                  Mary Sneha
                </h3>

                <p className="mt-2 text-sm font-medium text-[#22D3EE]">
                  AI & Data Developer
                </p>

                <div className="mt-4 flex justify-center gap-2">
                  <Badge>Developer</Badge>
                  <Badge>AI</Badge>
                  <Badge>Data</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Compact principle cards */}
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <Card
            key={item.title}
            className="flex min-h-[110px] items-start gap-4 rounded-2xl border-[#24304A]/80 p-4"
          >
            <IconBox
              icon={item.icon}
              className="h-11 w-11 shrink-0 rounded-xl border-[#8B5CF6]/60"
              iconClassName="text-[#8B5CF6]"
            />

            <div>
              <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
                {item.title}
              </h3>

              <div className="mt-2 h-[2px] w-10 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="mt-10 rounded-3xl border border-[#24304A]/70 bg-[#111827]/40 p-6 md:p-8">
        {/* Section heading */}
        <div className="flex items-start gap-4">
          <IconBox
            icon="graduation"
            className="h-12 w-12 rounded-2xl border-[#22D3EE]/50"
            iconClassName="text-[#22D3EE]"
          />

          <div>
            <h2 className="font-heading text-3xl font-semibold text-[#F8FAFC] md:text-4xl">
              Education & Certifications
            </h2>

            <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

            <p className="mt-6 max-w-3xl text-base leading-7 text-[#AEBED1]">
              My academic background, selected certifications, and current
              learning focus that support my AI, data science, and software
              development journey.
            </p>
          </div>
        </div>

        {/* Academic Education */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-[#22D3EE]">
              Academic Education
            </p>
            <div className="h-px flex-1 bg-[#24304A]/70" />
          </div>

          {educationItems.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-[#22D3EE]/35 bg-[#0A0F1C]/55 p-5 md:p-6"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#22D3EE]/8 blur-3xl" />

              <div className="relative z-10 grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
                <IconBox
                  icon={item.icon}
                  className="h-13 w-13 rounded-2xl border-[#22D3EE]/60"
                  iconClassName="text-[#22D3EE]"
                />

                <div>
                  <h3 className="font-heading max-w-4xl text-2xl font-semibold leading-tight text-[#F8FAFC] md:text-[1.8rem]">
                    {item.qualification}
                  </h3>

                  <p className="mt-3 text-base font-medium text-[#CBD5E1]">
                    {item.institution}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>{item.status}</Badge>
                    <Badge>{item.period}</Badge>
                  </div>

                  <p className="mt-5 max-w-4xl text-sm leading-6 text-[#AEBED1] md:text-base md:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.focusAreas.map((focus) => (
                      <Badge key={focus}>{focus}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-[#8B5CF6]">
              Certifications
            </p>
            <div className="h-px flex-1 bg-[#24304A]/70" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {certificationItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#24304A]/80 bg-[#162033]/65 p-5 transition hover:border-[#8B5CF6]/60"
              >
                <div className="flex items-start gap-4">
                  <IconBox
                    icon={item.icon}
                    className="h-12 w-12 shrink-0 rounded-2xl border-[#8B5CF6]/60"
                    iconClassName="text-[#8B5CF6]"
                  />

                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-semibold text-[#F8FAFC]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#CBD5E1]">
                      {item.issuer}
                    </p>

                    <p className="mt-2 text-sm text-[#8B5CF6]">
                      {item.completed}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#AEBED1]">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>

                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-heading mt-5 inline-flex w-full items-center justify-center rounded-xl border border-[#24304A] bg-[#0A0F1C]/60 px-4 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-10 rounded-2xl border border-[#24304A]/70 bg-[#0A0F1C]/45 px-5 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3 md:min-w-fit">
              <IconBox
                icon="brain"
                className="h-10 w-10 rounded-xl border-[#8B5CF6]/60"
                iconClassName="text-[#8B5CF6]"
              />

              <p className="font-heading text-lg font-semibold text-[#F8FAFC]">
                Current Focus
              </p>
            </div>

            <div className="hidden h-8 w-px bg-[#24304A] md:block" />

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium tracking-[0.04em] text-[#94A3B8]">
              {currentlyLearningTags.map((tag, index) => (
                <div key={tag} className="flex items-center gap-4">
                  <span className="transition hover:text-[#22D3EE]">
                    {tag}
                  </span>

                  {index !== currentlyLearningTags.length - 1 ? (
                    <span className="text-[#475569]">•</span>
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