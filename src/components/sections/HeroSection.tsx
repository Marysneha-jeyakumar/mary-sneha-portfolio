import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Badge, Button } from "@/components/ui";
import { siteConfig } from "@/data/site";

const heroTags = [
  "Machine Learning",
  "Data Science",
  "Python",
  "SQL",
  "AI Systems",
];

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
      className="section-container relative flex min-h-screen items-center px-4 pb-20 pt-32"
    >
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-[#4F46E5]/20 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#22D3EE]/10 blur-3xl" />

      <div className="corner-network absolute right-4 top-28 hidden h-48 w-48 opacity-60 md:block" />
      <div className="corner-network absolute bottom-16 left-4 hidden h-48 w-48 rotate-180 opacity-40 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.45em] text-[#22D3EE]">
          AI & Data Science Portfolio
        </p>

        <h1 className="hero-name-font mt-7 text-6xl leading-[0.95] text-[#F8FAFC] md:text-8xl lg:text-9xl">
          Mary <span className="text-gradient">Sneha</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#CBD5E1] md:text-xl">
          Building practical software, data, and AI systems that solve
          real-world problems.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {heroTags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#projects">View Projects</Button>

          <Button href="/resume.pdf" variant="secondary">
            Download Resume
          </Button>
        </div>

        <div className="mt-10 flex justify-center gap-5">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                aria-label={item.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24304A] bg-[#111827]/80 text-xl text-[#94A3B8] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}