import { PageShell } from "@/components/layout/PageShell";
import { CloudManagedServicesPage } from "@/features/capabilities/CloudManagedServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cloud & Managed Services",
  description: "The full TechLamp cloud and managed services catalog: cloud & infrastructure, managed IT, and workplace services.",
  path: "/capabilities/cloud-managed-services",
});

export default function CloudManagedServicesRoute() {
  return (
    <PageShell>
      <CloudManagedServicesPage />
    </PageShell>
  );
}
