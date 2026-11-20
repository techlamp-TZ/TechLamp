import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PRODUCT_FAMILIES } from "@/data/products";

/** Index grid: one card per product family, linking to its own page at /products/[slug]. */
export function ProductGrid() {
  return (
    <section id="products" aria-labelledby="products-title" className="scroll-mt-24 bg-paper">
      <Container className="py-14 lg:py-[72px]">
        <SectionHeader
          id="products-title"
          index="01"
          eyebrow="Eleven product families"
          title="Explore each family."
          aside="Every family carries its real status and the systems it's designed to sit beside."
          className="mb-8 lg:mb-[44px]"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_FAMILIES.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.id}
                href={`/products/${f.id}`}
                className="group flex flex-col gap-4 rounded-[24px] border border-hair bg-[#fffefa] p-7 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white" style={{ background: f.accent }}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <StatusBadge status="pending" className="!h-[22px] !px-[11px] !text-[8.5px]" />
                </div>
                <div>
                  <h3 className="text-[19px] font-semibold leading-6 text-ink">{f.name}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[21px] text-slate">{f.problem}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: f.accentText }}>
                  Explore this family
                  <ArrowRight aria-hidden className="h-[13px] w-[13px] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
