import type { Metadata } from "next";
import Image from "next/image";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Accent, Badge, Button, Card, IconBox, PageHeader, Reveal, type IconName } from "@/components/ui";
import { certificationItems, educationItems } from "@/data/education";
import { focusAreas } from "@/data/focusAreas";
import { principles } from "@/data/principles";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mary Sneha — a developer building practical software, data, and AI systems.",
  alternates: { canonical: "/about" },
};

const keyAreas: { title: string; icon: IconName }[] = [
  { title: "Software Development", icon: "code" },
  { title: "AI & Data", icon: "brain" },
  { title: "Product Building", icon: "rocket" },
  { title: "Engineering", icon: "tool" },
];

export default function AboutPage() {
  const degree = educationItems[0];

  return (
    <>
      {/* ===== Two-column introduction ===== */}
      <section className="container-page grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <PageHeader
            eyebrow="About"
            size="xl"
            title={
              <>
                About <Accent>Me</Accent>
              </>
            }
            intro={
              <>
                <p>
                  I&apos;m {siteConfig.name}, a developer focused on building
                  practical software, data, and AI systems. I enjoy working
                  across the development lifecycle — from interfaces and backend
                  services to data pipelines, machine learning, analytics, and
                  intelligent automation.
                </p>
                <p className="mt-4">
                  My portfolio is built around case studies that document the
                  problem, architecture, technical decisions, challenges,
                  results, and lessons behind each project.
                </p>
                <p className="mt-4 text-ink-muted">
                  I&apos;m currently studying for a {degree.qualification} at{" "}
                  {degree.institution}, based in {siteConfig.location}.
                </p>
              </>
            }
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.resume} newTab>
              <FiDownload aria-hidden="true" /> Download Resume
            </Button>
            <Button href="/contact" variant="secondary">
              Get in Touch <FiArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[420px] lg:mr-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border border-rose"
            />
            <div className="relative overflow-hidden rounded-[28px] border-[6px] border-paper bg-beige shadow-[0_30px_60px_-30px_rgba(20,33,61,0.45)]">
              <Image
                src="/images/profile/profile.jpeg"
                alt={`${siteConfig.name}, portrait`}
                width={960}
                height={1280}
                loading="eager"
                sizes="(max-width: 1024px) 90vw, 420px"
                className="aspect-[5/5.4] h-auto w-full object-cover object-top"
              />
            </div>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3">
            {keyAreas.map((area) => (
              <li
                key={area.title}
                className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-3"
              >
                <IconBox icon={area.icon} className="h-10 w-10 rounded-xl" iconClassName="text-base" />
                <span className="text-sm font-medium leading-5 text-navy">{area.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== How I work ===== */}
      <section className="container-page py-12" aria-labelledby="how-i-work">
        <Reveal>
          <h2 id="how-i-work" className="font-serif text-3xl font-medium text-navy sm:text-4xl">
            How I <Accent>work</Accent>
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <Card key={item.title} className="flex gap-4 p-5">
                <IconBox icon={item.icon} />
                <div>
                  <h3 className="font-serif text-xl font-medium text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== Education & certifications ===== */}
      <section id="education" className="container-page py-12" aria-labelledby="education-title">
        <Reveal>
          <h2 id="education-title" className="font-serif text-3xl font-medium text-navy sm:text-4xl">
            Education &amp; <Accent>Certifications</Accent>
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            {educationItems.map((item) => (
              <Card key={item.qualification} tone="rose" className="p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <IconBox icon={item.icon} className="h-14 w-14 rounded-2xl bg-paper" iconClassName="text-2xl" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">
                      Academic Education
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy sm:text-[1.75rem]">
                      {item.qualification}
                    </h3>
                    <p className="mt-2 font-medium text-ink">{item.institution}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>{item.status}</Badge>
                      <Badge>{item.period}</Badge>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-ink">{item.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
                      {item.focusAreas.map((focus) => (
                        <li key={focus}>
                          <Badge variant="accent" className="bg-paper">{focus}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}

            {certificationItems.map((item) => (
              <Card key={item.title} tone="mist" className="flex flex-col p-6">
                <div className="flex items-start gap-4">
                  <IconBox icon={item.icon} className="bg-paper" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">
                      Certification
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-medium text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink">
                      {item.issuer} · {item.completed}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                  {item.skills.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <Button href={item.certificateUrl} variant="secondary" size="sm" newTab>
                    View Certificate <FiArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-5 rounded-[var(--radius-card)] border border-line bg-beige/70 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">
              Current Focus
            </p>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {focusAreas.map((area) => (
                <li key={area.title} className="flex gap-3">
                  <IconBox icon={area.icon} className="h-10 w-10 rounded-xl bg-paper" iconClassName="text-base" />
                  <div>
                    <p className="font-medium text-navy">{area.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink">{area.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
