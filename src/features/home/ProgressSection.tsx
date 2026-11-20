import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AcademyCard, CaseStudyFeature, ResearchCard } from "@/components/cards/ProgressCards";

export function ProgressSection() {
  return (
    <section id="progress" aria-labelledby="progress-title" className="bg-canvas">
      <Container className="pb-[73px] pt-12 lg:pt-[70px]">
        <SectionHeader
          id="progress-title"
          index="05"
          eyebrow="EVIDENCE + LEARNING"
          title="Progress you can see."
          aside="Measured outcomes, practical capability and research that makes complex systems legible."
          link={{ href: "/case-studies", label: "See all case studies" }}
          className="mb-8 lg:mb-[31px]"
        />
        <div className="grid gap-[19px] lg:grid-cols-[2fr_1fr]">
          <CaseStudyFeature />
          <div className="grid gap-[19px]">
            <AcademyCard />
            <ResearchCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
