import { LegalPage } from "@/features/contact/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie notice",
  description: "Draft cookie notice for the TechLamp website. Pending legal review.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal / Draft"
      title="Cookie notice"
      crumb="Cookies"
      path="/cookies"
      lede="How this site uses cookies and similar storage. Draft text pending legal review."
      sections={[
        { heading: "What the site sets", body: <p>At the time of writing, the site does not set advertising or tracking cookies of its own. The list below will be checked against the live site before this notice is finalised.</p> },
        { heading: "Analytics", body: <p>If analytics are added later, this notice will name the tool, what it records and how to opt out before it is switched on.</p> },
        { heading: "Third-party content", body: <p>Fonts or embeds loaded from other services may set their own cookies. We will list any that apply.</p> },
        { heading: "Your choices", body: <p>You can block or delete cookies in your browser settings. The site should still work without them.</p> },
      ]}
    />
  );
}
