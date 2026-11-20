import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { ZohoApp } from "@/data/zoho-services";

function Chip({ children, href }: { children: string; href: string }) {
  return (
    <Link href={href} className="t-mono inline-flex min-h-11 items-center rounded-full bg-cream px-4 text-[13px] font-medium text-brown transition-colors hover:bg-peach">
      {children}
    </Link>
  );
}

/** Full body for one Zoho app's own page at /zoho-services/[slug]. */
export function ZohoServicePage({ app }: { app: ZohoApp }) {
  return (
    <>
      <Section id="features" tone="paper" index="01" eyebrow="What we configure" title="What's covered in this setup.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {app.features.map((item) => (
            <li key={item} className="flex items-start gap-2.5 rounded-[14px] bg-cream px-5 py-4 text-[15px] leading-[21px] text-ink">
              <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" strokeWidth={2.4} />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="approach" tone="cream" index="02" eyebrow="How we deliver it" title="Our approach.">
        <p className="t-body max-w-[640px]">{app.approach}</p>
      </Section>

      <Section id="related" tone="paper" index="03" eyebrow="Related" title="Where to go next.">
        <ul className="flex flex-wrap gap-2">
          {app.related.map((r) => (
            <li key={r.href}>
              <Chip href={r.href}>{r.label}</Chip>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="case-studies" tone="cream" index="04" eyebrow="Case studies" title="Proof for this app.">
        <div className="flex flex-col items-start gap-4 rounded-[24px] border border-hair bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <StatusBadge status="pending" />
            <p className="t-body">App-specific case studies are being prepared.</p>
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
