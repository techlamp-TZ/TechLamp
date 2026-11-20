import { ShieldCheck } from "lucide-react";
import { ToolName } from "@/components/ui/ToolName";
import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { STACK_STEPS, type ProductFamily } from "@/data/products";
import { cn } from "@/lib/cn";

function ProductFamilyMock({ f }: { f: ProductFamily }) {
  const Icon = f.icon;
  return (
    <div className="rounded-[28px] border border-hair bg-[#fffefa] p-4 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-slate-2">Interface concept</p>
        <StatusBadge status="illustrative" />
      </div>

      {/* Window mock, decorative */}
      <div aria-hidden className="overflow-hidden rounded-xl border border-hair bg-cream">
        <div className="flex gap-1.5 border-b border-hair bg-canvas px-3 py-2">
          <i className="h-2 w-2 rounded-full bg-hair-2" />
          <i className="h-2 w-2 rounded-full bg-hair-2" />
          <i className="h-2 w-2 rounded-full bg-hair-2" />
        </div>
        <div className="flex gap-3 p-3 sm:p-4">
          <div className="flex w-9 shrink-0 flex-col gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg text-white" style={{ background: f.accent }}>
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
            <i className="h-1.5 rounded bg-hair-2" />
            <i className="h-1.5 rounded bg-hair-2" />
            <i className="h-1.5 w-2/3 rounded bg-hair-2" />
          </div>
          <div className="min-w-0 flex-1">
            <i className="block h-2.5 w-2/5 rounded bg-hair-2" />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((n) => (
                <div key={n}>
                  <i className="block h-1.5 w-full rounded" style={{ background: f.accent }} />
                  <i className="mt-1.5 block h-1.5 w-4/5 rounded bg-hair-2" />
                </div>
              ))}
            </div>
            <i className="mt-4 block h-1.5 rounded bg-hair-2" />
            <i className="mt-1.5 block h-1.5 rounded bg-hair-2" />
            <i className="mt-1.5 block h-1.5 w-3/4 rounded bg-hair-2" />
          </div>
        </div>
      </div>

      {/* Stack position */}
      <ol aria-label="Where this family sits in the stack" className="mt-3 flex items-start justify-between rounded-xl bg-[#f5ece2] px-4 py-3">
        {STACK_STEPS.map((s, i) => (
          <li key={s} className="flex flex-1 flex-col items-center gap-1 text-center">
            <i className="h-4 w-4 rounded-[4px] border border-hair-2" style={i === 1 ? { background: f.accent, borderColor: f.accent } : { background: "#fff" }} />
            <span className={cn("t-mono text-[10px] uppercase leading-3 tracking-[0.04em]", i === 1 ? "font-bold text-ink" : "text-slate-2")}>{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-5 space-y-4">
        <div>
          <h3 className="t-mono text-[11px] uppercase tracking-[0.06em] text-slate-2">Designed to sit beside</h3>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {f.integrations.map((i) => (
              <li key={i} className="rounded-full border border-hair bg-cream px-3 py-1.5 text-[12px] font-medium leading-4 text-ink">
                <ToolName name={i} size={14} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="t-mono text-[11px] uppercase tracking-[0.06em] text-slate-2">Deployment options</h3>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {f.deployment.map((d) => (
              <li key={d} className="rounded-full border border-hair bg-cream px-3 py-1 text-[12px] font-medium leading-4 text-ink">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-[#f5ece2] px-4 py-3 text-[13px] leading-[19px] text-slate">
        <ShieldCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0" style={{ color: f.accentText }} />
        {f.security}
      </p>
    </div>
  );
}

/** Full body for one family's own page at /products/[slug]. PageHero already carries the name/problem. */
export function ProductFamilyPage({ f }: { f: ProductFamily }) {
  return (
    <section className="bg-canvas">
      <Container className="py-12 lg:py-[64px]">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
          <p className="t-body max-w-[500px]">{f.summary}</p>
          <ProductFamilyMock f={f} />
        </div>

        <div className="mt-10 lg:mt-14">
          <h2 className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">What&apos;s included in this family</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {f.items.map((item) => (
              <div key={item.name} className="rounded-[16px] border border-hair bg-white p-5">
                <h3 className="text-[16px] font-semibold leading-5 text-ink">{item.name}</h3>
                <p className="mt-1.5 text-[14px] leading-[20px] text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-14">
          <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">Related work</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {f.related.map((r) => (
              <li key={r.label}>
                <a href={r.href} className="inline-flex min-h-11 items-center rounded-full border border-hair bg-canvas px-4 text-[13px] font-medium text-ink hover:border-hair-2">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[500px] text-[14px] leading-[21px] text-slate">
            Availability is pending publication. Ask us for a walkthrough of where this family stands today and what is planned.
          </p>
        </div>
      </Container>
    </section>
  );
}
