import { PageShell } from "@/components/layout/PageShell";
import { DataAnalyticsServicesPage } from "@/features/capabilities/DataAnalyticsServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Data & Analytics Services",
  description: "The full TechLamp data and analytics service catalog: eight service families from strategy and governance to managed data platforms.",
  path: "/capabilities/data-analytics-services",
});

export default function DataAnalyticsServicesRoute() {
  return (
    <PageShell>
      <DataAnalyticsServicesPage />
    </PageShell>
  );
}
