"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { OPS_ROWS, type NodeStyle, type OpsRow, type Tone } from "@/data/home";
import { gsap } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";
import { ToolName, hasMark } from "@/components/ui/ToolName";

const rowTone: Record<Tone, string> = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint" };

const nodeStyle: Record<NodeStyle, { box: string; text: string; status: string }> = {
  blue: { box: "bg-white", text: "text-[#151515]", status: "text-[#5c5854]" },
  white: { box: "bg-white", text: "text-[#151515]", status: "text-[#5c5854]" },
  lilac: { box: "bg-lilac", text: "text-[#151515]", status: "text-[#5c5854]" },
  dark: { box: "bg-white", text: "text-[#151515]", status: "text-[#5c5854]" },
  "pale-blue": { box: "bg-white", text: "text-[#151515]", status: "text-[#5c5854]" },
  peach: { box: "bg-peach", text: "text-[#151515]", status: "text-[#5c5854]" },
  yellow: { box: "bg-white", text: "text-[#151515]", status: "text-[#5c5854]" },
  pink: { box: "bg-white", text: "text-[#151515]", status: "text-[#5c5854]" },
  sky: { box: "bg-sky", text: "text-[#151515]", status: "text-[#5c5854]" },
};

function FlowRow({ row }: { row: OpsRow }) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <article className={cn("rounded-[28px] px-5 py-8 sm:px-6 min-[1400px]:flex min-[1400px]:h-[216px] min-[1400px]:items-center min-[1400px]:py-0", rowTone[row.tone])} data-row>
      <div className="min-[1400px]:w-[286px] min-[1400px]:shrink-0 min-[1400px]:pr-4">
        <p className="t-mono text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-brown">
          {row.n} / {row.title}
        </p>
        <p className="mt-[14px] max-w-[262px] text-[15px] leading-[20.2px] text-[#190d03]">{row.description}</p>
      </div>

      <ol className="mt-6 flex flex-col items-stretch gap-2 min-[1400px]:mt-0 min-[1400px]:flex-row min-[1400px]:items-center min-[1400px]:gap-0" aria-label={`${row.title} flow`}>
        {row.nodes.map((n, i) => {
          const st = nodeStyle[n.style];
          const live = n.status === "EXAMPLE";
          return (
            <Fragment key={n.label}>
              <li
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={cn(
                  "relative flex h-[72px] w-full flex-col items-center justify-center rounded-[16px] px-2 text-center shadow-[0_0_0_1px_rgba(58,28,13,0.035)] transition-transform duration-300 min-[1400px]:w-[139px]",
                  st.box,
                  n.approval && "ring-1 ring-signal-green/35",
                  hover === i && "-translate-y-[3px]",
                )}
              >
                {n.approval && (
                  <span aria-hidden className="absolute right-[6px] top-[6px] grid h-[17px] w-[17px] place-items-center rounded-full bg-signal-green">
                    <CircleCheckBig className="h-[10px] w-[10px] text-white" strokeWidth={2.6} />
                  </span>
                )}
                {hasMark(n.label) ? <ToolName name={n.label} size={16} className={cn("text-[11px] font-medium leading-4", st.text)} /> : <span className={cn("text-[10px] leading-4", st.text, n.mono && "t-mono text-[10px]")}>{n.label}</span>}
              </li>
              {i < row.nodes.length - 1 && (
                <li aria-hidden className="relative hidden w-[29px] shrink-0 place-items-center min-[1400px]:grid">
                  <ArrowRight className="h-[15px] w-[15px] text-[#77726e]" strokeWidth={1.5} />
                  <span data-packet className="absolute left-0 top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-brand opacity-0" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>

      <div className="mt-6 min-[1400px]:ml-auto min-[1400px]:mt-0 min-[1400px]:w-[165px] min-[1400px]:shrink-0 min-[1400px]:pl-5 min-[1400px]:text-right">
        <p className="t-mono text-[10px] uppercase leading-[14px] tracking-[0.05em] text-[#66533f]">OUTCOME · ILLUSTRATIVE</p>
        <p className="mt-[8px] text-[17px] leading-[23px] text-[#1a0e03] min-[1400px]:ml-auto min-[1400px]:max-w-[135px]">{row.outcome}</p>
      </div>
    </article>
  );
}

/** Three real business operations as connected flows; packets travel between steps. */
export function OperationsFlow() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-row]", {
        opacity: 0,
        y: 26,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      });
      el.querySelectorAll("[data-packet]").forEach((p, i) => {
        gsap.fromTo(
          p,
          { x: 0, opacity: 0 },
          { x: 24, duration: 1.1, ease: "power1.inOut", repeat: -1, repeatDelay: 1.6, delay: (i % 4) * 0.35, keyframes: { opacity: [0, 1, 1, 0] } },
        );
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={root} className="flex flex-col gap-4 min-[1400px]:gap-[16.4px]">
      {OPS_ROWS.map((r) => (
        <FlowRow key={r.id} row={r} />
      ))}
    </div>
  );
}
