import { Button, Card, IconBox, SectionHeader } from "@/components/ui";
import { contactItems } from "@/data/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="section-container relative px-4 py-24">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#22D3EE]/10 blur-3xl" />

      <div className="relative z-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something impactful"
          subtitle="Have a project, opportunity, or collaboration idea? I’d love to connect and discuss how software, data, and AI can solve real-world problems."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Contact Form */}
          <Card className="p-6 md:p-8">
            <div className="mb-8 flex items-center gap-4">
              <IconBox icon="send" className="h-12 w-12 rounded-2xl" />

              <div>
                <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                  Send me a message
                </h3>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  I usually reply within 24–48 hours.
                </p>
              </div>
            </div>

            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
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
                    placeholder="Mary Sneha"
                    className="w-full rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
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
                    className="w-full rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
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
                  placeholder="Internship opportunity / collaboration / project idea"
                  className="w-full rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
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
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-[#24304A] bg-[#0A0F1C]/80 px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-[#64748B] focus:border-[#22D3EE]"
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>

            <p className="mt-5 text-xs leading-5 text-[#64748B]">
              Note: Replace the Formspree URL with your real form endpoint
              before deployment.
            </p>
          </Card>

          {/* Contact Info */}
          <div className="space-y-5">
            <Card className="p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                Contact me through
              </h3>

              <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]" />

              <div className="mt-7 space-y-4">
                {contactItems.map((item) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-[#24304A] bg-[#0A0F1C]/60 p-4 transition hover:border-[#22D3EE]/70">
                      <IconBox
                        icon={item.icon}
                        className="h-11 w-11 shrink-0 rounded-xl"
                        iconClassName="text-xl"
                      />

                      <div>
                        <p className="font-heading text-sm font-semibold text-[#F8FAFC]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
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
                      target={
                        item.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        item.href.startsWith("mailto:") ? undefined : "noreferrer"
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                Quick actions
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                Explore my work or download my resume to learn more about my
                projects, skills, and technical direction.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button href="#projects">View Projects</Button>
                <Button href="/resume.pdf" variant="secondary">
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-[#24304A] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-[#94A3B8]">
              © 2026 Mary Sneha. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex items-center gap-5 text-sm text-[#94A3B8]">
              <a href="#home" className="transition hover:text-[#22D3EE]">
                Home
              </a>
              <a href="#skills" className="transition hover:text-[#22D3EE]">
                Skills
              </a>
              <a href="#projects" className="transition hover:text-[#22D3EE]">
                Projects
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}