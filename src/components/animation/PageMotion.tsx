"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

/**
 * One scroll-reveal moment for inner pages: section headers and cards below the fold rise in once.
 * Anything already in the first viewport is left alone so nothing hides on load,
 * and users who prefer reduced motion get the final state immediately.
 */
const TARGETS = "main section header, main article, main [data-reveal]";

export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const all = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
      const below = all.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
      if (!below.length) return;
      gsap.set(below, { opacity: 0, y: 24 });
      ScrollTrigger.batch(below, {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.08, overwrite: "auto", clearProps: "transform" }),
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}
