import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

/** Shared layout for the four legal pages. Text is a starter draft pending legal review. */
export function LegalPage({
  eyebrow,
  title,
  crumb,
  path,
  lede,
  sections,
}: {
  eyebrow: string;
  title: string;
  crumb: string;
  path: string;
  lede: string;
  sections: LegalSection[];
}) {
  void path;
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} crumbs={[{ label: crumb }]} />
      <section className="bg-canvas">
        <Container className="py-12 lg:py-[72px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-16">
            <aside className="h-fit rounded-[16px] bg-peach p-5">
              <StatusBadge status="pending" />
              <p className="mt-3 text-[14px] leading-[21px] text-brown">
                Draft starter text. It has not been reviewed by a lawyer and is not final. It will be replaced before it is relied on.
              </p>
            </aside>
            <div className="max-w-[760px]">
              {sections.map((s, i) => (
                <section key={s.heading} aria-labelledby={`legal-${i}`} className="border-b border-hair py-7 first:pt-0 last:border-0">
                  <h2 id={`legal-${i}`} className="text-[22px] font-medium leading-[28px] tracking-[-0.01em] text-ink">
                    {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-[16px] leading-[26px] text-slate">{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
