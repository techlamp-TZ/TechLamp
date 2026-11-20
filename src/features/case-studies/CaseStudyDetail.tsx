import Link from "next/link";
import { ArrowRight, Check, Info, X } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CASE_STUDIES, type CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/cn";

const card = "rounded-[20px] border border-hair bg-white p-5";

/** Horizontal step diagram; scrolls sideways on narrow screens instead of squashing. */
function Flow({ steps, label, accent }: { steps: { label: string; sub?: string }[]; label: string; accent?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-[20px] bg-cream p-5 focus-visible:outline-2 focus-visible:outline-brand" tabIndex={0} role="group" aria-label={label}>
      <ol className="flex min-w-max items-stretch gap-2">
        {steps.map((s, n) => (
          <li key={s.label} className="flex items-center gap-2">
            <div
              className={cn(
                "flex min-h-[64px] min-w-[104px] flex-col items-center justify-center rounded-xl border px-3 py-2 text-center text-[13px] font-semibold leading-4 text-ink",
                accent && n === steps.length - 1 ? "border-brand bg-brand-fill text-white" : "border-hair bg-white",
              )}
            >
              {s.label}
              {s.sub && <span className="t-mono mt-1 text-[11px] font-normal text-slate-2">{s.sub}</span>}
            </div>
            {n < steps.length - 1 && <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-slate-2" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Lead({ children }: { children: string }) {
  return <p className="t-body mb-6 max-w-[860px]">{children}</p>;
}

export function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  const idx = CASE_STUDIES.findIndex((c) => c.slug === cs.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const statusText = cs.status === "pending" ? "Outcomes pending publication" : "Illustrative sample";
  const n = (i: number) => String(i).padStart(2, "0");

  return (
    <>
      <section aria-label="Illustrative content notice" className="bg-peach">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 px-5 py-3 sm:px-8 lg:px-16">
          <StatusBadge status={cs.status} />
          <p className="text-[14px] leading-5 text-brown">
            <strong className="font-semibold">Illustrative case.</strong> This describes a proposed approach for a composite scenario. It is not a delivered client engagement, and every figure is a sample value.
          </p>
        </div>
      </section>

      <Section tone="canvas" index={n(1)} eyebrow="Context" title="Context">
        <Lead>{cs.context}</Lead>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Sector", cs.sector],
            ["Team", cs.team],
            ["Engagement length", "Illustrative, not confirmed"],
            ["Practices involved", cs.practices.join(", ")],
          ].map(([k, v]) => (
            <div key={k} className={card}>
              <dt className="t-mono text-[11px] uppercase tracking-[0.06em] text-slate-2">{k}</dt>
              <dd className="mt-1 text-[15px] font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="cream" index={n(2)} eyebrow="Challenge" title="Challenge">
        <Lead>{cs.challenge}</Lead>
        <ul className="grid max-w-[860px] gap-3">
          {cs.challengePoints.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[16px] leading-6 text-ink">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="canvas" index={n(3)} eyebrow="Before" title="Before: the old process">
        <Lead>{cs.before.intro}</Lead>
        <Flow label="Old process steps" steps={cs.before.steps.map((label) => ({ label }))} />
      </Section>

      <Section tone="cream" index={n(4)} eyebrow="TechLamp approach" title="TechLamp approach">
        <Lead>Rather than adding another tool, the approach changes how the work flows and keeps people in the approval seat.</Lead>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cs.approach.map((a, i) => (
            <li key={a} className={cn(card, "flex flex-col gap-4")}>
              <span aria-hidden className="t-mono flex h-10 w-10 items-center justify-center rounded-xl bg-brand-fill text-[13px] font-bold text-white">{n(i + 1)}</span>
              <p className="text-[16px] font-medium leading-6 text-ink">{a}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="canvas" index={n(5)} eyebrow="Architecture" title="System architecture">
        <Lead>{cs.architecture.intro}</Lead>
        <Flow label="System architecture" steps={cs.architecture.steps} />
      </Section>

      <Section tone="cream" index={n(6)} eyebrow="Implementation" title="Implementation">
        <Lead>Delivered in phases, with a working pilot validated by real users before full rollout. Phases shown are illustrative.</Lead>
        <ol className="grid grid-cols-2 gap-6 border-t border-hair pt-6 sm:grid-cols-5">
          {cs.phases.map((p, i) => (
            <li key={p} className="flex flex-col items-start gap-1 sm:items-center sm:text-center">
              <span aria-hidden className={cn("h-4 w-4 rounded-full border-2 border-brand", i === 0 && "bg-brand")} />
              <span className="mt-2 text-[15px] font-bold text-ink">{p}</span>
              <span className="t-mono text-[11px] text-slate-2">Illustrative, phase {i + 1}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="canvas" index={n(7)} eyebrow="Business process" title="Business process">
        <Lead>{cs.process.intro}</Lead>
        <Flow label="Business process" accent steps={cs.process.steps.map((label) => ({ label }))} />
      </Section>

      <Section tone="cream" index={n(8)} eyebrow="Result summary" title="Result summary">
        <p className="mb-6 flex max-w-[860px] items-start gap-2 rounded-xl bg-white px-4 py-3 text-[14px] leading-5 text-slate">
          <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
          {statusText}. Quantified metrics need client sign-off before they can be published. The comparison below shows the intended qualitative shift, and the chart uses sample values.
        </p>
        <div className="grid gap-5 lg:grid-cols-3">
          <div className={card}>
            <p className="t-mono text-[11px] uppercase tracking-[0.06em] text-slate-2">Before</p>
            <ul className="mt-4 space-y-3">
              {cs.results.before.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[15px] leading-6 text-ink">
                  <X aria-hidden className="mt-1 h-4 w-4 shrink-0 text-slate-2" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className={cn(card, "border-brand")}>
            <p className="t-mono text-[11px] uppercase tracking-[0.06em] text-brand-ink">Intended after</p>
            <ul className="mt-4 space-y-3">
              {cs.results.after.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[15px] leading-6 text-ink">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-ink" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <figure className={card}>
            <figcaption className="flex flex-wrap items-center justify-between gap-2">
              <span className="t-mono text-[11px] uppercase tracking-[0.06em] text-slate-2">{cs.results.chartLabel}</span>
              <StatusBadge status="illustrative" />
            </figcaption>
            <div
              role="img"
              aria-label={`Sample bar chart, not measured data: before ${cs.results.beforeValue} out of 100, after ${cs.results.afterValue} out of 100`}
              className="mt-4 flex h-[120px] items-end gap-6 border-b border-hair px-4"
            >
              <div className="flex-1 rounded-t-md bg-[#dfe3e8]" style={{ height: `${cs.results.beforeValue}%` }} />
              <div className="flex-1 rounded-t-md bg-brand" style={{ height: `${cs.results.afterValue}%` }} />
            </div>
            <div aria-hidden className="t-mono flex gap-6 px-4 pt-1 text-center text-[11px] uppercase text-slate-2">
              <span className="flex-1">Before</span>
              <span className="flex-1 text-brand-ink">After</span>
            </div>
            <p className="mt-3 text-[13px] italic leading-5 text-slate-2">Directional only. Sample values, not measured. Verified figures will follow publication.</p>
          </figure>
        </div>
      </Section>

      <Section tone="canvas" index={n(9)} eyebrow="Lessons" title="Lessons and impact">
        <Lead>What this scenario teaches, and who feels the change.</Lead>
        <div className="grid gap-5 md:grid-cols-3">
          {cs.impact.map((i) => (
            <div key={i.who} className="rounded-[20px] bg-cream p-6">
              <p className="t-mono text-[11px] uppercase tracking-[0.06em] text-brown">{i.who}</p>
              <p className="mt-3 text-[16px] leading-6 text-ink">{i.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream" index={n(10)} eyebrow="Technology" title="Technology used">
        <ul className="flex flex-wrap gap-3">
          {cs.technology.map((t) => (
            <li key={t} className="rounded-full border border-hair bg-white px-5 py-2.5 text-[14px] font-semibold text-ink">{t}</li>
          ))}
        </ul>
      </Section>

      <Section tone="canvas" index={n(11)} eyebrow="Related" title="Related services">
        <ul className="grid gap-4 md:grid-cols-3">
          {cs.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="flex min-h-[64px] items-center justify-between gap-3 rounded-[20px] border border-hair bg-white px-5 py-4 text-[15px] font-semibold text-ink transition-shadow hover:shadow-[0_12px_28px_-20px_rgba(58,28,13,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                {r.label}
                <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-brand-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" index={n(12)} eyebrow="Next" title="Next case study">
        <Link href={`/case-studies/${next.slug}`} className="flex min-h-[72px] items-center justify-between gap-4 rounded-[20px] border border-hair bg-white px-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          <span>
            <span className="t-mono block text-[11px] uppercase tracking-[0.06em] text-slate-2">Next: {next.industry}</span>
            <span className="mt-1 block text-[17px] font-semibold text-ink">{next.title}</span>
          </span>
          <ArrowRight aria-hidden className="h-5 w-5 shrink-0 text-brand-ink" />
        </Link>
      </Section>
    </>
  );
}
