import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { InfoCard, CardGrid, type CardTone } from "@/components/cards/InfoCard";
import { Button, TextLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CtaSection } from "@/features/home/CtaSection";
import { cn } from "@/lib/cn";
import { CAPABILITY_MAP, type Capability, type CapabilitySlug } from "@/data/capabilities";
import { CAPABILITY_DETAILS, type CapabilityDetail } from "@/data/capability-details";
import { FocusTabs } from "./FocusTabs";
import { CAPABILITY_VISUALS, LAYOUTS, type SectionKey } from "./visuals";
import { PANEL_BAR, PANEL_TEXT, STAGE_BORDER, STAGE_TEXT, TONE_TEXT } from "./accents";

/* ------------------------------ hero visual ------------------------------ */

function HeroPanel({ panel }: { panel: CapabilityDetail["hero"]["panel"] }) {
  return (
    <div className="rounded-[28px] bg-graphite p-4 shadow-[0_30px_60px_-30px_rgba(24,24,24,0.6)] sm:p-6">
      <div className="rounded-[14px] bg-[#262524] px-4 py-3">
        <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-[#a8a29c]">Business question</p>
        <p className="mt-1 text-[16px] font-semibold leading-[22px] text-white sm:text-[18px]">{panel.question}</p>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {panel.tiles.map((t) => (
          <div key={t.label} className="rounded-[12px] bg-white px-4 py-3">
            <dt className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">{t.label}</dt>
            <dd className={cn("mt-1 text-[22px] font-semibold leading-[30px] tracking-[-0.01em] sm:text-[24px]", PANEL_TEXT[t.tone])}>{t.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 rounded-[14px] bg-[#262524] px-4 py-4 sm:px-5">
        <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-[#a8a29c]">{panel.driversLabel}</p>
        <ul className="mt-4 space-y-4">
          {panel.drivers.map((d) => (
            <li key={d.label} className="grid grid-cols-[104px_1fr] items-center gap-3 sm:grid-cols-[140px_1fr]">
              <span className="t-mono text-[11px] uppercase leading-4 tracking-[0.06em] text-[#c9c2bb]">{d.label}</span>
              <span aria-hidden className="block h-2 rounded-full bg-white/10">
                <span className={cn("block h-full rounded-full", PANEL_BAR[d.tone])} style={{ width: `${d.pct}%` }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------ loop diagram ----------------------------- */

function Loop({ steps, note }: { steps: string[]; note: string }) {
  return (
    <div>
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:items-stretch lg:gap-0">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          const pen = i === steps.length - 2;
          return (
            <li key={s} className="flex min-w-0 items-center lg:flex-1">
              <div
                className={cn(
                  "flex min-h-[72px] w-full flex-col justify-center rounded-[14px] border px-3 py-3 text-center lg:min-h-[76px] lg:px-2",
                  last ? "border-[#3a1c0d] bg-[#3a1c0d] text-white" : pen ? "border-brand bg-brand-fill text-white" : "border-hair bg-white text-ink",
                )}
              >
                <span className={cn("t-mono text-[11px] font-semibold", last || pen ? "text-white" : "text-brand-ink")}>{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 text-[12px] font-bold uppercase leading-[15px] tracking-[0.02em] [overflow-wrap:anywhere]">{s}</span>
              </div>
              {!last && <ArrowRight aria-hidden className="mx-1 hidden h-3.5 w-3.5 shrink-0 text-brand-ink lg:block" strokeWidth={2.2} />}
            </li>
          );
        })}
      </ol>
      <p className="t-mono mt-8 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-ink">{note}</p>
    </div>
  );
}

/* ------------------------------ answers list ----------------------------- */

function Answers({ rows }: { rows: CapabilityDetail["answers"]["rows"] }) {
  return (
    <ol className="space-y-3">
      {rows.map((r, i) => (
        <li key={r.name} className="grid gap-x-6 gap-y-1 rounded-[14px] bg-[#f5eee5] px-5 py-5 md:grid-cols-[minmax(150px,0.8fr)_minmax(0,1fr)_minmax(0,1.3fr)] md:items-center">
          <p className="flex items-baseline gap-3">
            <span className="t-mono text-[11px] font-bold text-[#2f5bbd]">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[18px] font-extrabold uppercase tracking-[-0.005em] text-ink">{r.name}</span>
          </p>
          <p className={cn("text-[16px] font-semibold", TONE_TEXT[r.tone])}>{r.question}</p>
          <p className="text-[15px] leading-[22px] text-slate">{r.example}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------ driver tree ------------------------------ */

function DriverTree({ tree }: { tree: NonNullable<CapabilityDetail["tree"]> }) {
  const line = "bg-[#b9b0a6]";
  return (
    <div className="rounded-[28px] bg-[#f3ede4] p-5 sm:p-8">
      <div className="flex justify-center">
        <div className="t-mono rounded-[10px] bg-brand-fill px-8 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-white">{tree.root}</div>
      </div>
      <div aria-hidden className={cn("mx-auto h-6 w-px", line)} />
      <div className="relative grid grid-cols-2 gap-3 sm:gap-6">
        <div aria-hidden className={cn("absolute left-1/4 right-1/4 top-0 h-px", line)} />
        {tree.branches.map((b) => (
          <div key={b.label} className="relative pt-6">
            <div aria-hidden className={cn("absolute left-1/2 top-0 h-6 w-px", line)} />
            <div className="t-mono rounded-[10px] border border-hair bg-white px-3 py-4 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-brown sm:text-[12px]">{b.label}</div>
            <div aria-hidden className={cn("mx-auto h-6 w-px", line)} />
            <div className="relative grid grid-cols-2 gap-2 sm:gap-4">
              <div aria-hidden className={cn("absolute left-1/4 right-1/4 top-0 h-px", line)} />
              {b.leaves.map((l) => (
                <div key={l} className="relative pt-5">
                  <div aria-hidden className={cn("absolute left-1/2 top-0 h-5 w-px", line)} />
                  <div className="t-mono rounded-[10px] border border-hair bg-white px-2 py-3 text-center text-[11px] font-bold uppercase leading-4 tracking-[0.04em] text-brown [overflow-wrap:anywhere]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ signal flow ------------------------------ */

function StepArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center py-1 lg:px-3 lg:py-0">
      <ArrowRight aria-hidden className="h-5 w-5 rotate-90 text-brand-ink lg:rotate-0" strokeWidth={2} />
    </div>
  );
}

function Flow({ flow }: { flow: CapabilityDetail["flow"] }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch">
      <div className="rounded-[16px] bg-white p-5 lg:w-[30%]">
        <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-brown">{flow.inputsTitle}</p>
        <dl className="mt-3">
          {flow.inputs.map((r) => (
            <div key={r.k} className="flex justify-between gap-4 border-t border-hair py-3 first:border-0">
              <dt className="t-mono text-[11px] uppercase leading-4 tracking-[0.06em] text-slate-2">{r.k}</dt>
              <dd className="text-right text-[14px] font-medium text-ink">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
      {flow.stages.map((s) => (
        <div key={s.label} className="contents">
          <StepArrow />
          <div className={cn("flex flex-1 flex-col justify-center rounded-[16px] border bg-white px-5 py-6", STAGE_BORDER[s.tone])}>
            <p className={cn("t-mono text-[11px] font-bold uppercase tracking-[0.08em]", STAGE_TEXT[s.tone])}>{s.label}</p>
            <p className="mt-3 text-[16px] leading-6 text-slate">{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ proof process ---------------------------- */

function Proof({ proof }: { proof: CapabilityDetail["proof"] }) {
  return (
    <ol className="flex flex-col lg:flex-row lg:items-stretch">
      {proof.steps.map((s) => (
        <li key={s.label} className="contents">
          <div className="flex-1 rounded-[16px] border border-hair bg-white p-5">
            <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-brown">{s.label}</p>
            <p className="mt-3 text-[15px] leading-[22px] text-slate">{s.text}</p>
          </div>
          <StepArrow />
        </li>
      ))}
      <li className="flex-1 rounded-[16px] bg-brand-fill p-5 text-white">
        <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-white">Outcome</p>
        <p className="mt-3 text-[17px] font-semibold leading-6">{proof.outcome}</p>
      </li>
    </ol>
  );
}

/* --------------------------------- page ---------------------------------- */

const DELIVERABLE_TONES: CardTone[] = ["peach", "lilac", "sky", "mint", "cream", "white"];

/** Optional deep-dive page linked from a capability's own page, without altering its content. */
const DEEP_DIVE_LINKS: Partial<Record<CapabilitySlug, { label: string; href: string }>> = {
  "data-analytics-decision-intelligence": { label: "See the full data & analytics service catalog", href: "/capabilities/data-analytics-services" },
  "cloud-devops-platform-engineering": { label: "See the full cloud & managed services catalog", href: "/capabilities/cloud-managed-services" },
};

export function CapabilityDetailPage({ capability }: { capability: Capability }) {
  const d = CAPABILITY_DETAILS[capability.slug];
  const vis = CAPABILITY_VISUALS[capability.slug];
  const order = LAYOUTS[capability.slug].filter((k) => (k === "tree" ? !!d.tree : k === "areas" ? !!d.areas : true));
  const idx = (k: SectionKey) => String(order.indexOf(k) + 1).padStart(2, "0");
  const plain = (k: SectionKey) => (order.indexOf(k) % 2 === 0 ? "canvas" : "paper") as "canvas" | "paper";

  const render: Record<SectionKey, () => React.ReactNode> = {
    model: () =>
      vis ? (
        <Section key="model" id="model" tone={vis.signature.tone} index={idx("model")} eyebrow={vis.signature.eyebrow} title={vis.signature.title} aside={vis.signature.aside}>
          <vis.signature.Body />
        </Section>
      ) : (
        <Section key="model" id="model" tone="canvas" index={idx("model")} eyebrow="The model" title={d.loop.title} aside={d.loop.aside}>
          <Loop steps={d.loop.steps} note={d.loop.note} />
        </Section>
      ),
    answers: () => (
      <Section key="answers" id="answers" tone={plain("answers")} index={idx("answers")} eyebrow="What it answers" title={d.answers.title} aside={d.answers.text}>
        <Answers rows={d.answers.rows} />
      </Section>
    ),
    focus: () => (
      <section key="focus" id="focus" aria-labelledby="focus-title" className="bg-graphite text-white">
        <Container className="py-14 lg:py-[72px]">
          <SectionHeader
            id="focus-title"
            index={idx("focus")}
            eyebrow="Where the work concentrates"
            title={<span className="text-white">{d.focus.title}</span>}
            className="mb-8 [&_.t-eyebrow]:text-[#ff9a5c]"
          />
          <FocusTabs tabs={d.focus.tabs} />
        </Container>
      </section>
    ),
    tree: () =>
      d.tree ? (
        <Section key="tree" id="tree" tone="canvas" index={idx("tree")} eyebrow="Performance tree" title={d.tree.title}>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-14">
            <div>
              <p className="t-body max-w-[360px]">{d.tree.text}</p>
              <p className="t-mono mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-ink">
                Example metric <i aria-hidden className="h-2 w-2 rounded-full bg-brand" /> {d.tree.root}
              </p>
            </div>
            <DriverTree tree={d.tree} />
          </div>
        </Section>
      ) : null,
    deliverables: () => (
      <Section key="deliverables" id="deliverables" tone={plain("deliverables")} index={idx("deliverables")} eyebrow="Deliverables" title="What you receive.">
        <CardGrid cols={3}>
          {d.deliverables.map((x, i) => (
            <InfoCard key={x.label} tone={DELIVERABLE_TONES[i % DELIVERABLE_TONES.length]} eyebrow={`Deliverable ${String(i + 1).padStart(2, "0")}`} title={x.label}>
              {x.text}
            </InfoCard>
          ))}
        </CardGrid>
      </Section>
    ),
    flow: () => (
      <section key="flow" id="flow" aria-labelledby="flow-title" className="bg-[#eef1f1]">
        <Container className="py-14 lg:py-[72px]">
          <SectionHeader
            id="flow-title"
            index={idx("flow")}
            eyebrow="From business systems to decisions"
            title={d.flow.title}
            aside="Intended coverage. Delivery scope is confirmed during discovery."
            asideWidth={300}
            className="mb-8 lg:mb-[44px]"
          />
          <Flow flow={d.flow} />
        </Container>
      </section>
    ),
    areas: () =>
      d.areas ? (
        <Section key="areas" id="solutions" tone="canvas" index={idx("areas")} eyebrow="Solution areas" title="Where this shows up in the business.">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
            {d.areas.map((a) => (
              <div key={a.title}>
                <h3 className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-brown">{a.title}</h3>
                <ul className="mt-3">
                  {a.items.map((it, i) => (
                    <li key={it} className="flex items-center justify-between gap-3 border-t border-hair py-4 last:border-b">
                      <span className="flex items-baseline gap-3">
                        <span className="t-mono text-[11px] text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[17px] font-semibold leading-6 text-ink">{it}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-slate-2" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      ) : null,
    proof: () => (
      <Section key="proof" id="proof" tone="cream" index={idx("proof")} eyebrow="Proof through process" title={d.proof.title}>
        <div className="mb-6">
          <StatusBadge status="illustrative" />
        </div>
        <Proof proof={d.proof} />
      </Section>
    ),
  };

  const Hero = vis?.Hero;

  return (
    <>
      <PageHero
        tone={vis?.heroTone}
        crumbs={[{ label: "Capabilities", href: "/capabilities" }, { label: capability.name }]}
        eyebrow={capability.name}
        title={
          <>
            {d.hero.title.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </>
        }
        lede={d.hero.lede}
        actions={
          <>
            <Button href={d.hero.primary.href} icon="arrow">
              {d.hero.primary.label}
            </Button>
            <Button href={d.hero.secondary.href} variant="secondary" icon="arrow">
              {d.hero.secondary.label}
            </Button>
          </>
        }
        visual={Hero ? <Hero /> : <HeroPanel panel={d.hero.panel} />}
      />

      {order.map((k) => render[k]())}

      {DEEP_DIVE_LINKS[capability.slug] && (
        <div className="bg-canvas">
          <Container className="pb-10 lg:pb-[72px]">
            <TextLink href={DEEP_DIVE_LINKS[capability.slug]!.href}>{DEEP_DIVE_LINKS[capability.slug]!.label}</TextLink>
          </Container>
        </div>
      )}

      <Section id="related" tone="canvas" eyebrow="Related capabilities" title="Often part of the same engagement.">
        <CardGrid cols={3}>
          {capability.related.map((slug, i) => {
            const r = CAPABILITY_MAP[slug];
            return (
              <InfoCard key={slug} tone={(["peach", "lilac", "sky"] as CardTone[])[i % 3]} eyebrow={`${r.n} / ${r.group}`} title={r.name} href={`/capabilities/${slug}`} linkLabel="Explore this capability">
                {r.problem}
              </InfoCard>
            );
          })}
        </CardGrid>
      </Section>

      <CtaSection title={d.cta.title} text={d.cta.text} />
    </>
  );
}
