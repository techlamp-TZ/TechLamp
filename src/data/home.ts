import type { ComponentType, SVGProps } from "react";

export type Tone = "peach" | "lilac" | "sky" | "mint";

/* ───────────── 01 Hero — TechLamp Operating System ───────────── */
export type OsIcon = "chart" | "route" | "workflow" | "database" | "people" | "models" | "apps" | "target";

export interface OsNode {
  id: string;
  label: string;
  icon: OsIcon;
  tone: Tone;
  /** compass position around the core: N, NE, E, SE, S, SW, W, NW */
  angle: number;
  info: string;
}

/** Eight nodes at 45° compass positions around the core; the first three name TechLamp's specialist engines. */
export const OS_NODES: OsNode[] = [
  { id: "business-analytics", label: "Business Analytics", icon: "chart", tone: "peach", angle: -90, info: "Measure performance, explain drivers and forecast what happens next." },
  { id: "operations-research", label: "Operations Research", icon: "route", tone: "sky", angle: -45, info: "Find the best feasible plan under real constraints." },
  { id: "agentic-engineering", label: "Agentic Engineering", icon: "workflow", tone: "mint", angle: 0, info: "Governed agents that carry out approved work end to end." },
  { id: "real-outcomes", label: "Real Outcomes", icon: "target", tone: "lilac", angle: 45, info: "Results are measured and fed back as the next signal." },
  { id: "applications-agents", label: "Applications & Agents", icon: "apps", tone: "sky", angle: 90, info: "Workflows and agents carry decisions into daily systems." },
  { id: "models-optimization", label: "Models & Optimization", icon: "models", tone: "mint", angle: 135, info: "Statistical and optimization models turn data into options." },
  { id: "data-sources", label: "Data Sources", icon: "database", tone: "lilac", angle: 180, info: "Operational, financial and customer data feed the system." },
  { id: "people-expertise", label: "People & Expertise", icon: "people", tone: "peach", angle: 225, info: "Specialists and domain judgment stay in the loop throughout." },
];

/* ───────────── Hero micro-features ───────────── */
export const HERO_MICRO_FEATURES = [
  { icon: "chart", label: "Turn data into decisions" },
  { icon: "workflow", label: "Operate with intelligence" },
  { icon: "target", label: "Create measurable impact" },
] as const;

/** Real product logos shown as "platforms we work with" under the hero — no partnership implied. */
export const TRUSTED_PLATFORMS = ["Microsoft Azure", "AWS", "Google Cloud", "Snowflake", "Salesforce"];

/* ───────────── 02 Intelligence loop ───────────── */
export const LOOP_STEPS = [
  { n: "01", label: "SIGNAL", icon: "database", info: "Operational events, transactions and documents enter the system." },
  { n: "02", label: "ANALYTICS", icon: "analytics", info: "Measures and drivers explain what is happening and why." },
  { n: "03", label: "FORECAST", icon: "forecast", info: "Predictive models estimate what is likely to happen next." },
  { n: "04", label: "OPTIMIZE", icon: "optimize", info: "Constraints and objectives narrow options to the best feasible one." },
  { n: "05", label: "DECIDE", icon: "decide", info: "A recommended decision is prepared with its evidence." },
  { n: "06", label: "APPROVE", icon: "approve", info: "People review, adjust and approve — judgment stays human." },
  { n: "07", label: "ACTION", icon: "action", info: "Approved decisions are executed by workflows and agents." },
  { n: "08", label: "OUTCOME", icon: "outcome", info: "Results are measured and fed back as the next signal." },
] as const;
export const LOOP_DEFAULT_ACTIVE = 4;

/* ───────────── 03 Three specialist engines ───────────── */
export const ENGINES = [
  {
    id: "analytics",
    n: "01",
    title: "Business Analytics",
    tags: ["Measure", "Understand", "Anticipate"],
    description: "Turn your data into clear, actionable insight about what's happening — and why.",
    linkLabel: "Explore business analytics",
    href: "/capabilities/business-analytics",
    tone: "peach" as Tone,
  },
  {
    id: "or",
    n: "02",
    title: "Operations Research",
    tags: ["Model", "Optimize", "Decide"],
    description: "Find the best possible decisions, using mathematical models and advanced analytics.",
    linkLabel: "Explore operations research",
    href: "/capabilities/operations-research",
    tone: "sky" as Tone,
  },
  {
    id: "agentic",
    n: "03",
    title: "Agentic Engineering",
    tags: ["Automate", "Augment", "Scale"],
    description: "Build intelligent agents and connected systems that turn decisions into action.",
    linkLabel: "Explore agentic engineering",
    href: "/capabilities/agentic-engineering",
    tone: "mint" as Tone,
  },
];

export const DRIVER_BARS = [
  { label: "Volume", value: "+12.4%", pct: 100, strong: true },
  { label: "Retention", value: "+6.8%", pct: 70 },
  { label: "Price", value: "−1.2%", pct: 36 },
  { label: "Mix", value: "+3.1%", pct: 52 },
];

/** 4 × 7 feasible-solution grid: 0 empty, 1 feasible, 2 candidate, 3 selected */
export const OR_GRID: number[][] = [
  [1, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [0, 1, 3, 3, 3, 3, 0],
  [1, 0, 0, 1, 0, 0, 1],
];

export const AGENT_STEPS = [
  { id: "intent", label: "Intent", icon: "message", tone: "lilac" as Tone },
  { id: "policy", label: "Policy", icon: "shield", tone: "peach" as Tone },
  { id: "human", label: "Human", icon: "user", tone: "sky" as Tone },
  { id: "action", label: "Action", icon: "zap", tone: "mint" as Tone },
];

/* ───────────── 04 Business operations ───────────── */
export type NodeStyle = "blue" | "white" | "lilac" | "dark" | "pale-blue" | "peach" | "yellow" | "pink" | "sky";

export interface OpsNode {
  label: string;
  status: "EXAMPLE" | "ILLUSTRATIVE";
  style: NodeStyle;
  mono?: boolean;
  /** Marks the human decision/approval step in the flow (judgment stays human). */
  approval?: boolean;
}

export interface OpsRow {
  id: string;
  n: string;
  title: string;
  description: string;
  tone: Tone;
  nodes: OpsNode[];
  outcome: string;
}

export const OPS_ROWS: OpsRow[] = [
  {
    id: "customer",
    n: "01",
    title: "CUSTOMER OPERATIONS",
    description: "Resolve demand before it becomes backlog",
    tone: "peach",
    nodes: [
      { label: "Salesforce", status: "EXAMPLE", style: "blue" },
      { label: "Customer signal", status: "EXAMPLE", style: "white", mono: true },
      { label: "Knowledge AI", status: "ILLUSTRATIVE", style: "lilac", mono: true },
      { label: "Human approval", status: "EXAMPLE", style: "white", mono: true, approval: true },
      { label: "Zendesk", status: "EXAMPLE", style: "dark" },
    ],
    outcome: "−32% resolution time",
  },
  {
    id: "workforce",
    n: "02",
    title: "WORKFORCE OPTIMIZATION",
    description: "Match people, skills and demand continuously",
    tone: "sky",
    nodes: [
      { label: "Microsoft 365", status: "EXAMPLE", style: "pale-blue" },
      { label: "Demand forecast", status: "EXAMPLE", style: "white", mono: true },
      { label: "OR optimizer", status: "ILLUSTRATIVE", style: "peach", mono: true },
      { label: "Manager decision", status: "EXAMPLE", style: "white", mono: true, approval: true },
      { label: "Power BI", status: "EXAMPLE", style: "yellow" },
    ],
    outcome: "+18% capacity",
  },
  {
    id: "revenue",
    n: "03",
    title: "REVENUE INTELLIGENCE",
    description: "Turn fragmented pipeline data into precise action",
    tone: "mint",
    nodes: [
      { label: "Zoho CRM", status: "EXAMPLE", style: "pink" },
      { label: "Pipeline data", status: "EXAMPLE", style: "white", mono: true },
      { label: "Driver analytics", status: "ILLUSTRATIVE", style: "sky", mono: true },
      { label: "Scenario decision", status: "EXAMPLE", style: "white", mono: true, approval: true },
      { label: "Agent action", status: "EXAMPLE", style: "lilac" },
    ],
    outcome: "+11% forecast accuracy",
  },
];

/* ───────────── 05 Enterprise operating stack ───────────── */
export const STACK_ROWS = [
  { id: "workplace", label: "PEOPLE + WORKPLACE", tone: "peach" as Tone, items: ["Microsoft 365", "Google Workspace"] },
  { id: "customer", label: "CUSTOMER", tone: "lilac" as Tone, items: ["Salesforce", "Zoho", "Zendesk"] },
  { id: "operations", label: "BUSINESS OPERATIONS", tone: "sky" as Tone, items: ["SAP", "Odoo", "ServiceNow"] },
  { id: "automation-data", label: "AUTOMATION + DATA", tone: "mint" as Tone, items: ["Power Automate", "Power BI", "Dataverse"] },
  { id: "ai-agents", label: "AI + AGENTS", tone: "peach" as Tone, items: ["TechLamp Agents", "Azure AI", "Knowledge AI"] },
  { id: "cloud", label: "CLOUD FOUNDATION", tone: "sky" as Tone, items: ["AWS", "Microsoft Azure", "Google Cloud"] },
];

/* ───────────── 06 Evidence + learning ───────────── */
export const CASE_BEFORE = ["Email request", "Manual spreadsheet", "Delayed approval"];
export const CASE_AFTER = ["Unified signal", "Policy decision", "Audited action"];
export const CASE_STATS = [
  { value: "−42%", label: "handoff time" },
  { value: "3.2×", label: "faster decisions" },
  { value: "100%", label: "audit trail" },
];

export const ACADEMY_LEVELS = ["01", "02", "03", "04"];
export const RESEARCH_TAGS = ["PREDICT", "OPTIMIZE", "ACT"];

export type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }>;
