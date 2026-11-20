import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { CtaSection } from "@/features/home/CtaSection";
import { CaseStudyList } from "@/features/case-studies/CaseStudyList";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description: "Illustrative case studies showing the challenge, architecture and intended outcome of TechLamp work. Results are marked until verified.",
  path: "/case-studies",
});

const STEPS = ["Challenge", "Intervention", "System", "Outcome"];

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title={<>Real challenges. Engineered approach.</>}
        lede="Every case study shows the challenge, the architecture and the intended outcome. Where a result has not been verified, it says so."
        crumbs={[{ label: "Case Studies" }]}
      />
      <Section id="about" tone="cream" className="!py-8 lg:!py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex shrink-0 gap-2">
            <StatusBadge status="illustrative" />
            <StatusBadge status="pending" />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-ink">About these case studies</h2>
            <p className="mt-1 max-w-[860px] text-[15px] leading-[23px] text-slate">
              Entries here are illustrative concept cases. They show how we would approach a problem, not results delivered for a named client. Any numbers are sample values with a badge beside them. A case study is only marked verified once the client has approved published results.
            </p>
          </div>
        </div>
      </Section>
      <Section id="studies" tone="paper" index="01" eyebrow="Library" title="Case studies">
        <CaseStudyList />
      </Section>
      <Section tone="canvas" className="!py-10 lg:!py-14">
        <div className="rounded-[28px] bg-graphite p-6 text-white lg:p-10">
          <p className="t-mono text-[12px] font-semibold uppercase tracking-[0.09em] text-[#ff9a5c]">Evidence / Architecture / Outcome</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, n) => (
              <li key={s} className={n === STEPS.length - 1 ? "rounded-xl bg-brand-fill px-5 py-5 text-center text-[13px] font-semibold uppercase tracking-[0.08em]" : "rounded-xl bg-white/10 px-5 py-5 text-center text-[13px] font-semibold uppercase tracking-[0.08em]"}>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <CtaSection title="Want results like these?" text="Tell us about your challenge. We will walk through how a similar problem would be approached, and be clear about what is proven and what is not." />
    </PageShell>
  );
}
