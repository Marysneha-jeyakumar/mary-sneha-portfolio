import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Fraud Detection System",
    category: "Machine Learning",
    description:
      "A machine learning system for detecting suspicious financial transactions using preprocessing, classification models, and evaluation metrics.",
    image: "/images/projects/fraud-detection.png",
    techStack: ["Python", "Pandas", "Scikit-learn", "FastAPI"],
    caseStudyUrl: "#",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    category: "Data Analytics",
    description:
      "An interactive dashboard that explores sales trends, customer behavior, and business performance through clear data visualizations.",
    image: "/images/projects/sales-analytics.png",
    techStack: ["Python", "SQL", "Pandas", "Streamlit"],
    caseStudyUrl: "#",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI / Full-Stack",
    description:
      "A web application that compares resumes with job descriptions and provides match scores, missing skills, and improvement suggestions.",
    image: "/images/projects/ai-resume-analyzer.png",
    techStack: ["Next.js", "FastAPI", "LLM API", "PostgreSQL"],
    caseStudyUrl: "#",
    githubUrl: "#",
    demoUrl: "#",
  },
];