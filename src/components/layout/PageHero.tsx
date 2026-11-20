import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { cn } from "@/lib/cn";

/** Inner-page hero: breadcrumbs, eyebrow, uppercase display title, lede, actions and an optional visual. */
export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  extra,
  visual,
  crumbs,
  tone = "paper",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  /** Optional content rendered below the action buttons, e.g. a row of micro-features. */
  extra?: ReactNode;
  visual?: ReactNode;
  crumbs: Crumb[];
  tone?: "paper" | "cream" | "canvas";
  className?: string;
}) {
  const bg = { paper: "bg-paper", cream: "bg-cream", canvas: "bg-canvas" }[tone];
  return (
    <section aria-labelledby="page-title" className={cn(bg, "relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_12%_0%,rgba(255,255,255,0.7),transparent_70%),radial-gradient(45%_70%_at_100%_100%,rgba(233,225,241,0.55),transparent_75%)]"
      />
      <Container className="relative pb-14 pt-8 lg:pb-[72px] lg:pt-10">
        <Breadcrumbs items={crumbs} />
        <div className={cn("mt-10 grid items-center gap-10 lg:mt-[56px]", !!visual && "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14")}>
          <div>
            <p className="t-eyebrow mb-[18px]">{eyebrow}</p>
            <h1 id="page-title" className="t-h1 max-w-[860px] text-[40px] leading-[42px] sm:text-[52px] sm:leading-[54px] lg:text-[60px] lg:leading-[62px]">
              {title}
            </h1>
            {lede && <p className="t-lede mt-[22px] max-w-[620px]">{lede}</p>}
            {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
            {extra}
          </div>
          {visual && <div className="min-w-0">{visual}</div>}
        </div>
      </Container>
    </section>
  );
}
