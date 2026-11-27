export const siteConfig = {
  name: "Mary Sneha",
  monogram: "MS",
  title: "Mary Sneha | AI & Data Science Portfolio",
  description:
    "AI and Data Science portfolio of Mary Sneha, showcasing practical software, machine learning, data science, analytics, and full-stack case-study projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  role: "AI & Data Science Developer",
  location: "Sri Lanka",
  availability: "Open to internships, collaborations, and entry-level opportunities.",

  email: "jeyakumarsneha21@gmail.com",
  github: "https://github.com/Marysneha-jeyakumar",
  linkedin: "https://www.linkedin.com/in/mary-sneha",
  resume: "/resume.pdf",

  keywords: [
    "Mary Sneha",
    "AI Portfolio",
    "Data Science Portfolio",
    "Machine Learning",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Python",
    "SQL",
    "React",
    "MLOps",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Journey", href: "/journey" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
