import { Card, IconBox, type IconName } from "@/components/ui";

const pipelineSteps: { label: string; icon: IconName }[] = [
  { label: "Data Sources", icon: "database" },
  { label: "Data Ingestion", icon: "server" },
  { label: "Data Processing", icon: "tool" },
  { label: "Modeling", icon: "neural" },
  { label: "Outputs", icon: "chart" },
];

const benefits: { title: string; icon: IconName }[] = [
  { title: "Reproducible & Reliable", icon: "code" },
  { title: "Scalable Architecture", icon: "layers" },
  { title: "Monitored & Improved", icon: "pie" },
];

/** The AI/Data system flow diagram from the original "What I Build" section. */
export default function BuildFlow() {
  return (
    <Card tone="paper" className="p-5 sm:p-7">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
        AI/Data System Flow
      </p>

      <ol className="relative mt-7 grid gap-3 sm:grid-cols-5 sm:gap-2">
        <span
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-7 hidden border-t-2 border-dashed border-rose sm:block"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-7 top-6 border-l-2 border-dashed border-rose sm:hidden"
        />

        {pipelineSteps.map((step) => (
          <li
            key={step.label}
            className="relative flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center"
          >
            <IconBox
              icon={step.icon}
              className="h-14 w-14 rounded-2xl border border-line bg-cream"
            />
            <span className="text-sm font-medium leading-5 text-navy">
              {step.label}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-7 rounded-2xl border border-line bg-beige/70 px-5 py-5 text-center">
        <IconBox icon="chart" className="mx-auto h-11 w-11 bg-paper" />
        <h3 className="mt-3 font-serif text-xl font-medium text-navy">
          Monitoring &amp; Feedback
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink">
          Model outputs and user feedback help improve performance, reliability,
          and decision-making over time.
        </p>
      </div>

      <ul className="mt-6 grid gap-3 border-t border-line pt-5 sm:grid-cols-3">
        {benefits.map((item) => (
          <li key={item.title} className="flex items-center gap-3">
            <IconBox icon={item.icon} className="h-9 w-9 rounded-lg" iconClassName="text-sm" />
            <span className="text-sm font-medium leading-5 text-navy">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
