import type { IconName } from "@/components/ui/IconBox";

export type SkillCategory = {
  title: string;
  icon: IconName;
  description: string;
  skills: string[];
  /** Short stack names shown on the connected technology cards. */
  highlights: string[];
  /** Decorative border colour for the technology card. */
  tone: "slate" | "gold" | "rose";
};

export type FocusArea = {
  title: string;
  icon: IconName;
  description: string;
};

export type Principle = {
  title: string;
  icon: IconName;
  description: string;
};

export type StudyArea = {
  title: string;
  icon: IconName;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short display name for compact cards. */
  shortTitle: string;
  category: string;
  description: string;
  /** One-line problem statement shown on the Case Studies page. */
  problem: string;
  image: string;
  techStack: string[];
  /** Leave empty until a real URL exists — links are hidden when empty. */
  caseStudyUrl: string;
  githubUrl: string;
  demoUrl?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: IconName;
};

export type EducationItem = {
  title: string;
  institution: string;
  qualification: string;
  period: string;
  status: string;
  description: string;
  focusAreas: string[];
  icon: IconName;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  completed: string;
  description: string;
  skills: string[];
  certificateUrl: string;
  icon: IconName;
};

export type JourneyItem = {
  label: string;
  title: string;
  description: string;
  /** Leave undefined when no date is known — never guess one. */
  period?: string;
  icon: IconName;
  tone: "beige" | "mist" | "rose" | "paper";
  link?: { label: string; href: string };
};
