import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { ContactEnquiry } from "@/features/contact/ContactEnquiry";
import { RouteStrip } from "@/features/contact/RouteStrip";
import { ContactInfo } from "@/features/contact/ContactInfo";
import { ContactHumanLoop } from "@/features/contact/ContactHumanLoop";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Tell TechLamp what you are trying to move forward and we will help route your enquiry to the right team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Let’s connect / Routed to the right team"
        title={
          <>
            Let’s start
            <br />a conversation.
          </>
        }
        lede="Tell us what you are trying to move forward. We will help direct your enquiry to the right TechLamp team."
        crumbs={[{ label: "Contact" }]}
        visual={<ContactHumanLoop />}
      />
      <ContactEnquiry between={<RouteStrip />} />
      <ContactInfo />
    </PageShell>
  );
}
