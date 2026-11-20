"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Box, ChartLine, Cog, Database, Infinity as InfinityIcon, Target, Users, Waypoints, Workflow } from "lucide-react";
import { OS_NODES, type OsNode, type Tone } from "@/data/home";
import { gsap } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const OSScene3D = dynamic(() => import("@/components/three/OSScene3D"), { ssr: false });

export const toneBg: Record<Tone, string> = {
  peach: "bg-peach",
  lilac: "bg-lilac",
  sky: "bg-sky",
  mint: "bg-mint",
};

const ICONS = { chart: ChartLine, route: Waypoints, workflow: Workflow, database: Database, people: Users, models: Box, apps: Cog, target: Target } as const;

const CARD = 620;
const CX = CARD / 2;
const CY = CARD / 2;
const R = 230;
const CHIP_W = 150;
const CHIP_H = 64;
const CORE_D = 190;

function chipTopLeft(angle: number) {
  const rad = (angle * Math.PI) / 180;
  const nx = CX + R * Math.cos(rad);
  const ny = CY + R * Math.sin(rad);
  return { x: Math.round(nx - CHIP_W / 2), y: Math.round(ny - CHIP_H / 2), cx: nx, cy: ny };
}

/** TechLamp OS: eight connected layers, three of them the specialist engines, around one decision core. */
export function OperatingSystemDiagram() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const activeNode = OS_NODES.find((n) => n.id === active) ?? null;
  const { ref: sceneRef, inView } = useInView<HTMLDivElement>("300px");
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const chips = el.querySelectorAll("[data-chip]");
      gsap.from(chips, { opacity: 0, scale: 0.92, y: 10, duration: 0.7, ease: "power3.out", stagger: 0.07, delay: 0.25 });
      gsap.from("[data-core]", { opacity: 0, scale: 0.94, duration: 0.9, ease: "power3.out", delay: 0.1 });
      gsap.from("[data-ring]", { opacity: 0, scale: 0.85, transformOrigin: "50% 50%", duration: 1.2, ease: "power2.out", stagger: 0.12, delay: 0.3 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative w-full max-w-[651px] rounded-[28px] border border-white/70 bg-[#fefcfb] shadow-[0_40px_90px_-34px_rgba(58,28,13,0.28),0_2px_6px_rgba(58,28,13,0.05)] lg:h-[620px] lg:w-[620px] lg:rounded-[32px]"
    >
      {/* decorative rings + spokes (desktop): a live 3D scene once scrolled into view, the flat SVG until then */}
      <div ref={sceneRef} aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-[32px] lg:block">
        {inView ? (
          <OSScene3D reduced={reduced} activeAngle={activeNode?.angle ?? null} />
        ) : (
          <svg viewBox={`0 0 ${CARD} ${CARD}`} className="h-full w-full">
            <circle data-ring cx={CX} cy={CY} r={165} fill="none" stroke="#f6dccb" strokeWidth="1" opacity="0.8" />
            <circle data-ring cx={CX} cy={CY} r={135} fill="none" stroke="#f5cfb8" strokeWidth="1" />
            {OS_NODES.map((n) => {
              const { cx, cy } = chipTopLeft(n.angle);
              return <line key={n.id} x1={cx} y1={cy} x2={CX} y2={CY} stroke="#ecdccf" strokeWidth={1} strokeDasharray="4 5" strokeLinecap="round" />;
            })}
          </svg>
        )}
      </div>

      {/* core */}
      <div className="grid grid-cols-2 gap-3 p-5 pt-6 lg:contents">
        <div
          data-core
          className="col-span-2 flex flex-col items-center justify-center gap-[10px] rounded-full bg-graphite px-4 py-9 text-center lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] lg:z-10 lg:col-auto lg:h-[var(--d)] lg:w-[var(--d)] lg:p-4"
          style={{
            ["--x" as string]: `${CX - CORE_D / 2}px`,
            ["--y" as string]: `${CY - CORE_D / 2}px`,
            ["--d" as string]: `${CORE_D}px`,
          }}
        >
          <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
            <InfinityIcon className="h-[18px] w-[18px] text-brand" strokeWidth={2} />
          </span>
          <p className="text-[17px] font-semibold leading-[21px] text-white">TechLamp OS</p>
          <p className="t-mono max-w-[135px] text-[11px] leading-[15px] tracking-[0.02em] text-[#bebebd]">Signals → Decisions → Action</p>
        </div>

        {OS_NODES.map((n) => {
          const { x, y } = chipTopLeft(n.angle);
          const Icon = ICONS[n.icon];
          return (
            <div
              key={n.id}
              data-chip
              className="lg:absolute"
              style={{ ["--x" as string]: `${x}px`, ["--y" as string]: `${y}px`, ["--w" as string]: `${CHIP_W}px`, ["--h" as string]: `${CHIP_H}px` }}
            >
              <button
                type="button"
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(n.id)}
                onBlur={() => setActive(null)}
                aria-describedby="os-info"
                className={cn(
                  "group/chip relative flex h-[64px] w-full items-center gap-[10px] rounded-[15px] px-[14px] text-left transition-[transform,box-shadow] duration-300 lg:left-[var(--x)] lg:top-[var(--y)] lg:h-[var(--h)] lg:w-[var(--w)]",
                  toneBg[n.tone],
                  active === n.id ? "-translate-y-[3px] shadow-[0_14px_26px_-14px_rgba(58,28,13,0.45)]" : "shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]",
                )}
              >
                <Icon aria-hidden className="h-[18px] w-[18px] shrink-0 text-brown" strokeWidth={1.8} />
                <span className="t-mono text-[11px] font-bold leading-[14px] tracking-[0.02em] text-brown">{n.label}</span>
                {active === n.id && (
                  <span aria-hidden className="absolute -inset-[3px] rounded-[18px] border border-brand/50 [animation:tl-pulse-ring_1.4s_ease-out_infinite]" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      <p
        id="os-info"
        role="status"
        aria-live="polite"
        className="min-h-[38px] px-5 pb-5 text-[13.5px] leading-[19px] tracking-[-0.01em] text-slate lg:absolute lg:bottom-[28px] lg:left-[28px] lg:right-[28px] lg:min-h-0 lg:p-0"
      >
        {activeNode ? (
          <>
            <strong className="t-mono mr-2 text-[11px] font-bold tracking-[0.09em] text-brown">{activeNode.label}</strong>
            {activeNode.info}
          </>
        ) : null}
      </p>
    </div>
  );
}
