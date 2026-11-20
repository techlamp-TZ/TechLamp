import Link from "next/link";
import { LegalPage } from "@/features/contact/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accessibility statement",
  description: "Draft accessibility statement for the TechLamp website. Pending review and audit.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Legal / Draft"
      title="Accessibility statement"
      crumb="Accessibility"
      path="/accessibility"
      lede="What we aim for on this site and how to tell us about a barrier. Draft text pending review."
      sections={[
        { heading: "Our aim", body: <p>We build this site to meet WCAG 2.2 Level AA. That includes keyboard access, visible focus, readable contrast, labelled form fields and support for reduced motion.</p> },
        { heading: "Where we are", body: <p>No independent accessibility audit has been completed yet, so we do not claim full conformance. Some parts may fall short.</p> },
        { heading: "Tell us about a barrier", body: <p>If something on the site is hard to use, describe it on the <Link href="/contact" className="font-semibold text-ink underline underline-offset-2">contact page</Link>. Say which page and what assistive technology you use, if any.</p> },
        { heading: "Ongoing work", body: <p>A formal audit, and a review date for this statement, will be added once they are scheduled.</p> },
      ]}
    />
  );
}
