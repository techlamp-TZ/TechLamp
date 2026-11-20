export type CapabilitySlug =
  | "ai-intelligent-automation"
  | "data-analytics-decision-intelligence"
  | "business-analytics"
  | "operations-research"
  | "agentic-engineering"
  | "cloud-devops-platform-engineering"
  | "software-engineering"
  | "enterprise-applications"
  | "digital-learning"
  | "technology-consulting";

export type IconKey =
  | "bot"
  | "database"
  | "chart"
  | "route"
  | "workflow"
  | "cloud"
  | "terminal"
  | "grid"
  | "graduation"
  | "compass";

export type Accent = "orange" | "blue" | "teal" | "violet" | "green" | "brown" | "amber" | "rose" | "indigo" | "slate";

export interface Capability {
  slug: CapabilitySlug;
  /** Zero-padded position, "01".."10". */
  n: string;
  /** Exact label used in src/data/navigation.ts. */
  name: string;
  group: "Intelligence" | "Engineering" | "People & change";
  icon: IconKey;
  accent: Accent;
  /** One-line business problem shown on the index. */
  problem: string;
  summary: string;
  services: string[];
  outcomes: string[];
  related: CapabilitySlug[];
  /** Illustrative example line (always shown with an ILLUSTRATIVE badge). */
  example: string;
}

export const CAPABILITIES: Capability[] = [
  {
    slug: "ai-intelligent-automation",
    n: "01",
    name: "AI & Intelligent Automation",
    group: "Intelligence",
    icon: "bot",
    accent: "orange",
    problem: "Manual, repetitive work slows decisions and drains capacity.",
    summary: "We design and deploy AI models, assistants and automation that take repetitive work off people and keep a human in charge of the exceptions.",
    services: ["AI model integration", "Intelligent process automation", "Conversational and assistant AI", "Automation governance"],
    outcomes: ["Faster response times", "Less manual handling", "More consistent decisions"],
    related: ["agentic-engineering", "data-analytics-decision-intelligence", "enterprise-applications"],
    example: "A service desk where an assistant drafts first replies and staff approve them.",
  },
  {
    slug: "data-analytics-decision-intelligence",
    n: "02",
    name: "Data, Analytics & Decision Intelligence",
    group: "Intelligence",
    icon: "database",
    accent: "blue",
    problem: "Data sits in separate systems, so decisions lean on instinct instead of evidence.",
    summary: "We bring enterprise data together, govern it, and turn it into insight that leaders can trace back to a source and act on.",
    services: ["Data platform engineering", "BI and reporting", "Data governance and quality", "Decision intelligence"],
    outcomes: ["Faster decisions", "One trusted source of truth", "Better data quality"],
    related: ["business-analytics", "operations-research", "cloud-devops-platform-engineering"],
    example: "Finance, sales and operations reporting from one governed data model.",
  },
  {
    slug: "business-analytics",
    n: "03",
    name: "Business Analytics & Performance Intelligence",
    group: "Intelligence",
    icon: "chart",
    accent: "teal",
    problem: "Reports arrive late and explain what happened, not why or what to do next.",
    summary: "We convert operational, financial, customer and workforce data into management intelligence that leads to action.",
    services: ["KPI and measure design", "Driver and variance analysis", "Forecasting and scenarios", "Executive dashboards"],
    outcomes: ["Earlier intervention", "Clear accountability for measures", "Forecasts leaders can question"],
    related: ["data-analytics-decision-intelligence", "operations-research", "technology-consulting"],
    example: "Monthly spreadsheets replaced by a weekly view of drivers, alerts and forecast.",
  },
  {
    slug: "operations-research",
    n: "04",
    name: "Operations Research & Optimization",
    group: "Intelligence",
    icon: "route",
    accent: "violet",
    problem: "Schedules, routes and resources are planned by hand against constraints nobody can fully hold in mind.",
    summary: "We model the constraints, optimize resources, schedules, routes and scenarios, and show the trade-offs before you commit.",
    services: ["Scheduling and rostering", "Routing and logistics", "Capacity and resource allocation", "Simulation and what-if scenarios"],
    outcomes: ["Better use of scarce resources", "Plans that respect real constraints", "Trade-offs visible before decisions"],
    related: ["business-analytics", "agentic-engineering", "data-analytics-decision-intelligence"],
    example: "A weekly roster that meets demand and rules, with the trade-offs shown.",
  },
  {
    slug: "agentic-engineering",
    n: "05",
    name: "Agentic Engineering",
    group: "Intelligence",
    icon: "workflow",
    accent: "indigo",
    problem: "AI agents are easy to demo and hard to trust with real work in real systems.",
    summary: "We engineer governed agents that carry out approved work across your systems, with permissions, approvals, logs and evaluations built in.",
    services: ["Agent design and orchestration", "Tool and system integration", "Guardrails, approvals and audit trails", "Evaluation and monitoring"],
    outcomes: ["Work executed inside defined limits", "Every action traceable", "Humans approve what matters"],
    related: ["ai-intelligent-automation", "software-engineering", "operations-research"],
    example: "An agent prepares a purchase request and waits for a manager to approve it.",
  },
  {
    slug: "cloud-devops-platform-engineering",
    n: "06",
    name: "Cloud, DevOps & Platform Engineering",
    group: "Engineering",
    icon: "cloud",
    accent: "green",
    problem: "Legacy infrastructure cannot scale with the business or absorb change safely.",
    summary: "We build secure, resilient cloud platforms and delivery pipelines so teams can ship and scale without breaking what already works.",
    services: ["Cloud architecture and migration", "DevOps and CI/CD", "Reliability engineering", "Platform security"],
    outcomes: ["Higher platform availability", "Faster release cycles", "Lower infrastructure cost"],
    related: ["software-engineering", "data-analytics-decision-intelligence", "technology-consulting"],
    example: "Releases moved from a quarterly event to a routine, reversible step.",
  },
  {
    slug: "software-engineering",
    n: "07",
    name: "Software Engineering & Digital Systems",
    group: "Engineering",
    icon: "terminal",
    accent: "amber",
    problem: "Custom systems are hard to maintain, integrate or extend safely.",
    summary: "We engineer the custom software, APIs and integrations that run core operations, built to be maintained by your team.",
    services: ["Custom software engineering", "Systems integration", "API and platform development", "Quality engineering"],
    outcomes: ["Maintainable systems", "Faster feature delivery", "Fewer production incidents"],
    related: ["cloud-devops-platform-engineering", "enterprise-applications", "agentic-engineering"],
    example: "Three disconnected tools replaced by one service with a documented API.",
  },
  {
    slug: "enterprise-applications",
    n: "08",
    name: "Enterprise Applications & Digital Workplace",
    group: "Engineering",
    icon: "grid",
    accent: "rose",
    problem: "Disconnected ERP, CRM and workplace tools frustrate employees and customers.",
    summary: "We implement and connect the enterprise applications and workplace tools that run daily operations, and help people adopt them.",
    services: ["ERP and CRM implementation", "Digital workplace design", "Application integration", "Change enablement"],
    outcomes: ["One connected workplace", "Higher adoption", "Streamlined operations"],
    related: ["software-engineering", "digital-learning", "technology-consulting"],
    example: "Quote to invoice handled in one flow across CRM and ERP.",
  },
  {
    slug: "digital-learning",
    n: "09",
    name: "Digital Learning, EdTech & Professional Development",
    group: "People & change",
    icon: "graduation",
    accent: "orange",
    problem: "New technology does not stick when people are not given the skills to use it.",
    summary: "We design learning experiences and platforms that build lasting technical and digital capability in teams and institutions.",
    services: ["Learning platform deployment", "Curriculum and content design", "Professional certification pathways", "Adoption enablement"],
    outcomes: ["Higher user proficiency", "Faster technology adoption", "Stronger internal capability"],
    related: ["enterprise-applications", "technology-consulting", "ai-intelligent-automation"],
    example: "Role-based learning paths released alongside a new system.",
  },
  {
    slug: "technology-consulting",
    n: "10",
    name: "Technology Consulting & Managed Services",
    group: "People & change",
    icon: "compass",
    accent: "brown",
    problem: "Transformation stalls without a clear strategy and ongoing operational support.",
    summary: "We guide the strategy, run the programme, and provide the managed services that sustain the change after go-live.",
    services: ["Technology strategy and advisory", "Transformation programme management", "Managed services and support", "Governance and risk"],
    outcomes: ["Sustained operational support", "Lower delivery risk", "A clear roadmap"],
    related: ["cloud-devops-platform-engineering", "enterprise-applications", "business-analytics"],
    example: "A prioritized roadmap and a support model agreed before build starts.",
  },
];

export const CAPABILITY_MAP: Record<CapabilitySlug, Capability> = Object.fromEntries(
  CAPABILITIES.map((c) => [c.slug, c]),
) as Record<CapabilitySlug, Capability>;

export function getCapability(slug: string): Capability | undefined {
  return (CAPABILITY_MAP as Record<string, Capability | undefined>)[slug];
}
