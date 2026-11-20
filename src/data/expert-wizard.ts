/**
 * Talk to an Expert: branching guided discovery, defined as data.
 *
 * Step 1 (goal) chooses a branch. The branch decides which steps follow and which options step 2 shows.
 * The longest path (analytics, agents, platform) has 9 steps; shorter branches skip steps that do not apply.
 */

export type BranchId = "analytics" | "optimization" | "agents" | "platform" | "learning" | "other";

export interface WizardOption {
  value: string;
  label: string;
  hint?: string;
}

export type QuestionKind = "single" | "multi" | "select" | "text" | "email" | "textarea";

export interface Question {
  id: string;
  kind: QuestionKind;
  label: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  /** Options for every branch. */
  options?: WizardOption[];
  /** Options that depend on the branch chosen in step 1. */
  optionsByBranch?: Partial<Record<BranchId, WizardOption[]>>;
  /** Layout hint for option grids (Tailwind grid-cols classes). */
  columns?: string;
}

export interface WizardStep {
  id: string;
  /** Short label for the progress rail. */
  rail: string;
  eyebrow: string;
  title: string;
  intro?: string;
  questions: Question[];
  /** Last step: collects consent and submits. */
  final?: boolean;
}

export const goals: (WizardOption & { branch: BranchId })[] = [
  { value: "ai-automation", label: "AI & Automation", branch: "agents" },
  { value: "analytics", label: "Data & Analytics", branch: "analytics" },
  { value: "cloud-devops", label: "Cloud & DevOps", branch: "platform" },
  { value: "software", label: "Software", branch: "platform" },
  { value: "enterprise-apps", label: "Enterprise Applications", branch: "platform" },
  { value: "learning", label: "Digital Learning", branch: "learning" },
  { value: "transformation", label: "Transformation & operations", branch: "optimization" },
  { value: "unsure", label: "Not Sure Yet", branch: "other" },
];

export const branchNames: Record<BranchId, string> = {
  analytics: "Analytics",
  optimization: "Operations and optimisation",
  agents: "AI and agents",
  platform: "Platforms and software",
  learning: "Learning",
  other: "General",
};

const platformOptions: WizardOption[] = [
  "AWS", "Azure", "GCP", "Microsoft 365", "Odoo", "SAP", "Zoho", "Salesforce", "ServiceNow", "Zendesk", "ManageEngine", "Google Workspace", "Other", "Not sure",
].map((label) => ({ value: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"), label }));

export const steps: WizardStep[] = [
  {
    id: "goal",
    rail: "What you want to achieve",
    eyebrow: "What would you like to achieve?",
    title: "Choose the area where you want to create progress.",
    questions: [
      { id: "goal", kind: "single", label: "Area of progress", required: true, options: goals.map(({ value, label }) => ({ value, label })), columns: "grid-cols-2 sm:grid-cols-4" },
    ],
  },
  {
    id: "focus",
    rail: "The problem to solve",
    eyebrow: "The problem you are trying to solve",
    title: "Which of these is closest?",
    intro: "Options adapt to your chosen area. Pick the nearest fit; you can describe the detail later.",
    questions: [
      {
        id: "focus",
        kind: "single",
        label: "Closest problem",
        required: true,
        columns: "grid-cols-1 sm:grid-cols-2",
        optionsByBranch: {
          analytics: [
            { value: "visibility", label: "See performance clearly" },
            { value: "trust", label: "Trust the numbers we report" },
            { value: "forecast", label: "Forecast demand, cost or risk" },
            { value: "speed", label: "Get reports out faster" },
          ],
          optimization: [
            { value: "cost-delay", label: "Reduce cost or delays" },
            { value: "planning", label: "Plan schedules and capacity" },
            { value: "allocation", label: "Allocate people, stock or routes better" },
            { value: "process", label: "Redesign a process end to end" },
          ],
          agents: [
            { value: "manual-work", label: "Reduce manual work" },
            { value: "knowledge", label: "Answer questions from our own documents" },
            { value: "workflow", label: "Automate a multi-step workflow" },
            { value: "decision-support", label: "Support decisions with AI" },
          ],
          platform: [
            { value: "modernise", label: "Modernise an existing platform" },
            { value: "cloud", label: "Move to, or fix, our cloud setup" },
            { value: "build", label: "Build custom software" },
            { value: "integrate", label: "Connect systems that do not talk" },
          ],
          learning: [
            { value: "team-training", label: "Train a team" },
            { value: "capability", label: "Build internal capability" },
            { value: "pathway", label: "Plan a learning pathway" },
            { value: "level", label: "Not sure what level fits" },
          ],
        },
      },
    ],
  },
  {
    id: "platforms",
    rail: "Platform selection",
    eyebrow: "Platform selection",
    title: "Select the systems already in the picture.",
    intro: "Choose all that apply.",
    questions: [{ id: "platforms", kind: "multi", label: "Systems already in use", options: platformOptions, columns: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-5" }],
  },
  {
    id: "stage",
    rail: "Project stage",
    eyebrow: "Project stage",
    title: "Where are you right now?",
    questions: [
      {
        id: "stage",
        kind: "single",
        label: "Current stage",
        required: true,
        columns: "grid-cols-1 sm:grid-cols-2",
        options: [
          { value: "exploring", label: "Exploring", hint: "Still working out what is possible" },
          { value: "planning", label: "Planning", hint: "We know the problem and need a plan" },
          { value: "in-progress", label: "In progress", hint: "Work has started and we need help" },
          { value: "support", label: "Supporting something live", hint: "It exists and needs care" },
        ],
      },
    ],
  },
  {
    id: "organisation",
    rail: "Organisation",
    eyebrow: "Organisation",
    title: "Tell us about your organisation.",
    intro: "All optional. It helps us send you to the right person.",
    questions: [
      {
        id: "orgType",
        kind: "select",
        label: "Organisation type",
        options: [
          { value: "private", label: "Private company" },
          { value: "public", label: "Public sector" },
          { value: "ngo", label: "NGO or non-profit" },
          { value: "education", label: "Education or training body" },
          { value: "startup", label: "Startup" },
          { value: "individual", label: "Individual" },
        ],
      },
      { id: "industry", kind: "text", label: "Industry", placeholder: "For example retail, logistics, health" },
      {
        id: "size",
        kind: "select",
        label: "Organisation size",
        options: [
          { value: "1-10", label: "1 to 10 people" },
          { value: "11-50", label: "11 to 50 people" },
          { value: "51-250", label: "51 to 250 people" },
          { value: "251+", label: "More than 250 people" },
        ],
      },
      { id: "country", kind: "text", label: "Country", autoComplete: "country-name" },
    ],
  },
  {
    id: "timeline",
    rail: "Timeline and budget",
    eyebrow: "Timeline + budget",
    title: "How soon, and roughly how much?",
    intro: "Budget is optional. Skipping it does not change how we read your request.",
    questions: [
      {
        id: "timeline",
        kind: "single",
        label: "Timeline",
        columns: "grid-cols-2 sm:grid-cols-4",
        options: [
          { value: "asap", label: "As soon as possible" },
          { value: "1-3-months", label: "1 to 3 months" },
          { value: "3-6-months", label: "3 to 6 months" },
          { value: "flexible", label: "Flexible" },
        ],
      },
      {
        id: "budget",
        kind: "single",
        label: "Budget range (optional)",
        columns: "grid-cols-2 sm:grid-cols-4",
        options: [
          { value: "not-set", label: "Not set yet" },
          { value: "small", label: "Small, focused piece" },
          { value: "medium", label: "Mid-size programme" },
          { value: "private", label: "Prefer not to say" },
        ],
      },
    ],
  },
  {
    id: "description",
    rail: "Tell us more",
    eyebrow: "Tell us more",
    title: "Describe what you want to change.",
    questions: [
      {
        id: "message",
        kind: "textarea",
        label: "What is happening today, and what should be different?",
        required: true,
        placeholder: "A few sentences is enough.",
      },
    ],
  },
  {
    id: "systems",
    rail: "Systems and data",
    eyebrow: "Systems and data",
    title: "Anything we should know about your systems or data?",
    intro: "Optional. Please do not paste passwords, keys or personal data.",
    questions: [{ id: "systems", kind: "textarea", label: "Systems, data sources or constraints", placeholder: "For example: sales data lives in spreadsheets and an old ERP." }],
  },
  {
    id: "contact",
    rail: "Your details",
    eyebrow: "Contact details",
    title: "Where should we reply?",
    final: true,
    questions: [
      { id: "name", kind: "text", label: "Name", required: true, autoComplete: "name" },
      { id: "email", kind: "email", label: "Email", required: true, autoComplete: "email", placeholder: "you@organisation.com" },
      { id: "organisation", kind: "text", label: "Organisation", autoComplete: "organization" },
      { id: "role", kind: "text", label: "Role", autoComplete: "organization-title" },
    ],
  },
];

/** Step ids per branch. `platform`, `analytics` and `agents` are the longest path (9). */
const full = ["goal", "focus", "platforms", "stage", "organisation", "timeline", "description", "systems", "contact"];
export const branchPaths: Record<BranchId, string[]> = {
  analytics: full,
  agents: full,
  platform: full,
  optimization: ["goal", "focus", "platforms", "stage", "organisation", "timeline", "description", "contact"],
  learning: ["goal", "focus", "stage", "organisation", "timeline", "description", "contact"],
  other: ["goal", "organisation", "timeline", "description", "contact"],
};

export function branchOf(goal: string | undefined): BranchId | null {
  return goals.find((g) => g.value === goal)?.branch ?? null;
}

/** Steps for the current answers. Before a goal is chosen the longest path is shown. */
export function pathFor(goal: string | undefined): WizardStep[] {
  const ids = branchPaths[branchOf(goal) ?? "platform"];
  return ids.map((id) => steps.find((s) => s.id === id)!);
}

export function optionsFor(q: Question, branch: BranchId | null): WizardOption[] {
  return q.options ?? (branch ? q.optionsByBranch?.[branch] : undefined) ?? [];
}
