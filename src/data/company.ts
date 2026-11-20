export type CompanyTone = "peach" | "sky" | "mint" | "lilac";

export interface CompanySectionMeta {
  slug: string;
  index: string;
  title: string;
  blurb: string;
  tone: CompanyTone;
}

export const COMPANY_SECTIONS: CompanySectionMeta[] = [
  { slug: "story", index: "01", title: "Our story", blurb: "Built for the distance between ambition and adoption.", tone: "peach" },
  { slug: "mission", index: "02", title: "Our mission", blurb: "People, technology, intelligence, impact.", tone: "sky" },
  { slug: "capability-model", index: "03", title: "Our capability model", blurb: "Connected disciplines. One delivery system.", tone: "mint" },
  { slug: "delivery", index: "04", title: "Delivery model", blurb: "A clear path from question to progress.", tone: "lilac" },
  { slug: "expertise", index: "05", title: "Certifications & expertise", blurb: "Use the platforms your organisation already trusts.", tone: "peach" },
  { slug: "values", index: "06", title: "Values", blurb: "How we hold ourselves to the work.", tone: "sky" },
  { slug: "careers", index: "07", title: "Careers", blurb: "Build the future with us.", tone: "mint" },
];

export const getCompanySection = (slug: string) => COMPANY_SECTIONS.find((s) => s.slug === slug);

export const MISSION = [
  { title: "People", text: "understand the change" },
  { title: "Technology", text: "make the system work" },
  { title: "Intelligence", text: "choose what matters" },
  { title: "Impact", text: "make progress visible" },
];

export const DISCIPLINES = ["Software Engineering", "Data & Analytics", "Enterprise Applications", "Consulting", "AI Engineering", "Cloud Engineering", "Digital Learning"];

export const STEPS = [
  ["Discover", "Understand the operation, the people and the decision that needs to improve."],
  ["Assess", "Check data, systems and skills against what the work needs."],
  ["Strategise", "Agree the outcome, the order of work and how progress will be judged."],
  ["Design", "Shape the solution and the way people will use it."],
  ["Build", "Build in small increments that can be reviewed."],
  ["Transform", "Bring teams, process and training along with the system."],
  ["Operate", "Run it, watch it, and fix what real use exposes."],
  ["Optimise", "Measure what changed and decide what to improve next."],
];

export const VALUES = [
  ["Engineering quality", "Systems are reviewed, tested and documented so others can run them."],
  ["Evidence", "Claims about results are tied to data, and unverified claims are labelled."],
  ["Continuous improvement", "Each delivery ends with a look at what to change next time."],
  ["Human-centred technology", "The people who use a system shape how it is built."],
  ["Accountability", "Scope, risks and decisions are written down and owned."],
  ["Learning", "Capability transfer is part of the work, not an extra."],
];

export const CAREER_AREAS = ["Engineering", "Data & AI", "Cloud & Platforms", "Learning & Transformation"];
