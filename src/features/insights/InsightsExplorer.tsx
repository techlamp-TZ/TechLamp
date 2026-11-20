"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS, TOPICS, readingTime, type InsightTopic } from "@/data/insights";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/cn";

/** Topic filter (toggle buttons) plus the article list. All articles show before JS runs. */
export function InsightsExplorer() {
  const [topic, setTopic] = useState<InsightTopic | "All">("All");
  const shown = INSIGHTS.filter((i) => topic === "All" || i.topic === topic);
  const chips: (InsightTopic | "All")[] = ["All", ...TOPICS];

  return (
    <div>
      <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={topic === c}
            onClick={() => setTopic(c)}
            className={cn(
              "t-mono min-h-[44px] rounded-[10px] px-4 text-[11px] font-bold uppercase transition-colors duration-200",
              topic === c ? "bg-brand-fill text-white" : "bg-graphite text-white hover:bg-black",
            )}
          >
            {c === "All" ? "All insights" : c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} {shown.length === 1 ? "article" : "articles"} shown
      </p>
      {shown.length === 0 ? (
        <p className="mt-8 rounded-[24px] border border-hair bg-white p-7 text-[16px] text-slate">No field notes on this topic yet. PENDING PUBLICATION.</p>
      ) : (
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {shown.map((i) => (
            <li key={i.slug}>
              <article className="relative flex h-full flex-col rounded-[28px] border border-hair bg-white p-7 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)]">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">
                    {i.kind} / {i.topic}
                  </p>
                  <StatusBadge status="pending" className="!h-[22px] !px-[11px] !text-[8.5px]" />
                </div>
                <h3 className="text-[22px] font-medium leading-[28px] text-ink">
                  <Link href={`/insights/${i.slug}`} className="after:absolute after:inset-0 after:rounded-[28px]">
                    {i.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[15px] leading-[23px] text-slate">{i.summary}</p>
                <p className="t-mono mt-auto flex items-center gap-2 pt-6 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink">
                  {readingTime(i)} min read / TechLamp editorial
                  <ArrowRight aria-hidden className="h-[13px] w-[13px]" />
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
