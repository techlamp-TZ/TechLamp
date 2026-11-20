import Link from "next/link";
import { ArrowRight, ChartLine, Cog, Waypoints } from "lucide-react";
import { ENGINES } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/cn";

const icons = { analytics: ChartLine, or: Waypoints, agentic: Cog } as const;
const ART = {
  analytics: "/illustrations/engine-analytics.svg",
  or: "/illustrations/engine-or.svg",
  agentic: "/illustrations/engine-agentic.svg",
} as const;

const ACCENT = {
  analytics: { card: "bg-[#fdf6f1] border-[#f3e3d3]", badge: "bg-peach", icon: "bg-peach", text: "text-brand-ink" },
  or: { card: "bg-[#f5f8fd] border-[#dde6f5]", badge: "bg-sky", icon: "bg-sky", text: "text-[#2f5bbd]" },
  agentic: { card: "bg-[#f4faf6] border-[#dcefe3]", badge: "bg-mint", icon: "bg-mint", text: "text-signal-green" },
} as const;

export function EnginesSection() {
  return (
    <section id="specialist-engines" aria-labelledby="engines-title" className="bg-paper">
      <Container className="pb-[57px] pt-12 lg:pt-[74px]">
        <SectionHeader
          id="engines-title"
          index="02"
          eyebrow="THREE SPECIALIST ENGINES. A MORE INTELLIGENT BUSINESS."
          title="Understand. Optimize. Operate."
          titleClassName="normal-case lg:leading-[63px] lg:tracking-normal"
          aside="Three connected disciplines turn uncertainty into controlled business performance."
          link={{ href: "/capabilities", label: "Explore all capabilities" }}
          asideWidth={410}
          className="mb-8 lg:mb-[39px]"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {ENGINES.map((e) => {
            const Icon = icons[e.id as keyof typeof icons];
            const a = ACCENT[e.id as keyof typeof ACCENT];
            return (
              <article key={e.id} className={cn("flex flex-col rounded-[24px] border p-8", a.card)}>
                <div className="relative mb-6">
                  {/* Decorative: the heading and copy below carry the meaning. */}
                  <img
                    src={ART[e.id as keyof typeof ART]}
                    alt=""
                    aria-hidden="true"
                    width={200}
                    height={140}
                    className="h-[140px] w-full object-contain"
                  />
                  <span className={cn("absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full text-[13px] font-bold", a.badge, a.text)}>{e.n}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-full", a.icon)}>
                    <Icon aria-hidden className={cn("h-5 w-5", a.text)} strokeWidth={1.7} />
                  </span>
                  <h3 className="text-[24px] font-medium leading-[30px] text-ink">{e.title}</h3>
                </div>

                <p className="t-mono mt-4 text-[11px] uppercase leading-4 tracking-[0.06em] text-slate-2">{e.tags.join(" / ")}</p>
                <p className="mt-4 text-[15px] leading-6 text-slate">{e.description}</p>

                <div className="mt-auto border-t border-black/[0.06] pt-6">
                  <Link href={e.href} className={cn("group/tl inline-flex items-center gap-2 text-[13px] font-semibold", a.text)}>
                    {e.linkLabel}
                    <ArrowRight aria-hidden className="h-[13px] w-[13px] transition-transform duration-200 group-hover/tl:translate-x-1" strokeWidth={2.2} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
