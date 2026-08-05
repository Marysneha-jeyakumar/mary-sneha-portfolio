import type { CertificationItem, EducationItem } from "@/types/portfolio";

export const educationItems: EducationItem[] = [
  {
    title: "Current Education",
    institution: "[Srilanka Institute of Information technoloy]",
    qualification: "[Bachelor of Science Honours in Information Technology Specialized in Data Science]",
    period: "[2024] – 2026",
    status: "Undergraduate",
    description:
      "I am currently building my career in  data science, machine learning, databases, and full-stack development through academic learning and practical projects.",
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
    title: "[full stack web development]",
    issuer: "[Uki technology school]",
    completed: "[december-2025]",
    description:
      "This certification helped me strengthen my knowledge in MERN STACK, including practical concepts related to Backend, API building, and overall webdevelopment foundation.",
    skills: ["MERN stack", "Frame works", "Backend API "],
    certificateUrl: "/certificates/certificate-1.pdf",
    icon: "award",
  },
];