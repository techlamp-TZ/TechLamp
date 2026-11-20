import { PageShell } from "@/components/layout/PageShell";
import { CapabilitiesIndexPage } from "@/features/capabilities/CapabilitiesIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Capabilities",
  description: "Ten TechLamp practices across AI, data, analytics, optimization, agentic engineering, cloud, software, enterprise applications, learning and consulting.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <PageShell>
      <CapabilitiesIndexPage />
    </PageShell>
  );
}
