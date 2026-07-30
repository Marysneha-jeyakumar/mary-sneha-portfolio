import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "@/components/ui";
import { heroTechTags } from "@/data/techTags";
import { siteConfig } from "@/data/site";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: MdOutlineMail,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
className="section-container relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-32 md:pt-28"    >
      {/* Soft center glow */}
      <div className="soft-glow left-1/2 top-1/4 -translate-x-1/2" />

      {/* Corner network decorations */}
      <div className="corner-network left-0 top-6" />
      <div className="corner-network right-0 top-10 rotate-90" />
      <div className="corner-network bottom-8 left-0 -rotate-90" />
      <div className="corner-network bottom-8 right-0 rotate-180" />

      <div className="relative z-10 text-center">
        <h1 className="font-heading text-6xl font-bold tracking-tight text-[#F8FAFC] md:text-8xl lg:text-9xl">
          Mary Sneha
        </h1>

        <p className="font-heading mt-5 text-sm font-medium uppercase tracking-[0.45em] text-gradient md:text-base">
          AI & Data Science Portfolio
        </p>

        <div className="mx-auto mt-4 flex w-44 items-center justify-center gap-2">
          <span className="h-[2px] flex-1 bg-[#8B5CF6]" />
          <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
          <span className="h-[2px] flex-1 bg-[#22D3EE]" />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] md:text-xl">
          Building practical software, data, and AI systems that solve
          real-world problems.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#projects" className="px-10">
            View Projects
          </Button>

          <Button href="/resume.pdf" variant="secondary" className="px-10">
            Download Resume
          </Button>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-[#94A3B8]">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-5">
                <a
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  aria-label={item.label}
                  className="group flex items-center gap-3 transition hover:text-[#22D3EE]"
                >
                  <Icon className="text-xl transition group-hover:scale-110" />
                  <span className="text-sm md:text-base">{item.label}</span>
                </a>

                {index !== socialLinks.length - 1 ? (
                  <span className="hidden h-5 w-px bg-[#24304A] sm:block" />
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Tech tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[#94A3B8]">
          {heroTechTags.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-[#24304A] bg-[#111827]/70 px-4 py-2 transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}