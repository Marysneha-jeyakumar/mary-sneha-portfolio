import { Badge, Button } from "@/components/ui";

const heroTags = [
  "Machine Learning",
  "Data Science",
  "Python",
  "SQL",
  "AI Systems",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section-container relative flex min-h-screen items-center px-4 pb-20 pt-32"
    >
      {/* Reduced glow opacity */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-[#4F46E5]/15 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#22D3EE]/10 blur-3xl" />

      <div className="corner-network absolute right-4 top-28 hidden h-48 w-48 opacity-40 md:block" />
      <div className="corner-network absolute bottom-16 left-4 hidden h-48 w-48 rotate-180 opacity-30 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="hero-name-font text-6xl leading-[0.95] text-[#F8FAFC] md:text-8xl lg:text-9xl">
          Mary <span className="text-gradient">Sneha</span>
        </h1>

        <p className="font-heading mt-7 text-sm font-semibold uppercase tracking-[0.45em] text-[#22D3EE]">
          AI & Data Science Portfolio
        </p>

        <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B5CF6]" />
          <div className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#8B5CF6]" />
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#CBD5E1] md:text-xl">
          Designing and building practical ML, data, and AI systems from
          experimentation to deployment.
        </p>

        {/* Text-only skill row */}
        <div className="mt-9 flex flex-wrap justify-center gap-x-4 gap-y-3 text-sm font-medium tracking-[0.08em] text-[#94A3B8] md:text-base">
          {heroTags.map((tag, index) => (
            <div key={tag} className="flex items-center gap-4">
              <span className="transition duration-300 hover:text-[#22D3EE]">
                {tag}
              </span>

              {index !== heroTags.length - 1 ? (
                <span className="text-[#475569]">•</span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#projects">View Projects →</Button>

          <Button href="/resume.pdf" variant="secondary">
            Resume ↓
          </Button>
        </div>
      </div>
    </section>
  );
}