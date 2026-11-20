import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { OperationsFlow } from "@/components/diagrams/OperationsFlow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { toneBg } from "@/components/diagrams/OperatingSystemDiagram";
import { OPS_ROWS } from "@/data/home";

// No decorative 3D motif here on purpose: unlike Loop/Platforms, every part of this
// section (header, tiles, flow rows, footnote) is already filled with real content —
// there's no genuine empty space to place one without it overlapping text or rows.
export function OperationsSection() {
  return (
    <section id="operations" aria-labelledby="ops-title" className="bg-cream">
      <Container className="pb-[72px] pt-12 lg:pt-[74px]">
        <SectionHeader
          id="ops-title"
          index="03"
          eyebrow="REAL BUSINESS OPERATIONS"
          title="Intelligence, at work."
          aside="See how platforms, evidence and expertise connect around outcomes — with people in control."
          link={{ href: "/case-studies", label: "View case studies" }}
          className="mb-8 lg:mb-[34px]"
          titleClassName="lg:tracking-normal"
        />
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mb-8">
          {OPS_ROWS.map((row) => (
            <div key={row.id} className={`rounded-[16px] p-4 ${toneBg[row.tone]}`}>
              <p className="t-mono text-[10px] uppercase tracking-[0.06em] text-brown">{row.title}</p>
              <p className="mt-1 text-[22px] font-semibold leading-7 text-ink">{row.outcome}</p>
              <StatusBadge status="illustrative" className="mt-2 !h-[22px] !px-[11px] !text-[8.5px]" />
            </div>
          ))}
        </div>
        <OperationsFlow />
        <p className="t-mono mt-5 text-right text-[10.5px] uppercase leading-4 tracking-[0.1em] text-slate-2">
          Illustrative flows and outcomes; named platforms are examples and imply no partnership. Each case study states its own evidence status.
        </p>
      </Container>
    </section>
  );
}
