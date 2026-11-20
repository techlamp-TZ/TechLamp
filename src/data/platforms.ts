import type { Tone } from "@/data/home";

export interface PlatformTool {
  name: string;
  /** What we typically do around this tool. */
  role: string;
}

export interface PlatformLayer {
  id: string;
  index: string;
  label: string;
  title: string;
  tone: Tone;
  summary: string;
  /** What we connect and govern in this layer. */
  connect: string[];
  /** Example tools we work with. Not partnerships. */
  tools: PlatformTool[];
  /** A short line about how this layer feeds the next. */
  handoff: string;
}

export const PLATFORM_LAYERS: PlatformLayer[] = [
  {
    id: "workplace",
    index: "01",
    label: "PEOPLE + WORKPLACE",
    title: "People and digital workplace",
    tone: "peach",
    summary: "Where your teams communicate, share files and request help. We keep the workplace tools people already use and connect them to the rest of the stack.",
    connect: ["Single sign-on and identity", "Shared spaces for documents and knowledge", "Service requests raised from where people work", "Adoption support and role-based training"],
    tools: [
      { name: "Microsoft 365", role: "Mail, files, chat and identity integration" },
      { name: "Google Workspace", role: "Collaboration and document workflows" },
    ],
    handoff: "Identity and content from the workplace feed every layer below.",
  },
  {
    id: "customer",
    index: "02",
    label: "CUSTOMER",
    title: "Customer and CRM",
    tone: "lilac",
    summary: "Where customer records, cases and conversations live. We align the data model so sales, service and analytics read the same customer.",
    connect: ["One customer record across teams", "Case and ticket handoffs", "Consent and data-quality rules", "Customer data prepared for analytics"],
    tools: [
      { name: "Salesforce", role: "CRM data model and integration" },
      { name: "Zoho", role: "CRM workflows and reporting" },
      { name: "Zendesk", role: "Support cases and knowledge links" },
    ],
    handoff: "Customer events flow to operations and to the data layer.",
  },
  {
    id: "operations",
    index: "03",
    label: "BUSINESS OPERATIONS",
    title: "Business operations",
    tone: "sky",
    summary: "The systems that run finance, supply, service and IT. We connect them without rewriting what already works.",
    connect: ["ERP data exposed through governed interfaces", "Service management routing and ownership", "Approvals that follow business policy", "Master data kept consistent"],
    tools: [
      { name: "SAP", role: "ERP integration and data extraction" },
      { name: "Odoo", role: "Modular business apps and workflows" },
      { name: "ServiceNow", role: "IT and business service workflows" },
    ],
    handoff: "Operational events become signals for automation and analytics.",
  },
  {
    id: "automation-data",
    index: "04",
    label: "AUTOMATION + DATA",
    title: "Automation and data",
    tone: "mint",
    summary: "Where signals from every layer are combined, checked and acted on. We build pipelines, models and workflows with clear ownership.",
    connect: ["Data pipelines with quality checks", "Shared metric definitions", "Workflow automation with audit trails", "Dashboards for management and operators"],
    tools: [
      { name: "Power Automate", role: "Workflow automation" },
      { name: "Power BI", role: "Dashboards and reporting" },
      { name: "Dataverse", role: "Governed shared data store" },
    ],
    handoff: "Clean, governed data is what AI and agents read from.",
  },
  {
    id: "ai-agents",
    index: "05",
    label: "AI + AGENTS",
    title: "AI and agents",
    tone: "peach",
    summary: "Assistants and agents that read governed data and carry out approved work. Permissions, logging and human approval are part of the design.",
    connect: ["Knowledge search over approved sources", "Scoped agent permissions", "Logging of prompts, actions and decisions", "Human approval for consequential steps"],
    tools: [
      { name: "TechLamp Agents", role: "Governed agent patterns we build" },
      { name: "Azure AI", role: "Model and AI service hosting" },
      { name: "Knowledge AI", role: "TechLamp knowledge assistant concept" },
    ],
    handoff: "Agents act through the same workflows and identity as your staff.",
  },
  {
    id: "cloud",
    index: "06",
    label: "CLOUD FOUNDATION",
    title: "Cloud foundation",
    tone: "sky",
    summary: "The infrastructure everything above runs on. We design landing zones, delivery pipelines and cost and security controls for the cloud you choose.",
    connect: ["Landing zones and network design", "Infrastructure as code and delivery pipelines", "Security baselines and monitoring", "Cost tagging and budget review"],
    tools: [
      { name: "AWS", role: "Cloud infrastructure and services" },
      { name: "Microsoft Azure", role: "Cloud infrastructure and services" },
      { name: "Google Cloud", role: "Cloud infrastructure and services" },
    ],
    handoff: "Cloud controls apply to every layer above.",
  },
];

export const PLATFORM_PRINCIPLES = [
  { eyebrow: "PRINCIPLE 01", title: "Connect, do not replace", text: "We start from the tools your teams already trust and connect them, replacing only what blocks the work.", tone: "peach" as const },
  { eyebrow: "PRINCIPLE 02", title: "Own the interfaces", text: "Every connection has an owner, a contract and monitoring, so the system stays understandable.", tone: "lilac" as const },
  { eyebrow: "PRINCIPLE 03", title: "Govern across layers", text: "Identity, data access, logging and approvals are designed once and applied everywhere.", tone: "mint" as const },
];

export const LAYER_FLOW = [
  { label: "Identity", text: "One sign-in and role model across tools." },
  { label: "Data", text: "Shared definitions and quality checks." },
  { label: "Workflow", text: "Approvals and automation with audit trails." },
  { label: "AI", text: "Assistants and agents that read governed data." },
  { label: "Cloud", text: "Secure, monitored infrastructure underneath." },
];

export const getPlatformLayer = (id: string) => PLATFORM_LAYERS.find((l) => l.id === id);
