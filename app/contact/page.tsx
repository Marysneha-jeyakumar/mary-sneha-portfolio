import type { Metadata } from "next";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import ContactForm from "@/components/contact/ContactForm";
import { Accent, Button, Icon, PageHeader } from "@/components/ui";
import { contactFacts, contactLinks } from "@/data/contact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mary Sneha about internships, collaborations, and entry-level opportunities.",
  alternates: { canonical: "/contact" },
};

const cardTones = ["bg-cream", "bg-mist", "bg-cream"];

export default function ContactPage() {
  return (
    <section className="relative">
      {/* Navy geometric panel (desktop) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 top-10 hidden w-[46%] bg-navy [clip-path:polygon(34%_0,100%_0,100%_100%,0_100%)] lg:block"
      >
        <div className="absolute right-[-8%] top-[-12%] h-80 w-80 rotate-12 rounded-[60px] border border-white/10" />
      </div>

      <div className="container-page relative grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        {/* ===== Left: intro + form ===== */}
        <div className="min-w-0">
          <PageHeader
            eyebrow="Get in Touch"
            size="xl"
            title={
              <>
                Let&apos;s build something <Accent>impactful</Accent>
              </>
            }
            intro={
              <p>
                Have a project, opportunity, or collaboration in mind? Let&apos;s
                connect and discuss how I can contribute through software, data,
                and AI.
              </p>
            }
          />

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        {/* ===== Right: contact cards on the navy panel ===== */}
        <div className="min-w-0 rounded-[28px] bg-navy p-5 sm:p-8 lg:bg-transparent lg:p-0 lg:pt-28">
          <h2 className="sr-only">Contact details</h2>

          <ul className="space-y-4">
            {contactLinks.map((item, index) => {
              const external = !item.href?.startsWith("mailto:");

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={`group flex min-w-0 items-center gap-4 rounded-[var(--radius-card)] border border-white/60 px-5 py-4 shadow-[0_16px_34px_-20px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-0.5 hover:border-rose sm:px-6 sm:py-5 ${cardTones[index % cardTones.length]}`}
                  >
                    <Icon icon={item.icon} className="shrink-0 text-2xl text-burgundy" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block font-serif text-base text-navy [overflow-wrap:anywhere] sm:truncate sm:text-lg">
                        {item.value}
                      </span>
                    </span>
                    {external ? (
                      <FiArrowUpRight
                        aria-hidden="true"
                        className="shrink-0 text-xl text-burgundy transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {contactFacts.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-[var(--radius-card)] border border-white/60 px-5 py-4 shadow-[0_16px_34px_-20px_rgba(0,0,0,0.6)] ${
                  index === 0 ? "bg-mist" : "bg-cream"
                }`}
              >
                <dt className="flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  <Icon icon={item.icon} className="text-xl text-burgundy" />
                  {item.label}
                </dt>
                <dd className="mt-2 font-serif text-lg leading-snug text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>

          <Button
            href={siteConfig.resume}
            variant="secondary"
            newTab
            className="mt-6 w-full !border-white/70 !bg-paper hover:!bg-cream"
          >
            <FiDownload aria-hidden="true" /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
