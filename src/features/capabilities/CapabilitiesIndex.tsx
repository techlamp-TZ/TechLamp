import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Link2, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { cn } from "@/lib/cn";
import { CAPABILITIES, CAPABILITY_MAP, type Capability } from "@/data/capabilities";
import { ACCENTS, CapabilityIcon } from "./accents";

function HeroIndexList() {
  return (
    <nav aria-label="Jump to a capability" className="rounded-[28px] border border-hair bg-white/90 p-3 shadow-[0_24px_50px_-32px_rgba(58,28,13,0.4)] sm:p-4">
      <ul className="grid gap-1 sm:grid-cols-2">
        {CAPABILITIES.map((c) => (
          <li key={c.slug}>
            <a href={`#${c.slug}`} className="group flex min-h-11 items-center gap-3 rounded-[14px] px-3 py-2 transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-brand">
              <CapabilityIcon icon={c.icon} accent={c.accent} className="h-8 w-8 rounded-[9px]" />
              <span className="min-w-0">
                <span className="t-mono block text-[11px] text-slate-2">{c.n}</span>
                <span className="block text-[13px] font-semibold leading-[17px] text-ink">{c.name}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PracticeRow({ c, i }: { c: Capability; i: number }) {
  const a = ACCENTS[c.accent];
  const alt = i % 2 === 1;
  return (
    <section id={c.slug} aria-labelledby={`${c.slug}-title`} className={cn("scroll-mt-24", alt ? "bg-[#f5eee5]" : "bg-canvas")}>
      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:py-[64px]">
        <div className="lg:pr-6 lg:pt-2">
          <div className="flex items-center gap-4">
            <span aria-hidden className="text-[36px] font-light leading-none text-[#8f857a]">
              {c.n}
            </span>
            <CapabilityIcon icon={c.icon} accent={c.accent} className="h-[46px] w-[46px] rounded-[12px]" />
          </div>
          <h2 id={`${c.slug}-title`} className="mt-5 max-w-[560px] text-[28px] font-extrabold uppercase leading-[34px] tracking-[-0.005em] text-ink sm:text-[30px] sm:leading-[36px]">
            {c.name}
          </h2>
          <p className={cn("t-mono mt-4 text-[11px] font-semibold uppercase tracking-[0.06em]", a.text)}>The business problem</p>
          <p className="mt-2 max-w-[520px] text-[17px] font-semibold leading-[25px] text-ink">{c.problem}</p>
          <p className="t-body mt-4 max-w-[520px] !text-[16px] !leading-[25px]">{c.summary}</p>
          <Link
            href={`/capabilities/${c.slug}`}
            className={cn(
              "group/l mt-7 inline-flex min-h-12 items-center gap-2 rounded-[10px] border-2 bg-transparent px-5 text-[14px] font-semibold transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              a.border,
              a.text,
              a.hoverBg,
            )}
          >
            Explore this capability
            <ArrowRight aria-hidden className="h-[14px] w-[14px] transition-transform group-hover/l:translate-x-0.5" strokeWidth={2.2} />
          </Link>
        </div>

        <div className="rounded-[24px] border border-hair bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3 rounded-[14px] bg-[#f3ede4] px-5 py-5" aria-hidden>
            <span className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">{c.group}</span>
            <span className="flex items-center gap-1.5">
              {CAPABILITIES.map((x) => (
                <i key={x.slug} className={cn("h-2.5 rounded-full", x.slug === c.slug ? cn("w-6", a.dot) : "w-2.5 bg-[#d9cfc3]")} />
              ))}
            </span>
          </div>

          <div className="mt-6 grid gap-6 px-1 sm:grid-cols-3 sm:px-2">
            <div>
              <h3 className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">Key services</h3>
              <ul className="mt-3 space-y-2.5">
                {c.services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[14px] leading-5 text-ink">
                    <Check aria-hidden className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.text)} strokeWidth={2.4} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">Business outcomes</h3>
              <ul className="mt-3 space-y-2.5">
                {c.outcomes.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[14px] leading-5 text-ink">
                    <TrendingUp aria-hidden className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.text)} strokeWidth={2.2} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">Related capabilities</h3>
              <ul className="mt-3 space-y-1">
                {c.related.map((slug) => (
                  <li key={slug}>
                    <Link href={`/capabilities/${slug}`} className="flex min-h-11 items-start gap-2 py-2 text-[14px] leading-5 text-ink hover:text-brand focus-visible:outline-2 focus-visible:outline-brand sm:min-h-0 sm:py-1">
                      <Link2 aria-hidden className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.text)} />
                      {CAPABILITY_MAP[slug].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[14px] bg-[#f5eee5] px-4 py-3">
            <p className="flex items-start gap-3 text-[13px] italic leading-5 text-slate">
              <FileText aria-hidden className={cn("mt-0.5 h-4 w-4 shrink-0", a.text)} />
              <span>{c.example}</span>
            </p>
            <StatusBadge status="illustrative" />
          </div>
        </div>
      </Container>
    </section>
  );
}

const CHAIN: { label: string; slug: Capability["slug"] }[] = [
  { label: "Enterprise apps", slug: "enterprise-applications" },
  { label: "Data", slug: "data-analytics-decision-intelligence" },
  { label: "AI", slug: "ai-intelligent-automation" },
  { label: "Cloud", slug: "cloud-devops-platform-engineering" },
  { label: "Software", slug: "software-engineering" },
  { label: "Learning", slug: "digital-learning" },
  { label: "Managed services", slug: "technology-consulting" },
];

function Connected() {
  return (
    <section aria-labelledby="connected-title" className="bg-[#3a1c0d] text-white">
      <Container className="py-14 lg:py-[80px]">
        <div className="text-center">
          <p className="t-eyebrow !text-[#ff9a5c] flex items-center justify-center gap-2">
            <i aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            Connected capabilities
          </p>
          <h2 id="connected-title" className="mt-4 text-[34px] font-extrabold uppercase leading-[38px] sm:text-[42px] sm:leading-[46px]">
            No capability works alone.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[26px] text-[#e7d5c8]">
            A single engagement often draws on several practices at once. Here is how a typical customer experience project could come together.
          </p>
          <p className="t-mono mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.08em] text-white">
            Example: customer experience project
            <StatusBadge status="illustrative" className="!h-[22px] !px-[11px] !text-[9px]" />
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {CHAIN.map((c, i) => (
            <li key={c.slug} className="flex items-center gap-3">
              <Link href={`/capabilities/${c.slug}`} className="t-mono inline-flex min-h-11 items-center rounded-full bg-white/10 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">
                {c.label}
              </Link>
              {i < CHAIN.length - 1 && (
                <span aria-hidden className="text-brand-ink">
                  +
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-[20px] border border-brand bg-[#4a2411] p-6 sm:p-8">
          <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-[#ff9a5c]">Engagement outcome</p>
          <p className="mt-3 max-w-[820px] text-[18px] leading-[28px] text-white">
            One unified, AI-assisted customer experience, connected across systems, supported by trained teams and backed by ongoing managed services.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function CapabilitiesIndexPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Capabilities" }]}
        eyebrow="Capabilities"
        title={
          <>
            Ten practices.
            <br />
            One connected technology partner.
          </>
        }
        lede="Explore each practice to see how it connects, what it delivers, and which other capabilities it works with."
        actions={
          <>
            <Button href="#business-analytics" icon="arrow">
              Start with analytics
            </Button>
            <Button href="/talk-to-an-expert" variant="secondary">
              Talk to an expert
            </Button>
          </>
        }
        visual={<HeroIndexList />}
      />
      {CAPABILITIES.map((c, i) => (
        <PracticeRow key={c.slug} c={c} i={i} />
      ))}
      <Connected />
      <CtaSection title="Not sure which capability you need?" text="Talk to a TechLamp specialist. We will help you map your goals to the right combination of practices." />
    </>
  );
}
