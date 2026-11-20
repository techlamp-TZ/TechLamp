import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

/**
 * H0A — "Where are you starting?"
 * Makes four audiences visible early (startup, small, medium, enterprise) with one
 * shared visual system. Company size is a starting point, not a gate: every card links
 * into existing capabilities, and the problem-led route stays available below.
 * Server component, static-first: readable with no JS; motion is CSS hover only.
 */

type Audience = {
  id: "startup" | "small" | "medium" | "enterprise";
  label: string;
  message: string;
  href: string;
  linkLabel: string;
  art: string;
  ring: string; // hover border tint
};

const AUDIENCES: Audience[] = [
  {
    id: "startup",
    label: "Startups",
    message: "Build a solid foundation for the business you're creating — first connected tools and a clear view.",
    href: "/capabilities/software-engineering",
    linkLabel: "Build a foundation",
    art: "/illustrations/bes-startup.svg",
    ring: "hover:border-[#f0cdb0]",
  },
  {
    id: "small",
    label: "Small businesses",
    message: "Connect daily work and cut repeated manual steps — from enquiry to quote, approval and invoice.",
    href: "/business-apps",
    linkLabel: "Connect daily work",
    art: "/illustrations/bes-small.svg",
    ring: "hover:border-[#bcd0e6]",
  },
  {
    id: "medium",
    label: "Medium-sized companies",
    message: "Keep teams, systems and decisions connected as operations grow — one shared, approved view.",
    href: "/capabilities/business-analytics",
    linkLabel: "Connect your teams",
    art: "/illustrations/bes-medium.svg",
    ring: "hover:border-[#bfe0cc]",
  },
  {
    id: "enterprise",
    label: "Large enterprises",
    message: "Coordinate complex operations with visible control — governed exchange and traceable action.",
    href: "/capabilities/technology-consulting",
    linkLabel: "Coordinate at scale",
    art: "/illustrations/bes-enterprise.svg",
    ring: "hover:border-[#d6c9e6]",
  },
];

export function BusinessStageSection() {
  return (
    <section id="where-are-you-starting" aria-labelledby="stage-title" className="bg-canvas">
      <Container className="pb-12 pt-12 lg:pb-[64px] lg:pt-[64px]">
        <div className="max-w-[760px]">
          <p className="t-eyebrow">Where are you starting?</p>
          <h2 id="stage-title" className="t-h2 mt-[12px] normal-case lg:tracking-normal">
            Intelligent systems for every stage of business.
          </h2>
          <p className="t-lede mt-[16px] max-w-[620px]">
            From your first connected tools to complex operations, we help you understand
            performance, improve decisions, and put the right systems to work.
          </p>
        </div>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-[42px] lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <li key={a.id}>
              <Link
                href={a.href}
                className={cn(
                  "group/stage flex h-full flex-col rounded-[22px] border border-hair bg-[#fffdfc] p-5 transition-[border-color,box-shadow,transform] duration-300",
                  "hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-22px_rgba(58,28,13,0.35)]",
                  a.ring,
                )}
              >
                <span className="mb-4 block overflow-hidden rounded-[14px] bg-paper/60">
                  {/* Decorative: the card text carries the meaning. */}
                  <img
                    src={a.art}
                    alt=""
                    aria-hidden="true"
                    width={232}
                    height={192}
                    className="h-[120px] w-full object-contain"
                  />
                </span>
                <h3 className="text-[16px] font-semibold leading-5 text-ink">{a.label}</h3>
                <p className="mt-2 text-[13.5px] leading-[19px] text-slate">{a.message}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[13px] font-semibold text-brand-ink">
                  {a.linkLabel}
                  <ArrowRight aria-hidden className="h-[13px] w-[13px] transition-transform duration-200 group-hover/stage:translate-x-1" strokeWidth={2.2} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2 border-t border-hair pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-mono text-[10.5px] uppercase leading-4 tracking-[0.06em] text-slate-2">
            Business size is a starting point, not a limit — every capability is open to every business.
          </p>
          <Link
            href="/solutions"
            className="group/tl inline-flex items-center gap-2 text-[13px] font-semibold text-ink"
          >
            Prefer to start from a problem? Explore solutions
            <ArrowRight aria-hidden className="h-[13px] w-[13px] transition-transform duration-200 group-hover/tl:translate-x-1" strokeWidth={2.2} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
