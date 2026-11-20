import type { Status } from "@/components/ui/StatusBadge";

export interface FlowStep {
  label: string;
  sub?: string;
}

export interface CaseStudy {
  slug: string;
  status: Exclude<Status, "verified">;
  industry: string;
  sector: string;
  topic: string;
  cardTitle: string;
  title: string;
  lede: string;
  summary: string;
  context: string;
  team: string;
  practices: string[];
  challenge: string;
  challengePoints: string[];
  before: { intro: string; steps: string[] };
  approach: string[];
  architecture: { intro: string; steps: FlowStep[] };
  phases: string[];
  process: { intro: string; steps: string[] };
  results: { before: string[]; after: string[]; chartLabel: string; beforeValue: number; afterValue: number };
  impact: { who: string; text: string }[];
  technology: string[];
  related: { label: string; href: string }[];
  outcomeTags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "enterprise-knowledge-assistant",
    status: "pending",
    industry: "Government",
    sector: "Public Sector & Knowledge Management",
    topic: "Knowledge management",
    cardTitle: "Public Sector: Enterprise Knowledge Assistant",
    title: "An enterprise knowledge assistant, built on a governed AI pipeline",
    lede: "A concept case for a public-sector organisation whose staff need accurate answers across thousands of documents. It describes the design we would propose. No client engagement or measured result is claimed.",
    summary: "Governed retrieval with cited answers over a document base.",
    context: "A public-sector organisation supports staff across several departments who need fast, accurate answers to policy and procedure questions. The answers sit in thousands of documents, systems and past decisions.",
    team: "Cross-functional delivery team",
    practices: ["AI & Automation", "Enterprise Apps"],
    challenge: "Staff lose time hunting for answers that already exist somewhere in the organisation, with no reliable way to search, trust or trace them back to a source.",
    challengePoints: ["Answers scattered across shared drives, email and legacy systems", "No way to search across documents in natural language", "No audit trail linking an answer back to its source document", "A growing backlog of repeated questions to subject-matter experts"],
    before: { intro: "Finding an answer means checking several places and hoping someone remembers, with no single trusted starting point.", steps: ["Staff question", "Search shared drive", "Search email", "Ask a colleague", "Manual lookup", "Delayed answer"] },
    approach: ["Centralise documents into one governed knowledge base", "Add AI-powered semantic retrieval across all content", "Keep every answer traceable with inline citations", "Govern access by role, department and sensitivity"],
    architecture: {
      intro: "One governed pipeline connects documents, retrieval, AI and human validation. Every answer traces back to its source.",
      steps: [{ label: "Documents" }, { label: "Ingestion", sub: "Cloud" }, { label: "OCR" }, { label: "Knowledge base", sub: "Search index" }, { label: "Retrieval" }, { label: "AI", sub: "Language model" }, { label: "Validation", sub: "Human in the loop" }, { label: "Citations" }, { label: "User" }],
    },
    phases: ["Discover", "Design", "Build", "Pilot", "Rollout"],
    process: { intro: "The day-to-day flow: a question in, a validated and cited answer out, with feedback continuously improving retrieval.", steps: ["User asks a question", "System retrieves", "AI drafts answer", "Citation shown", "User validates"] },
    results: { before: ["Answers scattered across systems", "No source traceability", "Recurring questions to experts"], after: ["One governed, searchable knowledge base", "Every answer linked to its source", "Experts freed to handle exceptions"], chartLabel: "Time to answer (illustrative)", beforeValue: 78, afterValue: 22 },
    impact: [{ who: "Staff", text: "Spend less time searching and more time on real work." }, { who: "Citizens", text: "Receive faster, more consistent responses to enquiries." }, { who: "Leadership", text: "Gain visibility into what staff are asking and where knowledge gaps exist." }],
    technology: ["Cloud platform", "Semantic search", "Language model", "Workflow automation", "Document store", "Office suite"],
    related: [{ label: "AI & Intelligent Automation", href: "/capabilities/ai-intelligent-automation" }, { label: "Enterprise Applications", href: "/capabilities/enterprise-applications" }, { label: "Solutions", href: "/solutions" }],
    outcomeTags: ["Faster answers", "Cited sources"],
  },
  {
    slug: "reconciliation-automation",
    status: "illustrative",
    industry: "Financial Services",
    sector: "Financial Services & Process Automation",
    topic: "Process automation",
    cardTitle: "Financial Services: Reconciliation Automation",
    title: "Automating month-end reconciliation between banking and ERP records",
    lede: "A sample scenario showing how a finance team could reduce manual matching at month end. It is a design example, not a delivered engagement.",
    summary: "Robotic process automation between core banking and ERP data.",
    context: "A finance team closes its books every month by matching transactions from a core banking system against ERP entries. The work is repetitive and depends on a few experienced people.",
    team: "Finance and IT working group",
    practices: ["AI & Automation", "Data & Analytics"],
    challenge: "Manual matching slows the monthly close and makes it hard to see which exceptions actually need a human decision.",
    challengePoints: ["Transactions exported to spreadsheets by hand", "Matching rules held in a few people's heads", "Exceptions found late in the close", "No log of who changed what"],
    before: { intro: "Each close repeats the same export, match and chase cycle.", steps: ["Export bank data", "Export ERP data", "Match in spreadsheet", "Chase differences", "Review", "Report"] },
    approach: ["Write the matching rules down and test them on sample data", "Automate export and matching with a bot under change control", "Route only unmatched items to a reviewer", "Keep an audit log of every match and override"],
    architecture: { intro: "A rules-based matcher sits between two systems and hands exceptions to a person.", steps: [{ label: "Bank data" }, { label: "ERP data" }, { label: "Matcher", sub: "Rules engine" }, { label: "Exceptions", sub: "Reviewer queue" }, { label: "Audit log" }, { label: "Report" }] },
    phases: ["Discover", "Design", "Build", "Pilot", "Rollout"],
    process: { intro: "The monthly flow: data in, automatic matching, human review of exceptions, sign-off.", steps: ["Data arrives", "Bot matches", "Exceptions queued", "Reviewer decides", "Close signed off"] },
    results: { before: ["Manual matching in spreadsheets", "Exceptions found late", "No audit trail"], after: ["Automatic matching of routine items", "Exceptions surfaced early", "Every match logged"], chartLabel: "Manual effort (illustrative)", beforeValue: 82, afterValue: 30 },
    impact: [{ who: "Finance team", text: "Less repetitive matching, more time on analysis." }, { who: "Auditors", text: "A clear log of each decision." }, { who: "Leadership", text: "An earlier view of the month-end position." }],
    technology: ["Process automation", "ERP connector", "Data store", "Reporting"],
    related: [{ label: "AI & Intelligent Automation", href: "/capabilities/ai-intelligent-automation" }, { label: "Data & Decision Intelligence", href: "/capabilities/data-analytics-decision-intelligence" }, { label: "Solutions", href: "/solutions" }],
    outcomeTags: ["Faster close", "Less manual effort"],
  },
  {
    slug: "learning-progress-analytics",
    status: "illustrative",
    industry: "Education",
    sector: "Education & Learning Analytics",
    topic: "Learning analytics",
    cardTitle: "Education: Learning Progress Analytics",
    title: "One view of learner progress across a learning platform and reporting tools",
    lede: "A sample scenario for an institution whose learning content and progress data sit in separate places. It is a concept, not a client result.",
    summary: "Unified LMS data with completion and progress reporting.",
    context: "An institution runs courses on a learning platform while attendance and assessment records live in other tools. Programme leads cannot see progress in one place.",
    team: "Academic and IT team",
    practices: ["Digital Learning", "Data & Analytics"],
    challenge: "Progress is scattered across tools, so support for struggling learners starts late and reporting is assembled by hand.",
    challengePoints: ["Content and progress spread across several tools", "Completion reports built manually each term", "No early signal for learners falling behind", "Different definitions of completion by department"],
    before: { intro: "Reports are assembled from separate exports at the end of each term.", steps: ["Learner", "LMS export", "Assessment export", "Merge by hand", "Report", "Late follow-up"] },
    approach: ["Agree one definition of progress and completion", "Load learning and assessment data into one model", "Show progress dashboards to programme leads", "Flag learners who may need support for a human to review"],
    architecture: { intro: "Learning data flows into one model that feeds dashboards and follow-up lists.", steps: [{ label: "Learner" }, { label: "LMS" }, { label: "Assessments" }, { label: "Data model" }, { label: "Analytics" }, { label: "Report" }] },
    phases: ["Discover", "Design", "Build", "Pilot", "Rollout"],
    process: { intro: "Weekly flow: data refresh, dashboard review, follow-up by staff.", steps: ["Data refreshes", "Dashboard updates", "Lead reviews", "Support offered", "Progress rechecked"] },
    results: { before: ["Progress spread across tools", "Term-end manual reports", "Late support"], after: ["One progress view", "Reports on demand", "Earlier follow-up"], chartLabel: "Reporting effort (illustrative)", beforeValue: 70, afterValue: 25 },
    impact: [{ who: "Learners", text: "Support arrives earlier." }, { who: "Educators", text: "Less time compiling reports." }, { who: "Leadership", text: "A consistent view of completion." }],
    technology: ["Learning platform", "Data model", "Dashboards", "Office suite"],
    related: [{ label: "Digital Learning & EdTech", href: "/capabilities/digital-learning" }, { label: "Data & Decision Intelligence", href: "/capabilities/data-analytics-decision-intelligence" }, { label: "Solutions", href: "/solutions" }],
    outcomeTags: ["Learner visibility", "Faster reporting"],
  },
  {
    slug: "patient-record-unification",
    status: "pending",
    industry: "Healthcare",
    sector: "Healthcare & Data Platforms",
    topic: "Data platform",
    cardTitle: "Healthcare: Patient Record Unification",
    title: "Bringing patient records and operational data onto one governed platform",
    lede: "A concept case for a health network with disconnected records. Outcomes are pending publication and nothing here describes a real patient or client.",
    summary: "Unified data platform for clinical and operational systems.",
    context: "A regional health network keeps patient records in several systems that do not share data. Administrators reconcile them by hand, and privacy controls differ by system.",
    team: "Clinical informatics and IT team",
    practices: ["Data & Analytics", "Cloud & DevOps"],
    challenge: "Care teams and administrators cannot see a consistent record, and every extra manual step adds delay and privacy risk.",
    challengePoints: ["Records split across disconnected systems", "Manual reconciliation by administrators", "Inconsistent access controls", "Slow reporting on operational load"],
    before: { intro: "Staff open several systems to assemble one patient view.", steps: ["Patient", "Intake system", "Record system", "Manual lookup", "Care team"] },
    approach: ["Map systems and data owners before moving any data", "Build a governed data platform with role-based access", "Expose a read-only view to care and operations teams", "Log every access for audit"],
    architecture: { intro: "Source systems feed a governed platform that serves care and operations views.", steps: [{ label: "Intake" }, { label: "Records" }, { label: "Data platform", sub: "Governed" }, { label: "Access control" }, { label: "Care team" }, { label: "Operations" }] },
    phases: ["Discover", "Design", "Build", "Pilot", "Rollout"],
    process: { intro: "A staff member requests a record view, access is checked, and the access is logged.", steps: ["Staff request", "Access check", "Unified view", "Care action", "Access logged"] },
    results: { before: ["Records in separate systems", "Manual reconciliation", "Uneven access controls"], after: ["One governed view", "Less reconciliation", "Consistent, logged access"], chartLabel: "Admin effort (illustrative)", beforeValue: 74, afterValue: 34 },
    impact: [{ who: "Care teams", text: "A more complete view at the point of care." }, { who: "Administrators", text: "Less manual reconciliation." }, { who: "Leadership", text: "Clearer reporting on operational load." }],
    technology: ["Cloud platform", "Data platform", "Access management", "Dashboards"],
    related: [{ label: "Data & Decision Intelligence", href: "/capabilities/data-analytics-decision-intelligence" }, { label: "Cloud & Platform Engineering", href: "/capabilities/cloud-devops-platform-engineering" }, { label: "Solutions", href: "/solutions" }],
    outcomeTags: ["Unified records", "Consistent access"],
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
