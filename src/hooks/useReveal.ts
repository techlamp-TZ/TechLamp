"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap/register";

/**
 * Scroll reveal for a container's direct children (or the container itself).
 * Content is fully visible without JS and under prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement>({
  stagger = 0.08,
  y = 22,
  start = "top 86%",
  selector,
}: { stagger?: number; y?: number; start?: string; selector?: string } = {}) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = selector ? Array.from(el.querySelectorAll(selector)) : Array.from(el.children);
    if (!targets.length) return;
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [stagger, y, start, selector]);
  return ref;
}
