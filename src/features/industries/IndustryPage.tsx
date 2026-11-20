import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SmeWorkflowSection } from "@/features/industries/SmeWorkflowSection";
import { CAPABILITY_LINKS, type Industry } from "@/data/industries";

const tones = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint", white: "bg-white border border-hair", cream: "bg-cream" };

function Chip({ children, href }: { children: string; href?: string }) {
  const cls = "t-mono rounded-full bg-cream px-3 py-1.5 text-[12px] font-medium text-brown";
  return href ? (
    <Link href={href} className={`${cls} transition-colors hover:bg-peach`}>
      {children}
    </Link>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/** Full body for one industry's own page at /industries/[slug]. */
export function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <Section id="challenge" tone="paper" index="01" eyebrow="The challenge" title={industry.challenge}>
        <p className="t-body max-w-[640px]">
          Every sector has its own regulations, systems and pressures. For {industry.name.toLowerCase()}, the work usually starts with the chain below, connecting the people involved to a measurable outcome.
        </p>
      </Section>

      {industry.id === "smes" ? (
        <SmeWorkflowSection />
      ) : (
        <Section id="chain" tone="cream" index="02" eyebrow="Operating chain" title="How the work typically connects.">
          <ol aria-label="Typical operating chain" className={`flex flex-wrap items-center gap-3 rounded-[28px] p-6 lg:p-8 ${tones[industry.tone]}`}>
            {industry.flow.map((s, n) => (
              <li key={s} className="flex items-center gap-3">
                <span className="t-mono rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-[0_1px_2px_rgba(58,28,13,0.08)]">{s}</span>
                {n < industry.flow.length - 1 && <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-brown" strokeWidth={2} />}
              </li>
            ))}
          </ol>
          <p className="t-mono mt-4 text-[10.5px] uppercase tracking-[0.08em] text-slate-2">Illustrative chain — the actual flow is shaped around your systems.</p>
        </Section>
      )}

      <Section tone="paper" index="03" eyebrow="Relevant technology" title="The technology categories that usually apply.">
        <ul className="flex flex-wrap gap-2">
          {industry.technology.map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" index="04" eyebrow="Related capabilities" title="Where to go deeper.">
        <ul className="flex flex-wrap gap-2">
          {industry.capabilities.map((c) => (
            <li key={c}>
              <Chip href={CAPABILITY_LINKS[c]}>{c}</Chip>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" index="05" eyebrow="Case studies" title="Proof for this sector.">
        <div className="flex flex-col items-start gap-4 rounded-[24px] border border-hair bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <StatusBadge status="pending" />
            <p className="t-body">Sector-specific case studies for {industry.name.toLowerCase()} are being prepared.</p>
          </div>
          <Link href="/case-studies" className="t-mono inline-flex items-center gap-2 text-[13px] font-semibold text-brand-ink">
            See all case studies
            <ArrowRight aria-hidden className="h-[13px] w-[13px]" strokeWidth={2.2} />
          </Link>
        </div>
      </Section>
    </>
  );
}
