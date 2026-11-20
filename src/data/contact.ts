/** Contact page content. No phone, address or hours are published until verified by the owner. */

export const CONTACT_EMAIL = "techlamptz@gmail.com";

export interface EnquiryRoute {
  id: string;
  index: string;
  label: string;
  /** Links straight to a dedicated flow instead of selecting a type in the form. */
  href?: string;
  /** Anchor id on the card (the footer links to /contact#support). */
  anchor?: string;
}

export const enquiryRoutes: EnquiryRoute[] = [
  { id: "project", index: "01", label: "Start a Project", href: "/start-a-project" },
  { id: "expert", index: "02", label: "Talk to an Expert", href: "/talk-to-an-expert" },
  { id: "training", index: "03", label: "Training Enquiry" },
  { id: "support", index: "04", label: "Support", anchor: "support" },
  { id: "partnership", index: "05", label: "Partnership" },
  { id: "general", index: "06", label: "General Enquiry" },
];

export const enquiryTypeOptions = [
  { value: "training", label: "Training enquiry" },
  { value: "support", label: "Support" },
  { value: "partnership", label: "Partnership" },
  { value: "general", label: "General enquiry" },
  { value: "project", label: "Project (a short note; the project brief is better)" },
  { value: "expert", label: "Expert conversation (the guided flow is better)" },
] as const;

export const routeSteps = [
  { index: "01", label: "Your enquiry" },
  { index: "02", label: "Select type" },
  { index: "03", label: "Right TechLamp team" },
  { index: "04", label: "Discovery" },
  { index: "05", label: "Next step" },
] as const;

export const contactFaq = {
  q: "What happens next?",
  a: "Your enquiry is meant to be routed to the appropriate team for review. Submissions are not being received yet while the mailbox integration is connected, so use the email link on this page for anything that cannot wait.",
};
