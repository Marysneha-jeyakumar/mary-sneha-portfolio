import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
{
  title: "End-to-End Fraud Detection System",
  category: "Machine Learning / MLOps Foundation",
  description:
    "Built a classical machine learning fraud detection pipeline using transaction data, covering EDA, preprocessing, feature engineering, imbalance handling, model training, evaluation, threshold tuning, and SHAP explainability. The system predicts fraud probability, risk level, and a final decision such as Approve or Flag for Review, preparing the project for future FastAPI, database logging, dashboard, and MLOps deployment.",
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
  githubUrl: "https://github.com/Marysneha-jeyakumar/fraud-detection-system",
  demoUrl: "",
  image: "/images/projects/fraud-detection-system.png"
},
 {
  title: "SugarSense: Explainable ML-Based Diabetes Risk Estimation API",

  category: "Machine Learning / Data Science / Backend API",

  description:
    "Built an end-to-end machine learning system to estimate diabetes-related risk using the CDC Diabetes Health Indicators dataset. The project includes data preprocessing, model training, final evaluation, isotonic probability calibration, SHAP-based explainability, and FastAPI backend integration. The backend supports JWT authentication, protected prediction APIs, user-specific prediction history, analytics summary, and downloadable PDF reports. This project is designed for educational health-awareness purposes only and does not provide medical diagnosis.",

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
    "Recharts"
  
  ],

  caseStudyUrl: "",

  githubUrl: "https://github.com/Marysneha-jeyakumar/ml-diabetes-risk-dashboard",

  demoUrl: "",

  image: "/projects/sugarsense-diabetes-risk-api.png"
},
 {
  title: "AI Resume Analyzer",

  category: "Full-Stack AI / NLP Application",

  description:
    "An end-to-end AI-powered resume analysis platform that compares uploaded resumes with target job descriptions. The system extracts text from PDF/DOCX resumes, analyzes resume-job fit using OpenAI API, and generates structured reports with match score, matched skills, missing skills, weak sections, rewritten summary, improved bullet points, and project recommendations. It includes authentication, protected routes, dashboard analytics, report history, delete functionality, and export/print-ready reports.",

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
    "Vercel"
  ],

  caseStudyUrl: "",

  githubUrl: "https://github.com/Marysneha-jeyakumar/ai-resume-analyzer",

  demoUrl: "",

  image: "/projects/ai-resume-analyzer.png"
}
];