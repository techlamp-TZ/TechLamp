import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { routeSteps } from "@/data/contact";
import { cn } from "@/lib/cn";

/** Dark "clear route to the next step" band. */
export function RouteStrip() {
  return (
    <section aria-labelledby="route-title" className="bg-paper">
      <Container className="pb-14 lg:pb-[72px]">
        <div className="rounded-[16px] bg-graphite p-6 sm:p-8 lg:px-[22px] lg:pb-[56px] lg:pt-[26px]">
          <h2 id="route-title" className="t-eyebrow mb-8 lg:mb-[52px]">
            02 / A clear route to the next step
          </h2>
          <ol className="grid list-none gap-3 p-0 lg:grid-cols-5">
            {routeSteps.map((s, i) => {
              const last = i === routeSteps.length - 1;
              return (
                <li
                  key={s.index}
                  className={cn("relative flex min-h-[92px] flex-col justify-center rounded-[8px] px-5 py-4", last ? "bg-brand-fill text-white" : "bg-[#1b1d24] text-white")}
                >
                  <span className={cn("t-mono text-[11px]", last ? "text-white" : "text-[#ff9a5c]")}>{s.index}</span>
                  <span className="mt-2 text-[15px] font-bold uppercase leading-5 tracking-[0.02em]">{s.label}</span>
                  {!last && <ArrowDown aria-hidden className="absolute -bottom-[14px] left-1/2 z-10 h-4 w-4 -translate-x-1/2 text-brand-ink lg:-right-[14px] lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90 lg:translate-x-0" strokeWidth={2.2} />}
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
