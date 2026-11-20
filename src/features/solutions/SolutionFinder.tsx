"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SOLUTION_AREAS } from "@/data/solutions";
import { cn } from "@/lib/cn";

/** Pick a focus area, see the solutions that address it. Links jump to the matching section. */
export function SolutionFinder() {
  const [active, setActive] = useState(SOLUTION_AREAS[0].id);
  const area = SOLUTION_AREAS.find((a) => a.id === active) ?? SOLUTION_AREAS[0];

  return (
    <section id="finder" aria-labelledby="finder-title" className="scroll-mt-28 bg-[#3a1c0d] text-white">
      <Container className="py-14 lg:py-[72px]">
        <div className="text-center">
          <p className="t-eyebrow !text-[#ff9a5c]">Solution finder</p>
          <h2 id="finder-title" className="mt-3 text-[30px] font-bold uppercase leading-[36px] sm:text-[38px] sm:leading-[44px]">
            What are you trying to improve?
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[17px] leading-[26px] text-[#e6d5c8]">Select a focus area and we surface the TechLamp solutions most likely to help.</p>
        </div>

        <div role="group" aria-label="Focus areas" className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {SOLUTION_AREAS.map((a) => {
            const Icon = a.icon;
            const on = a.id === active;
            return (
              <button
                key={a.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(a.id)}
                className={cn(
                  "flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-4 text-[14px] font-semibold transition-colors",
                  on ? "border-brand bg-brand-fill text-white" : "border-white/15 bg-white/5 text-[#f1e4d9] hover:bg-white/10",
                )}
              >
                <Icon aria-hidden className="h-6 w-6" strokeWidth={1.7} />
                {a.finderLabel}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="mt-6 rounded-2xl border border-brand p-5 sm:p-6">
          <p className="t-mono flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-white">
            <Sparkles aria-hidden className="h-4 w-4" />
            Recommended for: {area.finderLabel}
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {area.solutions.map((s) => (
              <li key={s.title}>
                <Link href={s.href} className="flex min-h-12 items-center gap-3 rounded-xl bg-black/25 px-4 py-3 text-[14px] font-semibold hover:bg-black/40">
                  <CircleCheck aria-hidden className="h-[18px] w-[18px] shrink-0 text-brand-ink" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link href={`/solutions/${area.id}`} className="inline-flex min-h-11 items-center gap-2 text-[14px] font-semibold text-white underline underline-offset-4">
              See the full {area.finderLabel.toLowerCase()} page
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
