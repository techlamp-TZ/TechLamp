import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { INSIGHTS, TOPICS, readingTime } from "@/data/insights";

export function FeaturedInsight() {
  const f = INSIGHTS[0];
  return (
    <section aria-labelledby="featured-title" className="bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-16 lg:py-[72px]">
        <div className="grid overflow-hidden rounded-[28px] bg-graphite text-white lg:grid-cols-2">
          <div className="p-7 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-mono text-[12px] font-bold uppercase tracking-[0.06em] text-[#ff8a4d]">FEATURED FIELD NOTE / {readingTime(f)} MIN READ</p>
              <StatusBadge status="pending" />
            </div>
            <h2 id="featured-title" className="mt-6 max-w-[520px] text-[32px] font-bold leading-[38px] lg:text-[40px] lg:leading-[46px]">
              {f.title}
            </h2>
            <p className="mt-5 max-w-[460px] text-[17px] leading-7 text-white/75">{f.summary}</p>
            <p className="t-mono mt-6 text-[12px] text-[#6fd0b0]">By TechLamp editorial</p>
            <Button href={`/insights/${f.slug}`} icon="arrow-up-right" variant="onBrand" className="mt-8">
              Read the note
            </Button>
          </div>
          <div aria-hidden className="flex flex-col justify-between gap-8 bg-[#10141a] p-7 lg:p-12">
            <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#ff8a4d]">CAPABILITY LEVELS / ILLUSTRATIVE</p>
            <div className="flex h-[160px] items-end gap-3">
              {[35, 55, 75, 95].map((h, i) => (
                <span key={h} className="flex-1 rounded-t-[6px]" style={{ height: `${h}%`, background: ["#1f8f8a", "#3f6fd0", "#ff5a00", "#7a5bd0"][i] }} />
              ))}
            </div>
            <p className="t-mono text-[11px] uppercase tracking-[0.06em] text-white/60">FOUNDATION / PRACTITIONER / PROFESSIONAL / SPECIALIST</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopicsSection() {
  return (
    <Section tone="canvas" index="02" eyebrow="EXPLORE BY TOPIC" title="Seven topics, one connected view.">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {TOPICS.map((t, i) => {
          const n = INSIGHTS.filter((x) => x.topic === t).length;
          return (
            <li key={t} className={i % 2 === 0 ? "rounded-[20px] bg-graphite p-5 text-white" : "rounded-[20px] border border-hair bg-white p-5"}>
              <p className="t-mono text-[11px] font-bold text-brand-ink">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-6 text-[18px] font-bold leading-6">{t}</p>
              <p className="t-mono mt-3 text-[11px] opacity-80">{n > 0 ? `${n} field note${n > 1 ? "s" : ""}` : "PENDING PUBLICATION"}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export function AnatomySection() {
  const parts = ["The signal", "Why the old model breaks", "A practical approach", "What to measure next"];
  return (
    <Section tone="paper" index="03" eyebrow="BUILT FOR DEPTH" title="How a field note is put together.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="t-mono text-[12px] font-bold uppercase tracking-[0.06em] text-brand-ink">FIELD NOTE FORMAT</p>
          <p className="t-body mt-4 max-w-[440px]">Every note is written by TechLamp editorial, is conceptual rather than statistical, and says how to approach a problem. No data claims and no client stories.</p>
          <p className="t-mono mt-4 text-[11px] uppercase tracking-[0.06em] text-slate-2">Reading time is computed from word count.</p>
        </div>
        <div className="rounded-[28px] bg-graphite p-7 text-white">
          <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#ff8a4d]">IN A FIELD NOTE</p>
          <ol className="mt-5 space-y-4">
            {parts.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4 text-[18px]">
                <span className="t-mono text-[12px] text-[#6fd0b0]">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export function SuggestSection() {
  return (
    <section aria-labelledby="suggest-title" className="bg-canvas">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 lg:px-16 lg:pb-[72px]">
        <div className="flex flex-col gap-6 rounded-[28px] bg-[#c94500] p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <p className="t-mono text-[12px] font-bold uppercase tracking-[0.08em] text-white">SUGGEST A TOPIC</p>
            <h2 id="suggest-title" className="mt-3 text-[30px] font-bold leading-9 text-white lg:text-[36px] lg:leading-[42px]">A sharper view of what comes next.</h2>
            <p className="mt-2 text-[17px] text-white">Tell us what you would like covered. A newsletter is not available yet: PENDING PUBLICATION.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[48px] shrink-0 items-center justify-center rounded-[10px] bg-graphite px-6 text-[14px] font-semibold text-white hover:bg-black">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
