import type { SkillCategory } from "@/types/portfolio";

export const skills: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    description:
      "Writing application logic, data scripts, and queries for real-world systems.",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "monitor",
    description: "Building clean, responsive, and user-friendly interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    description:
      "Creating reliable services that connect applications, databases, and models.",
    skills: ["Node.js", "FastAPI", "REST APIs", "Spring Boot"],
  },
  {
    title: "Data Science",
    icon: "chart",
    description:
      "Exploring datasets, preparing features, and extracting useful insights.",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    description:
      "Building and evaluating models for practical prediction problems.",
    skills: [
      "Classification",
      "Regression",
      "Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "tools",
    description:
      "Managing code, deployment, version control, and development workflows.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel"],
  },
];