"use client";

import { useState } from "react";
import { InfoCard, CardGrid, type CardTone } from "@/components/cards/InfoCard";
import { CASE_STUDIES } from "@/data/case-studies";
import { cn } from "@/lib/cn";

const TONES: CardTone[] = ["peach", "sky", "mint", "lilac"];
const INDUSTRIES = ["All", ...Array.from(new Set(CASE_STUDIES.map((c) => c.industry)))];

/** Case study cards with an industry filter. Each card carries its own status badge. */
export function CaseStudyList() {
  const [industry, setIndustry] = useState("All");
  const shown = CASE_STUDIES.filter((c) => industry === "All" || c.industry === industry);
  return (
    <div>
      <div role="group" aria-label="Filter case studies by industry" className="mb-8 flex flex-wrap items-center gap-2">
        <span className="t-mono mr-2 text-[12px] uppercase tracking-[0.08em] text-slate-2">Industry</span>
        {INDUSTRIES.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={industry === f}
            onClick={() => setIndustry(f)}
            className={cn(
              "min-h-[44px] rounded-full px-5 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              industry === f ? "bg-brand-fill text-white" : "bg-cream text-ink hover:bg-peach",
            )}
          >
            {f}
          </button>
        ))}
        <span role="status" className="t-mono ml-auto text-[12px] text-slate-2">
          {shown.length} case {shown.length === 1 ? "study" : "studies"}
        </span>
      </div>
      <CardGrid cols={3}>
        {shown.map((c) => (
          <InfoCard
            key={c.slug}
            tone={TONES[CASE_STUDIES.indexOf(c) % TONES.length]}
            eyebrow={c.topic}
            status={c.status}
            title={c.cardTitle}
            href={`/case-studies/${c.slug}`}
            linkLabel="Read case study"
          >
            <p>{c.summary}</p>
            <ul className="mt-4 space-y-1 text-[14px] text-ink">
              {c.outcomeTags.map((t) => (
                <li key={t}>Intended: {t}</li>
              ))}
            </ul>
            <p className="t-mono mt-4 text-[11px] uppercase tracking-[0.06em] text-slate-2">No published client result</p>
          </InfoCard>
        ))}
      </CardGrid>
    </div>
  );
}
