"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { LEVELS } from "@/data/training";
import { cn } from "@/lib/cn";

/** Competency journey as an accessible tabs widget (arrow keys, Home/End). */
export function LevelExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const last = LEVELS.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  const level = LEVELS[active];
  return (
    <div className="rounded-[28px] bg-mint p-5 lg:p-7">
      <p className="t-mono mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-brown">COMPETENCY JOURNEY</p>
      <div role="tablist" aria-label="Competency level" onKeyDown={onKey} className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {LEVELS.map((l, i) => (
          <button
            key={l.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`level-tab-${l.id}`}
            aria-selected={active === i}
            aria-controls={`level-panel-${l.id}`}
            tabIndex={active === i ? 0 : -1}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "min-h-[64px] rounded-[14px] px-4 py-3 text-left transition-colors duration-200",
              active === i ? "bg-graphite text-white" : "bg-white text-ink hover:bg-[#fff6ef]",
            )}
          >
            <span className="t-mono block text-[11px] font-bold text-brand-ink">{l.n}</span>
            <span className="mt-1 block text-[15px] font-bold uppercase leading-5">{l.label}</span>
          </button>
        ))}
      </div>
      {LEVELS.map((l, i) => (
        <div
          key={l.id}
          role="tabpanel"
          id={`level-panel-${l.id}`}
          aria-labelledby={`level-tab-${l.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="mt-4 rounded-[18px] bg-white/70 p-5 lg:p-6"
        >
          <p className="text-[18px] font-medium leading-6 text-ink">{l.summary}</p>
          <ul className="mt-3 grid gap-2 text-[15px] leading-6 text-slate md:grid-cols-3 md:gap-5">
            {l.points.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="sr-only" aria-live="polite">
        {level.label} level selected
      </p>
    </div>
  );
}
