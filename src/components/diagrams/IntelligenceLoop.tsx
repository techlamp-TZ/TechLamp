"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChartNoAxesCombined, CircleCheckBig, Database, GitBranch, RotateCw, SlidersHorizontal, Target, TrendingUp, Zap } from "lucide-react";
import { LOOP_DEFAULT_ACTIVE, LOOP_STEPS } from "@/data/home";
import { gsap } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";

const ICONS = {
  database: Database,
  analytics: ChartNoAxesCombined,
  forecast: TrendingUp,
  optimize: SlidersHorizontal,
  decide: GitBranch,
  approve: CircleCheckBig,
  action: Zap,
  outcome: Target,
} as const;

const TONE = ["bg-peach", "bg-sky", "bg-mint", "bg-lilac"] as const;

/** SIGNAL → ANALYTICS → FORECAST → OPTIMIZE → DECIDE → APPROVE → ACTION → OUTCOME, with the feedback loop. */
export function IntelligenceLoop() {
  const root = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const active = hover ?? LOOP_DEFAULT_ACTIVE;

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-step]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      // feedback packet: outcome becomes the next signal (right → left, repeating)
      gsap.fromTo(
        "[data-packet]",
        { left: "100%", opacity: 0 },
        { left: "0%", opacity: 1, duration: 3.6, ease: "none", repeat: -1, repeatDelay: 0.6, keyframes: { opacity: [0, 1, 1, 0] } },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const current = LOOP_STEPS[active];

  return (
    <div ref={root}>
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-[10px]">
        {LOOP_STEPS.map((s, i) => {
          const Icon = ICONS[s.icon];
          const on = i === active;
          return (
            <li key={s.n} data-step className="relative">
              <button
                type="button"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                aria-current={on ? "step" : undefined}
                className={cn(
                  "flex h-full w-full flex-col items-start rounded-[18px] border p-4 text-left transition-[border-color,box-shadow,transform] duration-300",
                  on ? "border-brand bg-white shadow-[0_14px_30px_-18px_rgba(58,28,13,0.35)]" : "border-hair bg-canvas hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-16px_rgba(58,28,13,0.25)]",
                )}
              >
                <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full", TONE[i % TONE.length])}>
                  <Icon aria-hidden className="h-[16px] w-[16px] text-brown" strokeWidth={1.8} />
                </span>
                <span className="t-mono mt-[10px] text-[10px] leading-[14px] tracking-[0.1em] text-slate-2">{s.n}</span>
                <span className="mt-[3px] text-[13px] font-semibold leading-4 text-ink">{s.label}</span>
                <span className="mt-[5px] text-[11.5px] leading-[16px] text-slate">{s.info}</span>
              </button>
              {i < LOOP_STEPS.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute right-0 top-[22px] hidden h-[13px] w-[13px] translate-x-1/2 text-[#c4bcb2] lg:block"
                  strokeWidth={1.6}
                />
              )}
            </li>
          );
        })}
      </ol>

      <p role="status" aria-live="polite" className="sr-only">
        Step {current.n}: {current.label}. {current.info}
      </p>

      {/* loop-rail: the signal completes the loop — outcome returns, passes a human
          approval checkpoint, and is re-lit as the next signal. Static-first: all nodes
          render at rest; the travelling packet is GSAP-driven and disabled under reduced
          motion (see effect above), where the rail still reads completely. */}
      <div className="relative mt-[26px] flex min-h-[34px] items-center">
        <div id="tl-loop-rail-track" className="relative h-[2px] flex-1 rounded-full bg-[#e3dcd4]">
          {/* source — the next signal is re-lit here */}
          <span aria-hidden className="absolute left-0 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
          {/* human-approval checkpoint on the loop (judgment stays human) */}
          <span
            id="tl-loop-rail-approval"
            aria-hidden
            className="absolute left-[70%] top-1/2 grid h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-signal-green shadow-[0_0_0_3px_var(--canvas)]"
          >
            <CircleCheckBig className="h-[11px] w-[11px] text-white" strokeWidth={2.4} />
          </span>
          {/* outcome */}
          <span aria-hidden className="absolute right-0 top-1/2 h-[9px] w-[9px] translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-signal-green bg-canvas" />
          {/* travelling signal */}
          <span data-packet id="tl-loop-rail-signal" aria-hidden className="absolute -top-[2.5px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-brand" />
        </div>
        <p className="t-mono absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[10px] whitespace-nowrap rounded-full border border-hair bg-canvas px-4 py-[7px] text-[11px] font-bold uppercase leading-4 tracking-[0.04em] text-brown">
          <RotateCw aria-hidden className="h-[11px] w-[11px]" strokeWidth={2.4} />
          OUTCOME BECOMES NEW SIGNAL
        </p>
      </div>
    </div>
  );
}
