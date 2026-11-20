import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { CtaSection } from "@/features/home/CtaSection";
import { IndustryDirectory } from "@/features/industries/IndustryDirectory";
import { IndustryHeroVisual } from "@/features/industries/IndustryHeroVisual";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description: "How TechLamp applies AI, data, cloud and enterprise systems across government, finance, education, healthcare and eight other sectors.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title={<>Technology built for real-world context.</>}
        lede="The same capabilities, applied differently depending on who you serve, how you are regulated, and which outcomes matter most. Each sector below has its own page."
        crumbs={[{ label: "Industries" }]}
        visual={<IndustryHeroVisual />}
      />
      <Section id="directory" tone="paper" index="01" eyebrow="Directory" title="All industries" aside="Filter by the kind of technology involved. Each card shows the typical operating chain and links through to its own page.">
        <IndustryDirectory />
      </Section>
      <CtaSection title="Let's talk about your industry." text="Every sector has its own regulations, systems and pressures. Tell us what matters most in yours." />
    </PageShell>
  );
}
