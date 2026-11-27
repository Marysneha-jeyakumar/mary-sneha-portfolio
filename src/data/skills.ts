import type { SkillCategory } from "@/types/portfolio";

// Five technology areas. Every skill from the previous six categories is kept;
// the former "Programming" languages now sit with the area they are used in.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "react",
    description:
      "Technologies I use to build responsive and user-friendly interfaces.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    highlights: ["React", "Next.js", "TypeScript"],
    tone: "slate",
  },
  {
    title: "Data & AI",
    icon: "python",
    description:
      "Languages, libraries, and concepts I use for data science and machine learning work.",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    highlights: ["Python", "Pandas", "Scikit-learn"],
    tone: "gold",
  },
  {
    title: "Backend",
    icon: "code",
    description:
      "Tools and frameworks I use to build APIs and backend services.",
    skills: ["FastAPI", "Node.js", "Spring Boot", "REST APIs"],
    highlights: ["FastAPI", "Node.js", "Spring Boot"],
    tone: "rose",
  },
  {
    title: "Databases",
    icon: "database",
    description:
      "Databases and storage tools I use in software and data projects.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    highlights: ["PostgreSQL", "MongoDB", "MySQL"],
    tone: "slate",
  },
  {
    title: "DevOps & Cloud",
    icon: "docker",
    description:
      "Tools I use for development, deployment, version control, and workflows.",
    skills: ["Docker", "Git", "GitHub", "Vercel", "VS Code"],
    highlights: ["Docker", "Git", "Vercel"],
    tone: "gold",
  },
];

export const technologyCount = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0,
);
