import type { CardTone } from "@/components/cards/InfoCard";

export interface Industry {
  id: string;
  name: string;
  tone: CardTone;
  challenge: string;
  /** Typical operating chain, shown as a step line. */
  flow: string[];
  technology: string[];
  capabilities: string[];
}

export const INDUSTRIES: Industry[] = [
  { id: "government", name: "Government & Public Sector", tone: "sky", challenge: "Slow, fragmented citizen services", flow: ["Citizen", "Digital service", "Workflow", "Data", "AI", "Officer", "Outcome"], technology: ["AI", "Data", "Enterprise Apps"], capabilities: ["AI & Automation", "Enterprise Apps"] },
  { id: "financial-services", name: "Financial Services", tone: "mint", challenge: "Rising fraud risk and compliance pressure", flow: ["Customer", "Channel", "CRM", "Risk/Data", "Automation", "Service"], technology: ["AI", "Data", "Cloud"], capabilities: ["Data & Analytics", "AI & Automation"] },
  { id: "education", name: "Education", tone: "peach", challenge: "Inconsistent access to digital learning", flow: ["Learner", "LMS", "Learning", "Assessment", "Analytics", "AI tutor"], technology: ["Learning", "AI", "Data"], capabilities: ["Digital Learning", "Data & Analytics"] },
  { id: "healthcare", name: "Healthcare", tone: "mint", challenge: "Disconnected patient records across systems", flow: ["Patient", "Intake", "EHR", "Data", "AI triage", "Care team"], technology: ["Data", "Cloud", "AI"], capabilities: ["Data & Analytics", "Cloud & DevOps"] },
  { id: "ngos", name: "NGOs & Development Organisations", tone: "lilac", challenge: "Limited visibility into programme impact", flow: ["Beneficiary", "Programme", "Data", "Analytics", "Report", "Donor"], technology: ["Data", "Cloud", "Transformation"], capabilities: ["Data & Analytics", "Consulting & Managed Services"] },
  { id: "telecommunications", name: "Telecommunications", tone: "sky", challenge: "Network complexity slows service delivery", flow: ["Subscriber", "Channel", "Network", "Data", "Automation", "Support"], technology: ["Cloud", "Data", "Enterprise Apps"], capabilities: ["Cloud & DevOps", "Data & Analytics"] },
  { id: "retail", name: "Retail & Commerce", tone: "peach", challenge: "Fragmented view of the customer journey", flow: ["Shopper", "Channel", "Order", "Data", "AI", "Fulfilment"], technology: ["AI", "Data", "Enterprise Apps"], capabilities: ["AI & Automation", "Data & Analytics"] },
  { id: "manufacturing", name: "Manufacturing", tone: "cream", challenge: "Limited visibility into production performance", flow: ["Order", "Production", "IoT data", "Analytics", "Quality", "Delivery"], technology: ["Cloud", "Enterprise Apps", "Transformation"], capabilities: ["Cloud & DevOps", "Enterprise Apps"] },
  { id: "energy-utilities", name: "Energy & Utilities", tone: "peach", challenge: "Ageing infrastructure limits operational insight", flow: ["Meter", "Grid data", "Analytics", "Forecasting", "Operations"], technology: ["Data", "Cloud", "Transformation"], capabilities: ["Data & Analytics", "Consulting & Managed Services"] },
  { id: "transport-logistics", name: "Transport & Logistics", tone: "mint", challenge: "Limited real-time visibility into shipments", flow: ["Shipment", "Tracking", "Data", "Route AI", "Delivery"], technology: ["Data", "AI", "Enterprise Apps"], capabilities: ["Data & Analytics", "Enterprise Apps"] },
  { id: "professional-services", name: "Professional Services", tone: "lilac", challenge: "Manual, inconsistent service delivery", flow: ["Client", "Engagement", "Delivery", "Data", "Outcome"], technology: ["Enterprise Apps", "Learning", "Transformation"], capabilities: ["Enterprise Apps", "Consulting & Managed Services"] },
  { id: "smes", name: "SMEs", tone: "mint", challenge: "Limited resources to modernise core systems", flow: ["Business", "Core systems", "Cloud", "Automation", "Growth"], technology: ["Cloud", "Enterprise Apps", "Transformation"], capabilities: ["Cloud & DevOps", "Enterprise Apps"] },
];

export const INDUSTRY_FILTERS = ["All", "AI", "Data", "Cloud", "Enterprise Apps", "Learning", "Transformation"] as const;

export const getIndustry = (id: string) => INDUSTRIES.find((i) => i.id === id);

/** Short capability labels used on industry cards, mapped to their real capability page. */
export const CAPABILITY_LINKS: Record<string, string> = {
  "AI & Automation": "/capabilities/ai-intelligent-automation",
  "Data & Analytics": "/capabilities/data-analytics-decision-intelligence",
  "Enterprise Apps": "/capabilities/enterprise-applications",
  "Cloud & DevOps": "/capabilities/cloud-devops-platform-engineering",
  "Digital Learning": "/capabilities/digital-learning",
  "Consulting & Managed Services": "/capabilities/technology-consulting",
};
