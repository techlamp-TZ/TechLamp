import { Handshake, Receipt, IdCard, Headset, type LucideIcon } from "lucide-react";

export interface ZohoApp {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  features: string[];
  approach: string;
  related: { label: string; href: string }[];
}

export const ZOHO_APPS: ZohoApp[] = [
  {
    slug: "crm",
    name: "Zoho CRM",
    icon: Handshake,
    summary: "Sales pipeline, automation and customer insight in one CRM, configured around how your sales team actually sells.",
    features: ["Faster deal cycles through automation", "Smart workflow automation", "Unified customer insight and reporting", "Omnichannel communication (email, phone, chat, social)", "Custom modules and fields for your process"],
    approach: "We configure Zoho CRM's pipeline, automations and modules to match your actual sales process, not a generic template.",
    related: [{ label: "Zoho Books", href: "/zoho-services/books" }],
  },
  {
    slug: "books",
    name: "Zoho Books",
    icon: Receipt,
    summary: "Invoicing, cashflow and reconciliation in one accounting system, connected to the rest of your Zoho apps.",
    features: ["Invoicing and online payment collection", "Cashflow management and forecasting", "Bank reconciliation", "Multi-currency accounting", "Inventory tracking"],
    approach: "Books is set up to reflect your actual chart of accounts and reconciliation workflow, not a default template.",
    related: [{ label: "Zoho CRM", href: "/zoho-services/crm" }],
  },
  {
    slug: "people",
    name: "Zoho People",
    icon: IdCard,
    summary: "Employee records, attendance and performance management in one HR system.",
    features: ["Centralized employee database", "Attendance tracking", "Leave management", "Performance review cycles", "Shift management"],
    approach: "People is configured around your actual HR policies and approval chains, not Zoho's defaults.",
    related: [{ label: "Zoho Desk", href: "/zoho-services/desk" }],
  },
  {
    slug: "desk",
    name: "Zoho Desk",
    icon: Headset,
    summary: "Customer support tickets, self-service and AI-assisted responses in one helpdesk.",
    features: ["Zia AI-assisted responses", "Self-service customer portal", "Ticket automation and routing", "Custom workflows and SLAs", "Reports and dashboards"],
    approach: "Desk is configured around your actual support workflow and SLAs, with automation added where it reduces manual triage.",
    related: [{ label: "Zoho CRM", href: "/zoho-services/crm" }],
  },
];

export const getZohoApp = (slug: string) => ZOHO_APPS.find((a) => a.slug === slug);
