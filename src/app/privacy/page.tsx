import { LegalPage } from "@/features/contact/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/data/contact";

export const metadata = pageMetadata({
  title: "Privacy notice",
  description: "Draft privacy notice for the TechLamp website. Pending legal review.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal / Draft"
      title="Privacy notice"
      crumb="Privacy"
      path="/privacy"
      lede="What this site asks for, why, and how to reach us about it. Draft text pending legal review."
      sections={[
        { heading: "Who this covers", body: <p>This notice covers the TechLamp website at techlamp.co.tz. Registered company details will be added here after they are confirmed.</p> },
        {
          heading: "What we ask for",
          body: <p>The contact, project and expert forms ask for your name and email, and optionally your organisation, role, phone, country and a description of what you need. Only send what is useful for the request.</p>,
        },
        { heading: "Why we ask", body: <p>To understand your enquiry and reply to it. We do not sell your details and we do not use them for unrelated marketing.</p> },
        {
          heading: "Current status of the forms",
          body: <p>The mailbox connection for the forms is still being set up, so a submission may not reach the team yet. If it is urgent, email {CONTACT_EMAIL}.</p>,
        },
        { heading: "Retention and your rights", body: <p>Retention periods and how to request access, correction or deletion will be stated here once confirmed. Until then, write to {CONTACT_EMAIL}.</p> },
        { heading: "Cookies", body: <p>See the cookie notice for how the site uses cookies and similar storage.</p> },
      ]}
    />
  );
}
