"use client";

import { useState } from "react";
import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { INDUSTRIES, INDUSTRY_FILTERS } from "@/data/industries";
import { cn } from "@/lib/cn";

function Chip({ children }: { children: string }) {
  return <li className="t-mono rounded-full bg-cream px-3 py-1 text-[12px] font-medium text-brown">{children}</li>;
}

/** Filterable grid of all twelve industries. Every card carries the id the nav links target. */
export function IndustryDirectory() {
  const [filter, setFilter] = useState<(typeof INDUSTRY_FILTERS)[number]>("All");
  const shown = INDUSTRIES.filter((i) => filter === "All" || i.technology.includes(filter));

  return (
    <div>
      <div role="group" aria-label="Filter industries by technology" className="mb-8 flex flex-wrap items-center gap-2">
        <span className="t-mono mr-2 text-[12px] uppercase tracking-[0.08em] text-slate-2">Filter by</span>
        {INDUSTRY_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "min-h-[44px] rounded-full px-5 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              filter === f ? "bg-brand-fill text-white" : "bg-cream text-ink hover:bg-peach",
            )}
          >
            {f}
          </button>
        ))}
        <span role="status" className="t-mono ml-auto text-[12px] text-slate-2">
          {shown.length} of {INDUSTRIES.length} industries
        </span>
      </div>
      <CardGrid cols={3}>
        {shown.map((i) => (
          <InfoCard key={i.id} id={i.id} tone="white" eyebrow={`Challenge`} title={i.name} href={`/industries/${i.id}`} linkLabel="Explore this industry">
            <p className="font-medium text-ink">{i.challenge}</p>
            <ol aria-label="Typical operating chain" className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] leading-4 text-slate-2">
              {i.flow.map((s, n) => (
                <li key={s} className="flex items-center gap-1.5">
                  {s}
                  {n < i.flow.length - 1 && <span aria-hidden>→</span>}
                </li>
              ))}
            </ol>
            <p className="t-mono mt-5 text-[11px] font-bold uppercase tracking-[0.06em] text-brown">Relevant technology</p>
            <ul className="mt-2 flex flex-wrap gap-2">{i.technology.map((t) => <Chip key={t}>{t}</Chip>)}</ul>
            <p className="t-mono mt-4 text-[11px] font-bold uppercase tracking-[0.06em] text-brown">Related capabilities</p>
            <ul className="mt-2 flex flex-wrap gap-2">{i.capabilities.map((t) => <Chip key={t}>{t}</Chip>)}</ul>
          </InfoCard>
        ))}
      </CardGrid>
    </div>
  );
}
