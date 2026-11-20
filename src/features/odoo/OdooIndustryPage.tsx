import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CAPABILITY_LINKS } from "@/data/industries";
import type { OdooIndustry } from "@/data/odoo-industries";

function Chip({ children, href }: { children: string; href?: string }) {
  const cls = "t-mono inline-flex min-h-11 items-center rounded-full bg-cream px-4 text-[13px] font-medium text-brown";
  return href ? (
    <Link href={href} className={`${cls} transition-colors hover:bg-peach`}>
      {children}
    </Link>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/** Full body for one Odoo industry's own page at /odoo-industries/[slug]. */
export function OdooIndustryPage({ industry }: { industry: OdooIndustry }) {
  return (
    <>
      <Section id="challenge" tone="paper" index="01" eyebrow="The challenge" title={industry.challenge}>
        <p className="t-body max-w-[640px]">
          Every sector runs Odoo differently. For {industry.name.replace("Odoo ", "").replace("ERP for ", "").toLowerCase()}, work usually centers on the modules below, configured around your own processes.
        </p>
      </Section>

      <Section id="modules" tone="cream" index="02" eyebrow="Odoo modules" title="Modules typically involved.">
        <ul className="flex flex-wrap gap-2">
          {industry.modules.map((m) => (
            <li key={m}>
              <Chip>{m}</Chip>
            </li>
          ))}
        </ul>
        <p className="t-mono mt-4 text-[10.5px] uppercase tracking-[0.08em] text-slate-2">Native Odoo apps. Actual scope is confirmed during discovery.</p>
      </Section>

      <Section id="capabilities" tone="paper" index="03" eyebrow="Related capabilities" title="Where to go deeper.">
        <ul className="flex flex-wrap gap-2">
          {industry.capabilities.map((c) => (
            <li key={c}>
              <Chip href={CAPABILITY_LINKS[c]}>{c}</Chip>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="case-studies" tone="cream" index="04" eyebrow="Case studies" title="Proof for this sector.">
        <div className="flex flex-col items-start gap-4 rounded-[24px] border border-hair bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <StatusBadge status="pending" />
            <p className="t-body">Sector-specific case studies are being prepared.</p>
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
