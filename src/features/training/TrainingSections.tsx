import { Award, BarChart3, Laptop, Shield, User, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ToolName } from "@/components/ui/ToolName";
import { CardGrid, InfoCard } from "@/components/cards/InfoCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LevelExplorer } from "@/features/training/LevelExplorer";
import { CORPORATE_STEPS, CURRICULUM, DELIVERY_MODES, LABS, PATHS, TRACE } from "@/data/training";

const CAPABILITY_NODES = [
  { l: "Learn", x: 68, y: 16, c: "#3e6fd9", Icon: User },
  { l: "Certify", x: 87, y: 50, c: "#7a4fc2", Icon: Award },
  { l: "Apply", x: 68, y: 84, c: "#3e6fd9", Icon: BarChart3 },
  { l: "Build projects", x: 49, y: 50, c: "#ff5a00", Icon: Laptop },
];

/** Illustrative capability model: a learning cycle around one center, radiating out to a ring of stages. */
export function CapabilityDiagram() {
  return (
    <div aria-hidden className="relative h-[300px] overflow-hidden rounded-[24px] bg-[#0f1216] sm:h-[360px] lg:h-[560px]">
      <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-[38%] w-[34%] opacity-70">
        <path d="M 2 62 A 60 60 0 0 1 62 2" fill="none" stroke="#ff8a4d" strokeWidth="1.4" />
      </svg>

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <circle cx="68" cy="50" r="30" fill="none" stroke="#3a3a3a" strokeWidth="0.4" strokeDasharray="1.6 2.4" />
        {CAPABILITY_NODES.map((n) => (
          <circle key={n.l} cx={n.x} cy={n.y} r="0.9" fill={n.c} />
        ))}
      </svg>

      <span className="absolute left-[68%] top-1/2 grid h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-fill text-center sm:h-[110px] sm:w-[110px] lg:h-[140px] lg:w-[140px]">
        <span className="t-mono text-[11px] font-bold uppercase leading-4 text-white">
          Capability
          <br />
          <span className="text-[26px] leading-8">01</span>
        </span>
      </span>

      {CAPABILITY_NODES.map((n) => (
        <span
          key={n.l}
          className="t-mono absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-[8px] border bg-[#151a20] px-[7px] py-[5px] text-[8.5px] font-bold uppercase text-white sm:gap-2 sm:rounded-[10px] sm:px-3 sm:py-[9px] sm:text-[11px]"
          style={{ left: `${n.x}%`, top: `${n.y}%`, borderColor: n.c }}
        >
          <n.Icon aria-hidden className="h-[10px] w-[10px] sm:h-[13px] sm:w-[13px]" style={{ color: n.c }} strokeWidth={2} />
          {n.l}
        </span>
      ))}

      <p className="t-mono absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.08em] text-white/60">People / Skills / Outcomes — illustrative</p>
    </div>
  );
}

const HERO_ICONS = { users: Users, laptop: Laptop, chart: BarChart3, shield: Shield } as const;

export function HeroFeatures({ items }: { items: readonly { icon: keyof typeof HERO_ICONS; label: string }[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
      {items.map((f) => {
        const Icon = HERO_ICONS[f.icon];
        return (
          <li key={f.label} className="flex items-center gap-[10px]">
            <Icon aria-hidden className="h-5 w-5 shrink-0 text-slate-2" strokeWidth={1.5} />
            <span className="text-[14px] leading-[19px] text-slate">{f.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function CurriculumSection() {
  return (
    <Section
      id="skills"
      tone="canvas"
      index="01"
      eyebrow="THE CURRICULUM"
      title="Technology skills, mapped to the work ahead."
      aside="Subject areas we plan to teach. Listing a tool here names a topic only. It does not imply a partnership, vendor accreditation or a confirmed course date."
    >
      <div className="mb-6">
        <StatusBadge status="pending" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {CURRICULUM.map((c) => (
          <div key={c.title} className="rounded-[24px] border border-hair bg-white p-6">
            <h3 className="t-mono text-[12px] font-bold uppercase leading-4 tracking-[0.06em] text-brand-ink">{c.title}</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-6 text-ink">
              {c.items.map((i) => (
                <li key={i}>
                  <ToolName name={i} size={18} className="!justify-start" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function PathsSection() {
  return (
    <Section id="paths" tone="paper" index="02" eyebrow="LEARNING PATHS" title="Create momentum. Build mastery.">
      <div className="grid gap-5 lg:grid-cols-3">
        {PATHS.map((p) => (
          <article key={p.title} className="flex flex-col rounded-[28px] bg-graphite p-7 text-white">
            <p className="t-mono text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-[#ff8a4d]">FOUNDATION → PRACTITIONER → PROFESSIONAL → SPECIALIST</p>
            <h3 className="mt-6 text-[28px] font-bold uppercase leading-8">{p.title}</h3>
            <p className="mt-3 text-[16px] leading-6 text-white/75">{p.text}</p>
            <p className="t-mono mt-5 text-[12px] leading-5 text-[#6fd0b0]">{p.chain}</p>
            <div className="mt-6 border-t border-white/15 pt-5">
              <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-[#ff8a4d]">{p.group}</p>
              <ul className="mt-3 space-y-2 text-[15px] text-white/85">
                {p.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="t-mono mt-5 text-[11px] uppercase tracking-[0.06em] text-slate-2">Path outlines are planned. Programme dates and durations: PENDING PUBLICATION.</p>
      <div className="mt-8">
        <LevelExplorer />
      </div>
    </Section>
  );
}

export function DeliverySection() {
  return (
    <Section tone="canvas" index="03" eyebrow="DELIVERY MODES" title="Designed around the way your people learn.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="t-body max-w-[520px]">From a focused bootcamp to a multi-team capability programme, we combine the right format, pace and support for the outcome you need.</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {DELIVERY_MODES.map((m) => (
              <li key={m} className="t-mono rounded-[10px] bg-graphite px-4 py-3 text-[12px] font-bold text-white">
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] bg-graphite p-7 text-white">
          <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#ff8a4d]">EVERY PROGRAMME LEAVES A TRACE</p>
          <ol className="mt-5 space-y-4">
            {TRACE.map((t, i) => (
              <li key={t} className="flex items-baseline gap-4 text-[18px]">
                <span className="t-mono text-[12px] text-[#6fd0b0]">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export function LabsSection() {
  return (
    <Section id="labs" tone="sky" index="04" eyebrow="LABS & PROJECTS" title="Practice on work that looks like work.">
      <CardGrid>
        {LABS.map((l, i) => (
          <InfoCard key={l.title} tone="white" eyebrow={`FORMAT 0${i + 1}`} title={l.title}>
            {l.text}
          </InfoCard>
        ))}
      </CardGrid>
      <p className="t-mono mt-5 text-[11px] uppercase tracking-[0.06em] text-brown">Lab catalogue: PENDING PUBLICATION.</p>
    </Section>
  );
}

export function CertificationSection() {
  return (
    <Section id="certification" tone="paper" index="05" eyebrow="CERTIFICATION ALIGNMENT" title="Certification is a learning objective, not a claim.">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-hair bg-white p-7 lg:p-8">
          <StatusBadge status="pending" />
          <p className="mt-5 text-[17px] leading-7 text-slate">
            Some learning paths are planned with a vendor certification as one of the learning objectives. That is the extent of it. No accreditation, authorised training partner status or exam pass rate is implied, and we do not issue third-party certificates.
          </p>
          <p className="mt-4 text-[17px] leading-7 text-slate">Where an offering is confirmed, this page will name the certification, the exam body and what the programme does and does not cover.</p>
        </div>
        <ul className="space-y-3 rounded-[28px] bg-lilac p-7 text-[16px] leading-6 text-ink">
          <li>Assessment stages inside each programme: PENDING PUBLICATION</li>
          <li>Certification pathways by role: PENDING PUBLICATION</li>
          <li>Exam preparation formats: PENDING PUBLICATION</li>
        </ul>
      </div>
    </Section>
  );
}

export function CorporateSection() {
  return (
    <Section tone="canvas" index="06" eyebrow="CORPORATE TRAINING" title="Move from skill gaps to measurable impact." aside="A practical operating model for building capability across teams, roles and regions.">
      <ol className="grid overflow-hidden rounded-[20px] border border-hair bg-cream sm:grid-cols-2 lg:grid-cols-6">
        {CORPORATE_STEPS.map((s, i) => (
          <li key={s} className={i === CORPORATE_STEPS.length - 1 ? "bg-graphite p-5 text-white" : "border-b border-r border-hair p-5"}>
            <span className="t-mono text-[11px] font-bold text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
            <span className="mt-3 block text-[15px] font-bold uppercase leading-5">{s}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
