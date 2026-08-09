"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Build", href: "#build", id: "build" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#24304A]/70 bg-[#0A0F1C]/80 backdrop-blur-xl">
      <nav className="section-container flex h-20 items-center justify-between px-4">
        {/* Logo / Name */}
        <a href="#home" className="group">
          <p className="font-heading text-xl font-semibold tracking-tight text-[#F8FAFC] transition group-hover:text-[#22D3EE]">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#94A3B8]">
            AI / Data
          </p>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative font-heading text-sm font-medium transition ${
                  isActive ? "text-[#F8FAFC]" : "text-[#94A3B8]"
                } hover:text-[#22D3EE]`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  } group-hover:w-full group-hover:opacity-100`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24304A] bg-[#111827]/70 text-lg text-[#94A3B8] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#24304A] bg-[#111827]/80 text-xl text-[#F8FAFC] lg:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen ? (
        <div className="border-t border-[#24304A] bg-[#0A0F1C]/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="section-container space-y-2 px-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 font-heading text-sm font-medium transition ${
                    isActive
                      ? "bg-[#111827] text-[#22D3EE]"
                      : "text-[#94A3B8] hover:bg-[#111827] hover:text-[#22D3EE]"
                  }`}
                >
                  {link.label}

                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                  ) : null}
                </a>
              );
            })}

            <div className="flex items-center gap-3 px-4 pt-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24304A] bg-[#111827]/70 text-lg text-[#94A3B8] transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
                  >
                    <Icon />
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