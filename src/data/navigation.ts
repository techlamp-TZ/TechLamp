import type { LucideIcon } from "lucide-react";
import { FileText, GraduationCap, Newspaper, Building2, Mail } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** Mega-menu content. Items without groups are plain links. */
  groups?: NavGroup[];
  /** Short line shown at the top of the mega menu. */
  summary?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Capabilities",
    href: "/capabilities",
    summary: "Ten disciplines, one engineering approach.",
    groups: [
      {
        title: "Intelligence",
        links: [
          { label: "AI & Intelligent Automation", href: "/capabilities/ai-intelligent-automation" },
          { label: "Data, Analytics & Decision Intelligence", href: "/capabilities/data-analytics-decision-intelligence" },
          { label: "Business Analytics & Performance Intelligence", href: "/capabilities/business-analytics" },
          { label: "Operations Research & Optimization", href: "/capabilities/operations-research" },
          { label: "Agentic Engineering", href: "/capabilities/agentic-engineering" },
        ],
      },
      {
        title: "Engineering",
        links: [
          { label: "Cloud, DevOps & Platform Engineering", href: "/capabilities/cloud-devops-platform-engineering" },
          { label: "Software Engineering & Digital Systems", href: "/capabilities/software-engineering" },
          { label: "Enterprise Applications & Digital Workplace", href: "/capabilities/enterprise-applications" },
        ],
      },
      {
        title: "People & change",
        links: [
          { label: "Digital Learning, EdTech & Professional Development", href: "/capabilities/digital-learning" },
          { label: "Technology Consulting & Managed Services", href: "/capabilities/technology-consulting" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    summary: "Organized by the business problem you need to solve.",
    groups: [
      {
        title: "Performance",
        links: [
          { label: "Improve customer experience", href: "/solutions/customer-experience" },
          { label: "Improve business performance", href: "/solutions/business-performance" },
          { label: "Reduce operating cost", href: "/solutions/operating-cost" },
          { label: "Optimize resources", href: "/solutions/resources" },
        ],
      },
      {
        title: "Transformation",
        links: [
          { label: "Automate business processes", href: "/solutions/automation" },
          { label: "Improve decision-making", href: "/solutions/decisions" },
          { label: "Modernize technology", href: "/solutions/modernize" },
          { label: "Transform workforce capability", href: "/solutions/workforce" },
        ],
      },
    ],
  },
  {
    label: "Platforms",
    href: "/platforms",
    summary: "How your workplace, customer, data and cloud tools work together.",
    groups: [
      {
        title: "Ecosystem",
        links: [
          { label: "People & digital workplace", href: "/platforms/workplace" },
          { label: "Customer & CRM", href: "/platforms/customer" },
          { label: "Business operations", href: "/platforms/operations" },
        ],
      },
      {
        title: "Foundation",
        links: [
          { label: "Automation & data", href: "/platforms/automation-data" },
          { label: "AI & agents", href: "/platforms/ai-agents" },
          { label: "Cloud foundation", href: "/platforms/cloud" },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    summary: "Eleven product families on one shared design system.",
    groups: [
      {
        title: "Data & Platforms",
        links: [
          { label: "Data Warehousing, Lakes & Lakehouses", href: "/products/data-warehousing-lakehouses" },
          { label: "Data Integration, Quality & Governance", href: "/products/data-integration-governance" },
          { label: "Cloud Operations & Observability", href: "/products/cloud-operations-observability" },
        ],
      },
      {
        title: "Intelligence & Decisions",
        links: [
          { label: "Business Intelligence & Executive Analytics", href: "/products/business-intelligence-analytics" },
          { label: "Operations & Workforce Intelligence", href: "/products/operations-workforce-intelligence" },
          { label: "Forecasting & Decision Intelligence", href: "/products/forecasting-decision-intelligence" },
          { label: "Optimization & Simulation Systems", href: "/products/optimization-simulation" },
          { label: "AI, Knowledge & Agentic Platforms", href: "/products/ai-knowledge-agentic" },
        ],
      },
      {
        title: "Applications & People",
        links: [
          { label: "Automation, Integration & Enterprise Applications", href: "/products/automation-integration-apps" },
          { label: "Digital Workplace & Service Portals", href: "/products/digital-workplace-portals" },
          { label: "Learning & Skills Platforms", href: "/products/learning-skills" },
        ],
      },
    ],
  },
  {
    label: "Business Apps",
    href: "/business-apps",
    summary: "Platform implementation across the business systems you run.",
    groups: [
      {
        title: "Odoo Services",
        links: [
          { label: "Odoo Implementation", href: "/odoo-services/implementation" },
          { label: "Odoo Customization", href: "/odoo-services/customization" },
          { label: "Odoo Migration", href: "/odoo-services/migration" },
          { label: "Odoo Support", href: "/odoo-services/support" },
          { label: "All Odoo services", href: "/odoo-services" },
        ],
      },
      {
        title: "Odoo Industries",
        links: [
          { label: "Odoo ERP for Retail", href: "/odoo-industries/retail" },
          { label: "Odoo Manufacturing ERP", href: "/odoo-industries/manufacturing" },
          { label: "Odoo ERP for Education", href: "/odoo-industries/education" },
          { label: "Odoo Hospital Management System", href: "/odoo-industries/hospital-management" },
          { label: "All Odoo industries", href: "/odoo-industries" },
        ],
      },
      {
        title: "Zoho",
        links: [
          { label: "Zoho CRM", href: "/zoho-services/crm" },
          { label: "Zoho Books", href: "/zoho-services/books" },
          { label: "Zoho People", href: "/zoho-services/people" },
          { label: "Zoho Desk", href: "/zoho-services/desk" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    summary: "Operating flows for the sectors we serve.",
    groups: [
      {
        title: "Sectors",
        links: [
          { label: "Government", href: "/industries/government" },
          { label: "Financial services", href: "/industries/financial-services" },
          { label: "Education", href: "/industries/education" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "All industries", href: "/industries" },
        ],
      },
    ],
  },
];

/**
 * Lower-traffic "about / learn" items, moved out of the top nav into the
 * floating left side dock (`SideDock`) and the mobile drawer's "More" section.
 */
export interface SideNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  { label: "Case Studies", href: "/case-studies", icon: FileText },
  { label: "Training", href: "/training", icon: GraduationCap },
  { label: "Insights", href: "/insights", icon: Newspaper },
  { label: "Company", href: "/company", icon: Building2 },
  { label: "Contact", href: "/contact", icon: Mail },
];

export const HEADER_CTA = { label: "Book a Consultation", href: "/talk-to-an-expert" };

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Capabilities", href: "/capabilities" },
      { label: "Solutions", href: "/solutions" },
      { label: "Platforms", href: "/platforms" },
      { label: "Products", href: "/products" },
      { label: "Business Apps", href: "/business-apps" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Training", href: "/training" },
      { label: "Insights", href: "/insights" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/contact#support" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export const VALUE_LOOP = ["Measure", "Understand", "Predict", "Optimize", "Decide", "Act", "Improve"];
