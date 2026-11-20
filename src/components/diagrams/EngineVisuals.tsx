"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { AGENT_STEPS, DRIVER_BARS, OR_GRID, type Tone } from "@/data/home";
import { gsap } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";
import { toneBg } from "./OperatingSystemDiagram";

const shell =
  "rounded-[24px] px-[22px] pt-[24px] pb-[24px] h-[302px] w-full";
const label = "t-mono text-[10px] font-normal uppercase leading-[14px] text-[#655f5b]";

function useInViewTimeline<T extends HTMLElement>(build: (root: T) => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => build(el), el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/** Revenue driver tree: bars grow in proportion when scrolled into view. */
export function DriverTreeVisual() {
  const ref = useInViewTimeline<HTMLDivElement>((el) => {
    gsap.from("[data-bar]", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: el, start: "top 82%", once: true },
    });
    gsap.from("[data-val]", { opacity: 0, x: -6, duration: 0.6, delay: 0.5, stagger: 0.12, scrollTrigger: { trigger: el, start: "top 82%", once: true } });
  });
  return (
    <div ref={ref} className={cn(shell, "bg-[#fef8f3]")}>
      <p className={label}>REVENUE DRIVER TREE · ILLUSTRATIVE</p>
      <ul className="mt-[16px] space-y-[12.5px]" aria-label="Revenue drivers (illustrative)">
        {DRIVER_BARS.map((b) => (
          <li key={b.label} className="flex h-[12px] items-center">
            <span className="w-[80px] text-[11px] leading-none text-[#6e6a66]">{b.label}</span>
            <span
              data-bar
              className={cn("h-[12px] rounded-full", b.strong ? "bg-brand" : "bg-[#e7b99d]")}
              style={{ width: `${(b.pct / 100) * 210}px` }}
            />
            <span data-val className="t-mono ml-[10px] text-[10px] leading-none text-[#5b5855]">
              {b.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const cellStyle = ["bg-[#eef2f7]", "bg-[#bbd1e5]", "bg-[#bbd1e5]", "bg-signal-blue"];

/** Feasible solution space: the optimizer's selected path pulses through the grid. */
export function FeasibleSpaceVisual() {
  const ref = useInViewTimeline<HTMLDivElement>((el) => {
    const selected = el.querySelectorAll("[data-sel]");
    gsap.from("[data-cell]", {
      opacity: 0,
      scale: 0.7,
      duration: 0.5,
      ease: "power2.out",
      stagger: { each: 0.018, from: "start" },
      scrollTrigger: { trigger: el, start: "top 82%", once: true },
      onComplete: () => {
        gsap.fromTo(selected, { opacity: 1 }, { opacity: 0.6, duration: 0.9, ease: "sine.inOut", repeat: -1, yoyo: true, stagger: 0.22 });
      },
    });
  });
  return (
    <div ref={ref} className={cn(shell, "bg-[#fafafa]")}>
      <p className={label}>FEASIBLE SOLUTION SPACE</p>
      <div className="mt-[16px] grid grid-cols-7 gap-x-[8px] gap-y-[12px]" role="img" aria-label="Feasible solution space grid with the selected path highlighted (illustrative)">
        {OR_GRID.flatMap((row, r) =>
          row.map((v, c) => (
            <span
              key={`${r}-${c}`}
              data-cell
              {...(v === 3 ? { "data-sel": true } : {})}
              className={cn("h-[27px] rounded-[8px]", v === 0 ? cellStyle[0] : v === 3 ? cellStyle[3] : cellStyle[1])}
            />
          )),
        )}
      </div>
    </div>
  );
}

const agentIcons = { message: MessageSquare, shield: ShieldCheck, user: UserCheck, zap: Zap } as const;

/** Controlled orchestration: each gate verifies in sequence. */
export function OrchestrationVisual() {
  const ref = useInViewTimeline<HTMLDivElement>((el) => {
    const rows = el.querySelectorAll("[data-row]");
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 82%", once: true } });
    tl.from(rows, { opacity: 0, x: 14, duration: 0.55, ease: "power3.out", stagger: 0.14 });
  });
  return (
    <div ref={ref} className={cn(shell, "bg-[#fdfbf9] pt-[24px]")}>
      <p className={label}>CONTROLLED ORCHESTRATION</p>
      <ol className="mt-[16px] space-y-[12px]">
        {AGENT_STEPS.map((s) => {
          const Icon = agentIcons[s.icon as keyof typeof agentIcons];
          return (
            <li key={s.id} data-row className={cn("flex h-[45px] items-center gap-[12px] rounded-[10px] px-[12px]", toneBg[s.tone as Tone])}>
              <Icon aria-hidden className="h-[17px] w-[17px] text-brown" strokeWidth={1.6} />
              <span className="text-[12px] font-medium text-[#14101c]">{s.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
