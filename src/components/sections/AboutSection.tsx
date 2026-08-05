import { Badge, Card, IconBox } from "@/components/ui";
import { certificationItems, educationItems } from "@/data/education";
import { principles } from "@/data/principles";
import { currentlyLearningTags } from "@/data/techTags";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-container relative px-4 py-24">
      {/* About main card */}
      <Card className="relative overflow-hidden p-6 md:p-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#22D3EE]/10 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text content */}
          <div>
            <h2 className="font-heading text-5xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">
              About <span className="text-gradient">me!</span>
            </h2>

            <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#CBD5E1]">
              I’m Mary Sneha, a developer focused on building practical
              software, data, and AI-driven systems that solve real-world
              problems. I enjoy working across the full development flow — from
              designing clean user interfaces and backend services to exploring
              machine learning models, analytics, and intelligent automation.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#94A3B8]">
              My portfolio is built around case studies because I believe every
              project should explain the problem, solution, architecture,
              technical decisions, challenges, and lessons learned.
            </p>
          </div>

          {/* Profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl border border-[#24304A] bg-[#0A0F1C]/70 p-6 shadow-2xl shadow-[#4F46E5]/10">
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#22D3EE]/20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#8B5CF6]/20 blur-3xl" />

             <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-[#8B5CF6] bg-gradient-to-br from-[#162033] to-[#0A0F1C] p-3 shadow-lg shadow-[#8B5CF6]/20">
  <div className="relative h-full w-full overflow-hidden rounded-full border border-[#22D3EE]/40 bg-[#111827]">
    <Image
      src="/images/profile/profile.jpeg"
      alt="Mary Sneha profile photo"
      fill
      priority
      className="object-cover"
      sizes="224px"
    />
  </div>
</div>

              <div className="relative mt-6 text-center">
                <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                  Mary Sneha
                </h3>

                <p className="mt-2 text-sm font-medium text-[#22D3EE]">
                  AI & Data Science Developer
                </p>

                <div className="mt-5 flex justify-center gap-3">
                  <Badge>Developer</Badge>
                  <Badge>AI</Badge>
                  <Badge>Data</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Smaller principle cards */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <Card
            key={item.title}
            className="flex items-start gap-4 rounded-2xl p-4 md:p-5"
          >
            <IconBox
              icon={item.icon}
              className="h-11 w-11 shrink-0 rounded-xl border-[#8B5CF6]/70"
              iconClassName="text-[#8B5CF6]"
            />

            <div>
              <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">
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

      {/* Education & Certifications section */}
      <div className="mt-10 rounded-3xl border border-[#24304A] bg-[#111827]/50 p-6 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <IconBox icon="graduation" className="h-11 w-11" />

          <div>
            <h2 className="font-heading text-3xl font-bold text-[#F8FAFC]">
              Education & Certifications
            </h2>
            <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />
          </div>
        </div>

        <p className="max-w-3xl text-sm leading-6 text-[#94A3B8] md:text-base">
          My formal academic background and selected certifications that support
          my AI, data science, and software development journey.
        </p>

        {/* Academic Education */}
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-[#22D3EE]">
                Academic Education
              </p>
              <h3 className="font-heading mt-2 text-2xl font-bold text-[#F8FAFC]">
                Current University & Degree
              </h3>
            </div>
          </div>

          {educationItems.map((item) => (
            <Card
              key={item.title}
              className="relative overflow-hidden border-[#22D3EE]/30 p-6 md:p-7"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#22D3EE]/10 blur-3xl" />

              <div className="relative z-10 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
                <IconBox
                  icon={item.icon}
                  className="h-16 w-16 rounded-2xl border-[#22D3EE]/70"
                  iconClassName="text-[#22D3EE]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#22D3EE]">
                    {item.title}
                  </p>

                  <h3 className="font-heading mt-3 text-2xl font-bold text-[#F8FAFC] md:text-3xl">
                    {item.qualification}
                  </h3>

                  <p className="mt-2 text-base font-medium text-[#CBD5E1]">
                    {item.institution}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge>{item.status}</Badge>
                    <Badge>{item.period}</Badge>
                  </div>

                  <p className="mt-5 max-w-4xl text-sm leading-6 text-[#94A3B8] md:text-base md:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.focusAreas.map((focus) => (
                      <Badge key={focus}>{focus}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <div className="mb-5">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-[#8B5CF6]">
              Selected Certifications
            </p>
            <h3 className="font-heading mt-2 text-2xl font-bold text-[#F8FAFC]">
              Additional Learning Proof
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#94A3B8]">
              These certifications are shown separately from my degree so my
              academic education remains clear and the certificates support my
              learning journey without mixing with it.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {certificationItems.map((item) => (
              <Card key={item.title} className="flex h-full flex-col p-6">
                <IconBox
                  icon={item.icon}
                  className="h-14 w-14 rounded-2xl border-[#8B5CF6]/70"
                  iconClassName="text-[#8B5CF6]"
                />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B5CF6]">
                  Certification
                </p>

                <h3 className="font-heading mt-3 text-2xl font-bold text-[#F8FAFC]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#CBD5E1]">
                  Issued by: {item.issuer}
                </p>

                <Badge className="mt-4 w-fit">{item.completed}</Badge>

                <p className="mt-5 flex-1 text-sm leading-6 text-[#94A3B8]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>

                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-heading mt-7 inline-flex items-center justify-center rounded-xl border border-[#24304A] bg-[#0A0F1C]/70 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
                >
                  View Certificate →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Currently learning row */}
      <div className="mt-8 rounded-3xl border border-[#22D3EE]/50 bg-[#111827]/60 p-5 shadow-lg shadow-[#22D3EE]/10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4 md:min-w-64">
            <IconBox
              icon="brain"
              className="h-14 w-14 rounded-full border-[#8B5CF6]/70"
              iconClassName="text-[#8B5CF6]"
            />

            <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
              Currently Learning
            </h3>
          </div>

          <div className="hidden h-12 w-px bg-[#24304A] md:block" />

          <div className="flex flex-wrap gap-3">
            {currentlyLearningTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}