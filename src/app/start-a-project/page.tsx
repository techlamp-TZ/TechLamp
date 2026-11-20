import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectBrief } from "@/features/project/ProjectBrief";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Start a Project",
  description: "Send TechLamp a short project brief: what you want to change, when, and optionally a budget range.",
  path: "/start-a-project",
});

export default function StartAProjectPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Start a project / A short brief"
        title={
          <>
            Tell us what
            <br />
            to move forward.
          </>
        }
        lede="A compact brief is enough to begin: who you are, what you want to change, and when. We can shape the detail together afterwards."
        crumbs={[{ label: "Start a Project" }]}
      />
      <ProjectBrief />
    </PageShell>
  );
}
