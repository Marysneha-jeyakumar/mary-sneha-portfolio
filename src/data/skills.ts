import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    description:
      "Languages I use for application logic, data work, and development tasks.",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "monitor",
    description:
      "Technologies I use to build responsive and user-friendly interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    description:
      "Tools and frameworks I use to build APIs and backend services.",
    skills: ["Node.js", "FastAPI", "REST APIs", "Spring Boot"],
  },
  {
    title: "Data & ML",
    icon: "chart",
    description:
      "Libraries and concepts I use for data science and machine learning work.",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Databases",
    icon: "database",
    description:
      "Databases and storage tools I use in software and data projects.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    icon: "tool",
    description:
      "Tools I use for development, deployment, version control, and workflows.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel"],
  },
];