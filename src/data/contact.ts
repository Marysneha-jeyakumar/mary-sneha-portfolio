import { siteConfig } from "@/data/site";
import type { ContactItem } from "@/types/portfolio";

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedin.replace("https://", ""),
    href: siteConfig.linkedin,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: siteConfig.github.replace("https://", ""),
    href: siteConfig.github,
    icon: "github",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "#",
    icon: "location",
  },
  {
    label: "Availability",
    value: siteConfig.availability,
    href: "#",
    icon: "calendar",
  },
];