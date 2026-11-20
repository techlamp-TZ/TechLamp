"use client";

import { useEffect, useRef, useState } from "react";
import { ACADEMY_LEVELS, CASE_AFTER, CASE_BEFORE, CASE_STATS, RESEARCH_TAGS } from "@/data/home";
import { gsap } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TextLink } from "@/components/ui/Button";

const cardRadius = "rounded-[34px]";
const cardLabel = "t-mono text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-brown";

export function CaseStudyFeature() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 78%", once: true } });
      tl.from("[data-before]", { opacity: 0, x: -14, duration: 0.6, ease: "power3.out", stagger: 0.1 })
        .from("[data-arrow]", { opacity: 0, scale: 0.6, duration: 0.5, ease: "back.out(2)" }, "-=0.2")
        .from("[data-after]", { opacity: 0, x: 14, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.3")
        .from("[data-stat]", { opacity: 0, y: 12, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.2");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={ref}
      className={cn(
        "relative flex flex-col overflow-hidden px-6 pb-8 pt-8 lg:h-[635px] lg:px-[30px] lg:pb-0 lg:pt-[37px]",
        cardRadius,
        "bg-[radial-gradient(75%_65%_at_100%_0%,#f7dfce_0%,rgba(247,223,206,0)_100%),radial-gradient(95%_75%_at_0%_100%,#e0ece6_0%,rgba(224,236,230,0)_100%)] bg-[#fcf6ef]",
      )}
    >
      <div className="flex items-start justify-between">
        <p className={cardLabel}>FEATURED CASE STUDY</p>
        <StatusBadge status="illustrative" className="-mt-[10px]" />
      </div>

      <div className="mt-8 rounded-[26px] bg-white/45 px-6 pb-8 pt-8 backdrop-blur-[2px] lg:mt-[84px] lg:h-[260px] lg:px-[20px] lg:pb-0 lg:pt-[63px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_66px_1fr] lg:items-start lg:gap-0">
          <div>
            <p className="t-mono text-[10.5px] font-medium uppercase leading-[14px] text-[#835742]">BEFORE / FRAGMENTED</p>
            <ul className="mt-[11px] space-y-[11px]">
              {CASE_BEFORE.map((b) => (
                <li key={b} data-before className="flex h-[31px] items-center rounded-[8px] bg-white/35 px-[10px] text-[12px] text-[#6b625e]">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div data-arrow aria-hidden className="hidden items-center justify-center pt-[52px] text-brand-ink lg:flex">
            <svg width="52" height="20" viewBox="0 0 52 20" fill="none">
              <path d="M 2 10 H 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
              <path d="M 37 4 L 47 10 L 37 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="22" cy="10" r="4.5" fill="#ff5a00" />
            </svg>
          </div>
          <div>
            <p className="t-mono text-[10.5px] font-medium uppercase leading-[14px] text-signal-green">AFTER / INTELLIGENT</p>
            <ul className="mt-[11px] space-y-[11px]">
              {CASE_AFTER.map((a) => (
                <li key={a} data-after className="flex h-[31px] items-center rounded-[8px] bg-white px-[10px] text-[12px] font-medium text-[#111]">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:absolute lg:bottom-[24px] lg:left-[30px] lg:right-[30px] lg:mt-0">
        <h3 className="max-w-[790px] text-[24px] leading-[32px] text-[#170d03] lg:text-[26.5px]">
          How a connected service operation can turn days of delay into decisions in minutes.
        </h3>
        <dl className="mt-[12px] flex flex-wrap gap-x-[26px] gap-y-4">
          {CASE_STATS.map((s) => (
            <div key={s.label} data-stat className="flex flex-col-reverse">
              <dt className="mt-[2px] text-[12px] leading-4 text-[#5d675f]">{s.label}</dt>
              <dd className="text-[22px] font-semibold leading-[28px] text-[#391b0b]">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="t-mono mt-[10px] text-[10px] uppercase leading-4 tracking-[0.08em] text-[#835742]">Illustrative figures — not a client result</p>
      </div>
    </article>
  );
}

export function AcademyCard() {
  const [level, setLevel] = useState(1);
  return (
    <article className={cn("relative flex flex-col bg-sky px-6 pb-8 pt-8 lg:h-[308.5px] lg:px-[26px] lg:pb-0 lg:pt-[33px]", cardRadius)}>
      <p className={cardLabel}>TECHLAMP ACADEMY</p>
      <StatusBadge status="pending" className="absolute right-[22px] top-[26px] !h-[22px] !px-[11px] !text-[8.5px]" />
      <h3 className="mt-[16px] max-w-[380px] text-[23.75px] leading-[29px] text-[#120d03]">Build the people who build intelligent systems.</h3>
      <div role="tablist" aria-label="Learning level" className="mt-[17px] grid grid-cols-4 gap-[7.5px]">
        {ACADEMY_LEVELS.map((l, i) => (
          <button
            key={l}
            role="tab"
            type="button"
            aria-selected={level === i}
            onClick={() => setLevel(i)}
            onMouseEnter={() => setLevel(i)}
            className={cn(
              "t-mono grid h-[42px] place-items-center rounded-[10px] text-[10px] font-bold transition-colors duration-200",
              level === i ? "bg-brand-fill text-white" : "bg-white/60 text-brown hover:bg-white",
            )}
          >
            {l}
          </button>
        ))}
      </div>
      <TextLink href="/training" className="mt-[16px] text-[12px]">
        Explore learning paths
      </TextLink>
    </article>
  );
}

export function ResearchCard() {
  const [tag, setTag] = useState(1);
  return (
    <article className={cn("relative flex flex-col bg-lilac px-6 pb-8 pt-8 lg:h-[308.5px] lg:px-[26px] lg:pb-0 lg:pt-[32px]", cardRadius)}>
      <p className={cardLabel}>LATEST RESEARCH</p>
      <StatusBadge status="pending" className="absolute right-[22px] top-[25px] !h-[22px] !px-[11px] !text-[8.5px]" />
      <h3 className="mt-[16px] max-w-[380px] text-[23.75px] leading-[29px] text-[#120d03]">Why optimization belongs between prediction and automation.</h3>
      <div role="tablist" aria-label="Article topic" className="mt-[17px] grid grid-cols-3 gap-[6px]">
        {RESEARCH_TAGS.map((t, i) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={tag === i}
            onClick={() => setTag(i)}
            onMouseEnter={() => setTag(i)}
            className={cn(
              "t-mono grid h-[31px] place-items-center rounded-[8px] text-[9px] font-bold uppercase transition-colors duration-200",
              tag === i ? "bg-brand-fill text-white" : "bg-white text-brown hover:bg-[#fff6ef]",
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <TextLink href="/insights" className="mt-[16px] text-[12px]">
        Read the field note
      </TextLink>
    </article>
  );
}
