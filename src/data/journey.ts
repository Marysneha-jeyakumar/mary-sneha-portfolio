import { certificationItems, educationItems } from "@/data/education";
import { currentlyLearningTags } from "@/data/techTags";
import type { JourneyItem } from "@/types/portfolio";

const degree = educationItems[0];
const certificate = certificationItems[0];

// Built only from existing portfolio content. Project cards have no
// `period` because no project dates are recorded yet — add them when known.
export const journeyItems: JourneyItem[] = [
  {
    label: "Education",
    title: "B.Sc. (Hons) in IT — Data Science",
    description: `${degree.status} at SLIIT, building a foundation in data science, machine learning, databases, and full-stack development.`,
    period: degree.period,
    icon: "graduation",
    tone: "rose",
  },
  {
    label: "Certification",
    title: certificate.title,
    description: `${certificate.issuer}: MERN stack development, backend APIs, and modern web application architecture.`,
    period: certificate.completed,
    icon: "certificate",
    tone: "mist",
    link: { label: "View certificate", href: certificate.certificateUrl },
  },
  {
    label: "Data & ML Projects",
    title: "Fraud Detection & SugarSense",
    description:
      "Built a fraud detection pipeline and an explainable diabetes risk estimation API with SHAP and FastAPI.",
    icon: "chart",
    tone: "paper",
    link: { label: "See case studies", href: "/case-studies" },
  },
  {
    label: "AI Product Building",
    title: "AI Resume Analyzer",
    description:
      "Built a full-stack AI platform that compares resumes with job descriptions and returns structured feedback.",
    icon: "rocket",
    tone: "beige",
    link: { label: "See the project", href: "/case-studies#ai-resume-analyzer" },
  },
  {
    label: "Current Focus",
    title: "What I'm improving next",
    description: currentlyLearningTags.join(" · "),
    period: "Now",
    icon: "target",
    tone: "mist",
  },
];
