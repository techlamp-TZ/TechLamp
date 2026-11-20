import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SOLUTION_AREAS } from "@/data/solutions";

const bands = { peach: "bg-peach", sky: "bg-sky", mint: "bg-mint", lilac: "bg-lilac" };

/** Index grid: one card per solution area, linking to its own page at /solutions/[slug]. */
export function SolutionAreaGrid() {
  return (
    <section className="bg-paper">
      <Container className="pb-14 lg:pb-[72px]">
        <p className="t-mono border-l-2 border-brand pl-4 text-[12px] uppercase leading-5 tracking-[0.06em] text-slate">
          Tools named on this page are examples we work with. No partnership or endorsement is implied.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SOLUTION_AREAS.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.id}
                href={`/solutions/${a.id}`}
                className={`group flex flex-col gap-4 rounded-[24px] p-7 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)] ${bands[a.tone]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white" style={{ background: a.accent }}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <ArrowRight aria-hidden className="mt-2 h-4 w-4 shrink-0 text-slate-2 transition-transform group-hover:translate-x-1" />
                </div>
                <div>
                  <h2 className="text-[21px] font-semibold leading-7 text-ink">{a.title}</h2>
                  <p className="mt-1.5 text-[15px] leading-[22px] text-slate">{a.blurb}</p>
                </div>
                <p className="t-mono mt-auto text-[11px] font-bold uppercase tracking-[0.06em] text-brown">{a.solutions.length} solutions in this area</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
