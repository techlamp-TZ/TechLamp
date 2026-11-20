import { Section } from "@/components/layout/Section";
import { PRODUCT_FAMILIES, CONNECT_POINTS, INTEGRATION_GROUPS } from "@/data/products";
import { StatusBadge } from "@/components/ui/StatusBadge";

/** Product families on top, existing systems below. */
export function ProductEcosystem() {
  return (
    <Section id="ecosystem" tone="paper" index="02" eyebrow="Product ecosystem" title="Built to connect, not replace." aside="The products are designed to sit alongside the systems you already run, not around them.">
      <div className="rounded-[28px] border border-[#efe8df] bg-canvas p-4 sm:p-7">
        <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">Products</p>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {PRODUCT_FAMILIES.map((f) => {
            const Icon = f.icon;
            return (
              <li key={f.id} className="flex min-h-11 items-center gap-2 rounded-full border-2 bg-white px-4 text-[14px] font-semibold text-ink" style={{ borderColor: f.accent }}>
                <Icon aria-hidden className="h-4 w-4" style={{ color: f.accentText }} strokeWidth={2} />
                {f.short}
              </li>
            );
          })}
        </ul>
        <div aria-hidden className="my-5 h-px bg-hair-2" />
        <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">Connection points in your estate</p>
        <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
          {CONNECT_POINTS.map((c) => (
            <li key={c} className="grid min-h-[52px] place-items-center rounded-xl bg-cream px-2 text-[13px] font-medium text-ink">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function ProductIntegrations() {
  return (
    <Section id="integrations" tone="cream" index="03" eyebrow="Integrations" title="Works with what you already run." aside="Named systems are examples the products are designed to connect with. Integrations are planned, and no partnership is implied.">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge status="pending" />
        <p className="t-mono text-[11px] uppercase leading-4 tracking-[0.08em] text-slate-2">Integration availability pending publication.</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {INTEGRATION_GROUPS.map((g) => (
          <li key={g.title} className="rounded-[20px] border border-hair bg-canvas p-5">
            <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brand-ink">{g.title}</p>
            <ul className="mt-3 space-y-2">
              {g.items.map((i) => (
                <li key={i} className="text-[15px] font-semibold leading-5 text-ink">
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
