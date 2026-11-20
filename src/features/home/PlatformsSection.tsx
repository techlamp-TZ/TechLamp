import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { PlatformStack } from "@/components/diagrams/PlatformStack";
import { SectionMotif } from "@/components/three/SectionMotif";

export function PlatformsSection() {
  return (
    <section id="platforms" aria-labelledby="platforms-title" className="relative overflow-hidden bg-paper">
      <SectionMotif label="One connected system" className="bottom-[10px] left-[20px]" />
      <Container className="relative pb-[68px] pt-12 lg:pt-[72px]">
        <div className="grid items-start gap-10 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-[62px]">
          <div>
            <p className="t-eyebrow mb-[12px]">04 / ENTERPRISE OPERATING STACK</p>
            <h2 id="platforms-title" className="t-h2 max-w-[420px] text-[36px] leading-[42px] lg:text-[42px] lg:leading-[48px] lg:tracking-[-0.005em] lg:mt-[7px]">
              Your platforms. One connected system.
            </h2>
            <p className="mt-[21px] max-w-[400px] text-[17px] leading-[26.1px] text-slate">
              We connect workplace, customer, operations, data, AI and cloud, preserving the tools your teams already trust.
            </p>
            <Button href="/platforms" variant="dark" icon="arrow" className="mt-[18px] !h-[44px] !px-[17px] !text-[13px]">
              Explore platform ecosystem
            </Button>
            <p className="t-mono mt-[16px] max-w-[400px] text-[10.5px] uppercase leading-4 tracking-[0.08em] text-slate-2">Platforms shown are examples we work with; no partnership implied.</p>
          </div>
          <PlatformStack />
        </div>
      </Container>
    </section>
  );
}
