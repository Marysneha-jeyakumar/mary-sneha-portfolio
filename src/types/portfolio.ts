export type SkillCategory = {
  title: string;
  icon: string;
  description: string;
  skills: string[];
};

export type FocusArea = {
  title: string;
  icon: string;
  description: string;
};

export type Principle = {
  title: string;
  icon: string;
  description: string;
};

export type StudyArea = {
  title: string;
  icon: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  caseStudyUrl: string;
  githubUrl: string;
  demoUrl: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  qualification: string;
  period: string;
  status: string;
  description: string;
  focusAreas: string[];
  icon: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  completed: string;
  description: string;
  skills: string[];
  certificateUrl: string;
  icon: string;
};