"use client";

import { ValidationError, useForm } from "@formspree/react";
import { Button, Card, IconBox } from "@/components/ui";
import { contactItems } from "@/data/contact";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

function isExternalLink(href: string) {
  return href !== "#" && !href.startsWith("mailto:");
}

export default function ContactSection() {
  const [state, handleSubmit] = useForm(formId);

  const availabilityItem = contactItems.find(
    (item) => item.label.toLowerCase() === "availability",
  );

  const compactContactItems = contactItems.filter(
    (item) => item.label.toLowerCase() !== "availability",
  );

  return (
    <section id="contact" className="section-container relative px-4 py-12 lg:py-14">
      <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-[#8B5CF6]/8 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-64 w-64 rounded-full bg-[#22D3EE]/8 blur-3xl" />

      <div className="relative z-10">
        {/* Compact section header */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.45em] text-[#22D3EE]">
            Contact
          </p>

          <h2
            className="font-heading mt-4 font-semibold tracking-tight text-[#F8FAFC]"
            style={{
              fontSize: "clamp(2.6rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s build something impactful
          </h2>

          <div className="mx-auto mt-5 flex max-w-[170px] items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B5CF6]" />
            <div className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_16px_rgba(34,211,238,0.65)]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#22D3EE]" />
          </div>

          <p className="mx-auto mt-5 max-w-[760px] text-base leading-7 text-[#AEBED1] md:text-lg">
            Have a project, opportunity, or collaboration in mind? Let&apos;s
            connect and discuss how I can contribute through software, data, and
            AI.
          </p>
        </div>

        {/* Main contact area */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form card */}
          <Card className="border-[#22D3EE]/25 bg-[#111827]/65 p-5 md:p-7">
            <div className="mb-6 flex items-center gap-4">
              <IconBox
                icon="send"
                className="h-11 w-11 rounded-2xl border-[#22D3EE]/45"
                iconClassName="text-[#22D3EE]"
              />

              <div>
                <h3 className="font-heading text-2xl font-semibold text-[#F8FAFC]">
                  Send me a message
                </h3>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  I usually reply within 24–48 hours.
                </p>
              </div>
            </div>

            {state.succeeded ? (
              <div className="rounded-2xl border border-[#22D3EE]/50 bg-[#22D3EE]/10 p-5 text-center">
                <IconBox
                  icon="send"
                  className="mx-auto h-12 w-12 rounded-full border-[#22D3EE]/60"
                  iconClassName="text-[#22D3EE]"
                />

                <h4 className="font-heading mt-4 text-xl font-semibold text-[#F8FAFC]">
                  Message sent successfully!
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                  Thank you for reaching out. I&apos;ll reply as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#CBD5E1]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#CBD5E1]"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[#CBD5E1]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="h-12 w-full rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#CBD5E1]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="min-h-[128px] w-full resize-none rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full md:w-auto"
                >
                  {state.submitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact details card */}
          <Card className="bg-[#111827]/55 p-5 md:p-7">
            <h3 className="font-heading text-2xl font-semibold text-[#F8FAFC]">
              Contact me through
            </h3>

            <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

            <div className="mt-6 space-y-3">
              {compactContactItems.map((item) => {
                const content = (
                  <div className="flex min-h-[62px] items-center gap-4 rounded-2xl border border-[#24304A]/75 bg-[#0A0F1C]/55 px-4 py-3 transition hover:border-[#22D3EE]/55">
                    <IconBox
                      icon={item.icon}
                      className="h-10 w-10 shrink-0 rounded-xl border-[#24304A]/75"
                      iconClassName="text-base text-[#22D3EE]"
                    />

                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold text-[#F8FAFC]">
                        {item.label}
                      </p>
                      <p className="mt-1 truncate text-sm text-[#94A3B8]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                if (item.href === "#") {
                  return <div key={item.label}>{content}</div>;
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternalLink(item.href) ? "_blank" : undefined}
                    rel={isExternalLink(item.href) ? "noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {availabilityItem ? (
              <div className="mt-5 rounded-2xl border border-[#24304A]/70 bg-[#0A0F1C]/45 px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,0.75)]" />

                  <p className="text-sm leading-6 text-[#AEBED1]">
                    {availabilityItem.value}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-5 border-t border-[#24304A]/70 pt-5 text-sm">
              <a
                href="#projects"
                className="font-heading font-semibold text-[#22D3EE] transition hover:text-[#8B5CF6]"
              >
                View Projects →
              </a>

              <a
                href="/resume.pdf"
                className="font-heading font-semibold text-[#94A3B8] transition hover:text-[#22D3EE]"
              >
                Resume ↓
              </a>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-9 border-t border-[#24304A]/80 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-[#94A3B8]">
              © 2026 Mary Sneha. Built with Next.js, TypeScript, and Tailwind
              CSS.
            </p>

            <div className="flex items-center gap-5 text-sm text-[#94A3B8]">
              <a href="#home" className="transition hover:text-[#22D3EE]">
                Home
              </a>
              <a href="#projects" className="transition hover:text-[#22D3EE]">
                Projects
              </a>
              <a
                href="/resume.pdf"
                className="transition hover:text-[#22D3EE]"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}