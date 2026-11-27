"use client";

import { ValidationError, useForm } from "@formspree/react";
import { FiArrowRight, FiCheckCircle, FiLock } from "react-icons/fi";
import { Button } from "@/components/ui";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

const fieldClasses =
  "w-full rounded-xl border border-ink-muted/70 bg-paper px-4 text-navy shadow-[inset_0_1px_2px_rgba(20,33,61,0.05)] transition-colors placeholder:text-ink-muted/90 hover:border-navy/70 focus:border-burgundy focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy";

const labelClasses = "mb-2 block text-sm font-medium text-navy";

function Required() {
  return (
    <span aria-hidden="true" className="ml-0.5 text-burgundy">
      *
    </span>
  );
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] border border-success/30 bg-paper p-8 text-center"
      >
        <FiCheckCircle aria-hidden="true" className="mx-auto text-4xl text-success" />
        <h2 className="mt-4 font-serif text-2xl font-medium text-navy">
          Message sent successfully!
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink">
          Thank you for reaching out. I&apos;ll reply as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClasses}>
            Your Name <Required />
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className={`${fieldClasses} h-12`}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-sm text-error" />
        </div>

        <div className="min-w-0">
          <label htmlFor="email" className={labelClasses}>
            Your Email <Required />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`${fieldClasses} h-12`}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm text-error" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject <Required />
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What would you like to discuss?"
          className={`${fieldClasses} h-12`}
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-2 text-sm text-error" />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <Required />
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Write your message here..."
          className={`${fieldClasses} min-h-[140px] resize-y py-3`}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm text-error" />
      </div>

      {/* Form-level errors (network / Formspree errors without a field) */}
      <ValidationError errors={state.errors} className="rounded-xl bg-burgundy-soft px-4 py-3 text-sm text-error" />

      {!formId ? (
        <p role="alert" className="rounded-xl bg-burgundy-soft px-4 py-3 text-sm text-error">
          The contact form is not configured. Please email me directly instead.
        </p>
      ) : null}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" disabled={state.submitting || !formId}>
          {state.submitting ? "Sending…" : "Send Message"} <FiArrowRight aria-hidden="true" />
        </Button>
        <p className="flex items-center gap-2 text-sm text-ink-muted">
          <FiLock aria-hidden="true" /> I usually reply within 24–48 hours.
        </p>
      </div>
    </form>
  );
}
