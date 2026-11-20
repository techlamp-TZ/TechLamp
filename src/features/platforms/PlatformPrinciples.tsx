import { Section } from "@/components/layout/Section";
import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { LAYER_FLOW, PLATFORM_PRINCIPLES } from "@/data/platforms";

export function PlatformPrinciples() {
  return (
    <Section id="principles" tone="canvas" index="01" eyebrow="How we approach platforms" title="Connected by design" aside="Whatever the mix of tools, the same three principles decide how we connect them.">
      <CardGrid cols={3}>
        {PLATFORM_PRINCIPLES.map((p) => (
          <InfoCard key={p.title} tone={p.tone} eyebrow={p.eyebrow} title={p.title}>
            {p.text}
          </InfoCard>
        ))}
      </CardGrid>
    </Section>
  );
}

export function LayerFlow() {
  return (
    <Section id="flow" tone="paper" index="02" eyebrow="How the layers connect" title="One path from sign-in to cloud" aside="Each shared concern is designed once and applied to every layer above and below it.">
      <ol className="grid gap-4 md:grid-cols-5">
        {LAYER_FLOW.map((s, i) => (
          <li key={s.label} className="relative rounded-[20px] border border-hair bg-canvas p-5">
            <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brand-ink">Step {String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-[20px] font-medium leading-[26px] text-ink">{s.label}</h3>
            <p className="mt-2 text-[15px] leading-[22px] text-slate">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
