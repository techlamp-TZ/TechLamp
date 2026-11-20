import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { ToolName } from "@/components/ui/ToolName";
import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Solution, SolutionArea } from "@/data/solutions";

function Track({ accent }: { accent: string }) {
  const labels = ["Challenge", "Approach", "Outcome"];
  return (
    <div aria-hidden className="relative mt-4 rounded-[10px] bg-[#f5ece2] px-4 pb-2 pt-3">
      <span className="absolute left-[16%] right-[16%] top-[19px] h-px bg-[#e0d3c5]" />
      <ol className="relative flex justify-between">
        {labels.map((l, i) => (
          <li key={l} className="flex w-1/3 flex-col items-center gap-1">
            <i className="h-3.5 w-3.5 rounded-full border-2 bg-white" style={{ borderColor: i === 0 ? "#cfc3b6" : accent, background: i === 2 ? accent : "#fff" }} />
            <span className="t-mono text-[10px] uppercase leading-3 tracking-[0.05em] text-slate-2">{l}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SolutionCard({ s, accent }: { s: Solution; accent: string }) {
  return (
    <article className="flex flex-col rounded-[22px] border border-hair bg-[#fffefa] p-6 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)]">
      <h3 className="text-[18px] font-semibold leading-6 text-ink">{s.title}</h3>
      <p className="mt-2 text-[14px] leading-[21px] text-slate">
        <span className="font-semibold text-brown">Challenge: </span>
        {s.challenge}
      </p>
      <Track accent={accent} />
      <p className="mt-3 text-[14px] leading-[21px] text-slate">{s.approach}</p>
      <ul aria-label="Example tools" className="mt-3 flex flex-wrap gap-1.5">
        {s.tools.map((t) => (
          <li key={t} className="rounded-full border border-hair bg-cream px-3 py-1.5 text-[12px] font-medium leading-4 text-ink">
            <ToolName name={t} size={14} />
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-start gap-2 text-[14px] font-semibold leading-5" style={{ color: accent }}>
        <TrendingUp aria-hidden className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
        <span>
          <span className="sr-only">Intended outcome: </span>
          {s.outcome}
        </span>
      </p>
      <div className="mt-auto pt-4">
        <Link href={s.href} className="inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold" style={{ color: accent }}>
          Explore this practice<span className="sr-only">: {s.title}</span>
          <ArrowRight aria-hidden className="h-[13px] w-[13px]" strokeWidth={2.2} />
        </Link>
      </div>
    </article>
  );
}

/** Full solution-area body, used on its own page at /solutions/[slug]. */
export function SolutionAreaPage({ area }: { area: SolutionArea }) {
  return (
    <section className="bg-canvas">
      <Container className="py-12 lg:py-[64px]">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <StatusBadge status="illustrative" />
          <p className="t-mono max-w-[380px] text-[11px] uppercase leading-4 tracking-[0.06em] text-slate-2 sm:text-right">
            Outcomes are intended, not measured. Tools named are examples we work with, not partnerships.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {area.solutions.map((s) => (
            <SolutionCard key={s.title} s={s} accent={area.accent} />
          ))}
        </div>
      </Container>
    </section>
  );
}
