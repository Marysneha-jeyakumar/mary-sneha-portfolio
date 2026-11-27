import { siteConfig } from "@/data/site";
import type { ContactItem } from "@/types/portfolio";

export const contactLinks: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedin.replace("https://www.", ""),
    href: siteConfig.linkedin,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: siteConfig.github.replace("https://", ""),
    href: siteConfig.github,
    icon: "github",
  },
];

export const contactFacts: ContactItem[] = [
  {
    label: "Location",
    value: siteConfig.location,
    icon: "location",
  },
  {
    label: "Availability",
    value: siteConfig.availability,
    icon: "calendar",
  },
];
