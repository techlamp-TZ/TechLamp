import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { IntelligenceLoop } from "@/components/diagrams/IntelligenceLoop";
import { SectionMotif } from "@/components/three/SectionMotif";

export function LoopSection() {
  return (
    <section id="intelligence-loop" aria-labelledby="loop-title" className="relative overflow-hidden bg-canvas">
      <SectionMotif label="Intelligence in motion" className="right-[24px] top-[6px]" />
      <Container className="relative pb-[24px] pt-12 lg:pt-[64px]">
        <div className="mb-8 flex flex-col gap-6 lg:mb-[34px] lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div>
            <p className="t-eyebrow mb-[12px]">01 / THE OPERATING MODEL</p>
            <h2 id="loop-title" className="t-h2 max-w-[600px]">
              From signal to decision to action.
            </h2>
            <p className="t-mono mt-3 text-[11px] uppercase leading-4 tracking-[0.08em] text-slate-2">
              A continuous cycle for a smarter, more resilient business.
            </p>
          </div>
          <div className="lg:max-w-[380px] lg:pt-[6px]">
            <p className="t-body">A continuous operating model that learns from every outcome — not a collection of disconnected tools.</p>
            <Button href="/capabilities" variant="dark" icon="arrow" className="mt-[18px] !h-[44px] !px-[18px] !text-[13px]">
              Explore all capabilities
            </Button>
          </div>
        </div>

        <IntelligenceLoop />

        <div className="mt-8 flex flex-col gap-2 border-t border-hair pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-mono flex flex-wrap items-center gap-x-2 gap-y-1 text-[10.5px] uppercase leading-4 tracking-[0.06em] text-slate-2">
            <span>More signals.</span>
            <span aria-hidden className="text-[#ccc3b8]">
              |
            </span>
            <span>Better decisions.</span>
            <span aria-hidden className="text-[#ccc3b8]">
              |
            </span>
            <span>Brighter outcomes.</span>
          </p>
          <p className="t-mono text-[10.5px] uppercase leading-4 tracking-[0.06em] text-slate-2">— Built for what&apos;s next</p>
        </div>
      </Container>
    </section>
  );
}
