import type { CapabilitySlug } from "./capabilities";

export type Tone = "blue" | "violet" | "teal" | "orange" | "green";
export type PanelTone = "blue" | "violet" | "orange" | "green";

export interface CapabilityDetail {
  hero: {
    title: string[];
    lede: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    panel: {
      question: string;
      tiles: { label: string; value: string; tone: PanelTone }[];
      driversLabel: string;
      drivers: { label: string; pct: number; tone: PanelTone }[];
    };
  };
  loop: { title: string; aside: string; steps: string[]; note: string };
  answers: { title: string; text: string; rows: { name: string; question: string; example: string; tone: Tone }[] };
  focus: {
    title: string;
    tabs: { tab: string; question: string; text: string; drivers: { label: string; note: string }[]; action: string }[];
  };
  deliverables: { label: string; text: string }[];
  flow: {
    title: string;
    inputsTitle: string;
    inputs: { k: string; v: string }[];
    stages: { label: string; text: string; tone: "blue" | "violet" | "orange" }[];
  };
  tree?: { title: string; text: string; root: string; branches: { label: string; leaves: string[] }[] };
  areas?: { title: string; items: string[] }[];
  proof: { title: string; steps: { label: string; text: string }[]; outcome: string };
  cta: { eyebrow: string; title: string; text: string };
}

const DISC = "/talk-to-an-expert";

export const CAPABILITY_DETAILS: Record<CapabilitySlug, CapabilityDetail> = {
  /* ------------------------------------------------------------------ */
  "business-analytics": {
    hero: {
      title: ["Measure.", "Understand.", "Decide.", "Improve."],
      lede: "TechLamp converts operational, financial, customer, workforce, service and strategic data into management intelligence that leads to action.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an analytics expert", href: DISC },
      panel: {
        question: "What is driving the revenue gap, and what action changes the forecast?",
        tiles: [
          { label: "Target", value: "100%", tone: "blue" },
          { label: "Actual", value: "92%", tone: "orange" },
          { label: "Variance", value: "-8%", tone: "violet" },
          { label: "Forecast", value: "95%", tone: "green" },
        ],
        driversLabel: "Primary drivers / normalised demo data",
        drivers: [
          { label: "Region mix", pct: 92, tone: "blue" },
          { label: "Product volume", pct: 74, tone: "violet" },
          { label: "Price realisation", pct: 58, tone: "orange" },
          { label: "Customer retention", pct: 80, tone: "green" },
        ],
      },
    },
    loop: {
      title: "Analytics is a management loop, not a dashboard.",
      aside: "Result feeds back into data",
      steps: ["Business questions", "Data", "Measures", "KPIs", "Analysis", "Insight", "Decision", "Action", "Result", "Continuous improvement"],
      note: "Result becomes new data. Measure whether the action worked.",
    },
    answers: {
      title: "Move from observation to intervention.",
      text: "Each level answers a different management question and strengthens the next decision.",
      rows: [
        { name: "Descriptive", question: "What happened?", example: "Revenue decreased.", tone: "blue" },
        { name: "Diagnostic", question: "Why did it happen?", example: "Region, product and customer segment explain the gap.", tone: "violet" },
        { name: "Predictive", question: "What is likely to happen?", example: "Forecast next-quarter revenue under current conditions.", tone: "teal" },
        { name: "Prescriptive", question: "What should we do?", example: "Optimise pricing, sales effort and inventory together.", tone: "orange" },
      ],
    },
    focus: {
      title: "A management environment built around questions.",
      tabs: [
        {
          tab: "Revenue",
          question: "Where is revenue underperforming, why, and which intervention improves the forecast?",
          text: "Review target, actual, variance and forecast, then isolate the drivers management can control.",
          drivers: [
            { label: "Volume", note: "High influence" },
            { label: "Price", note: "Medium influence" },
            { label: "Retention", note: "High influence" },
            { label: "Inventory", note: "Action constraint" },
          ],
          action: "Test pricing and retention scenario",
        },
        {
          tab: "Profitability",
          question: "Which products, customers and channels earn their cost, and which do not?",
          text: "Allocate cost to the activity that caused it so margin can be read at the level where decisions are made.",
          drivers: [
            { label: "Product mix", note: "High influence" },
            { label: "Discounting", note: "Medium influence" },
            { label: "Delivery cost", note: "Medium influence" },
          ],
          action: "Review margin by segment",
        },
        {
          tab: "Customer",
          question: "Which customers are at risk, and what is the earliest signal that they are leaving?",
          text: "Combine service, usage and payment signals into a view account owners can act on this week.",
          drivers: [
            { label: "Service history", note: "High influence" },
            { label: "Usage change", note: "Medium influence" },
            { label: "Payment behaviour", note: "Early signal" },
          ],
          action: "Prioritise account outreach",
        },
        {
          tab: "Operations",
          question: "Where does work queue up, and what does the delay cost downstream?",
          text: "Measure flow through each stage so bottlenecks are found by evidence, not by complaint.",
          drivers: [
            { label: "Queue time", note: "High influence" },
            { label: "Rework", note: "Medium influence" },
            { label: "Capacity", note: "Action constraint" },
          ],
          action: "Rebalance capacity by stage",
        },
        {
          tab: "Workforce",
          question: "Is capacity matched to demand, and where is it drifting?",
          text: "Compare workload, skills and absence patterns to see shortfalls before service suffers.",
          drivers: [
            { label: "Workload", note: "High influence" },
            { label: "Skills coverage", note: "Medium influence" },
            { label: "Absence", note: "Early signal" },
          ],
          action: "Plan cover for the next period",
        },
        {
          tab: "Risk",
          question: "Which exposures are growing, and who owns the response?",
          text: "Track risk indicators against agreed thresholds with a named owner for each breach.",
          drivers: [
            { label: "Threshold breaches", note: "High influence" },
            { label: "Control gaps", note: "Medium influence" },
            { label: "Open actions", note: "Action constraint" },
          ],
          action: "Escalate open breaches",
        },
      ],
    },
    deliverables: [
      { label: "KPI framework", text: "Definitions, formulas, owners and thresholds agreed with management before any dashboard is built." },
      { label: "Performance tree", text: "A driver tree from headline result to controllable levers, so cause can be traced." },
      { label: "Governed data model", text: "Documented sources and refresh rules, so each number has one meaning." },
      { label: "Dashboards and scorecards", text: "Executive and team views built around the questions in the framework." },
      { label: "Forecast and scenario model", text: "Baseline forecast with tested what-if cases, and the assumptions written down." },
      { label: "Alerts and review rhythm", text: "Thresholds, notifications and a meeting cadence that turn a signal into an owned action." },
    ],
    flow: {
      title: "Unify the signals management already has.",
      inputsTitle: "Business systems",
      inputs: [
        { k: "ERP / finance", v: "Ledgers, budgets, invoices" },
        { k: "CRM / sales", v: "Pipeline, accounts, orders" },
        { k: "Service / HR", v: "Tickets, roster, absence" },
        { k: "Workplace", v: "Spreadsheets, forms, email" },
      ],
      stages: [
        { label: "Unified data", text: "SQL, APIs, warehouse or lakehouse", tone: "blue" },
        { label: "Analytics", text: "BI tools, Python, statistical models", tone: "violet" },
        { label: "Management decisions", text: "Alerts, forecasts, actions", tone: "orange" },
      ],
    },
    tree: {
      title: "See the drivers behind the result.",
      text: "Every headline measure breaks into the factors management can influence. We build the tree with you and attach an owner to each branch.",
      root: "Profit",
      branches: [
        { label: "Revenue", leaves: ["Volume", "Price"] },
        { label: "Cost", leaves: ["Operations", "Infrastructure"] },
      ],
    },
    areas: [
      { title: "Performance + finance", items: ["Executive performance intelligence", "Financial performance analytics", "Project and portfolio analytics", "Risk and compliance analytics"] },
      { title: "Customer + growth", items: ["Sales and revenue intelligence", "Customer intelligence", "Education and learning analytics", "Workforce analytics"] },
      { title: "Operations + service", items: ["Operations intelligence", "Service performance analytics", "Procurement analytics", "Supply chain analytics"] },
    ],
    proof: {
      title: "From delayed spreadsheets to earlier intervention.",
      steps: [
        { label: "Business problem", text: "Monthly spreadsheets arrived too late for intervention." },
        { label: "Old process", text: "ERP to Excel exports to consolidation to email." },
        { label: "TechLamp solution", text: "ERP and CRM feeds to an automated pipeline to an analytics model." },
        { label: "Management use", text: "Executive view to alerts to forecast to action." },
      ],
      outcome: "Faster reporting, improved visibility, earlier intervention",
    },
    cta: { eyebrow: "FROM BUSINESS DATA TO MANAGEMENT DECISIONS.", title: "Build a performance intelligence system.", text: "Tell us the decision that arrives too late or the number nobody trusts. We will map the measures, the data and the routine that fixes it." },
  },

  /* ------------------------------------------------------------------ */
  "operations-research": {
    hero: {
      title: ["Model.", "Optimize.", "Compare.", "Commit."],
      lede: "We turn scheduling, routing, capacity and allocation problems into mathematical models, so you can see the best feasible plan and the price of each trade-off.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an optimization expert", href: DISC },
      panel: {
        question: "Which plan meets demand within the rules at the lowest total cost?",
        tiles: [
          { label: "Demand", value: "Met", tone: "green" },
          { label: "Rules", value: "Held", tone: "blue" },
          { label: "Cost", value: "Lowest", tone: "orange" },
          { label: "Slack", value: "Shown", tone: "violet" },
        ],
        driversLabel: "Constraint pressure",
        drivers: [
          { label: "Staff availability", pct: 88, tone: "blue" },
          { label: "Vehicle capacity", pct: 66, tone: "violet" },
          { label: "Time windows", pct: 78, tone: "orange" },
          { label: "Budget ceiling", pct: 52, tone: "green" },
        ],
      },
    },
    loop: {
      title: "Optimization is a decision cycle, not a one-off calculation.",
      aside: "Plans are re-run as conditions change",
      steps: ["Decision", "Constraints", "Objective", "Model", "Solve", "Scenarios", "Recommend", "Execute", "Learn"],
      note: "Actual performance is compared with the plan, and the model is corrected.",
    },
    answers: {
      title: "Questions a spreadsheet cannot settle.",
      text: "Optimization is useful where many choices interact and every choice uses something scarce.",
      rows: [
        { name: "Allocation", question: "Who or what goes where?", example: "Assign staff, machines or budget across competing needs.", tone: "blue" },
        { name: "Scheduling", question: "When should each job run?", example: "Rosters, shifts, maintenance windows and production runs.", tone: "violet" },
        { name: "Routing", question: "In what order, by which path?", example: "Delivery and field-service routes with time windows.", tone: "teal" },
        { name: "Capacity", question: "How much is enough?", example: "Size stock, fleets or teams against uncertain demand.", tone: "orange" },
      ],
    },
    focus: {
      title: "Scenario workbench: change a constraint, see the plan move.",
      tabs: [
        {
          tab: "Workforce",
          question: "Can we cover demand next month with the staff and rules we have?",
          text: "The model builds a roster that respects contracts, skills and leave, and reports where cover is thin.",
          drivers: [
            { label: "Skills coverage", note: "Hard constraint" },
            { label: "Working-time rules", note: "Hard constraint" },
            { label: "Shift preferences", note: "Soft goal" },
          ],
          action: "Compare two roster options",
        },
        {
          tab: "Logistics",
          question: "What is the cheapest set of routes that meets every delivery window?",
          text: "Routes, loads and vehicle types are solved together rather than one at a time.",
          drivers: [
            { label: "Vehicle capacity", note: "Hard constraint" },
            { label: "Delivery windows", note: "Hard constraint" },
            { label: "Distance and time", note: "Objective" },
          ],
          action: "Test one extra vehicle",
        },
        {
          tab: "Inventory",
          question: "How much stock protects service without tying up cash?",
          text: "Balance holding cost against the cost of a stock-out for each item and location.",
          drivers: [
            { label: "Demand variability", note: "High influence" },
            { label: "Lead time", note: "High influence" },
            { label: "Holding cost", note: "Objective" },
          ],
          action: "Test a lower service target",
        },
      ],
    },
    deliverables: [
      { label: "Problem framing", text: "The decision, the objective and the constraints written so the business can check them." },
      { label: "Optimization model", text: "A tested model with documented assumptions and the data it needs." },
      { label: "Scenario comparison", text: "Side-by-side plans showing cost, service level and the constraint that binds." },
      { label: "Decision tool", text: "A simple interface planners use to change inputs and re-run, no specialist needed." },
      { label: "Process alignment", text: "Where Lean Six Sigma or similar process-improvement work is already under way, the model plugs into it instead of duplicating it." },
      { label: "Validation report", text: "The model checked against past plans and known outcomes before anyone relies on it." },
      { label: "Handover", text: "Code, documentation and training so your team can maintain it." },
    ],
    flow: {
      title: "From planning data to a plan you can defend.",
      inputsTitle: "Planning inputs",
      inputs: [
        { k: "Demand", v: "Orders, forecasts, bookings" },
        { k: "Resources", v: "Staff, vehicles, machines" },
        { k: "Rules", v: "Contracts, safety, policy" },
        { k: "Costs", v: "Labour, fuel, penalties" },
      ],
      stages: [
        { label: "Model", text: "Objective, variables, constraints", tone: "blue" },
        { label: "Solver", text: "Exact and heuristic methods", tone: "violet" },
        { label: "Plan", text: "Schedule, route, allocation", tone: "orange" },
      ],
    },
    areas: [
      { title: "People + time", items: ["Shift and roster planning", "Timetabling", "Project and resource scheduling", "Maintenance planning"] },
      { title: "Movement + supply", items: ["Vehicle routing", "Network and facility design", "Inventory optimization", "Procurement allocation"] },
      { title: "Money + risk", items: ["Budget allocation", "Pricing and revenue optimization", "Simulation and stress testing", "Capacity planning"] },
    ],
    proof: {
      title: "From planning by hand to planning with evidence.",
      steps: [
        { label: "Business problem", text: "Weekly plans took a day to build and still broke rules." },
        { label: "Old process", text: "Spreadsheet, manual checks, late corrections." },
        { label: "TechLamp solution", text: "A constraint model that builds and checks the plan." },
        { label: "Management use", text: "Planners compare scenarios and approve one." },
      ],
      outcome: "Faster planning, fewer rule breaches, visible trade-offs",
    },
    cta: { eyebrow: "FROM CONSTRAINTS TO BETTER PLANS.", title: "Optimize the decision that uses your scarcest resource.", text: "Describe the plan that is hardest to get right. We will tell you whether optimization fits and what data it needs." },
  },

  /* ------------------------------------------------------------------ */
  "agentic-engineering": {
    hero: {
      title: ["Plan.", "Act.", "Approve.", "Audit."],
      lede: "We engineer AI agents that carry out approved work across your systems, inside permissions you set, with a human decision wherever it matters.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an agent engineer", href: DISC },
      panel: {
        question: "Can the agent finish this task within its permissions, and what needs approval?",
        tiles: [
          { label: "Scope", value: "Defined", tone: "blue" },
          { label: "Tools", value: "Limited", tone: "violet" },
          { label: "Approval", value: "Required", tone: "orange" },
          { label: "Log", value: "Complete", tone: "green" },
        ],
        driversLabel: "Control layers",
        drivers: [
          { label: "Permissions", pct: 90, tone: "blue" },
          { label: "Approvals", pct: 76, tone: "orange" },
          { label: "Evaluation", pct: 68, tone: "violet" },
          { label: "Monitoring", pct: 82, tone: "green" },
        ],
      },
    },
    loop: {
      title: "An agent is a governed loop, not a prompt.",
      aside: "Every step is logged and can be replayed",
      steps: ["Goal", "Context", "Plan", "Tool call", "Check", "Approval", "Execute", "Record", "Evaluate"],
      note: "Evaluation results tighten the limits and improve the next run.",
    },
    answers: {
      title: "What an agent should, and should not, be trusted with.",
      text: "We decide the autonomy level per task, based on cost of error and how reversible the action is.",
      rows: [
        { name: "Assist", question: "Can it draft for a person?", example: "Summarise a case and propose a reply for a human to send.", tone: "blue" },
        { name: "Recommend", question: "Can it propose an action?", example: "Suggest which supplier order to place and why.", tone: "violet" },
        { name: "Act with approval", question: "Can it prepare and wait?", example: "Raise a purchase request and hold it for a manager.", tone: "teal" },
        { name: "Act within limits", question: "Can it complete low-risk work alone?", example: "Update a record or close a ticket under a strict rule set.", tone: "orange" },
      ],
    },
    focus: {
      title: "Control surface: what the agent can touch.",
      tabs: [
        {
          tab: "Permissions",
          question: "Which systems and actions is the agent allowed to use?",
          text: "Each agent gets its own identity and least-privilege access, so its reach is a decision, not a side effect.",
          drivers: [
            { label: "Read scope", note: "Per system" },
            { label: "Write scope", note: "Per action" },
            { label: "Spend limit", note: "Per task" },
          ],
          action: "Review access map",
        },
        {
          tab: "Approvals",
          question: "Which actions must a person confirm first?",
          text: "Irreversible, costly or customer-facing steps route to a named approver with the full context attached.",
          drivers: [
            { label: "Risk tier", note: "Sets the rule" },
            { label: "Approver", note: "Named role" },
            { label: "Time limit", note: "Escalation" },
          ],
          action: "Set approval rules",
        },
        {
          tab: "Evaluation",
          question: "How do we know the agent is still doing the job correctly?",
          text: "A fixed set of test cases runs on every change, and live samples are reviewed against the same criteria.",
          drivers: [
            { label: "Test cases", note: "Run on change" },
            { label: "Sampled review", note: "Ongoing" },
            { label: "Failure log", note: "Feeds fixes" },
          ],
          action: "Run the evaluation set",
        },
      ],
    },
    deliverables: [
      { label: "Agent specification", text: "Purpose, scope, tools, autonomy level and stop conditions, written and signed off." },
      { label: "Working agent", text: "Built on your systems with defined tool access, tested against real task samples." },
      { label: "Guardrails", text: "Permission limits, input and output checks, and approval routing." },
      { label: "Audit trail", text: "A record of each decision, tool call and approval that can be searched and replayed." },
      { label: "Evaluation suite", text: "Repeatable test cases so changes can be judged, not guessed." },
      { label: "Operations runbook", text: "Monitoring, incident response and how to pause or roll back an agent." },
    ],
    flow: {
      title: "Agents work through the systems you already run.",
      inputsTitle: "Business systems",
      inputs: [
        { k: "Work intake", v: "Tickets, email, forms" },
        { k: "Records", v: "ERP, CRM, databases" },
        { k: "Knowledge", v: "Policies, documents" },
        { k: "Identity", v: "Roles and approvers" },
      ],
      stages: [
        { label: "Agent runtime", text: "Planner, tools, memory", tone: "blue" },
        { label: "Control layer", text: "Permissions, approvals, checks", tone: "violet" },
        { label: "Approved work", text: "Actions, records, reports", tone: "orange" },
      ],
    },
    areas: [
      { title: "Service + support", items: ["Case triage and drafting", "Knowledge lookup agents", "Customer request handling", "Escalation routing"] },
      { title: "Back office", items: ["Purchase and invoice preparation", "Data entry and reconciliation", "Report assembly", "Onboarding workflows"] },
      { title: "Engineering + IT", items: ["Incident triage", "Code review assistance", "Environment provisioning", "Runbook execution"] },
    ],
    proof: {
      title: "From a demo that impressed to an agent you can run.",
      steps: [
        { label: "Business problem", text: "A prototype agent worked in a demo but nobody would give it access." },
        { label: "Old process", text: "People re-key data between systems and chase approvals." },
        { label: "TechLamp solution", text: "A scoped agent with permissions, approvals and a full log." },
        { label: "Management use", text: "Staff review the exceptions and the audit trail." },
      ],
      outcome: "Less re-keying, clear accountability, actions you can trace",
    },
    cta: { eyebrow: "FROM AGENT DEMO TO GOVERNED OPERATION.", title: "Put an agent to work inside your limits.", text: "Name a task that is repetitive and rule-bound. We will scope what an agent can do, what it must not do, and how you will know." },
  },

  /* ------------------------------------------------------------------ */
  "ai-intelligent-automation": {
    hero: {
      title: ["Automate", "the routine.", "Keep people", "on the exceptions."],
      lede: "We deploy AI models, assistants and process automation that take repetitive work off your teams, with clear rules for when a person steps in.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an AI expert", href: DISC },
      panel: {
        question: "Which tasks are frequent, rule-based and safe to automate first?",
        tiles: [
          { label: "Volume", value: "High", tone: "blue" },
          { label: "Rules", value: "Clear", tone: "green" },
          { label: "Risk", value: "Low", tone: "orange" },
          { label: "Fit", value: "Pilot", tone: "violet" },
        ],
        driversLabel: "Automation fit",
        drivers: [
          { label: "Task frequency", pct: 90, tone: "blue" },
          { label: "Rule clarity", pct: 72, tone: "green" },
          { label: "Data quality", pct: 60, tone: "orange" },
          { label: "Exception rate", pct: 40, tone: "violet" },
        ],
      },
    },
    loop: {
      title: "From manual task to a monitored automation.",
      aside: "Exceptions return to a person",
      steps: ["Find the task", "Map the process", "Choose the method", "Build", "Test", "Deploy", "Monitor"],
      note: "Monitoring shows where the automation fails and what to fix next.",
    },
    answers: {
      title: "Where AI and automation earn their place.",
      text: "We match the method to the task instead of using a model everywhere.",
      rows: [
        { name: "Rules", question: "Is it fully rule-based?", example: "Move data between systems on a fixed trigger.", tone: "blue" },
        { name: "Documents", question: "Is it reading and extracting?", example: "Capture fields from invoices, forms and emails.", tone: "violet" },
        { name: "Language", question: "Is it answering or drafting?", example: "An assistant answers staff questions from approved policy.", tone: "teal" },
        { name: "Prediction", question: "Is it scoring or classifying?", example: "Route requests by type and urgency.", tone: "orange" },
      ],
    },
    focus: {
      title: "Three places to start.",
      tabs: [
        {
          tab: "Service desk",
          question: "Can first replies be drafted so staff only review them?",
          text: "An assistant reads the request, finds the relevant policy, and drafts a reply for a person to approve.",
          drivers: [{ label: "Request type", note: "Sets the template" }, { label: "Policy source", note: "Approved documents" }, { label: "Confidence", note: "Low goes to a person" }],
          action: "Pilot on one request type",
        },
        {
          tab: "Back office",
          question: "Which data-entry steps can be removed?",
          text: "Extraction and validation replace re-keying, and mismatches go to a queue for review.",
          drivers: [{ label: "Document format", note: "Determines effort" }, { label: "Validation rules", note: "Catch errors" }, { label: "Volume", note: "Sets payback" }],
          action: "Sample 200 documents",
        },
        {
          tab: "Knowledge",
          question: "Can staff find the right answer from internal documents?",
          text: "Search and answers grounded in your documents, with the source shown alongside each reply.",
          drivers: [{ label: "Document quality", note: "High influence" }, { label: "Access rules", note: "Respect roles" }, { label: "Freshness", note: "Update process" }],
          action: "Index one document set",
        },
      ],
    },
    deliverables: [
      { label: "Opportunity assessment", text: "A ranked list of automation candidates with the reasoning for each." },
      { label: "Working automation", text: "Built, tested and deployed into the systems where the work happens." },
      { label: "Exception handling", text: "Rules and queues for cases the automation should not decide." },
      { label: "Governance pack", text: "Data use, review steps and ownership documented." },
    ],
    flow: {
      title: "From inbound work to handled work.",
      inputsTitle: "Work sources",
      inputs: [{ k: "Email", v: "Requests and documents" }, { k: "Forms", v: "Structured submissions" }, { k: "Systems", v: "ERP, CRM, ticketing" }],
      stages: [
        { label: "Understand", text: "Classify, extract, retrieve", tone: "blue" },
        { label: "Decide", text: "Rules and model scores", tone: "violet" },
        { label: "Act or hand over", text: "Update, reply or escalate", tone: "orange" },
      ],
    },
    proof: {
      title: "From queue to first reply.",
      steps: [
        { label: "Business problem", text: "Staff spent most of the day on repeat questions." },
        { label: "Old process", text: "Search, copy, edit, send." },
        { label: "TechLamp solution", text: "Assistant drafts from approved policy." },
        { label: "Management use", text: "Staff review, correct and approve." },
      ],
      outcome: "Faster replies, consistent answers",
    },
    cta: { eyebrow: "FROM MANUAL WORK TO MONITORED AUTOMATION.", title: "Find the first task worth automating.", text: "Bring the work your team repeats every day. We will rank the candidates and pilot the best one." },
  },

  /* ------------------------------------------------------------------ */
  "data-analytics-decision-intelligence": {
    hero: {
      title: ["Trust", "the data.", "Then act", "on it."],
      lede: "We unify enterprise data, govern it, and turn it into insight leaders can trace to its source and use in real decisions.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to a data expert", href: DISC },
      panel: {
        question: "Do finance, sales and operations agree on the same number?",
        tiles: [
          { label: "Sources", value: "Mapped", tone: "blue" },
          { label: "Quality", value: "Checked", tone: "green" },
          { label: "Owners", value: "Named", tone: "orange" },
          { label: "Access", value: "Governed", tone: "violet" },
        ],
        driversLabel: "Data readiness",
        drivers: [
          { label: "Source coverage", pct: 84, tone: "blue" },
          { label: "Definition clarity", pct: 64, tone: "violet" },
          { label: "Quality checks", pct: 72, tone: "green" },
          { label: "Access control", pct: 90, tone: "orange" },
        ],
      },
    },
    loop: {
      title: "From scattered records to decisions.",
      aside: "Quality issues flow back to source owners",
      steps: ["Sources", "Ingest", "Model", "Govern", "Serve", "Decide"],
      note: "Every metric traces back to a source and an owner.",
    },
    answers: {
      title: "Questions this practice settles.",
      text: "Most data problems are agreement problems first and technology problems second.",
      rows: [
        { name: "Where", question: "Where does the data live?", example: "Inventory of systems, files and owners.", tone: "blue" },
        { name: "What", question: "What does each number mean?", example: "One definition per metric, written down.", tone: "violet" },
        { name: "Who", question: "Who may see and change it?", example: "Role-based access and audit.", tone: "teal" },
        { name: "So what", question: "Which decision does it inform?", example: "Insight tied to an action and an owner.", tone: "orange" },
      ],
    },
    focus: {
      title: "Where the work concentrates.",
      tabs: [
        { tab: "Platform", question: "Where should the shared data live?", text: "A warehouse or lakehouse sized to your volumes, with pipelines that are monitored.", drivers: [{ label: "Volume", note: "Sizing" }, { label: "Latency", note: "Batch or near real time" }, { label: "Cost", note: "Managed" }], action: "Review platform options" },
        { tab: "Governance", question: "Who owns each dataset?", text: "Catalogue, definitions, quality rules and access policy owned by named people.", drivers: [{ label: "Ownership", note: "Named" }, { label: "Quality rules", note: "Automated" }, { label: "Access", note: "By role" }], action: "Set up the data catalogue" },
        { tab: "Insight", question: "Which decisions need better evidence?", text: "Reports and models chosen by decision, not by available data.", drivers: [{ label: "Decision", note: "Drives scope" }, { label: "Audience", note: "Sets format" }, { label: "Refresh", note: "Cadence" }], action: "List the top decisions" },
      ],
    },
    deliverables: [
      { label: "Data landscape map", text: "Systems, owners, quality and gaps in one document." },
      { label: "Data platform", text: "Pipelines and storage built, tested and monitored." },
      { label: "Governed metric layer", text: "One set of definitions used by every report." },
      { label: "BI and reporting", text: "Dashboards and reports tied to decisions." },
    ],
    flow: {
      title: "One route from source to decision.",
      inputsTitle: "Sources",
      inputs: [{ k: "Operational", v: "ERP, CRM, service" }, { k: "Files", v: "Spreadsheets, exports" }, { k: "External", v: "APIs, partner feeds" }],
      stages: [
        { label: "Ingest and model", text: "Pipelines and warehouse", tone: "blue" },
        { label: "Govern", text: "Definitions, quality, access", tone: "violet" },
        { label: "Decide", text: "Reports, models, alerts", tone: "orange" },
      ],
    },
    proof: {
      title: "From competing numbers to one answer.",
      steps: [
        { label: "Business problem", text: "Each department reported a different revenue figure." },
        { label: "Old process", text: "Manual merges in separate spreadsheets." },
        { label: "TechLamp solution", text: "A governed model with shared definitions." },
        { label: "Management use", text: "One review pack for all teams." },
      ],
      outcome: "Less reconciliation, more trust in reports",
    },
    cta: { eyebrow: "FROM SCATTERED DATA TO SHARED EVIDENCE.", title: "Give every team the same trusted numbers.", text: "Tell us which reports disagree. We will trace why and map the fix." },
  },

  /* ------------------------------------------------------------------ */
  "cloud-devops-platform-engineering": {
    hero: {
      title: ["Build", "on solid", "ground.", "Ship safely."],
      lede: "We build secure, resilient cloud platforms and delivery pipelines so teams can release often without breaking what already works.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to a platform engineer", href: DISC },
      panel: {
        question: "Can we release this change today and undo it in minutes if needed?",
        tiles: [
          { label: "Build", value: "Passing", tone: "green" },
          { label: "Tests", value: "Passing", tone: "green" },
          { label: "Deploy", value: "Staged", tone: "blue" },
          { label: "Rollback", value: "Ready", tone: "orange" },
        ],
        driversLabel: "Delivery health",
        drivers: [
          { label: "Automated tests", pct: 82, tone: "green" },
          { label: "Infrastructure as code", pct: 70, tone: "blue" },
          { label: "Observability", pct: 64, tone: "violet" },
          { label: "Security checks", pct: 78, tone: "orange" },
        ],
      },
    },
    loop: {
      title: "A delivery pipeline that makes releases routine.",
      aside: "Production feedback shapes the next change",
      steps: ["Commit", "Build", "Test", "Scan", "Deploy", "Observe", "Improve"],
      note: "Incidents become fixes in the pipeline, not one-off heroics.",
    },
    answers: {
      title: "Questions we help you answer.",
      text: "The aim is a platform your own team can run.",
      rows: [
        { name: "Move", question: "What should move to the cloud, and when?", example: "Workload assessment and migration waves.", tone: "blue" },
        { name: "Ship", question: "How often can we release safely?", example: "CI/CD with tests and staged rollout.", tone: "violet" },
        { name: "Stay up", question: "What happens when a part fails?", example: "Redundancy, backup and tested recovery.", tone: "teal" },
        { name: "Stay safe", question: "Who can reach what?", example: "Identity, secrets and policy as code.", tone: "orange" },
      ],
    },
    focus: {
      title: "Where platform work pays off.",
      tabs: [
        { tab: "Migration", question: "Which systems go first?", text: "Rank by risk, dependency and value, then move in small waves with a rollback plan.", drivers: [{ label: "Dependencies", note: "Order of moves" }, { label: "Downtime", note: "Window" }, { label: "Cost", note: "Forecast" }], action: "Assess a workload" },
        { tab: "Pipelines", question: "What slows a release today?", text: "Find the manual steps and waits, then automate the ones that cause the most delay.", drivers: [{ label: "Test time", note: "High influence" }, { label: "Approvals", note: "Medium" }, { label: "Environment setup", note: "High" }], action: "Map the release path" },
        { tab: "Reliability", question: "How will we know before users do?", text: "Service levels, alerts and on-call practice set against real user impact.", drivers: [{ label: "Service levels", note: "Targets" }, { label: "Alerting", note: "Signal over noise" }, { label: "Recovery drills", note: "Practised" }], action: "Define service levels" },
      ],
    },
    deliverables: [
      { label: "Cloud architecture", text: "Target design covering network, identity, data and cost controls." },
      { label: "Infrastructure as code", text: "Environments built from version-controlled definitions." },
      { label: "CI/CD pipelines", text: "Automated build, test, scan and deploy." },
      { label: "Observability and runbooks", text: "Dashboards, alerts and documented response steps." },
    ],
    flow: {
      title: "From code to a running service.",
      inputsTitle: "Sources of change",
      inputs: [{ k: "Code", v: "Repositories" }, { k: "Config", v: "Infrastructure as code" }, { k: "Policy", v: "Security and cost rules" }],
      stages: [
        { label: "Pipeline", text: "Build, test, scan", tone: "blue" },
        { label: "Platform", text: "Cloud, containers, network", tone: "violet" },
        { label: "Operations", text: "Monitor, recover, improve", tone: "orange" },
      ],
    },
    proof: {
      title: "From quarterly releases to routine ones.",
      steps: [
        { label: "Business problem", text: "Releases were rare, large and risky." },
        { label: "Old process", text: "Manual deployment and weekend cutover." },
        { label: "TechLamp solution", text: "Automated pipeline with staged rollout." },
        { label: "Management use", text: "Small releases with clear rollback." },
      ],
      outcome: "Smaller changes, quicker recovery",
    },
    cta: { eyebrow: "FROM FRAGILE INFRASTRUCTURE TO A PLATFORM.", title: "Make change safe to ship.", text: "Tell us what is hard to release or hard to keep running. We will start with the biggest risk." },
  },

  /* ------------------------------------------------------------------ */
  "software-engineering": {
    hero: {
      title: ["Engineer", "systems", "that last."],
      lede: "We build the custom software, APIs and integrations that run core operations, documented and tested so your team can own them.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an engineer", href: DISC },
      panel: {
        question: "Can this system change next quarter without a rewrite?",
        tiles: [
          { label: "Design", value: "Documented", tone: "blue" },
          { label: "Tests", value: "Automated", tone: "green" },
          { label: "APIs", value: "Versioned", tone: "violet" },
          { label: "Owner", value: "Named", tone: "orange" },
        ],
        driversLabel: "Maintainability",
        drivers: [
          { label: "Test coverage", pct: 80, tone: "green" },
          { label: "Modularity", pct: 70, tone: "blue" },
          { label: "Documentation", pct: 62, tone: "violet" },
          { label: "Integration contracts", pct: 76, tone: "orange" },
        ],
      },
    },
    loop: {
      title: "Small releases, steady feedback.",
      aside: "Each release informs the next",
      steps: ["Discover", "Design", "Build", "Test", "Release", "Learn"],
      note: "Usage and incident data set the next priorities.",
    },
    answers: {
      title: "Questions we settle before writing code.",
      text: "The costly mistakes happen early, in scope and integration choices.",
      rows: [
        { name: "Fit", question: "Build, buy or extend?", example: "A written comparison, not a preference.", tone: "blue" },
        { name: "Shape", question: "Where are the boundaries?", example: "Services, data ownership and APIs.", tone: "violet" },
        { name: "Connect", question: "What must it talk to?", example: "Contracts with each system it touches.", tone: "teal" },
        { name: "Sustain", question: "Who will maintain it?", example: "Docs, tests and a handover plan.", tone: "orange" },
      ],
    },
    focus: {
      title: "Typical engagements.",
      tabs: [
        { tab: "New system", question: "What is the smallest version worth releasing?", text: "Ship a thin, working slice first and grow it on evidence from real use.", drivers: [{ label: "Core workflow", note: "First slice" }, { label: "Users", note: "Early feedback" }, { label: "Integrations", note: "Staged" }], action: "Scope a first release" },
        { tab: "Integration", question: "How do these systems exchange data reliably?", text: "APIs and event flows with retries, monitoring and clear ownership.", drivers: [{ label: "Data contract", note: "Versioned" }, { label: "Failure handling", note: "Retries" }, { label: "Monitoring", note: "Alerts" }], action: "Map the interfaces" },
        { tab: "Modernize", question: "Which part of the legacy system do we replace first?", text: "Replace in slices behind stable interfaces instead of one large rewrite.", drivers: [{ label: "Pain", note: "Where it hurts" }, { label: "Coupling", note: "Order of work" }, { label: "Risk", note: "Rollback" }], action: "Pick the first slice" },
      ],
    },
    deliverables: [
      { label: "Working software", text: "Tested, deployed and running in your environment." },
      { label: "APIs and integrations", text: "Documented, versioned interfaces." },
      { label: "Test suite", text: "Automated tests that guard the behaviour you rely on." },
      { label: "Handover documentation", text: "Architecture notes and runbooks your team can use." },
    ],
    flow: {
      title: "From requirement to running system.",
      inputsTitle: "Inputs",
      inputs: [{ k: "Users", v: "Workflows and needs" }, { k: "Systems", v: "Existing data and APIs" }, { k: "Constraints", v: "Security, budget, time" }],
      stages: [
        { label: "Design", text: "Architecture and contracts", tone: "blue" },
        { label: "Build", text: "Code, tests, review", tone: "violet" },
        { label: "Operate", text: "Release, monitor, support", tone: "orange" },
      ],
    },
    proof: {
      title: "From disconnected tools to one service.",
      steps: [
        { label: "Business problem", text: "Orders were re-keyed across three tools." },
        { label: "Old process", text: "Copy, paste and reconcile by hand." },
        { label: "TechLamp solution", text: "One service with a documented API." },
        { label: "Management use", text: "A single order record for every team." },
      ],
      outcome: "Fewer errors, one source of order data",
    },
    cta: { eyebrow: "FROM AD HOC SYSTEMS TO ENGINEERED ONES.", title: "Build the system your operations depend on.", text: "Describe the system that is hardest to change. We will show a route to fix it in slices." },
  },

  /* ------------------------------------------------------------------ */
  "enterprise-applications": {
    hero: {
      title: ["Connect", "the tools", "people use", "every day."],
      lede: "We implement and integrate ERP, CRM and workplace platforms, and help teams adopt them, so daily work runs through fewer, better-connected systems.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an applications expert", href: DISC },
      panel: {
        question: "Where does a customer order stop moving between our systems?",
        tiles: [
          { label: "CRM", value: "Linked", tone: "blue" },
          { label: "ERP", value: "Linked", tone: "green" },
          { label: "Workplace", value: "Linked", tone: "violet" },
          { label: "Users", value: "Trained", tone: "orange" },
        ],
        driversLabel: "Adoption readiness",
        drivers: [
          { label: "Process fit", pct: 74, tone: "blue" },
          { label: "Data migration", pct: 60, tone: "orange" },
          { label: "User training", pct: 82, tone: "green" },
          { label: "Integration", pct: 68, tone: "violet" },
        ],
      },
    },
    loop: {
      title: "Implementation that ends in adoption.",
      aside: "Usage data guides the next improvement",
      steps: ["Process", "Configure", "Migrate", "Integrate", "Train", "Go live", "Improve"],
      note: "Adoption is measured after go-live, not assumed.",
    },
    answers: {
      title: "Questions to settle before selecting or configuring.",
      text: "Software fits or fails on process and people before features.",
      rows: [
        { name: "Process", question: "How does the work really flow?", example: "Quote to cash, hire to retire, request to resolve.", tone: "blue" },
        { name: "Data", question: "What must move and be cleaned?", example: "Customers, items and open balances.", tone: "violet" },
        { name: "Connection", question: "What must talk to what?", example: "CRM and ERP handoffs.", tone: "teal" },
        { name: "People", question: "Who needs which skills?", example: "Role-based training and support.", tone: "orange" },
      ],
    },
    focus: {
      title: "Typical scopes.",
      tabs: [
        { tab: "ERP and CRM", question: "How do sales and finance share one record?", text: "Configure both around a single customer and order model.", drivers: [{ label: "Customer record", note: "One owner" }, { label: "Order flow", note: "Automated" }, { label: "Reporting", note: "Shared" }], action: "Map the order flow" },
        { tab: "Digital workplace", question: "How do people find and do their work?", text: "Intranet, collaboration and approvals designed around real tasks.", drivers: [{ label: "Tasks", note: "Drive design" }, { label: "Search", note: "Findability" }, { label: "Approvals", note: "Fewer emails" }], action: "Survey how work gets done" },
        { tab: "Change", question: "Will people use it?", text: "Champions, training and support planned with the technical work.", drivers: [{ label: "Champions", note: "By team" }, { label: "Training", note: "By role" }, { label: "Support", note: "First weeks" }], action: "Plan the adoption path" },
      ],
    },
    deliverables: [
      { label: "Process and requirements", text: "Documented flows agreed with the teams that own them." },
      { label: "Configured platform", text: "Tested and delivered in stages." },
      { label: "Integrations", text: "Connections between the systems that share data." },
      { label: "Adoption plan", text: "Training material, champions and support routine." },
    ],
    flow: {
      title: "One connected working environment.",
      inputsTitle: "Systems",
      inputs: [{ k: "CRM", v: "Customers and pipeline" }, { k: "ERP", v: "Finance and supply" }, { k: "Workplace", v: "Mail, files, chat" }],
      stages: [
        { label: "Integrate", text: "APIs and data mapping", tone: "blue" },
        { label: "Automate", text: "Workflows and approvals", tone: "violet" },
        { label: "Adopt", text: "Training and support", tone: "orange" },
      ],
    },
    proof: {
      title: "From two systems to one flow.",
      steps: [
        { label: "Business problem", text: "Orders in CRM had to be re-entered in ERP." },
        { label: "Old process", text: "Manual re-keying and weekly checks." },
        { label: "TechLamp solution", text: "Integrated order flow between the two." },
        { label: "Management use", text: "One view from quote to invoice." },
      ],
      outcome: "Less re-entry, shorter order cycle",
    },
    cta: { eyebrow: "FROM DISCONNECTED APPLICATIONS TO ONE WORKFLOW.", title: "Make your systems work together.", text: "Tell us which handoff breaks most often. We will map it and propose the fix." },
  },

  /* ------------------------------------------------------------------ */
  "digital-learning": {
    hero: {
      title: ["Build the", "skills that", "make technology", "stick."],
      lede: "We design learning experiences and platforms that build lasting technical and digital capability in teams and institutions.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to a learning expert", href: DISC },
      panel: {
        question: "Which roles need which skills before the new system goes live?",
        tiles: [
          { label: "Roles", value: "Mapped", tone: "blue" },
          { label: "Paths", value: "Defined", tone: "violet" },
          { label: "Practice", value: "Hands-on", tone: "orange" },
          { label: "Progress", value: "Tracked", tone: "green" },
        ],
        driversLabel: "Learning design",
        drivers: [
          { label: "Role clarity", pct: 80, tone: "blue" },
          { label: "Hands-on practice", pct: 88, tone: "orange" },
          { label: "Assessment", pct: 66, tone: "violet" },
          { label: "Manager support", pct: 58, tone: "green" },
        ],
      },
    },
    loop: {
      title: "Learning that connects to the job.",
      aside: "Results shape the next cohort",
      steps: ["Skills gap", "Learning design", "Build content", "Deliver", "Assess", "Support", "Improve"],
      note: "Assessment and on-the-job results improve the content.",
    },
    answers: {
      title: "Questions that shape a learning programme.",
      text: "Training only changes results when it is tied to real tasks.",
      rows: [
        { name: "Need", question: "What can people not do yet?", example: "Skills gap by role.", tone: "blue" },
        { name: "Design", question: "How do they best learn it?", example: "Practice, coaching and short modules.", tone: "violet" },
        { name: "Platform", question: "Where will it run?", example: "LMS setup, content and enrolment.", tone: "teal" },
        { name: "Proof", question: "How do we know it worked?", example: "Assessment and on-the-job checks.", tone: "orange" },
      ],
    },
    focus: {
      title: "Typical programmes.",
      tabs: [
        { tab: "Adoption", question: "How do we prepare people for a new system?", text: "Role-based guides and practice sessions released before go-live.", drivers: [{ label: "Roles", note: "Sets content" }, { label: "Timing", note: "Before go-live" }, { label: "Support", note: "After go-live" }], action: "Draft role guides" },
        { tab: "Platform", question: "Which learning platform fits?", text: "Set up and configure an LMS around your courses, enrolment and reporting.", drivers: [{ label: "Users", note: "Scale" }, { label: "Content", note: "Formats" }, { label: "Reporting", note: "Progress" }], action: "Compare platforms" },
        { tab: "Certification", question: "What pathway takes someone from novice to competent?", text: "Structured pathways with assessments and, where relevant, external certification routes.", drivers: [{ label: "Levels", note: "Defined" }, { label: "Assessment", note: "Practical" }, { label: "Progression", note: "Tracked" }], action: "Outline a pathway" },
      ],
    },
    deliverables: [
      { label: "Skills and role map", text: "Who needs what, by role." },
      { label: "Learning content", text: "Modules, exercises and guides designed for the job." },
      { label: "Learning platform", text: "Configured and populated." },
      { label: "Progress reporting", text: "Completion and assessment visible to managers." },
    ],
    flow: {
      title: "From skills gap to demonstrated skill.",
      inputsTitle: "Inputs",
      inputs: [{ k: "Roles", v: "Tasks and standards" }, { k: "Systems", v: "What people will use" }, { k: "Learners", v: "Current level" }],
      stages: [
        { label: "Design", text: "Pathways and content", tone: "blue" },
        { label: "Deliver", text: "Platform, sessions, coaching", tone: "violet" },
        { label: "Measure", text: "Assessment and follow-up", tone: "orange" },
      ],
    },
    proof: {
      title: "From one-off training to lasting capability.",
      steps: [
        { label: "Business problem", text: "A new system launched and few people used it fully." },
        { label: "Old process", text: "One classroom session and a manual." },
        { label: "TechLamp solution", text: "Role-based paths with practice and support." },
        { label: "Management use", text: "Managers see progress by team." },
      ],
      outcome: "Higher proficiency, faster adoption",
    },
    cta: { eyebrow: "FROM TRAINING EVENT TO LASTING CAPABILITY.", title: "Build skills alongside the system.", text: "Tell us what your teams need to be able to do. We will design the path." },
  },

  /* ------------------------------------------------------------------ */
  "technology-consulting": {
    hero: {
      title: ["Decide.", "Deliver.", "Sustain."],
      lede: "We guide the strategy, run the programme and provide the managed services that keep the change working after go-live.",
      primary: { label: "Explore solutions", href: "/solutions" },
      secondary: { label: "Talk to an advisor", href: DISC },
      panel: {
        question: "Which investments come first, and who runs them after launch?",
        tiles: [
          { label: "Strategy", value: "Agreed", tone: "blue" },
          { label: "Roadmap", value: "Sequenced", tone: "violet" },
          { label: "Risk", value: "Owned", tone: "orange" },
          { label: "Support", value: "Defined", tone: "green" },
        ],
        driversLabel: "Programme health",
        drivers: [
          { label: "Scope clarity", pct: 76, tone: "blue" },
          { label: "Risk control", pct: 64, tone: "orange" },
          { label: "Stakeholder support", pct: 82, tone: "green" },
          { label: "Run readiness", pct: 58, tone: "violet" },
        ],
      },
    },
    loop: {
      title: "Advice that carries through to operations.",
      aside: "Service reviews reshape the roadmap",
      steps: ["Assess", "Strategy", "Roadmap", "Programme", "Transition", "Run", "Review"],
      note: "Operational data feeds the next round of planning.",
    },
    answers: {
      title: "Questions we help leadership answer.",
      text: "Clear priorities and clear ownership matter more than any tool choice.",
      rows: [
        { name: "Direction", question: "Where should technology take us?", example: "Strategy tied to business goals.", tone: "blue" },
        { name: "Order", question: "What comes first?", example: "A sequenced, costed roadmap.", tone: "violet" },
        { name: "Delivery", question: "Who runs the change?", example: "Programme governance and reporting.", tone: "teal" },
        { name: "Run", question: "Who keeps it working?", example: "Support model and service levels.", tone: "orange" },
      ],
    },
    focus: {
      title: "Typical engagements.",
      tabs: [
        { tab: "Strategy", question: "What is the technology plan for the next three years?", text: "Current state, target state and a sequenced route between them.", drivers: [{ label: "Business goals", note: "Anchor" }, { label: "Current estate", note: "Baseline" }, { label: "Budget", note: "Constraint" }], action: "Run an assessment" },
        { tab: "Programme", question: "How do we keep a multi-year change on track?", text: "Governance, risk and reporting run alongside delivery teams.", drivers: [{ label: "Milestones", note: "Tracked" }, { label: "Risks", note: "Owned" }, { label: "Decisions", note: "Logged" }], action: "Set up governance" },
        { tab: "Managed services", question: "Who supports the system after launch?", text: "Support, monitoring and improvement under agreed service levels.", drivers: [{ label: "Service levels", note: "Agreed" }, { label: "Incident process", note: "Defined" }, { label: "Reviews", note: "Regular" }], action: "Define the support model" },
      ],
    },
    deliverables: [
      { label: "Assessment and findings", text: "Current state and gaps, evidence-based." },
      { label: "Roadmap", text: "Sequenced initiatives with cost and owner." },
      { label: "Delivery framework", text: "Scrum or Kanban, sized to the team and the work." },
      { label: "Programme governance", text: "Cadence, reporting and decision log." },
      { label: "Managed service agreement", text: "Scope, service levels and review rhythm." },
    ],
    flow: {
      title: "From strategy to steady operation.",
      inputsTitle: "Inputs",
      inputs: [{ k: "Goals", v: "Business priorities" }, { k: "Estate", v: "Systems and contracts" }, { k: "Capacity", v: "Teams and budget" }],
      stages: [
        { label: "Advise", text: "Strategy and roadmap", tone: "blue" },
        { label: "Deliver", text: "Programme management", tone: "violet" },
        { label: "Run", text: "Managed services", tone: "orange" },
      ],
    },
    proof: {
      title: "From a plan on paper to a service that runs.",
      steps: [
        { label: "Business problem", text: "A transformation plan existed but had no owner." },
        { label: "Old process", text: "Projects ran independently without a shared view." },
        { label: "TechLamp solution", text: "A sequenced roadmap and one programme office." },
        { label: "Management use", text: "Monthly review of progress and risk." },
      ],
      outcome: "Clear ownership, sustained support",
    },
    cta: { eyebrow: "FROM PLAN TO STEADY OPERATION.", title: "Agree the roadmap and who runs it.", text: "Tell us what is stalled or unowned. We will assess it and propose the next step." },
  },
};
