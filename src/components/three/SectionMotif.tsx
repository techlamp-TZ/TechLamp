"use client";

import dynamic from "next/dynamic";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

const RingMotifScene3D = dynamic(() => import("@/components/three/RingMotifScene3D"), { ssr: false });

/**
 * Small decorative corner flourish reused across Home's section headers: two faint
 * rings with one orbiting point, live 3D once scrolled into view, a static SVG
 * fallback until then (and for the very first paint). Never placed over real
 * content (tool logos, data rows) — a header ornament only.
 */
export function SectionMotif({ label, className }: { label: string; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>("200px");
  const reduced = useReducedMotion();
  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none absolute hidden h-[190px] w-[190px] overflow-hidden lg:block", className)}>
      {inView ? (
        <RingMotifScene3D reduced={reduced} />
      ) : (
        <svg viewBox="0 0 190 190" className="h-full w-full">
          <circle cx="95" cy="95" r="92" fill="none" stroke="#e9e1d6" strokeWidth="1" />
          <circle cx="95" cy="95" r="66" fill="none" stroke="#e9e1d6" strokeWidth="1" />
          <circle cx="95" cy="15" r="3" fill="#ff5a00" />
        </svg>
      )}
      <p className="t-mono absolute bottom-[30px] right-0 w-[92px] text-right text-[9.5px] uppercase leading-[13px] tracking-[0.08em] text-slate-2">{label}</p>
    </div>
  );
}
