# Mary Sneha — AI & Data Science Portfolio

A modern personal portfolio website built to showcase my work in AI, data science, machine learning, and full-stack development.

This portfolio presents my technical background, education, certifications, skills, selected case-study projects, resume, and contact details in a clean, responsive, and professional layout.

## Live Demo

**Portfolio:** https://mary-sneha-portfolio.vercel.app

## Project Overview

This portfolio was designed as a case-study based developer portfolio. Instead of only listing technologies, it highlights practical projects with descriptions, tech stacks, project images, GitHub links, and case-study links.

The goal of this project is to create a professional online presence for internship applications, entry-level opportunities, collaborations, and AI/data-focused career development.

## Features

* Seven routed pages: Home, Projects, Technology, Case Studies, Journey, About, Contact
* Light editorial theme: vanilla cream, midnight navy, and burgundy accents
* Featured-project carousel with layered cards, swipe and keyboard controls
* Connected technology cards with a slow, pausable loop
* Asymmetric case-study grid (problem, solution, technologies)
* Horizontal pinned-card journey timeline
* Contact form integration using Formspree
* Resume and certificate downloads
* Reduced-motion support, visible keyboard focus, skip link
* SEO metadata per page, sitemap, robots file, and Open Graph image
* Vercel deployment with GitHub integration

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* React Icons

### Deployment

* Vercel
* GitHub

### Contact Form

* Formspree
* Environment variables

## Project Structure

```txt
app/                       Routes (App Router)
├── layout.tsx             Fonts, metadata, navbar, footer
├── template.tsx           Page entrance transition (CSS)
├── globals.css            Design tokens (@theme) and base styles
├── page.tsx               01 Home
├── projects/page.tsx      02 Projects / Products
├── technology/page.tsx    03 Technology
├── case-studies/page.tsx  04 Case Studies
├── journey/page.tsx       05 Journey
├── about/page.tsx         06 About
├── contact/page.tsx       07 Contact
├── robots.ts
└── sitemap.ts

src/
├── components/
│   ├── layout/            Navbar, Footer, Logo
│   ├── ui/                Button, Card, Badge, IconBox, PageHeader, Reveal
│   ├── home/              BuildFlow, LegacyHashRedirect
│   ├── projects/          FeaturedCarousel, ProductCard
│   ├── technology/        TechChain
│   ├── case-studies/      CaseStudyCard
│   ├── journey/           PinnedTimeline
│   └── contact/           ContactForm
├── data/                  site, projects, skills, education, journey, contact, …
└── types/portfolio.ts
```

All colours are defined once as tokens in `app/globals.css` and used through
Tailwind utilities such as `bg-cream`, `text-navy` and `bg-burgundy`.

## Pages

* Home
* Projects
* Technology
* Case Studies
* Journey
* About
* Contact

## Selected Projects

### End-to-End Fraud Detection System

A classical machine learning fraud detection pipeline covering EDA, preprocessing, feature engineering, imbalance handling, model training, evaluation, threshold tuning, and SHAP explainability.

### SugarSense: Diabetes Risk Estimation API

An explainable machine learning API for diabetes risk estimation using preprocessing, model evaluation, probability calibration, SHAP explanations, FastAPI integration, and downloadable reports.

### AI Resume Analyzer

A full-stack AI-powered resume analysis platform that compares uploaded resumes with job descriptions and generates structured feedback including match score, skills analysis, weak sections, and improvement suggestions.

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For Vercel deployment, add the same environment variables in the Vercel project settings.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

Build the project:

```bash
npm run build
```

## Deployment

This project is deployed using Vercel.

Deployment workflow:

```txt
Local development → Git commit → GitHub push → Vercel automatic deployment
```

Useful commands:

```bash
git add .
git commit -m "Update portfolio"
git push
```

After pushing changes to the `main` branch, Vercel automatically creates a new production deployment.

## Author

**Mary Sneha**

* Portfolio: https://mary-sneha-portfolio.vercel.app
* GitHub: https://github.com/Marysneha-jeyakumar
* LinkedIn: https://www.linkedin.com/in/mary-sneha
* Email: [jeyakumarsneha21@gmail.com](mailto:jeyakumarsneha21@gmail.com)

## License

This project is for personal portfolio and educational use.
