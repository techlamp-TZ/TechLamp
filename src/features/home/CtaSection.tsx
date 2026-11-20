import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/**
 * cta-lamp-path — the closing visual: the signal's journey resolves into a lit lamp
 * beside the consultation action. Desktop-only decoration; CSS-only and static-first
 * (path fully drawn, lamp lit, signal arrived by default), so reduced-motion and no-JS
 * both show the completed scene. Carries the intelligence-ribbon ring motif forward.
 */
function CtaLampPath() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 560"
      className="pointer-events-none absolute left-1/2 top-0 hidden h-[560px] w-[1440px] max-w-none -translate-x-1/2 lg:block"
    >
      <defs>
        <radialGradient id="cta-lamp-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="0.55" stopColor="#ffd9b3" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffd9b3" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* ring motif carried over from the hero/section ribbons */}
      <path d="M 1373.5 301 A 245.7 199.4 0 1 0 1024 481.7" fill="none" stroke="rgba(255,205,170,0.30)" strokeWidth="40" strokeLinecap="butt" />
      {/* the signal's path up to the lamp */}
      <path
        id="tl-cta-lamp-path-path"
        pathLength={100}
        d="M 980 486 C 1070 476, 1130 360, 1176 256"
        fill="none"
        stroke="rgba(255,255,255,0.68)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="100"
        className="[animation:tl-draw-100_1.4s_ease-out_0.3s_both]"
      />
      {/* the lamp, lit */}
      <g id="tl-cta-lamp-path-lamp" transform="translate(1176,210)">
        <circle cx="0" cy="-6" r="78" fill="url(#cta-lamp-glow)" />
        <circle
          cx="0"
          cy="-6"
          r="46"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.4"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          className="[animation:tl-pulse-once_2s_ease-out_1s_1_both]"
        />
        <path d="M 0 -58 A 42 42 0 0 1 22 20 L -22 20 A 42 42 0 0 1 0 -58 Z" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeWidth="3" />
        <path d="M -13 -32 L 6 -10 L -8 -4 L 10 18" fill="none" stroke="#ffe1cc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-18" y="22" width="36" height="9" rx="4.5" fill="#ffffff" opacity="0.9" />
        <rect x="-14" y="34" width="28" height="9" rx="4.5" fill="#ffffff" opacity="0.9" />
      </g>
      {/* the signal arriving at the lamp */}
      <circle
        id="tl-cta-lamp-path-signal"
        cx="1176"
        cy="256"
        r="6"
        fill="#ffffff"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="[animation:tl-arrive_0.6s_ease-out_1.6s_both]"
      />
    </svg>
  );
}

export function CtaSection({
  eyebrow,
  title = "Turn your next signal into a better decision.",
  text = "Bring us the operation, decision or system that needs to perform better. We’ll map the path from evidence to measurable action.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
} = {}) {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-[#a03a08] bg-[linear-gradient(64deg,#ff5a00_0%,#ea5400_25%,#b94208_62%,#8f3309_100%)]"
    >
      <CtaLampPath />
      <Container className={`relative pb-20 lg:h-[560px] ${eyebrow ? "pt-[88px]" : "pt-[104px]"}`}>
        {eyebrow && <p className="t-mono text-[12px] font-normal uppercase leading-4 tracking-[0.09em] text-white">{eyebrow}</p>}
        <h2
          id="cta-title"
          className="mt-[30px] max-w-[640px] text-[36px] font-normal uppercase leading-[40px] text-white sm:text-[44px] sm:leading-[48px] lg:text-[48.5px] lg:leading-[54px]"
        >
          {title}
        </h2>
        <p className="mt-[23px] max-w-[610px] text-[18px] leading-[27px] text-[#ffe1cc]">
          {text}
        </p>
        <div className="mt-[23.5px] flex flex-wrap items-center gap-3">
          <Button href="/start-a-project" variant="onBrand" icon="arrow" className="!h-[47px]">
            Start a project
          </Button>
          <Button href="/talk-to-an-expert" variant="ghostOnBrand" className="!h-[47px]">
            Talk to an expert
          </Button>
        </div>
      </Container>
    </section>
  );
}
