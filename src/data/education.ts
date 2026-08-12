import type { CertificationItem, EducationItem } from "@/types/portfolio";

export const educationItems: EducationItem[] = [
  {
    title: "Current Education",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    qualification:
      "Bachelor of Science (Hons) in Information Technology — Specialization in Data Science",
    period: "2024 – 2026",
    status: "Undergraduate",
    description:
      "Building a strong foundation in data science, machine learning, databases, and full-stack development through academic study and practical projects.",
    focusAreas: [
      "Data Science",
      "Machine Learning",
      "AI Development",
      "Web Development",
    ],
    icon: "graduation",
  },
];

export const certificationItems: CertificationItem[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Uki Technology School",
    completed: "December 2025",
    description:
      "Strengthened my practical skills in MERN stack development, backend APIs, and modern web application architecture.",
    skills: ["MERN Stack", "Backend API", "Web Development"],
    certificateUrl: "/certificates/certificate-1.pdf",
    icon: "award",
  },
];