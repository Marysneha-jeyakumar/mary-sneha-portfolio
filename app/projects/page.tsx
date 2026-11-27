import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FeaturedCarousel from "@/components/projects/FeaturedCarousel";
import ProductCard from "@/components/projects/ProductCard";
import { Accent, Reveal } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured AI, machine learning, and full-stack products built by Mary Sneha.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="sr-only">Projects</h1>

      <section className="container-page py-12 sm:py-16">
        <FeaturedCarousel projects={projects} />
      </section>

      <section className="container-page py-12" aria-labelledby="more-products">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2
              id="more-products"
              className="font-serif text-4xl font-medium text-navy sm:text-[2.7rem]"
            >
              More <Accent>Products</Accent>
            </h2>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-medium text-burgundy hover:text-burgundy-dark"
            >
              View All Case Studies <FiArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProductCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
