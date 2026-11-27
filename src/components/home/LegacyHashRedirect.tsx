"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// The site used to be one page with #section anchors. Old shared links such as
// "/#projects" are forwarded to the matching page.
const legacyHashes: Record<string, string> = {
  "#build": "/",
  "#about": "/about",
  "#skills": "/technology",
  "#projects": "/projects",
  "#contact": "/contact",
};

export default function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const target = legacyHashes[window.location.hash];
    if (target && target !== "/") router.replace(target);
  }, [router]);

  return null;
}
