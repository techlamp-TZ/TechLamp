"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CapabilityDetail } from "@/data/capability-details";

/** Tabbed "question workbench" on the dark band. Content is plain text; no client data is implied. */
export function FocusTabs({ tabs }: { tabs: CapabilityDetail["focus"]["tabs"] }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  const t = tabs[active];
  return (
    <div>
      <div role="tablist" aria-label="Focus areas" className="flex flex-wrap gap-2">
        {tabs.map((x, i) => (
          <button
            key={x.tab}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${uid}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "t-mono min-h-11 rounded-[8px] px-5 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
              i === active ? "bg-brand-fill text-white" : "bg-[#262524] text-[#d8d2cc] hover:bg-[#33312f]",
            )}
          >
            {x.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${active}`}
        className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(0,0.9fr)]"
      >
        <div className="rounded-[20px] bg-[#232120] p-6 lg:p-7">
          <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-[#ff9a5c]">Management question</p>
          <p className="mt-4 text-[24px] font-medium leading-[30px] tracking-[-0.01em] text-white lg:text-[26px] lg:leading-[32px]">{t.question}</p>
        </div>
        <div className="rounded-[20px] bg-white p-6 lg:p-7">
          <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-[#a93800]">How we approach it</p>
          <p className="mt-4 max-w-[560px] text-[18px] leading-[28px] text-ink">{t.text}</p>
          <p className="t-mono mt-8 text-[11px] uppercase tracking-[0.06em] text-slate-2">Illustrative structure. No client data shown.</p>
        </div>
        <div className="rounded-[20px] bg-[#232120] p-6 lg:p-7">
          <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-[#ff9a5c]">Primary drivers + action</p>
          <ul className="mt-3">
            {t.drivers.map((d) => (
              <li key={d.label} className="flex items-baseline justify-between gap-3 border-b border-white/10 py-3 last:border-0">
                <span className="text-[16px] font-medium text-white">{d.label}</span>
                <span className="text-right text-[12px] text-[#c9c2bb]">{d.note}</span>
              </li>
            ))}
          </ul>
          <p className="t-mono mt-4 flex items-start gap-2 text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-[#ff9a5c]">
            <span>{t.action}</span>
            <ArrowRight aria-hidden className="mt-px h-3 w-3 shrink-0" />
          </p>
        </div>
      </div>
    </div>
  );
}
