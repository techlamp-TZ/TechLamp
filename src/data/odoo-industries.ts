import { HardHat, Truck, ShoppingBag, HeartPulse, Factory, UtensilsCrossed, Wrench, GraduationCap, Building2, Warehouse, Sun, type LucideIcon } from "lucide-react";

export interface OdooIndustry {
  slug: string;
  name: string;
  icon: LucideIcon;
  challenge: string;
  /** Real native Odoo apps typically involved. */
  modules: string[];
  /** Related TechLamp capability names; hrefs resolved via CAPABILITY_LINKS in src/data/industries.ts. */
  capabilities: string[];
}

export const ODOO_INDUSTRIES: OdooIndustry[] = [
  {
    slug: "construction",
    name: "Odoo ERP for Construction",
    icon: HardHat,
    challenge: "Project costs and site progress are tracked in spreadsheets instead of one system.",
    modules: ["Project", "Purchase", "Inventory", "Accounting"],
    capabilities: ["Enterprise Apps", "Consulting & Managed Services"],
  },
  {
    slug: "logistics",
    name: "Odoo ERP for Logistics",
    icon: Truck,
    challenge: "Shipments, fleet and warehouse data live in disconnected tools.",
    modules: ["Inventory", "Fleet", "Purchase", "Sales"],
    capabilities: ["Enterprise Apps", "Data & Analytics"],
  },
  {
    slug: "retail",
    name: "Odoo ERP for Retail",
    icon: ShoppingBag,
    challenge: "Stock levels and sales data don't match across stores and channels.",
    modules: ["Point of Sale", "Inventory", "Sales", "eCommerce"],
    capabilities: ["Enterprise Apps", "AI & Automation"],
  },
  {
    slug: "hospital-management",
    name: "Odoo Hospital Management System",
    icon: HeartPulse,
    challenge: "Patient records, billing and scheduling sit in separate, disconnected systems.",
    modules: ["Appointments", "Inventory", "Accounting", "HR"],
    capabilities: ["Enterprise Apps", "Data & Analytics"],
  },
  {
    slug: "manufacturing",
    name: "Odoo Manufacturing ERP",
    icon: Factory,
    challenge: "Production planning and shop floor data are tracked manually.",
    modules: ["Manufacturing (MRP)", "Inventory", "Quality", "Purchase"],
    capabilities: ["Enterprise Apps", "Cloud & DevOps"],
  },
  {
    slug: "restaurant",
    name: "Odoo Restaurant Management Software",
    icon: UtensilsCrossed,
    challenge: "Orders, kitchen operations and inventory aren't connected to one system.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Accounting"],
    capabilities: ["Enterprise Apps"],
  },
  {
    slug: "service-management",
    name: "Odoo Service Management",
    icon: Wrench,
    challenge: "Field service jobs, parts and invoicing are tracked separately.",
    modules: ["Field Service", "Inventory", "Accounting", "Helpdesk"],
    capabilities: ["Enterprise Apps", "Consulting & Managed Services"],
  },
  {
    slug: "education",
    name: "Odoo ERP for Education",
    icon: GraduationCap,
    challenge: "Admissions, billing and student records live in separate systems.",
    modules: ["CRM", "Accounting", "HR", "Website"],
    capabilities: ["Enterprise Apps", "Digital Learning"],
  },
  {
    slug: "real-estate",
    name: "Odoo ERP for Real Estate Industry",
    icon: Building2,
    challenge: "Property listings, leads and contracts are tracked across disconnected tools.",
    modules: ["CRM", "Sales", "Accounting", "Website"],
    capabilities: ["Enterprise Apps", "Consulting & Managed Services"],
  },
  {
    slug: "wholesale-distribution",
    name: "Odoo ERP for Wholesale Distribution",
    icon: Warehouse,
    challenge: "Inventory across warehouses and customers is hard to see in one place.",
    modules: ["Inventory", "Purchase", "Sales", "Accounting"],
    capabilities: ["Enterprise Apps", "Data & Analytics"],
  },
  {
    slug: "solar",
    name: "Odoo ERP for Solar Industry",
    icon: Sun,
    challenge: "Installation projects, inventory and service contracts are managed separately.",
    modules: ["Project", "Inventory", "Field Service", "Accounting"],
    capabilities: ["Enterprise Apps", "Consulting & Managed Services"],
  },
];

export const getOdooIndustry = (slug: string) => ODOO_INDUSTRIES.find((i) => i.slug === slug);
