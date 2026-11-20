export const HERO_FEATURES = [
  { icon: "users", label: "Hands-on projects" },
  { icon: "laptop", label: "Expert-led training" },
  { icon: "chart", label: "Industry relevant" },
  { icon: "shield", label: "Career growth" },
] as const;

export const CURRICULUM = [
  { title: "Intelligence & Data", items: ["Artificial Intelligence", "Generative AI", "Data Analytics", "Data Engineering", "Power BI", "Python", "SQL"] },
  { title: "Cloud & Engineering", items: ["AWS", "Azure", "Google Cloud", "Cloud Engineering", "DevOps", "Software Engineering"] },
  { title: "Platforms & Workplace", items: ["Microsoft Power Platform", "Microsoft 365", "Google Workspace", "Odoo", "Salesforce", "ServiceNow", "ManageEngine"] },
  { title: "Transformation & Delivery", items: ["Instructional Design", "E-Learning Development", "Agile", "Scrum", "Kanban", "Lean Six Sigma", "Project Management", "Change Management"] },
];

export const LEVELS = [
  { id: "foundation", n: "01", label: "Foundation", summary: "Shared vocabulary and first working habits.", points: ["Core concepts explained without assumed background", "Guided exercises on small, realistic problems", "A clear picture of which path fits next"] },
  { id: "practitioner", n: "02", label: "Practitioner", summary: "Doing the work with support.", points: ["Repeatable methods for common tasks", "Hands-on lab work with review", "Working in a team toward a shared result"] },
  { id: "professional", n: "03", label: "Professional", summary: "Owning outcomes on real work.", points: ["Design decisions and trade-offs", "Quality, security and operating concerns", "Projects that resemble the day job"] },
  { id: "specialist", n: "04", label: "Specialist", summary: "Depth in one discipline.", points: ["Advanced topics chosen with the learner's organisation", "Coaching others and reviewing their work", "Contribution to internal standards"] },
];

export const PATHS = [
  { title: "AI Engineer", text: "From data and Python basics to building and running AI systems in production.", chain: "AI foundations, ML engineering, MLOps", roles: ["AI Engineer", "Data Analyst", "Data Engineer"], group: "Engineering paths" },
  { title: "Data & Cloud", text: "The modern data stack, from pipelines to decision intelligence.", chain: "SQL and Python, data platforms, cloud engineering", roles: ["Cloud Engineer", "Platform Developer", "DevOps Engineer"], group: "Platform and cloud paths" },
  { title: "Delivery & Change", text: "Lead transformation with methods, tools and the human side of adoption.", chain: "Agile delivery, change leadership, impact", roles: ["Instructional Designer", "Agile Professional", "Lean Six Sigma Professional"], group: "Transformation paths" },
];

export const DELIVERY_MODES = ["Bootcamp", "Cohort", "Workshop", "Blended", "On site", "Online", "Team coaching"];

export const TRACE = ["Competency maps", "Skills graphs", "Learning journeys", "Certification pathways", "Assessment stages"];

export const LABS = [
  { title: "Guided labs", text: "Short exercises on prepared data and environments, with a written brief and a review of the result." },
  { title: "Applied projects", text: "A larger piece of work built around a realistic business problem, reviewed against agreed criteria." },
  { title: "Team challenges", text: "Cross-role exercises where analysts, engineers and business owners have to agree on one outcome." },
];

export const CORPORATE_STEPS = ["Assess", "Identify skill gaps", "Design programme", "Train", "Assess again", "Measure impact"];
