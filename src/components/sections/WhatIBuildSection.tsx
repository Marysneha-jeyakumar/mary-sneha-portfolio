import { Button, Card, IconBox } from "@/components/ui";

const techItems = [
  "Python",
  "SQL",
  "Machine Learning",
  "React",
  "Data Pipelines",
];

const pipelineSteps = [
  { label: "Data Sources", icon: "database" },
  { label: "Data Ingestion", icon: "server" },
  { label: "Data Processing", icon: "tool" },
  { label: "Modeling", icon: "globe" },
  { label: "Outputs", icon: "chart" },
];

const benefits = [
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
      className="
        section-container
        relative
        overflow-hidden
        px-4
        py-12
        lg:min-h-[calc(100svh-96px)]
        lg:py-6
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-16 h-64 w-64 rounded-full bg-[#4F46E5]/8 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#22D3EE]/[0.06] blur-3xl" />

      <div
        className="
          relative
          z-10
          grid
          gap-10
          lg:min-h-[calc(100svh-145px)]
          lg:grid-cols-[1.03fr_0.97fr]
          lg:items-center
          lg:gap-10
          xl:gap-12
        "
      >
        {/* =========================================================
            LEFT SIDE
        ========================================================== */}
        <div className="flex flex-col justify-center">
          <div>
            {/* Section label */}
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.4em] text-[#22D3EE] sm:text-sm">
              What I Build
            </p>

            <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

            {/* Main heading */}
            <h2
              className="hero-name-font mt-7 max-w-[660px] text-[#F8FAFC]"
              style={{
                fontSize: "clamp(2.8rem, 4vw, 4rem)",
                lineHeight: 1.08,
                fontWeight: 600,
                letterSpacing: "-0.035em",
              }}
            >
              Building useful
              <br />

              <span className="text-gradient">AI/Data</span> products
            </h2>

            {/* Main description */}
            <p
              className="
                mt-7
                max-w-[560px]
                text-base
                leading-7
                text-[#E2E8F0]
                md:text-[1.05rem]
              "
            >
              I build end-to-end AI and data products that turn raw data into
              practical, deployable solutions. My work combines data pipelines,
              analytics, machine learning, APIs, and software engineering to
              take ideas from experimentation to production.
            </p>

            {/* Secondary description */}
            <p
              className="
                mt-4
                max-w-[560px]
                text-[0.95rem]
                leading-7
                text-[#AEBED1]
                md:text-base
              "
            >
              I focus on clean architecture, reliable workflows, measurable
              results, and clear case-study documentation that explains both
              what I built and why I made each technical decision.
            </p>

            {/* Technologies */}
            <div
              className="
                mt-5
                flex
                max-w-[590px]
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-sm
                font-medium
                tracking-[0.04em]
                text-[#94A3B8]
              "
            >
              {techItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="cursor-default transition-colors duration-300 hover:text-[#22D3EE]">
                    {item}
                  </span>

                  {index !== techItems.length - 1 && (
                    <span className="text-[10px] text-[#64748B]">●</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="#projects">View Projects →</Button>

              <Button href="/resume.pdf" variant="secondary">
                Resume ↓
              </Button>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE
        ========================================================== */}
        <Card
          className="
            border
            border-[#22D3EE]/35
            bg-[#162033]/80
            p-5
            backdrop-blur-sm
            md:p-6
            lg:p-5
            xl:p-6
          "
        >
          {/* Card header */}
          <div className="text-center">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-[#22D3EE] sm:text-sm">
              AI/Data System Flow
            </h3>

            <div className="mx-auto mt-3 flex max-w-[170px] items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B5CF6]" />

              <div className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#22D3EE]" />
            </div>
          </div>

          {/* =====================================================
              PIPELINE
          ====================================================== */}
          <div className="mt-6">
            <div className="relative grid grid-cols-5 gap-2 md:gap-3">
              {/* Connecting line */}
              <div
                className="
                  absolute
                  left-[10%]
                  right-[10%]
                  top-[32px]
                  hidden
                  h-[2px]
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#22D3EE]
                  to-[#22D3EE]
                  opacity-80
                  md:block
                "
              />

              {pipelineSteps.map((step) => (
                <div
                  key={step.label}
                  className="relative z-10 flex min-w-0 flex-col items-center text-center"
                >
                  {/* Pipeline icon */}
                  <div
                    className="
                      mb-3
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#24304A]/70
                      bg-[#0A0F1C]/85
                      backdrop-blur-sm
                      xl:h-[68px]
                      xl:w-[68px]
                    "
                  >
                    <IconBox
                      icon={step.icon}
                      className="h-9 w-9 rounded-xl border-none bg-transparent"
                      iconClassName="text-[1.05rem] text-[#22D3EE]"
                    />
                  </div>

                  {/* Pipeline label */}
                  <p
                    className="
                      max-w-[90px]
                      text-[0.82rem]
                      font-medium
                      leading-5
                      text-[#D8E1EC]
                      xl:text-sm
                    "
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              MONITORING
          ====================================================== */}
          <div
            className="
              mt-6
              rounded-[24px]
              border
              border-[#24304A]/55
              bg-[#0A0F1C]/55
              px-5
              py-5
              text-center
              md:px-6
            "
          >
            {/* Monitoring icon */}
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-[#24304A]/70
                bg-[#111827]/80
              "
            >
              <IconBox
                icon="chart"
                className="h-8 w-8 rounded-lg border-none bg-transparent"
                iconClassName="text-base text-[#22D3EE]"
              />
            </div>

            <h4 className="font-heading mt-4 text-xl font-semibold text-[#F8FAFC] md:text-2xl">
              Monitoring &amp; Feedback
            </h4>

            <p
              className="
                mx-auto
                mt-2
                max-w-[440px]
                text-sm
                leading-6
                text-[#AEBED1]
                md:text-[0.95rem]
              "
            >
              Model outputs and user feedback help improve performance,
              reliability, and decision-making over time.
            </p>
          </div>

          {/* =====================================================
              BENEFITS
          ====================================================== */}
          <div className="mt-5 border-t border-[#24304A]/55 pt-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#24304A]/60
                      bg-[#0A0F1C]/60
                    "
                  >
                    <IconBox
                      icon={item.icon}
                      className="h-7 w-7 rounded-lg border-none bg-transparent"
                      iconClassName="text-sm text-[#22D3EE]"
                    />
                  </div>

                  <p
                    className="
                      font-heading
                      text-[0.78rem]
                      font-semibold
                      leading-[1.35]
                      text-[#D8E1EC]
                      xl:text-[0.85rem]
                    "
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}