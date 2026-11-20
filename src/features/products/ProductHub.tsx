import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { PRODUCT_FAMILIES, type ProductFamily } from "@/data/products";

function Chip({ f }: { f: ProductFamily }) {
  const Icon = f.icon;
  return (
    <Link
      href={`/products/${f.id}`}
      className="flex min-h-[56px] w-full items-center gap-2.5 rounded-xl border border-hair bg-[#fffefa] px-3 py-2 shadow-[0_8px_20px_-16px_rgba(58,28,13,0.4)] transition-shadow hover:shadow-[0_12px_26px_-14px_rgba(58,28,13,0.45)]"
    >
      <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-white" style={{ background: f.accent }}>
        <Icon className="h-4 w-4" strokeWidth={1.9} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold leading-4 text-ink">{f.short}</span>
        <span className="t-mono block text-[10px] uppercase leading-3 tracking-[0.06em] text-slate-2">Concept</span>
      </span>
    </Link>
  );
}

/** Eleven product families around one shared design system. */
export function ProductHub() {
  return (
    <div className="mx-auto max-w-[720px]">
      <div aria-hidden className="mx-auto mb-6 grid h-[104px] w-[104px] place-items-center rounded-full bg-graphite text-white">
        <div>
          <Lightbulb className="mx-auto h-8 w-8 text-brand-ink" strokeWidth={1.6} />
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {PRODUCT_FAMILIES.map((f) => (
          <li key={f.id}>
            <Chip f={f} />
          </li>
        ))}
      </ul>
      <p className="t-mono mt-4 text-center text-[11px] uppercase leading-4 tracking-[0.08em] text-slate-2">Interface concepts on one shared design system. Illustrative.</p>
    </div>
  );
}
