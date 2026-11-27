"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";
import { Badge, Button, Eyebrow } from "@/components/ui";
import type { Project } from "@/types/portfolio";

const AUTOPLAY_MS = 7000;

/** Position of card `index` relative to the active card: …-1, 0, 1… */
function relativeOffset(index: number, active: number, total: number) {
  const half = Math.floor(total / 2);
  return ((index - active + total + half) % total) - half;
}

export default function FeaturedCarousel({ projects }: { projects: Project[] }) {
  const total = projects.length;
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (step: number) => setActive((current) => (current + step + total) % total),
    [total],
  );

  const autoplay = playing && !paused && !reduceMotion && total > 1;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplay, go, active]);

  const project = projects[active];

  return (
    <div
      className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* ===== Left: project introduction ===== */}
      <div className="min-w-0 lg:pr-4" aria-live="polite">
        <Eyebrow>Featured Project</Eyebrow>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-navy sm:text-6xl">
              {project.shortTitle}
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-burgundy">
              {project.category}
            </p>
            <p className="mt-4 max-w-md text-base leading-7 text-ink">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {project.techStack.slice(0, 4).map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center gap-4">
          <Button href={`/case-studies#${project.slug}`}>
            Explore Project <FiArrowRight aria-hidden="true" />
          </Button>

          {total > 1 && !reduceMotion ? (
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause automatic rotation" : "Start automatic rotation"}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/25 text-navy transition-colors hover:border-burgundy hover:text-burgundy"
            >
              {playing ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" className="ml-0.5" />}
            </button>
          ) : null}
        </div>
      </div>

      {/* ===== Right: layered card stage ===== */}
      <div className="min-w-0">
        <div
          className="relative mx-auto h-[330px] w-full max-w-[640px] sm:h-[420px]"
          style={{ perspective: 1600 }}
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          {/* soft "platform" under the cards */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[4%] bottom-0 h-16 rounded-[50%] border border-line-strong/60 bg-gradient-to-b from-beige to-cream"
          />

          {projects.map((item, index) => {
            const offset = relativeOffset(index, active, total);
            const isActive = offset === 0;
            const distance = Math.abs(offset);

            return (
              <motion.button
                key={item.slug}
                type="button"
                tabIndex={isActive ? -1 : 0}
                aria-hidden={isActive}
                aria-label={isActive ? undefined : `Show ${item.title}`}
                onClick={() => !isActive && setActive(index)}
                drag={isActive && total > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  if (info.offset.x > 60) go(-1);
                }}
                initial={false}
                animate={{
                  x: `${offset * 46}%`,
                  scale: isActive ? 1 : 0.8,
                  rotateY: offset * -22,
                  opacity: distance > 1 ? 0 : isActive ? 1 : 0.85,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 170, damping: 24, mass: 0.9 }
                }
                style={{ zIndex: 10 - distance }}
                className={`absolute left-[17%] top-0 flex h-[300px] w-[66%] flex-col overflow-hidden rounded-[24px] border bg-paper text-left sm:left-[20%] sm:h-[380px] sm:w-[60%] ${
                  isActive
                    ? "cursor-grab border-rose shadow-[0_30px_60px_-28px_rgba(20,33,61,0.55)] active:cursor-grabbing"
                    : "cursor-pointer border-line shadow-[0_18px_40px_-26px_rgba(20,33,61,0.5)]"
                }`}
              >
                <div className="relative h-[58%] w-full shrink-0 overflow-hidden bg-navy">
                  <Image
                    src={item.image}
                    alt={isActive ? `${item.title} screenshot` : ""}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 70vw, 400px"
                    className="pointer-events-none object-cover object-top"
                  />
                  {isActive ? (
                    <span className="absolute right-3 top-3 rounded-full bg-paper/95 px-3 py-1 text-xs font-medium text-navy">
                      {index + 1} / {total}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="font-serif text-xl font-medium leading-tight text-navy sm:text-2xl">
                    {item.shortTitle}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-ink-muted sm:text-sm">
                    {item.category}
                  </p>
                  <div className="mt-auto flex h-[34px] flex-wrap gap-1.5 overflow-hidden pt-3 sm:h-[38px]">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="accent" className="px-2.5 py-0.5 text-[0.7rem]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ===== Controls ===== */}
        <div className="mx-auto mt-6 flex w-full max-w-[420px] items-center gap-3 rounded-full border border-line bg-paper/90 p-2 shadow-sm">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy transition-colors hover:bg-burgundy-soft hover:text-burgundy"
          >
            <FiChevronLeft aria-hidden="true" className="text-lg" />
          </button>

          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line bg-navy">
            <Image src={project.image} alt="" fill sizes="44px" className="object-cover object-top" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-base font-medium text-navy">
              {project.shortTitle}
            </p>
            <p className="text-xs text-ink-muted">Featured Project</p>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy transition-colors hover:bg-burgundy-soft hover:text-burgundy"
          >
            <FiChevronRight aria-hidden="true" className="text-lg" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === active ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-6 bg-burgundy" : "w-2 bg-line-strong hover:bg-rose"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
