import { CircleAlert, Workflow, Cpu, Database, Users, Trophy, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { InfoCard } from "@/components/cards/InfoCard";
import { CONNECTED_SERVICES, JOURNEY } from "@/data/solutions";
import { cn } from "@/lib/cn";

const icons = [CircleAlert, Workflow, Cpu, Database, Users, Trophy];
const ring = ["border-[#8a8178] text-[#6b6259]", "border-[#2f5fb3] text-[#2f5fb3]", "border-[#6b47b8] text-[#6b47b8]", "border-[#17705a] text-[#17705a]", "border-[#e85300] text-[#a93800]", "border-brand bg-brand-fill text-white"];

/** Challenge to outcome path, followed by the connected services that carry every solution. */
export function JourneyStrip() {
  return (
    <section aria-labelledby="journey-title" className="bg-paper">
      <Container className="pb-14 lg:pb-[72px]">
        <h2 id="journey-title" className="sr-only">
          Every solution follows one connected path
        </h2>
        <ol className="flex items-start justify-between gap-1 border-t border-hair pt-8 sm:gap-2">
          {JOURNEY.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step} className="flex min-w-0 flex-1 items-start">
                <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
                  <span aria-hidden className={cn("grid h-11 w-11 place-items-center rounded-full border-2 bg-canvas sm:h-[52px] sm:w-[52px]", ring[i])}>
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="t-mono text-[11px] font-bold uppercase leading-4 tracking-[0.04em] text-ink sm:text-[12px]">{step}</span>
                </div>
                {i < JOURNEY.length - 1 && <ChevronRight aria-hidden className="mt-3.5 hidden h-4 w-4 shrink-0 text-slate-2 sm:block" />}
              </li>
            );
          })}
        </ol>

        <p className="t-mono mb-4 mt-12 text-[11px] font-bold uppercase tracking-[0.08em] text-brown">Connected intelligence services / from understanding to execution</p>
        <div className="grid gap-4 md:grid-cols-3">
          {CONNECTED_SERVICES.map((s) => (
            <InfoCard key={s.eyebrow} tone={s.tone} eyebrow={s.eyebrow} title={<span className="text-[17px] font-normal leading-6 text-slate">{s.text}</span>} href={s.href} linkLabel="View capability" className="!rounded-[20px] !p-6" />
          ))}
        </div>
      </Container>
    </section>
  );
}
