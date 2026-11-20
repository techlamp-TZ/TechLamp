import {
  Database,
  ClipboardCheck,
  BarChart3,
  Activity,
  TrendingUp,
  SlidersHorizontal,
  BrainCircuit,
  Workflow,
  LayoutGrid,
  GraduationCap,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface ProductItem {
  name: string;
  description: string;
}

export interface ProductFamily {
  id: string;
  name: string;
  short: string;
  icon: LucideIcon;
  /** Brand accent for this family, used for icon, buttons and the mock. */
  accent: string;
  /** Darker text-safe variant of the accent. */
  accentText: string;
  problem: string;
  summary: string;
  /** The real platforms and products inside this family. */
  items: ProductItem[];
  related: { label: string; href: string }[];
  /** Example systems this family is designed to sit beside. Not partnerships. */
  integrations: string[];
  deployment: string[];
  /** Design intent, not a shipped control. */
  security: string;
}

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: "data-warehousing-lakehouses",
    name: "Data Warehousing, Lakes & Lakehouses",
    short: "Data Warehousing",
    icon: Database,
    accent: "#3a3f8f",
    accentText: "#2b2f6b",
    problem: "Analytical data is scattered across systems instead of one governed foundation.",
    summary: "Warehouse, lakehouse and lake concepts that bring structured and unstructured data together for BI, analytics and AI.",
    items: [
      { name: "Enterprise Data Warehouse", description: "Centralized analytical warehouse integrating ERP, CRM, finance, HR, operations and external data." },
      { name: "Cloud Data Warehouse", description: "Modern warehouses on Azure, AWS or Google Cloud using platforms such as Snowflake, BigQuery and cloud-native services." },
      { name: "Enterprise Lakehouse", description: "Unified structured and semi-structured data platform for BI, analytics, ML and AI workloads." },
      { name: "Data Lake", description: "Scalable raw and curated data environment for documents, events, logs, IoT and enterprise datasets." },
    ],
    related: [
      { label: "Data and decision intelligence", href: "/capabilities/data-analytics-decision-intelligence" },
      { label: "Cloud and platform engineering", href: "/capabilities/cloud-devops-platform-engineering" },
    ],
    integrations: ["Snowflake", "Azure", "AWS", "Google Cloud"],
    deployment: ["Cloud", "Hybrid"],
    security: "Design intent: encryption at rest and in transit, role-based access.",
  },
  {
    id: "data-integration-governance",
    name: "Data Integration, Quality & Governance",
    short: "Data Integration",
    icon: ClipboardCheck,
    accent: "#b8860b",
    accentText: "#8a640a",
    problem: "Without integration, quality and governance, data cannot be trusted for decisions.",
    summary: "Concepts for connecting systems, modelling clean analytics, and governing data quality, ownership and lineage.",
    items: [
      { name: "ETL / ELT & Data Integration Platform", description: "Automated pipelines connecting APIs, databases, ERP, CRM, Excel, cloud and operational systems." },
      { name: "Analytics Engineering Platform", description: "Clean analytical models, data marts, semantic layers, metric definitions, tests, lineage and documentation." },
      { name: "Enterprise Semantic Layer", description: "Governed definitions for revenue, profit, customers, operations, KPIs and other business metrics." },
      { name: "Master Data Platform", description: "Customer, product, supplier, employee and organisational master-data management." },
      { name: "Data Quality Platform", description: "Validation rules, anomaly detection, profiling, completeness monitoring and data-quality dashboards." },
      { name: "Data Governance Portal", description: "Data catalogue, ownership, lineage, classifications, policies and governance workflows." },
    ],
    related: [{ label: "Data and decision intelligence", href: "/capabilities/data-analytics-decision-intelligence" }],
    integrations: ["SAP", "Salesforce", "Microsoft 365"],
    deployment: ["Cloud", "Hybrid", "On-premise"],
    security: "Design intent: data classification, access controls and audit logging.",
  },
  {
    id: "business-intelligence-analytics",
    name: "Business Intelligence & Executive Analytics",
    short: "BI & Executive Analytics",
    icon: BarChart3,
    accent: "#2f5fb3",
    accentText: "#2f5fb3",
    problem: "Leaders lack one trusted view of financial, sales and customer performance.",
    summary: "Reporting and analytics concepts that turn operational data into executive, financial, sales and customer intelligence.",
    items: [
      { name: "Executive Analytics Platform", description: "Enterprise command centre for KPIs, targets, variance, drivers, forecasts and intervention tracking." },
      { name: "Business Intelligence Platform", description: "Interactive departmental and executive reporting using Power BI or custom analytics applications." },
      { name: "Financial Analytics Platform", description: "Revenue, expenditure, profitability, budget, cash-flow and variance analytics." },
      { name: "Sales & Revenue Intelligence Platform", description: "Pipeline, conversion, forecasting, pricing, customer and revenue-driver analytics." },
      { name: "Customer 360 Platform", description: "Unified customer profiles combining CRM, sales, support, transactions and behavioural data." },
      { name: "Customer Intelligence Platform", description: "Segmentation, churn, lifetime value, satisfaction and next-best-action analytics." },
    ],
    related: [
      { label: "Data and decision intelligence", href: "/capabilities/data-analytics-decision-intelligence" },
      { label: "Business performance", href: "/solutions/business-performance" },
    ],
    integrations: ["Power BI", "SAP", "Salesforce"],
    deployment: ["Cloud", "On-premise"],
    security: "Design intent: encryption at rest and in transit, single sign-on.",
  },
  {
    id: "operations-workforce-intelligence",
    name: "Operations & Workforce Intelligence",
    short: "Ops & Workforce Intelligence",
    icon: Activity,
    accent: "#c23b6b",
    accentText: "#93294f",
    problem: "Operational and workforce performance is hard to see across teams and sites.",
    summary: "Concepts for monitoring operations, workforce, supply chain and project performance in near real time.",
    items: [
      { name: "Operations Intelligence Platform", description: "Throughput, capacity, productivity, service levels, cycle time, bottlenecks and operational KPIs." },
      { name: "Workforce Analytics Platform", description: "Headcount, skills, productivity, deployment, capability, attendance and workforce planning." },
      { name: "Supply Chain Intelligence Platform", description: "Procurement, suppliers, inventory, logistics, demand and fulfilment analytics." },
      { name: "Project & Portfolio Intelligence Platform", description: "Project health, budgets, schedules, risks, resources and portfolio prioritisation." },
      { name: "Real-Time Operations Command Centre", description: "Live operational monitoring, alerts, events, KPIs and intervention workflows." },
    ],
    related: [
      { label: "Business analytics", href: "/capabilities/business-analytics" },
      { label: "Reduce operating cost", href: "/solutions/operating-cost" },
    ],
    integrations: ["ServiceNow", "SAP", "Microsoft 365"],
    deployment: ["Cloud", "Hybrid"],
    security: "Design intent: role-based access and audit logging.",
  },
  {
    id: "forecasting-decision-intelligence",
    name: "Forecasting & Decision Intelligence",
    short: "Forecasting & Decisions",
    icon: TrendingUp,
    accent: "#4b3f9e",
    accentText: "#362d75",
    problem: "Decisions are made on instinct instead of forecasts and modelled scenarios.",
    summary: "Concepts that combine forecasting, scenario modelling and decision intelligence into one accountable workflow.",
    items: [
      { name: "Forecasting Platform", description: "Demand, revenue, workload, customer, inventory and capacity forecasts." },
      { name: "Scenario & What-If Platform", description: "Interactive business simulations showing how decisions change future outcomes." },
      { name: "Decision Intelligence Platform", description: "Analytics, forecasts, optimization, human approval and action tracking in one workflow." },
    ],
    related: [
      { label: "Business analytics", href: "/capabilities/business-analytics" },
      { label: "Improve decision-making", href: "/solutions/decisions" },
    ],
    integrations: ["Power BI", "Azure", "AWS"],
    deployment: ["Cloud", "Hybrid"],
    security: "Design intent: role-based access to forecasts and decisions.",
  },
  {
    id: "optimization-simulation",
    name: "Optimization & Simulation Systems",
    short: "Optimization & Simulation",
    icon: SlidersHorizontal,
    accent: "#4a5568",
    accentText: "#333d4d",
    problem: "Scheduling, routing and resourcing decisions are made by hand against constraints nobody can fully hold in mind.",
    summary: "Mathematical optimization and simulation concepts for scheduling, routing, inventory, capacity and operational change.",
    items: [
      { name: "Optimization Platform", description: "Mathematical optimization for scheduling, routing, capacity, resource allocation and planning." },
      { name: "Workforce Scheduling System", description: "Optimized staff allocation based on skills, demand, availability, cost and constraints." },
      { name: "Route & Fleet Optimization System", description: "Vehicle routing, scheduling, capacity and delivery optimization." },
      { name: "Inventory Optimization System", description: "Reorder levels, safety stock, demand planning and inventory allocation." },
      { name: "Queue & Capacity Optimization System", description: "Staffing and capacity models for banks, hospitals, government offices and service centres." },
      { name: "Simulation & Digital Operations Lab", description: "Scenario simulation for testing operational changes before implementation." },
    ],
    related: [
      { label: "Operations research and optimization", href: "/capabilities/operations-research" },
      { label: "Reduce operating cost", href: "/solutions/operating-cost" },
    ],
    integrations: ["SAP", "Microsoft 365", "ServiceNow"],
    deployment: ["Cloud", "On-premise"],
    security: "Design intent: role-based access and encrypted scenario data.",
  },
  {
    id: "ai-knowledge-agentic",
    name: "AI, Knowledge & Agentic Platforms",
    short: "AI & Agentic Platforms",
    icon: BrainCircuit,
    accent: "#ff5a00",
    accentText: "#a93800",
    problem: "Knowledge is locked in documents and systems that AI cannot safely act on yet.",
    summary: "Concepts for governed AI assistants, copilots and agents that work across knowledge, service and documents.",
    items: [
      { name: "Enterprise Knowledge AI", description: "Governed RAG and search assistant over policies, manuals, regulations and organisational knowledge." },
      { name: "Enterprise AI Copilot", description: "Role-specific copilots connected to business data, applications and workflows." },
      { name: "Agentic Operations Platform", description: "Governed AI agents that coordinate tools, workflows, approvals and business actions." },
      { name: "Customer Service AI Platform", description: "AI-assisted service, case routing, knowledge retrieval, escalation and CRM integration." },
      { name: "Intelligent Document Platform", description: "OCR, classification, extraction, validation, search and workflow automation." },
    ],
    related: [
      { label: "AI and intelligent automation", href: "/capabilities/ai-intelligent-automation" },
      { label: "Agentic engineering", href: "/capabilities/agentic-engineering" },
    ],
    integrations: ["Microsoft 365", "Google Workspace", "SharePoint"],
    deployment: ["Cloud", "Hybrid"],
    security: "Design intent: single sign-on, role-based access and audit logging.",
  },
  {
    id: "automation-integration-apps",
    name: "Automation, Integration & Enterprise Applications",
    short: "Automation & Apps",
    icon: Workflow,
    accent: "#6b47b8",
    accentText: "#6b47b8",
    problem: "Manual processes and disconnected systems slow every enterprise function down.",
    summary: "Concepts for automating workflows and connecting or replacing core enterprise applications.",
    items: [
      { name: "Business Process Automation Platform", description: "End-to-end workflows with approvals, rules, integrations, notifications and analytics." },
      { name: "Integration & API Platform", description: "Secure APIs connecting ERP, CRM, finance, cloud, mobile and third-party systems." },
      { name: "Custom ERP / Business Management System", description: "Finance, procurement, inventory, HR, sales and operational management systems." },
      { name: "CRM & Customer Operations Platform", description: "Leads, customers, cases, communications, sales and support workflows." },
      { name: "IT Service Management Platform", description: "Service desk, assets, incidents, requests, SLAs, automation and analytics." },
    ],
    related: [
      { label: "Business process automation", href: "/solutions/automation" },
      { label: "Enterprise applications", href: "/capabilities/enterprise-applications" },
    ],
    integrations: ["ServiceNow", "SAP", "Salesforce"],
    deployment: ["Cloud", "Hybrid", "On-premise"],
    security: "Design intent: role-based permissions and encrypted credentials.",
  },
  {
    id: "digital-workplace-portals",
    name: "Digital Workplace & Service Portals",
    short: "Digital Workplace",
    icon: LayoutGrid,
    accent: "#2d8a55",
    accentText: "#22713f",
    problem: "Employees, managers and customers each need a different front door into the organisation.",
    summary: "Portal concepts for employees, executives and customers, built on the same design system.",
    items: [
      { name: "Digital Workplace Portal", description: "Unified employee portal for documents, workflows, apps, knowledge and collaboration." },
      { name: "Executive Management Portal", description: "Single management workspace combining analytics, approvals, alerts and decision support." },
      { name: "Citizen / Customer Service Portal", description: "Self-service applications for government, enterprises and service organizations." },
    ],
    related: [
      { label: "Digital workplace", href: "/solutions/modernize" },
      { label: "Enterprise applications", href: "/capabilities/enterprise-applications" },
    ],
    integrations: ["Microsoft 365", "Google Workspace", "ServiceNow"],
    deployment: ["Cloud"],
    security: "Design intent: single sign-on and enterprise identity integration.",
  },
  {
    id: "learning-skills",
    name: "Learning & Skills Platforms",
    short: "Learning & Skills",
    icon: GraduationCap,
    accent: "#ff7a1a",
    accentText: "#a93800",
    problem: "Training and skills data live in disconnected tools instead of one learning system.",
    summary: "Concepts for delivering, assessing and tracking learning and workforce skills at scale.",
    items: [
      { name: "Learning Management System", description: "Corporate, university and professional learning environments." },
      { name: "AI Learning Platform", description: "AI tutors, assessments, recommendations, learning analytics and adaptive learning." },
      { name: "Assessment & Certification Platform", description: "Exams, question banks, competency assessment, certification and analytics." },
      { name: "Skills Intelligence Platform", description: "Skills inventories, competency maps, gaps, learning recommendations and workforce planning." },
    ],
    related: [
      { label: "Workforce learning", href: "/solutions/workforce" },
      { label: "Digital learning capability", href: "/capabilities/digital-learning" },
    ],
    integrations: ["Moodle", "Microsoft 365", "Google Workspace"],
    deployment: ["Cloud"],
    security: "Design intent: single sign-on and data privacy controls.",
  },
  {
    id: "cloud-operations-observability",
    name: "Cloud Operations & Observability",
    short: "Cloud Operations",
    icon: Cloud,
    accent: "#17897a",
    accentText: "#17705a",
    problem: "Cloud environments are hard to monitor, secure and control for cost as they grow.",
    summary: "Concepts for monitoring cloud infrastructure cost, reliability and system health in one place.",
    items: [
      { name: "Cloud Operations Platform", description: "Infrastructure monitoring, cost, reliability, incidents and cloud operations." },
      { name: "Observability Platform", description: "Logs, metrics, traces, alerts, service health and operational intelligence." },
    ],
    related: [
      { label: "Cloud modernisation", href: "/solutions/modernize" },
      { label: "Cloud and platform engineering", href: "/capabilities/cloud-devops-platform-engineering" },
    ],
    integrations: ["AWS", "Azure", "Google Cloud", "ManageEngine"],
    deployment: ["Cloud", "Hybrid"],
    security: "Design intent: continuous compliance monitoring and encrypted telemetry.",
  },
];

export const getProductFamily = (id: string) => PRODUCT_FAMILIES.find((f) => f.id === id);

export const CONNECT_POINTS = ["CRM", "ERP", "Email", "Cloud", "Documents", "APIs", "Databases", "LMS"];

export const INTEGRATION_GROUPS = [
  { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { title: "Enterprise", items: ["SAP", "Odoo", "Salesforce"] },
  { title: "Workplace", items: ["Microsoft 365", "Google Workspace"] },
  { title: "IT and support", items: ["ServiceNow", "ManageEngine", "Zendesk"] },
  { title: "Business apps", items: ["Zoho", "Moodle"] },
];

export const STACK_STEPS = ["Users", "App layer", "API and data", "Cloud"];
