import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "@/components/layout/Logo";
import { navLinks, siteConfig } from "@/data/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: FiMail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-4">
          <Logo inverse />
          <p className="max-w-sm text-sm leading-6 text-white/75">
            {siteConfig.role} building practical software, data, and AI
            products.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/70 sm:flex-row">
          <p>© {year} {siteConfig.name}. Built with Next.js and Tailwind CSS.</p>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => {
              const external = !href.startsWith("mailto:");

              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
