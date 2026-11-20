import { Headphones, LineChart, Coins, Boxes, Workflow, Compass, Server, GraduationCap, type LucideIcon } from "lucide-react";

export type SolutionTone = "peach" | "lilac" | "sky" | "mint";

export interface Solution {
  title: string;
  /** The business challenge as the client would state it. */
  challenge: string;
  /** How we approach it, one line. */
  approach: string;
  /** Intended outcome, described in words. No measured results. */
  outcome: string;
  /** Example tools we work with. Not partnerships. */
  tools: string[];
  href: string;
}

export interface SolutionArea {
  id: string;
  /** Short label used by the solution finder. */
  finderLabel: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  tone: SolutionTone;
  accent: string;
  solutions: Solution[];
}

export const JOURNEY = ["Challenge", "Process", "Technology", "Data", "People", "Outcome"];

export const CONNECTED_SERVICES = [
  { eyebrow: "BUSINESS ANALYTICS", text: "Measure performance, explain drivers and improve management decisions.", href: "/capabilities/business-analytics", tone: "sky" as const },
  { eyebrow: "OPERATIONS RESEARCH", text: "Optimize resources, schedules, routes and scenarios under constraints.", href: "/capabilities/operations-research", tone: "lilac" as const },
  { eyebrow: "AGENTIC ENGINEERING", text: "Engineer governed agents that carry out approved work across systems.", href: "/capabilities/agentic-engineering", tone: "peach" as const },
];

const cap = (slug: string) => `/capabilities/${slug}`;

export const SOLUTION_AREAS: SolutionArea[] = [
  {
    id: "customer-experience",
    finderLabel: "Customer experience",
    title: "Improve customer experience",
    blurb: "Make every customer interaction faster, clearer and more consistent.",
    icon: Headphones,
    tone: "peach",
    accent: "#a93800",
    solutions: [
      { title: "AI-assisted customer service", challenge: "Slow, inconsistent customer support", approach: "Assistants that draft answers from approved knowledge, with staff in control.", outcome: "Faster first responses", tools: ["Zendesk", "Salesforce"], href: cap("ai-intelligent-automation") },
      { title: "CRM transformation", challenge: "Customer data split across teams", approach: "One customer record, shared definitions and clean handoffs.", outcome: "One view of each customer", tools: ["Salesforce", "Zoho"], href: cap("enterprise-applications") },
      { title: "Customer analytics", challenge: "Limited visibility into customer behaviour", approach: "Governed customer data with dashboards teams actually use.", outcome: "Clearer customer insight", tools: ["Power BI", "Salesforce"], href: cap("business-analytics") },
    ],
  },
  {
    id: "business-performance",
    finderLabel: "Business performance",
    title: "Improve business performance",
    blurb: "Give managers one trusted view of how the business is performing and why.",
    icon: LineChart,
    tone: "sky",
    accent: "#2f5fb3",
    solutions: [
      { title: "Performance dashboards", challenge: "KPIs live in separate spreadsheets", approach: "Agree definitions, unify sources, publish one performance view.", outcome: "A shared set of numbers", tools: ["Power BI", "Dataverse"], href: cap("business-analytics") },
      { title: "Driver analysis", challenge: "Results move and nobody can say why", approach: "Break results into drivers and test what changed.", outcome: "Explained variance", tools: ["Azure", "Power BI"], href: cap("data-analytics-decision-intelligence") },
      { title: "Management reporting", challenge: "Reports take days to assemble", approach: "Automate the assembly and keep review with people.", outcome: "Less time spent compiling", tools: ["Power Automate", "Microsoft 365"], href: cap("business-analytics") },
    ],
  },
  {
    id: "operating-cost",
    finderLabel: "Operating cost",
    title: "Reduce operating cost",
    blurb: "Find where cost and effort accumulate, then remove the causes.",
    icon: Coins,
    tone: "mint",
    accent: "#17705a",
    solutions: [
      { title: "Cloud cost governance", challenge: "Cloud spend grows without clear owners", approach: "Tagging, budgets and review routines tied to teams.", outcome: "Visible, owned spend", tools: ["AWS", "Azure"], href: cap("cloud-devops-platform-engineering") },
      { title: "Process waste review", challenge: "Rework and delays inside core processes", approach: "Map the process, find waste, fix the biggest causes first.", outcome: "Less rework", tools: ["ServiceNow", "ManageEngine"], href: cap("technology-consulting") },
      { title: "Tool consolidation", challenge: "Overlapping tools and licences", approach: "Inventory, compare against real use, retire what is not needed.", outcome: "A leaner tool estate", tools: ["Microsoft 365", "Google Workspace"], href: cap("technology-consulting") },
    ],
  },
  {
    id: "resources",
    finderLabel: "Resources",
    title: "Optimize resources",
    blurb: "Schedule people, assets and capacity against real constraints.",
    icon: Boxes,
    tone: "lilac",
    accent: "#6b47b8",
    solutions: [
      { title: "Workforce scheduling", challenge: "Rosters built by hand, rules missed", approach: "Constraint-aware schedules that planners can review and adjust.", outcome: "Fewer scheduling conflicts", tools: ["Odoo", "SAP"], href: cap("operations-research") },
      { title: "Route and fleet planning", challenge: "Trips planned without full constraints", approach: "Optimization models that respect capacity, time and cost.", outcome: "More efficient plans", tools: ["Azure", "AWS"], href: cap("operations-research") },
      { title: "Capacity forecasting", challenge: "Demand surprises leave teams stretched", approach: "Forecast demand and test scenarios before committing.", outcome: "Earlier warning on capacity", tools: ["Power BI", "Azure"], href: cap("data-analytics-decision-intelligence") },
    ],
  },
  {
    id: "automation",
    finderLabel: "Automation",
    title: "Automate business processes",
    blurb: "Automate the repeatable steps and keep approvals with your people.",
    icon: Workflow,
    tone: "sky",
    accent: "#2f5fb3",
    solutions: [
      { title: "Business process automation", challenge: "Manual, error-prone workflows", approach: "Rebuild the flow with rules, routing and an audit trail.", outcome: "More reliable operations", tools: ["Power Automate", "ServiceNow"], href: cap("ai-intelligent-automation") },
      { title: "Intelligent document processing", challenge: "Manual data entry from documents", approach: "Extract, validate and route, with review for exceptions.", outcome: "Less manual entry", tools: ["AWS", "Azure"], href: cap("ai-intelligent-automation") },
      { title: "Governed agents", challenge: "Work that spans several systems", approach: "Agents with scoped permissions, logging and human approval.", outcome: "Approved work done across systems", tools: ["Azure AI", "Power Automate"], href: cap("agentic-engineering") },
    ],
  },
  {
    id: "decisions",
    finderLabel: "Decisions",
    title: "Improve decision-making",
    blurb: "Turn scattered data and knowledge into evidence people can act on.",
    icon: Compass,
    tone: "lilac",
    accent: "#6b47b8",
    solutions: [
      { title: "Decision intelligence", challenge: "Decisions made on incomplete data", approach: "Connect sources, show the evidence and record the decision.", outcome: "Evidence-based decisions", tools: ["Azure", "Power BI"], href: cap("data-analytics-decision-intelligence") },
      { title: "Enterprise knowledge", challenge: "Knowledge trapped in silos", approach: "A governed search layer over documents and systems.", outcome: "Faster access to answers", tools: ["Microsoft 365", "Azure AI"], href: cap("ai-intelligent-automation") },
      { title: "Predictive analytics", challenge: "Planning reacts instead of anticipates", approach: "Forecast models with clear assumptions and review.", outcome: "Earlier sight of issues", tools: ["AWS", "Power BI"], href: cap("data-analytics-decision-intelligence") },
    ],
  },
  {
    id: "modernize",
    finderLabel: "Technology",
    title: "Modernize technology",
    blurb: "Move to secure, supportable platforms without stopping the business.",
    icon: Server,
    tone: "mint",
    accent: "#17705a",
    solutions: [
      { title: "Cloud modernisation", challenge: "Legacy infrastructure limits growth", approach: "Assess, plan the migration in stages, then operate it.", outcome: "Resilient platforms", tools: ["AWS", "Azure", "Google Cloud"], href: cap("cloud-devops-platform-engineering") },
      { title: "Digital workplace", challenge: "Disconnected workplace tools", approach: "Connect identity, collaboration and service requests.", outcome: "One connected workplace", tools: ["Microsoft 365", "Google Workspace"], href: cap("enterprise-applications") },
      { title: "IT service management", challenge: "Slow, fragmented IT support", approach: "One service desk, clear ownership and tracked requests.", outcome: "Clearer incident handling", tools: ["ServiceNow", "ManageEngine"], href: cap("technology-consulting") },
    ],
  },
  {
    id: "workforce",
    finderLabel: "Workforce",
    title: "Transform workforce capability",
    blurb: "Build the skills that make new technology and new ways of working stick.",
    icon: GraduationCap,
    tone: "peach",
    accent: "#a93800",
    solutions: [
      { title: "Workforce learning", challenge: "Skills gaps slow technology adoption", approach: "Role-based learning paths tied to the tools people use.", outcome: "Stronger proficiency", tools: ["Moodle", "Microsoft 365"], href: cap("digital-learning") },
      { title: "Digital onboarding", challenge: "Inconsistent onboarding and training", approach: "Repeatable onboarding content with progress tracking.", outcome: "Consistent training", tools: ["Moodle", "Google Workspace"], href: cap("digital-learning") },
      { title: "Skills transformation", challenge: "Teams unprepared for new technology", approach: "Assess skills, close gaps with labs and coaching.", outcome: "A more ready workforce", tools: ["Moodle", "Microsoft 365"], href: "/training" },
    ],
  },
];

export const getSolutionArea = (id: string) => SOLUTION_AREAS.find((a) => a.id === id);
