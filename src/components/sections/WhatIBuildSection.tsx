import { Badge, Button, Card, IconBox } from "@/components/ui";
import { whatIBuildTags } from "@/data/techTags";

const systemFlow = [
  {
    title: "Data Sources",
    icon: "database",
  },
  {
    title: "Data Ingestion",
    icon: "server",
  },
  {
    title: "Data Processing",
    icon: "tools",
  },
  {
    title: "Modeling",
    icon: "neural",
  },
  {
    title: "Outputs",
    icon: "chart",
  },
];

const principles = [
  {
    title: "Reproducible & Reliable",
    icon: "code",
  },
  {
    title: "Scalable Architecture",
    icon: "layers",
  },
  {
    title: "Monitored & Improved",
    icon: "pie",
  },
];

export default function WhatIBuildSection() {
  return (
    <section
      id="build"
      className="section-container relative grid min-h-screen items-center gap-12 px-4 py-24 lg:grid-cols-[0.95fr_1.05fr]"
    >
      {/* Left Content */}
      <div>
        <p className="font-heading mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">
          What I Build
        </p>

        <div className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

        <h2 className="font-heading max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#F8FAFC] md:text-6xl">
          Building useful{" "}
          <span className="text-gradient">AI/Data</span> products
        </h2>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
          I create end-to-end solutions that combine software development, data
          pipelines, analytics, and machine learning models to solve real-world
          problems.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#94A3B8]">
          My work focuses on practical systems, clear architecture, and
          case-study based documentation that explains both the final product and
          the decisions behind it.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="#projects">View Projects</Button>
          <Button href="/resume.pdf" variant="secondary">
            Download Resume
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {whatIBuildTags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Right System Flow Card */}
      <Card className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#22D3EE]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-8 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[#22D3EE]">
              AI/Data System Flow
            </p>

            <div className="mx-auto mt-3 flex w-40 items-center justify-center gap-2">
              <span className="h-px flex-1 bg-[#22D3EE]" />
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
              <span className="h-px flex-1 bg-[#8B5CF6]" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {systemFlow.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center">
                <IconBox
                  icon={step.icon}
                  className="h-16 w-16 rounded-full border-[#4F46E5]/70 bg-[#0A0F1C]/80"
                  iconClassName="text-[#22D3EE]"
                />

                <p className="font-heading mt-3 text-center text-sm font-semibold text-[#F8FAFC]">
                  {step.title}
                </p>

                {index !== systemFlow.length - 1 ? (
                  <span className="absolute left-[60%] top-8 hidden h-px w-[80%] bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] md:block" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-[#24304A] bg-[#0A0F1C]/60 p-5 text-center">
            <IconBox
              icon="chart"
              className="mx-auto h-14 w-14 rounded-full border-[#22D3EE]/60"
            />

            <h3 className="font-heading mt-4 text-lg font-bold text-[#F8FAFC]">
              Monitoring & Feedback
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
              Model outputs and user feedback help improve performance,
              reliability, and decision-making over time.
            </p>
          </div>

          <div className="mt-8 grid gap-4 border-t border-[#24304A] pt-6 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <IconBox
                  icon={item.icon}
                  className="h-10 w-10 rounded-lg border-[#24304A]"
                  iconClassName="text-lg"
                />
                <p className="font-heading text-sm font-semibold text-[#CBD5E1]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}