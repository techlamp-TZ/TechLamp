import { ChartLine, Target, Workflow } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { OperatingSystemDiagram } from "@/components/diagrams/OperatingSystemDiagram";
import { HERO_MICRO_FEATURES } from "@/data/home";
import { cn } from "@/lib/cn";

const microIcons = { chart: ChartLine, workflow: Workflow, target: Target } as const;
const microTone = ["bg-peach", "bg-sky", "bg-mint"] as const;

/** Soft intelligence ribbon: one ring, lavender → peach, partly hidden behind the system card. */
function HeroRibbon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 820"
      className="pointer-events-none absolute left-1/2 top-0 hidden h-[820px] w-[1440px] max-w-none -translate-x-1/2 lg:block"
    >
      <defs>
        <linearGradient id="hero-ribbon" x1="0.2" y1="1" x2="0.95" y2="0.15">
          <stop offset="0" stopColor="#e2d9ea" />
          <stop offset="0.62" stopColor="#ead9e0" />
          <stop offset="1" stopColor="#f4d7c3" />
        </linearGradient>
      </defs>
      <path
        d="M 763.7 757.8 A 414.5 414.5 0 0 0 1457 357"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="32"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * hero-os-spark — the system emits one signal that descends into the page below,
 * establishing the orange signal as the persistent subject of the story.
 * CSS-only, static-first: the resting state (signal settled, ripple faded) is also the
 * default, so no-JS and reduced-motion both show a complete composition.
 */
function HeroSignalHandoff() {
  return (
    <div aria-hidden className="pointer-events-none mt-12 flex justify-center lg:mt-7">
      <svg width="26" height="64" viewBox="0 0 26 64" fill="none" className="overflow-visible">
        <circle id="tl-hero-os-spark-source" cx="13" cy="9" r="5.5" fill="#ff6200" />
        <circle cx="13" cy="9" r="2" fill="#ffd7a8" />
        <circle
          cx="13"
          cy="9"
          r="6"
          fill="none"
          stroke="#ff5a00"
          strokeWidth="1.5"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          className="[animation:tl-pulse-once_1.8s_ease-out_0.3s_1_both]"
        />
        <line x1="13" y1="16" x2="13" y2="52" stroke="#e3dcd4" strokeWidth="2" strokeLinecap="round" />
        <g className="[animation:tl-signal-descend_1.5s_cubic-bezier(0.4,0,0.2,1)_0.4s_1_both]">
          <circle id="tl-hero-os-spark-signal" cx="13" cy="50" r="3.6" fill="#ff5a00" />
        </g>
        <path d="M 9 55 L 13 59 L 17 55" fill="none" stroke="#ff5a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-cream bg-[radial-gradient(70%_80%_at_0%_100%,rgba(233,225,241,0.75),transparent_70%),radial-gradient(55%_55%_at_0%_8%,rgba(247,223,206,0.35),transparent_70%)]"
    >
      <HeroRibbon />
      <Container className="relative pb-16 pt-12 lg:pb-[88px] lg:pt-[81px]">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_651px] lg:gap-0">
          <div className="lg:pt-[52px]">
            <p className="t-eyebrow">Data. Models. People. Real progress.</p>

            <h1 id="hero-title" className="t-h1 mt-[14px] text-[44px] leading-[44px] sm:text-[58px] sm:leading-[58px] lg:text-[68px] lg:leading-[69px] lg:tracking-[-0.025em]">
              <span className="block">Engineering</span>
              <span className="block">Intelligent</span>
              <span className="block text-brand-ink">Progress.</span>
            </h1>

            <p className="t-lede mt-[21.5px] max-w-[500px]">
              We connect business signals, analytics, optimization, human judgment and intelligent agents — so every decision becomes measurable action.
            </p>

            <div className="mt-[24px] flex flex-wrap items-center gap-3">
              <Button href="/capabilities" icon="arrow">
                Explore the system
              </Button>
              <Button href="#intelligence-loop" variant="secondary">
                See how decisions flow
              </Button>
            </div>

            <ul className="mt-[30px] flex flex-wrap gap-x-7 gap-y-3">
              {HERO_MICRO_FEATURES.map((f, i) => {
                const Icon = microIcons[f.icon];
                return (
                  <li key={f.label} className="flex items-center gap-[10px]">
                    <span aria-hidden className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full", microTone[i % microTone.length])}>
                      <Icon className="h-[15px] w-[15px] text-brown" strokeWidth={1.8} />
                    </span>
                    <span className="text-[13px] font-medium leading-4 text-[#3a1c0d]">{f.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:mr-[6px] lg:justify-self-end">
            <OperatingSystemDiagram />
          </div>
        </div>

        <HeroSignalHandoff />
      </Container>
    </section>
  );
}
