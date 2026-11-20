import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUp, Check, Lock, ShieldCheck, UserCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CapabilitySlug } from "@/data/capabilities";

/**
 * Each capability gets its own hero diagram and its own signature section, so the ten pages
 * explain different things in different shapes instead of repeating one template.
 * Content is qualitative: no metrics, no client data.
 */

/* ------------------------------ primitives ------------------------------ */

/**
 * `tone` picks the text color instead of passing a color className: this file's `cn()` is a plain
 * string-join (no Tailwind-merge), so a color className passed alongside the base `text-slate-2`
 * doesn't reliably override it — both classes land in the DOM and whichever the compiled stylesheet
 * happens to order last wins, regardless of source order. `tone` keeps exactly one color utility
 * in the class list at all times.
 */
function Lbl({ children, className, tone = "default" }: { children: ReactNode; className?: string; tone?: "default" | "dark" | "accent" }) {
  const toneClass = { default: "text-slate-2", dark: "text-[#a8a29c]", accent: "text-[#ff9a5c]" }[tone];
  return <p className={cn("t-mono text-[10.5px] uppercase leading-4 tracking-[0.08em]", toneClass, className)}>{children}</p>;
}
function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("t-mono inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em]", className)}>{children}</span>;
}
function Box({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-[14px] p-3.5 shadow-[0_1px_2px_rgba(58,28,13,0.08)]", className?.includes("bg-") ? "" : "bg-white", className)}>{children}</div>;
}
function Frame({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={cn("rounded-[28px] p-5 sm:p-6", dark ? "bg-graphite text-white shadow-[0_30px_60px_-30px_rgba(24,24,24,0.6)]" : cn("shadow-[0_24px_50px_-32px_rgba(58,28,13,0.3)] ring-1 ring-black/5", className?.includes("bg-") ? "" : "bg-white/70"), className)}>{children}</div>
  );
}

/* ---------------------------------- heroes ---------------------------------- */

function AiHero() {
  const rows = [
    { t: "Request arrives", s: "Email, form or chat message" },
    { t: "Model reads and drafts", s: "Reply drafted from approved knowledge", meter: true },
    { t: "Policy check", s: "Refunds and exceptions go to a person" },
    { t: "Person approves or edits", s: "The decision stays human", hot: true },
    { t: "Sent and logged", s: "Source, reason and reviewer are kept" },
  ];
  return (
    <Frame className="bg-[#fbeee3]">
      <Lbl>Assisted request handling</Lbl>
      <ol className="mt-4 space-y-2.5">
        {rows.map((r, i) => (
          <li key={r.t} className="relative">
            <Box className={cn("flex items-center gap-3", r.hot && "bg-brand-fill text-white")}>
              <span className={cn("t-mono grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold", r.hot ? "bg-white/20 text-white" : "bg-[#fbeee3] text-brown")}>{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold leading-5">{r.t}</p>
                <p className={cn("text-[13px] leading-[18px]", r.hot ? "text-white" : "text-slate")}>{r.s}</p>
              </div>
              {r.meter && (
                <span aria-label="Confidence shown to the reviewer" className="hidden shrink-0 items-end gap-[3px] sm:flex">
                  {[10, 16, 22].map((h, k) => (
                    <i key={k} style={{ height: h }} className={cn("w-[5px] rounded-sm", k < 2 ? "bg-[#ff5a00]" : "bg-[#e7c9b3]")} />
                  ))}
                </span>
              )}
            </Box>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function DataHero() {
  const layers = [
    { t: "Reports, alerts and decisions", w: "w-[62%]", c: "bg-[#c84300] text-white" },
    { t: "Semantic layer: shared definitions", w: "w-[74%]", c: "bg-[#6a3fb0] text-white" },
    { t: "Governed data model", w: "w-[86%]", c: "bg-[#3e6fd9] text-white" },
    { t: "Ingest and quality checks", w: "w-[94%]", c: "bg-[#2a3a55] text-white" },
    { t: "ERP, CRM, files and spreadsheets", w: "w-full", c: "bg-[#33312f] text-[#d8d2cc]" },
  ];
  return (
    <Frame dark>
      <Lbl tone="dark">From source to decision</Lbl>
      <div className="mt-5 flex flex-col items-center gap-2">
        {layers.map((l) => (
          <div key={l.t} className={cn("rounded-[12px] px-4 py-3 text-center text-[14px] font-medium leading-5", l.w, l.c)}>
            {l.t}
          </div>
        ))}
      </div>
      <p className="t-mono mt-4 flex items-center gap-2 text-[10.5px] uppercase tracking-[0.08em] text-[#a8a29c]">
        <ArrowDown aria-hidden className="h-3.5 w-3.5 -scale-y-100" /> Data moves up. Definitions are agreed once.
      </p>
    </Frame>
  );
}

function OrHero() {
  return (
    <Frame className="bg-[#eef1f1]">
      <Lbl>Feasible plans and the best trade-off</Lbl>
      <svg viewBox="0 0 400 280" role="img" aria-label="Chart of feasible plans bounded by constraints, with the best plan marked on the frontier" className="mt-3 h-auto w-full">
        <rect x="0" y="0" width="400" height="280" rx="14" fill="#ffffff" />
        <path d="M50 230 H360 M50 230 V30" stroke="#b9b3ac" strokeWidth="1.5" fill="none" />
        <path d="M50 230 L50 90 Q120 60 200 70 Q290 84 330 140 L330 230 Z" fill="#dfe9f1" />
        <path d="M50 90 Q120 60 200 70 Q290 84 330 140" stroke="#3e6fd9" strokeWidth="2.5" fill="none" />
        <path d="M50 150 L330 60" stroke="#c2456b" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M120 230 L300 30" stroke="#7a4fc2" strokeWidth="1.5" strokeDasharray="5 5" />
        {[[110, 190], [160, 160], [220, 175], [270, 190], [200, 130], [140, 120], [250, 140]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#9db7e6" />
        ))}
        <circle cx="228" cy="78" r="9" fill="#ff5a00" />
        <circle cx="228" cy="78" r="15" fill="none" stroke="#ff5a00" strokeOpacity="0.4" />
        <text x="244" y="66" fontSize="12" fill="#181818" fontWeight="600">Best feasible plan</text>
        <text x="200" y="250" fontSize="11" fill="#5b5855" textAnchor="middle">Cost</text>
        <text x="20" y="130" fontSize="11" fill="#5b5855" transform="rotate(-90 20 130)" textAnchor="middle">Service level</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip className="bg-[#dfe9f1] text-[#2f5bbd]">Feasible region</Chip>
        <Chip className="bg-[#f6dbe4] text-[#a3345a]">Rule: capacity</Chip>
        <Chip className="bg-[#e6dcf5] text-[#6a3fb0]">Rule: skills</Chip>
        <Chip className="bg-[#ffe1cc] text-brand-ink">Chosen plan</Chip>
      </div>
    </Frame>
  );
}

function AgenticHero() {
  const flow = ["Goal", "Plan", "Use tools", "Check", "Human gate"];
  const perms = [
    { i: Check, k: "Allowed", v: "Read orders, draft a reply", c: "text-[#2fcf94]" },
    { i: UserCheck, k: "Needs approval", v: "Refunds, contract changes", c: "text-[#ff9a5c]" },
    { i: Lock, k: "Blocked", v: "Delete records, change access", c: "text-[#ff7a8f]" },
  ];
  return (
    <Frame dark>
      <Lbl tone="dark">An agent working inside limits</Lbl>
      <ol className="mt-4 flex flex-wrap items-center gap-2">
        {flow.map((f, i) => (
          <li key={f} className="flex items-center gap-2">
            <span className={cn("rounded-[10px] px-3 py-2 text-[13px] font-semibold", i === 4 ? "bg-brand-fill text-white" : "bg-[#33312f] text-white")}>{f}</span>
            {i < flow.length - 1 && <ArrowRight aria-hidden className="h-3.5 w-3.5 text-[#a8a29c]" />}
          </li>
        ))}
      </ol>
      <p className="t-mono mt-2 text-[10.5px] uppercase tracking-[0.08em] text-[#a8a29c]">If a check fails, the agent replans or stops</p>
      <ul className="mt-5 divide-y divide-white/10 rounded-[14px] bg-[#262524]">
        {perms.map((p) => (
          <li key={p.k} className="flex items-center gap-3 px-4 py-3">
            <p.i aria-hidden className={cn("h-4 w-4 shrink-0", p.c)} />
            <span className={cn("t-mono w-[112px] shrink-0 text-[11px] font-bold uppercase tracking-[0.06em]", p.c)}>{p.k}</span>
            <span className="text-[14px] leading-5 text-white">{p.v}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function CloudHero() {
  const stages = ["Commit", "Build", "Test", "Deploy", "Observe"];
  return (
    <Frame className="bg-[#e4eef6]">
      <Lbl>One path from change to production</Lbl>
      <ol className="mt-4 grid grid-cols-5 gap-1.5">
        {stages.map((s, i) => (
          <li key={s} className={cn("rounded-[10px] px-1 py-3 text-center text-[12.5px] font-semibold", i === 3 ? "bg-[#3e6fd9] text-white" : "bg-white text-ink")}>
            {s}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Dev", "Staging", "Production"].map((e, i) => (
          <div key={e} className={cn("rounded-[10px] border px-2 py-2.5 text-center text-[12px] font-medium", i === 2 ? "border-[#3e6fd9] bg-white text-[#2f5bbd]" : "border-[#b6c9df] text-slate")}>
            {e}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-[13px] leading-[18px] text-slate">
        <Box>Infrastructure defined as code, reviewed like any change.</Box>
        <Box>Alerts open issues that go back into the pipeline.</Box>
      </div>
    </Frame>
  );
}

function SoftwareHero() {
  return (
    <Frame dark>
      <Lbl tone="dark">System structure and release path</Lbl>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-[1fr_72px]">
        <div className="space-y-2.5">
          <div className="rounded-[12px] bg-[#3e6fd9] px-4 py-3 text-center text-[14px] font-semibold">Web and mobile</div>
          <div className="grid grid-cols-3 gap-2">
            {["Accounts", "Orders", "Reports"].map((s) => (
              <div key={s} className="rounded-[12px] bg-[#33312f] px-2 py-4 text-center text-[13px] font-medium">
                {s}
              </div>
            ))}
          </div>
          <div className="rounded-[12px] bg-[#262524] px-4 py-2 text-center text-[12px] text-[#a8a29c]">API gateway</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[12px] bg-[#6a3fb0] px-3 py-3 text-center text-[13px] font-medium">Data store</div>
            <div className="rounded-[12px] bg-[#8a5c00] px-3 py-3 text-center text-[13px] font-medium">Integrations</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 rounded-[12px] bg-brand-fill px-2 py-3 text-center text-[11.5px] font-bold uppercase tracking-[0.06em] sm:flex-col">
          <span>Review</span>
          <span aria-hidden>·</span>
          <span>Test</span>
          <span aria-hidden>·</span>
          <span>Release</span>
        </div>
      </div>
    </Frame>
  );
}

function EnterpriseHero() {
  const spoke = (t: string, s: string) => (
    <Box className="text-center">
      <p className="text-[14px] font-semibold leading-5">{t}</p>
      <p className="text-[12.5px] leading-[17px] text-slate">{s}</p>
    </Box>
  );
  return (
    <Frame className="bg-[#f7e6d8]">
      <Lbl>Connected business applications</Lbl>
      <div className="mt-4 grid grid-cols-3 items-center gap-2.5">
        <span />
        {spoke("Finance and ERP", "Orders, invoices, stock")}
        <span />
        {spoke("Customer and CRM", "Accounts, cases")}
        <div className="grid aspect-square place-items-center rounded-full bg-brand-fill p-2 text-center text-[12px] font-bold leading-4 text-white">
          Integration
          <br />
          and sign-on
        </div>
        {spoke("Workplace", "Files, chat, approvals")}
        <span />
        {spoke("Service desk", "Requests, incidents")}
        <span />
      </div>
      <p className="t-mono mt-4 text-[10.5px] uppercase tracking-[0.08em] text-slate-2">One identity. Data moves between systems by rule.</p>
    </Frame>
  );
}

function LearningHero() {
  const steps = [
    { t: "Foundation", s: "Shared concepts", h: "h-[84px]" },
    { t: "Practitioner", s: "Guided practice", h: "h-[124px]" },
    { t: "Professional", s: "Real project", h: "h-[164px]" },
    { t: "Specialist", s: "Coaching and review", h: "h-[204px]" },
  ];
  return (
    <Frame className="bg-[#e0ece6]">
      <Lbl>A path people can climb</Lbl>
      <ol className="mt-4 flex items-end gap-2">
        {steps.map((s, i) => (
          <li key={s.t} className={cn("flex flex-1 flex-col justify-end rounded-t-[14px] rounded-b-[6px] p-3", s.h, i === 3 ? "bg-[#237049] text-white" : "bg-white text-ink")}>
            <span className="t-mono text-[10.5px] font-bold uppercase tracking-[0.06em] opacity-80">0{i + 1}</span>
            <span className="text-[14px] font-semibold leading-5">{s.t}</span>
            <span className={cn("text-[12.5px] leading-[17px]", i === 3 ? "text-white" : "text-slate")}>{s.s}</span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function ConsultingHero() {
  const cols = [
    { t: "Now", c: "bg-[#c84300] text-white", items: ["Map current systems", "Agree the few priorities"] },
    { t: "Next", c: "bg-[#6a3fb0] text-white", items: ["Pilot one workflow", "Set owners and measures"] },
    { t: "Later", c: "bg-[#3e6fd9] text-white", items: ["Scale what worked", "Hand over and support"] },
  ];
  return (
    <Frame dark>
      <Lbl tone="dark">A roadmap in three horizons</Lbl>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
        {cols.map((c) => (
          <div key={c.t} className="rounded-[14px] bg-[#262524] p-2.5">
            <p className={cn("t-mono rounded-[8px] px-3 py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.08em]", c.c)}>{c.t}</p>
            <ul className="mt-2.5 space-y-2">
              {c.items.map((it) => (
                <li key={it} className="rounded-[10px] bg-[#33312f] px-3 py-2.5 text-[13.5px] leading-5">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="t-mono mt-3 flex items-center gap-2 rounded-[10px] bg-[#262524] px-3 py-2.5 text-[11px] uppercase tracking-[0.08em] text-[#d8d2cc]">
        <ShieldCheck aria-hidden className="h-4 w-4 shrink-0 text-[#2fcf94]" /> Decisions, risks and owners reviewed on a set rhythm
      </p>
    </Frame>
  );
}

function BusinessAnalyticsHero() {
  const scatter = [
    [70, 96], [96, 78], [120, 90], [86, 66], [140, 74], [112, 104],
  ] as const;
  const drivers = [
    { k: "Volume", up: true, w: "w-[82%]" },
    { k: "Retention", up: true, w: "w-[58%]" },
    { k: "Price", up: false, w: "w-[34%]" },
    { k: "Mix", up: true, w: "w-[48%]" },
  ];
  return (
    <Frame className="bg-[#fbeee3]">
      <Lbl>What happened, why, and what&apos;s likely next</Lbl>
      <svg viewBox="0 0 400 150" role="img" aria-label="Scattered data resolving into a rising trend, continued as a forecast range" className="mt-3 h-auto w-full">
        <rect x="0" y="0" width="400" height="150" rx="12" fill="#ffffff" />
        <path d="M40 120 H372 M40 120 V20" stroke="#d8cfc4" strokeWidth="1.5" fill="none" />
        {scatter.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#c9bdb0" />
        ))}
        <path d="M300 40 L366 24 L366 58 L300 52 Z" fill="#f7dfce" opacity="0.75" />
        <path d="M64 102 L112 84 L160 88 L208 60 L256 64 L300 44" stroke="#a93800" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M300 44 L366 34" stroke="#c84300" strokeWidth="2" strokeDasharray="5 5" fill="none" />
        <circle cx="300" cy="44" r="4.5" fill="#ff5a00" />
        <text x="312" y="26" fontSize="11" fill="#5b5855">Forecast range</text>
      </svg>
      <div className="mt-4">
        <Lbl>Drivers of the change</Lbl>
        <ul className="mt-2.5 space-y-2">
          {drivers.map((d) => (
            <li key={d.k} className="grid grid-cols-[86px_1fr_18px] items-center gap-2.5">
              <span className="t-mono text-[11px] uppercase leading-4 tracking-[0.06em] text-brown">{d.k}</span>
              <span aria-hidden className="block h-2 rounded-full bg-[#efe1d4]">
                <span className={cn("block h-full rounded-full", d.up ? "bg-[#1f6f47]" : "bg-[#c2456b]", d.w)} />
              </span>
              {d.up ? <ArrowUp aria-hidden className="h-4 w-4 text-[#1f6f47]" strokeWidth={2.4} /> : <ArrowDown aria-hidden className="h-4 w-4 text-[#c2456b]" strokeWidth={2.4} />}
            </li>
          ))}
        </ul>
        <p className="t-mono mt-3 text-[10.5px] uppercase tracking-[0.08em] text-slate-2">Illustrative shape — direction, not a client figure.</p>
      </div>
    </Frame>
  );
}

/* ------------------------- signature sections ------------------------- */

function Cols3({ cols }: { cols: { t: string; sub: string; tone: string; items: string[] }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cols.map((c) => (
        <div key={c.t} className={cn("rounded-[24px] p-6", c.tone)}>
          <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-brown">{c.t}</p>
          <p className="mt-2 text-[15px] leading-[22px] text-slate">{c.sub}</p>
          <ul className="mt-4 space-y-2">
            {c.items.map((i) => (
              <li key={i} className="flex gap-2 rounded-[10px] bg-white/80 px-3 py-2.5 text-[14.5px] leading-5 text-ink">
                <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#237049]" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Steps({ steps, cols }: { steps: { t: string; s: string }[]; cols?: string }) {
  return (
    <ol className={cn("grid gap-3", cols ?? "md:grid-cols-4")}>
      {steps.map((s, i) => (
        <li key={s.t} className="relative rounded-[20px] border border-hair bg-white p-5">
          <span className="t-mono text-[11px] font-bold text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-2 text-[18px] font-semibold leading-6 text-ink">{s.t}</p>
          <p className="mt-1.5 text-[14.5px] leading-[21px] text-slate">{s.s}</p>
          {i < steps.length - 1 && <ArrowRight aria-hidden className="absolute -right-[13px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-brand-ink md:block" strokeWidth={2.2} />}
        </li>
      ))}
    </ol>
  );
}

function AiSignature() {
  return (
    <Cols3
      cols={[
        { t: "Automate", sub: "High volume, clear rules, low harm if wrong.", tone: "bg-[#e0ece6]", items: ["Sort and route incoming requests", "Extract fields from forms and invoices", "Answer questions from approved knowledge"] },
        { t: "Assist", sub: "The system drafts. A person decides.", tone: "bg-[#f7dfce]", items: ["Draft replies and summaries", "Flag unusual transactions", "Suggest the next best step"] },
        { t: "Keep human", sub: "Judgment, exceptions and accountability.", tone: "bg-[#e9e1f1]", items: ["Approve refunds and exceptions", "Handle sensitive cases", "Change the rules themselves"] },
      ]}
    />
  );
}

function DataSignature() {
  const src = [
    { n: "Sales report", d: "Revenue = invoices sent" },
    { n: "Finance sheet", d: "Revenue = cash received" },
    { n: "CRM export", d: "Revenue = deals closed" },
  ];
  return (
    <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
      <ul className="space-y-3">
        {src.map((s) => (
          <li key={s.n} className="rounded-[16px] border border-hair bg-white p-4">
            <p className="text-[16px] font-semibold text-ink">{s.n}</p>
            <p className="text-[14px] text-slate">{s.d}</p>
          </li>
        ))}
      </ul>
      <ArrowRight aria-hidden className="mx-auto h-6 w-6 rotate-90 text-brand-ink lg:rotate-0" strokeWidth={2} />
      <div className="rounded-[24px] bg-graphite p-6 text-white">
        <Lbl tone="accent">Governed definition</Lbl>
        <p className="mt-2 text-[26px] font-medium leading-8">Revenue</p>
        <p className="mt-2 text-[15px] leading-6 text-[#d8d2cc]">One owner, one formula, one source. Every report and dashboard reads the same number, and a change to the definition is reviewed.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Chip className="bg-[#33312f] text-white">Owner named</Chip>
          <Chip className="bg-[#33312f] text-white">Formula versioned</Chip>
          <Chip className="bg-[#33312f] text-white">Quality checked</Chip>
        </div>
      </div>
    </div>
  );
}

function OrSignature() {
  const inp = [
    { t: "Decisions", s: "What can change: who works where, which route, how much stock.", tone: "bg-[#dfe9f1]" },
    { t: "Objective", s: "What good means: lowest cost, highest service, or a weighted mix.", tone: "bg-[#f7dfce]" },
    { t: "Constraints", s: "What must hold: capacity, skills, rules, budgets, time windows.", tone: "bg-[#e9e1f1]" },
  ];
  return (
    <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_1fr_1fr_auto_1fr]">
      {inp.map((c) => (
        <div key={c.t} className={cn("rounded-[20px] p-5", c.tone)}>
          <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-brown">{c.t}</p>
          <p className="mt-2 text-[14.5px] leading-[21px] text-slate">{c.s}</p>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 lg:flex-col">
          <ArrowRight aria-hidden className="h-5 w-5 rotate-90 text-brand-ink lg:rotate-0" strokeWidth={2.2} />
          <span className="t-mono rounded-full bg-brand-fill px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.06em] text-white">Solver</span>
        </div>
      </div>
      <div className="rounded-[20px] bg-graphite p-5 text-white">
        <p className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#ff9a5c]">Result</p>
        <p className="mt-2 text-[15px] leading-[22px]">A plan that meets every rule, plus the trade-offs between the top options so people can choose.</p>
      </div>
    </div>
  );
}

function AgenticSignature() {
  const steps = [
    { t: "Suggest", s: "The agent proposes. A person does the work.", who: "Person", h: "lg:min-h-[176px]" },
    { t: "Draft", s: "The agent prepares the work. A person sends it.", who: "Person", h: "lg:min-h-[208px]" },
    { t: "Act with approval", s: "The agent acts once a person approves.", who: "Approver", h: "lg:min-h-[240px]" },
    { t: "Act within limits", s: "Low-risk work runs alone, logged and reversible.", who: "Owner of the process", h: "lg:min-h-[272px]" },
  ];
  return (
    <ol className="grid items-end gap-3 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.t} className={cn("rounded-[20px] p-5", s.h, i === 3 ? "bg-graphite text-white" : "border border-hair bg-white")}>
          <span className={cn("t-mono text-[11px] font-bold uppercase tracking-[0.08em]", i === 3 ? "text-[#ff9a5c]" : "text-brand-ink")}>Level {i + 1}</span>
          <p className="mt-2 text-[19px] font-semibold leading-6">{s.t}</p>
          <p className={cn("mt-1.5 text-[14.5px] leading-[21px]", i === 3 ? "text-[#d8d2cc]" : "text-slate")}>{s.s}</p>
          <p className={cn("t-mono mt-4 text-[10.5px] uppercase tracking-[0.08em]", i === 3 ? "text-[#a8a29c]" : "text-slate-2")}>Accountable: {s.who}</p>
        </li>
      ))}
    </ol>
  );
}

function CloudSignature() {
  const g = [
    ["Landing zone", "Accounts, networks and policies set up before workloads arrive."],
    ["Infrastructure as code", "Environments rebuilt from reviewed files, not by hand."],
    ["CI/CD pipeline", "Every change is built, tested and released the same way."],
    ["Observability", "Logs, metrics and alerts wired to the people who respond."],
    ["Cost tags and budgets", "Spend visible by team and by service."],
    ["Access and secrets", "Least privilege, with secrets held outside the code."],
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {g.map(([t, s], i) => (
        <div key={t} className="flex gap-4 rounded-[20px] border border-hair bg-white p-5">
          <span className="t-mono grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#e4eef6] text-[12px] font-bold text-[#2f5bbd]">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <p className="text-[17px] font-semibold leading-6 text-ink">{t}</p>
            <p className="mt-1 text-[14.5px] leading-[21px] text-slate">{s}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SoftwareSignature() {
  return (
    <Steps
      cols="md:grid-cols-5"
      steps={[
        { t: "Discover", s: "Users, tasks and constraints written down." },
        { t: "Build in increments", s: "Working software shown early and often, in short Scrum sprints." },
        { t: "Review and test", s: "Code review, automated tests, security checks." },
        { t: "Release", s: "Staged rollout with a way back." },
        { t: "Maintain", s: "Fixes, upgrades and a named owner." },
      ]}
    />
  );
}

function EnterpriseSignature() {
  const lanes = [
    { l: "Workplace", tone: "bg-[#e9e1f1]", c: ["Employee raises a request", "", "", "Confirmation received"] },
    { l: "Service desk", tone: "bg-[#dfe9f1]", c: ["", "Request classified and routed", "", ""] },
    { l: "ERP", tone: "bg-[#f7dfce]", c: ["", "", "Order or purchase created", ""] },
  ];
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[680px] space-y-2.5">
        {lanes.map((ln) => (
          <div key={ln.l} className={cn("grid grid-cols-[120px_repeat(4,1fr)] items-stretch gap-2 rounded-[16px] p-2.5", ln.tone)}>
            <p className="t-mono flex items-center text-[11px] font-bold uppercase tracking-[0.06em] text-brown">{ln.l}</p>
            {ln.c.map((c, i) => (
              <div key={i} className={cn("min-h-[64px] rounded-[10px] px-3 py-2 text-[13.5px] leading-5", c ? "bg-white text-ink shadow-[0_1px_2px_rgba(58,28,13,0.08)]" : "")}>
                {c}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningSignature() {
  const s = [
    { t: "Assess", s: "Find what people know and what the work needs." },
    { t: "Learn", s: "Short lessons tied to real tasks." },
    { t: "Practise", s: "Labs and exercises with feedback." },
    { t: "Apply", s: "A project on the learner's own work." },
    { t: "Review", s: "Check what changed and adjust the path." },
  ];
  return (
    <div>
      <Steps steps={s} cols="md:grid-cols-5" />
      <p className="t-mono mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.08em] text-slate-2">
        <ArrowRight aria-hidden className="h-3.5 w-3.5 -scale-x-100" /> Review feeds the next assessment
      </p>
    </div>
  );
}

function ConsultingSignature() {
  const p = [
    { t: "Assess", s: "Systems, people, cost and risk understood.", tone: "bg-[#f7dfce]" },
    { t: "Plan", s: "Priorities, sequence and business case agreed.", tone: "bg-[#e9e1f1]" },
    { t: "Deliver", s: "The plan run as projects with named owners.", tone: "bg-[#dfe9f1]" },
    { t: "Run", s: "Managed services keep the change working.", tone: "bg-[#e0ece6]" },
  ];
  return (
    <div>
      <ol className="grid gap-3 md:grid-cols-4">
        {p.map((x, i) => (
          <li key={x.t} className={cn("rounded-[22px] p-5", x.tone)}>
            <span className="t-mono text-[11px] font-bold uppercase tracking-[0.08em] text-brown">Phase {i + 1}</span>
            <p className="mt-2 text-[20px] font-semibold leading-6 text-ink">{x.t}</p>
            <p className="mt-1.5 text-[14.5px] leading-[21px] text-slate">{x.s}</p>
          </li>
        ))}
      </ol>
      <div className="mt-3 flex items-center gap-3 rounded-[16px] bg-graphite px-5 py-3.5 text-white">
        <ShieldCheck aria-hidden className="h-5 w-5 shrink-0 text-[#2fcf94]" />
        <p className="text-[14.5px] leading-[21px]">A decision gate sits between phases. Nothing moves on without an agreed outcome and an owner.</p>
      </div>
    </div>
  );
}

function BusinessAnalyticsSignature() {
  const steps = [
    { t: "Measure", s: "One trusted number, tracked over time — the same definition in every report." },
    { t: "Understand", s: "Break the change into its drivers, so you can see why the number moved." },
    { t: "Anticipate", s: "Forecast what is likely next, with the range and the assumptions shown." },
  ];
  return (
    <div>
      <Steps steps={steps} cols="md:grid-cols-3" />
      <p className="t-mono mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.08em] text-slate-2">
        <ArrowRight aria-hidden className="h-3.5 w-3.5 -scale-x-100" /> Each answer becomes the next thing worth measuring
      </p>
    </div>
  );
}

/* ---------------------------- registry & layouts ---------------------------- */

export interface CapabilityVisual {
  Hero: () => ReactNode;
  heroTone: "paper" | "cream" | "canvas";
  signature: { eyebrow: string; title: string; aside: string; Body: () => ReactNode; tone: "canvas" | "paper" | "cream" };
}

export const CAPABILITY_VISUALS: Partial<Record<CapabilitySlug, CapabilityVisual>> = {
  "business-analytics": {
    Hero: BusinessAnalyticsHero,
    heroTone: "paper",
    signature: { eyebrow: "Measure, understand, anticipate", title: "From one number to the reason behind it.", aside: "Analytics earns its place only when it changes a decision.", Body: BusinessAnalyticsSignature, tone: "canvas" },
  },
  "ai-intelligent-automation": {
    Hero: AiHero,
    heroTone: "paper",
    signature: { eyebrow: "Where AI takes the work", title: "Automate, assist or keep human.", aside: "Every task is sorted by risk before any model is built.", Body: AiSignature, tone: "canvas" },
  },
  "data-analytics-decision-intelligence": {
    Hero: DataHero,
    heroTone: "cream",
    signature: { eyebrow: "One trusted number", title: "Three reports, three answers, one definition.", aside: "Agreeing what a measure means comes before any dashboard.", Body: DataSignature, tone: "canvas" },
  },
  "operations-research": {
    Hero: OrHero,
    heroTone: "canvas",
    signature: { eyebrow: "Anatomy of a model", title: "Decisions, objective, constraints.", aside: "Write the problem down precisely, then let the solver search.", Body: OrSignature, tone: "paper" },
  },
  "agentic-engineering": {
    Hero: AgenticHero,
    heroTone: "paper",
    signature: { eyebrow: "The autonomy ladder", title: "Give an agent only the autonomy it has earned.", aside: "Each level names who stays accountable.", Body: AgenticSignature, tone: "canvas" },
  },
  "cloud-devops-platform-engineering": {
    Hero: CloudHero,
    heroTone: "cream",
    signature: { eyebrow: "Guardrails from the first commit", title: "The platform is set up before the workloads arrive.", aside: "Six foundations, each owned and reviewed.", Body: CloudSignature, tone: "paper" },
  },
  "software-engineering": {
    Hero: SoftwareHero,
    heroTone: "canvas",
    signature: { eyebrow: "How a release moves", title: "From first conversation to a system someone owns.", aside: "Working software is shown early, so the direction can change cheaply.", Body: SoftwareSignature, tone: "cream" },
  },
  "enterprise-applications": {
    Hero: EnterpriseHero,
    heroTone: "paper",
    signature: { eyebrow: "One request, three systems", title: "The person asks once. The systems do the rest.", aside: "A request crosses workplace, service desk and ERP without re-keying.", Body: EnterpriseSignature, tone: "canvas" },
  },
  "digital-learning": {
    Hero: LearningHero,
    heroTone: "cream",
    signature: { eyebrow: "The learning cycle", title: "Learning that ends in changed work.", aside: "Each pass through the cycle uses the last one's results.", Body: LearningSignature, tone: "paper" },
  },
  "technology-consulting": {
    Hero: ConsultingHero,
    heroTone: "canvas",
    signature: { eyebrow: "How an engagement runs", title: "Four phases, with a gate between each.", aside: "You can stop or change direction at any gate.", Body: ConsultingSignature, tone: "cream" },
  },
};

export type SectionKey = "model" | "answers" | "focus" | "tree" | "deliverables" | "flow" | "areas" | "proof";

/** Section order per capability so the pages do not read as one template. */
export const LAYOUTS: Record<CapabilitySlug, SectionKey[]> = {
  "business-analytics": ["model", "answers", "focus", "tree", "deliverables", "flow", "areas", "proof"],
  "ai-intelligent-automation": ["model", "answers", "deliverables", "focus", "flow", "proof"],
  "data-analytics-decision-intelligence": ["model", "flow", "answers", "focus", "deliverables", "proof"],
  "operations-research": ["model", "focus", "answers", "deliverables", "flow", "areas", "proof"],
  "agentic-engineering": ["model", "answers", "flow", "focus", "deliverables", "areas", "proof"],
  "cloud-devops-platform-engineering": ["model", "deliverables", "focus", "flow", "answers", "proof"],
  "software-engineering": ["model", "answers", "deliverables", "flow", "focus", "proof"],
  "enterprise-applications": ["model", "flow", "deliverables", "answers", "focus", "proof"],
  "digital-learning": ["model", "answers", "focus", "deliverables", "proof", "flow"],
  "technology-consulting": ["model", "deliverables", "answers", "focus", "proof", "flow"],
};
