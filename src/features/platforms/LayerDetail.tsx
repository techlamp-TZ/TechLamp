import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ToolName } from "@/components/ui/ToolName";
import type { PlatformLayer } from "@/data/platforms";

const panel = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint" };

/** Full layer body: what we connect, example tools, and the handoff to the next layer. Used on its own page at /platforms/[slug]. */
export function LayerDetail({ layer }: { layer: PlatformLayer }) {
  return (
    <section className="bg-canvas">
      <Container className="py-12 lg:py-[64px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div>
            <p className="mt-1 max-w-[480px] text-[15px] leading-[22px] text-slate">Tools shown are examples we work with, not partnerships.</p>
            <p className="mt-5 max-w-[480px] border-l-2 border-brand pl-4 text-[15px] leading-[22px] text-brown">{layer.handoff}</p>
          </div>

          <div className={`rounded-[28px] p-5 sm:p-7 ${panel[layer.tone]}`}>
            <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">What we connect and govern</p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {layer.connect.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[15px] leading-[22px] text-ink">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brand-ink" strokeWidth={2.4} />
                  {c}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-black/10 pt-5 text-[11px] font-bold uppercase tracking-[0.06em] text-brown t-mono">Examples we work with</p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {layer.tools.map((t) => (
                <li key={t.name} className="rounded-xl bg-[#fef8f5] p-4 shadow-[0_1px_2px_rgba(58,28,13,0.06)]">
                  <ToolName name={t.name} size={20} className="!justify-start text-[15px] font-semibold leading-5 text-ink" />
                  <p className="mt-1 text-[13px] leading-[19px] text-slate">{t.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
