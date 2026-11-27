import type { Project } from "@/types/portfolio";

// NOTE: `problem` lines are drafted only from each project's existing
// description — please review and adjust the wording.
// `caseStudyUrl` / `githubUrl` stay empty until real links exist; the UI
// hides those links while they are empty.
export const projects: Project[] = [
  {
    slug: "fraud-detection",
    title: "End-to-End Fraud Detection System",
    shortTitle: "Fraud Detection",
    category: "Machine Learning / MLOps Foundation",
    description:
      "Built a classical machine learning fraud detection pipeline covering EDA, preprocessing, feature engineering, imbalance handling, model training, evaluation, threshold tuning, and SHAP explainability.",
    problem:
      "Fraudulent transactions are rare, so a model has to detect them in highly imbalanced data and explain its decisions.",
    image: "/images/projects/fraud-detection-system.png",
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "CatBoost",
      "SHAP",
      "imbalanced-learn",
      "Matplotlib",
    ],
    caseStudyUrl: "",
    githubUrl: "",
  },
  {
    slug: "sugarsense",
    title: "SugarSense: Diabetes Risk Estimation API",
    shortTitle: "SugarSense",
    category: "ML / Data Science / Backend API",
    description:
      "Built an explainable machine learning API for diabetes risk estimation using preprocessing, model evaluation, probability calibration, SHAP explanations, FastAPI integration, and downloadable reports.",
    problem:
      "Diabetes risk estimates are only useful if they are calibrated, explainable, and easy for an application to request.",
    image: "/images/projects/sugarsense-diabetes-risk-api.png",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "SHAP",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "SQLite",
      "JWT Authentication",
      "React",
      "Tailwind CSS",
      "Recharts",
    ],
    caseStudyUrl: "",
    githubUrl: "",
  },
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    shortTitle: "Resume Analyzer",
    category: "Full-Stack AI / NLP Application",
    description:
      "Built an AI-powered resume analysis platform that compares resumes with job descriptions and generates structured feedback including match score, skills analysis, weak sections, and improvement suggestions.",
    problem:
      "Comparing a resume against a job description by hand is slow and rarely produces structured, actionable feedback.",
    image: "/images/projects/ai-resume-analyzer.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "OpenAI API",
      "Zod",
      "pdf-parse",
      "mammoth",
      "Next.js API Routes",
      "Vercel",
    ],
    caseStudyUrl: "",
    githubUrl: "",
  },
];

export function hasLink(url?: string): url is string {
  return Boolean(url && url.trim() !== "" && url !== "#");
}
