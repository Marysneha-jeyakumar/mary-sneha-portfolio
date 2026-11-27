import { FiArrowRight } from "react-icons/fi";
import { Accent, Button, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60svh] flex-col items-start justify-center py-16">
      <Eyebrow>Error 404</Eyebrow>
      <h1 className="mt-5 font-serif text-5xl font-medium text-navy sm:text-6xl">
        Page <Accent>not found</Accent>
      </h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-ink">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        Back to Home <FiArrowRight aria-hidden="true" />
      </Button>
    </section>
  );
}
