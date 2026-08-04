import type { CertificationItem, EducationItem } from "@/types/portfolio";

export const educationItems: EducationItem[] = [
  {
    title: "Current Education",
    institution: "[Your University Name]",
    qualification: "[Your Degree / Course Name]",
    period: "[Start Year] – Present",
    status: "Undergraduate",
    description:
      "I am currently building my foundation in software engineering, data science, machine learning, databases, and full-stack development through academic learning and practical projects.",
    focusAreas: [
      "Software Engineering",
      "Data Science",
      "Machine Learning",
      "Databases",
      "Web Development",
    ],
    icon: "graduation",
  },
];

export const certificationItems: CertificationItem[] = [
  {
    title: "[Your Certificate 1 Title]",
    issuer: "[Issuer / Platform Name]",
    completed: "[Month Year]",
    description:
      "This certification helped me strengthen my knowledge in [main topic], including practical concepts related to [skill 1], [skill 2], and [skill 3].",
    skills: ["Machine Learning", "Python", "Data Science"],
    certificateUrl: "/certificates/certificate-1.pdf",
    icon: "award",
  },
  {
    title: "[Your Certificate 2 Title]",
    issuer: "[Issuer / Platform Name]",
    completed: "[Month Year]",
    description:
      "This certification improved my understanding of [main topic] and helped me connect theory with real project-based learning.",
    skills: ["SQL", "Analytics", "AI"],
    certificateUrl: "/certificates/certificate-2.pdf",
    icon: "certificate",
  },
];