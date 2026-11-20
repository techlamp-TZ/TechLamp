"use client";

import { useEffect, useRef, useState } from "react";
import { STACK_ROWS, type Tone } from "@/data/home";
import { gsap } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";
import { ToolName } from "@/components/ui/ToolName";

const rowTone: Record<Tone, string> = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint" };

/** Enterprise operating stack, grouped by function rather than as a logo wall. */
export function PlatformStack() {
  const root = useRef<HTMLDivElement>(null);
  const [row, setRow] = useState<string | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-stack-row]", {
        opacity: 0,
        x: 22,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const last = STACK_ROWS.length - 1;
  return (
    <div ref={root} className="rounded-[32px] border border-[#efe8df] bg-canvas p-3 shadow-[0_20px_40px_-32px_rgba(58,28,13,0.18)] sm:p-[22px]">
      <ul className="relative flex flex-col gap-[9.7px] lg:pl-[30px]">
        {/* signal spine: one signal rises from the cloud foundation up to intelligence
            (decorative; desktop only). Layout-driven — nodes sit on each row, so no
            pixel-height coupling. Static-first: resting state is the signal at the top. */}
        <span aria-hidden className="absolute left-[12px] top-[40px] bottom-[40px] hidden w-[2px] rounded-full bg-[#e3dcd4] lg:block">
          <span className="absolute left-1/2 top-0 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_0_3px_var(--canvas)] [animation:tl-rise_2.8s_cubic-bezier(0.4,0,0.2,1)_0.4s_1_both]" />
        </span>
        {STACK_ROWS.map((r, i) => (
          <li
            key={r.id}
            data-stack-row
            onMouseEnter={() => setRow(r.id)}
            onMouseLeave={() => setRow(null)}
            className={cn(
              "relative rounded-[16px] px-4 py-4 transition-[box-shadow,transform] duration-300 lg:flex lg:h-[80.7px] lg:items-center lg:px-[17px] lg:py-0",
              rowTone[r.tone],
              row === r.id && "-translate-y-px shadow-[0_10px_24px_-14px_rgba(58,28,13,0.4)]",
            )}
          >
            {/* node on the spine for this layer; the cloud foundation (last) is the source */}
            <span
              aria-hidden
              className={cn(
                "absolute left-[-18px] top-1/2 hidden h-[10px] w-[10px] -translate-y-1/2 rounded-full border-2 lg:block",
                i === last ? "border-brand bg-brand" : "border-[#d3c7b8] bg-canvas",
              )}
            />
            <p className="t-mono text-[11px] font-bold uppercase leading-4 text-brown lg:w-[199px] lg:shrink-0">{r.label}</p>
            <ul className="mt-3 flex flex-wrap gap-[7.5px] lg:mt-0 lg:flex-1 lg:flex-nowrap">
              {r.items.map((it) => (
                <li
                  key={it}
                  className="grid h-[31px] flex-1 place-items-center rounded-[8px] bg-[#fef8f5] px-3 text-center text-[10px] leading-none text-[#18130f] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(58,28,13,0.05)]"
                >
                  <ToolName name={it} size={15} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
