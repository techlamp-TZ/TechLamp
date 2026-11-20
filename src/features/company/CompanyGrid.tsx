import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_SECTIONS } from "@/data/company";

const bands = { peach: "bg-peach", sky: "bg-sky", mint: "bg-mint", lilac: "bg-lilac" };

/** Index grid: one card per company topic, linking to its own page at /company/[slug]. */
export function CompanyGrid() {
  return (
    <section className="bg-paper">
      <Container className="pb-14 lg:pb-[72px]">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMPANY_SECTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/company/${s.slug}`}
              className={`group flex flex-col gap-4 rounded-[24px] p-7 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)] ${bands[s.tone]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">{s.index}</p>
                <ArrowRight aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-slate-2 transition-transform group-hover:translate-x-1" />
              </div>
              <h2 className="text-[21px] font-semibold leading-7 text-ink">{s.title}</h2>
              <p className="mt-auto text-[15px] leading-[22px] text-slate">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
