import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/cn";

/**
 * SME-specific operating chain: a recognizable daily-work scene — one customer enquiry
 * becomes a quote, a human-approved order and a paid invoice, without re-keying between
 * tools. Replaces the generic modernization chain on /industries/smes. Static-first
 * (the travelling signal is a flourish only); explicitly illustrative.
 */

type Stage = {
  id: string;
  n: string;
  label: string;
  desc: string;
  art: string;
  tone: string;
  approval?: boolean;
};

const STAGES: Stage[] = [
  { id: "enquiry", n: "01", label: "Enquiry", desc: "A customer enquiry arrives and enters the system — no re-keying.", art: "/illustrations/sme-enquiry.svg", tone: "bg-peach" },
  { id: "quote", n: "02", label: "Quote", desc: "A quote is prepared and sent, priced from your catalogue.", art: "/illustrations/sme-quote.svg", tone: "bg-sky" },
  { id: "approval", n: "03", label: "Approval", desc: "A person reviews and approves — judgment stays human.", art: "/illustrations/sme-approval.svg", tone: "bg-white border border-hair", approval: true },
  { id: "order", n: "04", label: "Order", desc: "The approved order is created automatically.", art: "/illustrations/sme-order.svg", tone: "bg-mint" },
  { id: "invoice", n: "05", label: "Invoice", desc: "The invoice is raised and reconciled.", art: "/illustrations/sme-invoice.svg", tone: "bg-lilac" },
];

export function SmeWorkflowSection({
  id = "sme-workflow",
  eyebrow = "02 / Everyday work, connected",
  title = "From one enquiry to a paid invoice.",
  lede = "For a growing business, the first win is usually everyday work: a customer enquiry becomes a quote, an approved order and an invoice — connected once, so the same detail is never re-typed between tools.",
  cta = { href: "/business-apps", label: "See how we connect this in Odoo or Zoho" },
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  cta?: { href: string; label: string };
} = {}) {
  return (
    <Section id={id} tone="cream">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between lg:mb-[42px]">
        <div className="max-w-[640px]">
          <p className="t-eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="t-h2 mt-[12px] normal-case lg:tracking-normal">
            {title}
          </h2>
          <p className="t-lede mt-[16px] max-w-[560px]">{lede}</p>
        </div>
        <StatusBadge status="illustrative" className="shrink-0 sm:mt-2" />
      </div>

      <ol aria-label="Enquiry to invoice workflow" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STAGES.map((s, i) => (
          <li key={s.id} className="relative">
            <div className="flex h-full flex-col rounded-[20px] border border-hair bg-[#fffdfc] p-5">
              <span className={cn("mb-4 grid h-[76px] w-full place-items-center rounded-[14px]", s.tone, s.approval && "ring-1 ring-signal-green/30")}>
                <img src={s.art} alt="" aria-hidden width={56} height={56} className="h-[50px] w-auto" />
              </span>
              <span className="t-mono text-[10px] leading-4 tracking-[0.1em] text-slate-2">{s.n}</span>
              <span className="mt-[2px] text-[14px] font-semibold leading-5 text-ink">{s.label}</span>
              <span className="mt-[6px] text-[12.5px] leading-[17px] text-slate">{s.desc}</span>
            </div>
            {i < STAGES.length - 1 && (
              <ArrowRight aria-hidden className="absolute right-[-11px] top-[54px] hidden h-[14px] w-[14px] translate-x-1/2 text-[#c4bcb2] lg:block" strokeWidth={1.8} />
            )}
          </li>
        ))}
      </ol>

      {/* one connected workflow — a signal passes through, pausing at the human approval */}
      <div className="relative mt-7 flex min-h-[30px] items-center">
        <div className="relative h-[2px] flex-1 rounded-full bg-[#e3dcd4]">
          <span aria-hidden className="absolute left-0 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
          <span aria-hidden className="absolute left-1/2 top-1/2 grid h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-signal-green shadow-[0_0_0_3px_var(--cream)]">
            <svg viewBox="0 0 24 24" className="h-[11px] w-[11px]" fill="none"><path d="M 5 12 l 4 4 l 10 -10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <span aria-hidden className="absolute right-0 top-1/2 h-[9px] w-[9px] translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-signal-green bg-cream" />
          <span aria-hidden className="absolute top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-0 [animation:tl-travel-x_3.6s_ease-in-out_0.8s_infinite]" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 border-t border-hair pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-mono text-[10.5px] uppercase leading-4 tracking-[0.06em] text-slate-2">
          Illustrative workflow — shaped around the tools you already run.
        </p>
        <Link href={cta.href} className="group/tl inline-flex items-center gap-2 text-[13px] font-semibold text-brand-ink">
          {cta.label}
          <ArrowRight aria-hidden className="h-[13px] w-[13px] transition-transform duration-200 group-hover/tl:translate-x-1" strokeWidth={2.2} />
        </Link>
      </div>
    </Section>
  );
}
