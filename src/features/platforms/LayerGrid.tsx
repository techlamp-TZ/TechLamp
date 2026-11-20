import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PLATFORM_LAYERS } from "@/data/platforms";

const panel = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint" };

/** Index grid: one card per platform layer, linking to its own page at /platforms/[slug]. */
export function LayerGrid() {
  return (
    <section id="layers" aria-labelledby="layers-title" className="scroll-mt-24 bg-cream">
      <Container className="py-14 lg:py-[72px]">
        <SectionHeader id="layers-title" index="02" eyebrow="The six layers" title="Explore each layer." aside="Every layer names what we connect and govern, and the tools we typically use." className="mb-8 lg:mb-[44px]" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_LAYERS.map((l) => (
            <Link key={l.id} href={`/platforms/${l.id}`} className={`group flex flex-col gap-3 rounded-[24px] p-6 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)] ${panel[l.tone]}`}>
              <div className="flex items-start justify-between gap-3">
                <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">
                  {l.index} / {l.label}
                </p>
                <ArrowRight aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-slate-2 transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="text-[20px] font-semibold leading-7 text-ink">{l.title}</h3>
              <p className="text-[14.5px] leading-[21px] text-slate">{l.summary}</p>
              <p className="t-mono mt-auto pt-2 text-[10.5px] uppercase tracking-[0.06em] text-brown">{l.tools.length} example tools</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
