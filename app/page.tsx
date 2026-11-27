import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import BuildFlow from "@/components/home/BuildFlow";
import LegacyHashRedirect from "@/components/home/LegacyHashRedirect";
import ProductCard from "@/components/projects/ProductCard";
import { Accent, Badge, Button, Eyebrow, PageHeader, Reveal } from "@/components/ui";
import { certificationItems } from "@/data/education";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { skillCategories, technologyCount } from "@/data/skills";

const whatIBuildTags = ["Python", "SQL", "Machine Learning", "React", "Data Pipelines"];

const stats = [
  { value: projects.length, label: "Case-study projects" },
  { value: technologyCount, label: "Technologies" },
  { value: skillCategories.length, label: "Technology areas" },
  { value: certificationItems.length, label: "Certification" },
];

export default function HomePage() {
  return (
    <>
      <LegacyHashRedirect />

      {/* ===== Hero ===== */}
      <section className="container-page grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <Eyebrow>{siteConfig.role}</Eyebrow>

          <h1 className="mt-6 font-serif text-[2.7rem] font-medium leading-[1.03] tracking-[-0.025em] text-navy sm:text-6xl lg:text-[4.6rem]">
            Building practical <Accent>software</Accent>, <Accent>AI</Accent>{" "}
            &amp; <Accent>data</Accent> products
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-ink">
            I&apos;m {siteConfig.name}. I design and build practical ML, data, and
            AI systems from experimentation to deployment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/projects">
              Explore Projects <FiArrowRight aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-line pt-7 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col px-1 sm:px-5 ${index > 0 ? "sm:border-l sm:border-line" : "sm:pl-0"}`}
              >
                <dt className="text-sm text-ink-muted">{stat.label}</dt>
                <dd className="order-first font-serif text-4xl font-medium text-burgundy">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[400px] lg:mr-0">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-6 bottom-10 left-16 rounded-[28px] bg-rose/45 [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]"
          />
          <div className="relative overflow-hidden rounded-[28px] border-[6px] border-paper bg-beige shadow-[0_30px_60px_-30px_rgba(20,33,61,0.45)]">
            <Image
              src="/images/profile/profile.jpeg"
              alt={`${siteConfig.name}, portrait`}
              width={960}
              height={1280}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 90vw, 400px"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-6 sm:right-auto">
            <div className="min-w-0">
              <p className="font-serif text-lg font-medium text-navy">{siteConfig.name}</p>
              <p className="flex items-center gap-1.5 text-xs text-ink-muted">
                <FiMapPin aria-hidden="true" className="text-burgundy" />
                {siteConfig.location}
              </p>
            </div>
            <Badge variant="accent">Open to opportunities</Badge>
          </div>
        </div>
      </section>

      {/* ===== What I build ===== */}
      <section
        id="build"
        className="container-page grid items-center gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
      >
        <Reveal>
          <PageHeader
            level="h2"
            eyebrow="What I Build"
            title={
              <>
                Useful <Accent>AI/Data</Accent> products, end to end
              </>
            }
            intro={
              <>
                <p>
                  I build end-to-end AI and data products that turn raw data into
                  practical, deployable solutions. My work combines data
                  pipelines, analytics, machine learning, APIs, and software
                  engineering to take ideas from experimentation to production.
                </p>
                <p className="mt-4 text-ink-muted">
                  I focus on clean architecture, reliable workflows, measurable
                  results, and clear case-study documentation that explains both
                  what I built and why I made each technical decision.
                </p>
              </>
            }
          />
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
            {whatIBuildTags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <BuildFlow />
        </Reveal>
      </section>

      {/* ===== Products preview ===== */}
      <section className="container-page py-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-serif text-4xl font-medium text-navy sm:text-[2.7rem]">
              Selected <Accent>Products</Accent>
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-medium text-burgundy hover:text-burgundy-dark"
            >
              View All Projects <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProductCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== Call to action ===== */}
      <section className="container-page pt-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-12 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rotate-12 rounded-[48px] border border-white/10"
            />
            <h2 className="relative font-serif text-3xl font-medium text-white sm:text-5xl">
              Let&apos;s build something <em className="italic text-rose">impactful</em>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              Have a project, opportunity, or collaboration in mind? Let&apos;s
              connect and discuss how I can contribute through software, data,
              and AI.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" className="bg-white !text-navy hover:!bg-cream">
                Contact Me <FiArrowRight aria-hidden="true" />
              </Button>
              <Button href={siteConfig.resume} variant="inverse" newTab>
                Download Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
