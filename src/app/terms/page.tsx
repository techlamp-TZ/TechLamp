import { LegalPage } from "@/features/contact/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of use",
  description: "Draft terms of use for the TechLamp website. Pending legal review.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal / Draft"
      title="Terms of use"
      crumb="Terms"
      path="/terms"
      lede="Plain starter terms for using this website. Draft text pending legal review."
      sections={[
        { heading: "Using the site", body: <p>You may browse this site and use its forms for genuine enquiries. Please do not misuse the forms, probe the site for weaknesses, or send unlawful content.</p> },
        { heading: "Information on the site", body: <p>Content is general information about TechLamp. Case studies and figures carry a status marker showing whether they are verified, illustrative or pending. Nothing here is a contract or an offer.</p> },
        { heading: "Engagements", body: <p>Any paid work is agreed separately in writing. Sending a form does not create an agreement.</p> },
        { heading: "Intellectual property", body: <p>Site text, design and marks belong to TechLamp or their owners. Do not copy them without permission.</p> },
        { heading: "Liability and governing law", body: <p>Liability limits, governing law and company details will be added here after legal review.</p> },
      ]}
    />
  );
}
