"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/components/layout/Logo";
import { navLinks } from "@/data/site";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the mobile menu after navigating to another page.
  if (isOpen && openedAt !== pathname) {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-page flex h-20 items-center justify-between gap-6"
      >
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 font-serif text-[1.02rem] transition-colors ${
                    active ? "text-burgundy" : "text-navy hover:text-burgundy"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-burgundy transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setOpenedAt(pathname);
            setIsOpen((current) => !current);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-paper text-xl text-navy lg:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-cream px-0 pb-5 pt-3 lg:hidden"
        >
          <ul className="container-page space-y-1">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-serif text-lg transition-colors ${
                      active
                        ? "bg-burgundy-soft text-burgundy"
                        : "text-navy hover:bg-beige"
                    }`}
                  >
                    {link.label}
                    {active ? (
                      <span className="h-2 w-2 rounded-full bg-burgundy" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
