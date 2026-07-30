"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Build", href: "#build" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
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
    icon: FiMail,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#24304A]/70 bg-[#0A0F1C]/80 backdrop-blur-xl">
      <nav className="section-container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="group">
          <p className="font-heading text-xl font-bold tracking-tight text-[#F8FAFC]">
            Mary <span className="text-[#22D3EE]">Sneha</span>
          </p>
          <p className="text-xs uppercase tracking-[0.28em] text-[#94A3B8]">
            AI/Data
          </p>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm font-medium text-[#94A3B8] transition hover:text-[#22D3EE]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-4 lg:flex">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#24304A] bg-[#111827]/70 text-[#94A3B8] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#24304A] bg-[#111827]/80 text-[#F8FAFC] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen ? (
        <div className="border-t border-[#24304A] bg-[#0A0F1C]/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="section-container space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl border border-[#24304A] bg-[#111827]/60 px-4 py-3 font-heading text-sm font-medium text-[#CBD5E1] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

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
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#24304A] bg-[#111827]/70 text-[#94A3B8] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}