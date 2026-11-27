import type { Metadata } from "next";
import TechChain from "@/components/technology/TechChain";
import { Accent, Badge, Card, IconBox, PageHeader, Reveal } from "@/components/ui";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The frontend, backend, data & AI, database, and DevOps technologies Mary Sneha uses to build software products.",
  alternates: { canonical: "/technology" },
};

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function TechnologyPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 sm:pt-16">
        <PageHeader
          eyebrow="Technology"
          size="xl"
          title={
            <>
              The tools behind what I <Accent>build</Accent>
            </>
          }
          intro={
            <p className="max-w-3xl">
              Technologies, tools, and engineering concepts I use across AI,
              data, and software projects — from frontend interfaces and
              backend APIs to data science, databases, and deployment.
            </p>
          }
        />
      </section>

      <section aria-label="Connected technology stack" className="py-6">
        <TechChain categories={skillCategories} />

        <div className="container-page mt-6">
          <p className="flex items-center gap-4 text-center font-serif text-lg italic text-ink sm:text-xl">
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
            A connected toolkit — from interface to deployment
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
            {skillCategories.map((category) => (
              <li key={category.title}>
                <a
                  href={`#${slugify(category.title)}`}
                  className="inline-flex rounded-full border border-mist-deep bg-mist px-4 py-1.5 text-sm font-medium text-navy transition-colors hover:border-burgundy hover:text-burgundy"
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16" aria-labelledby="stack-detail">
        <Reveal>
          <h2 id="stack-detail" className="font-serif text-3xl font-medium text-navy sm:text-4xl">
            The full <Accent>stack</Accent>
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                as="article"
                id={slugify(category.title)}
                className="flex flex-col p-6"
              >
                <div className="flex items-center gap-4">
                  <IconBox icon={category.icon} />
                  <h3 className="font-serif text-2xl font-medium text-navy">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink">{category.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${category.title} technologies`}>
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
