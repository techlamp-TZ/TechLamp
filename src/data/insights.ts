export type InsightTopic = "AI" | "Data" | "Cloud" | "Software" | "Enterprise Applications" | "Digital Learning" | "Transformation";

export const TOPICS: InsightTopic[] = ["AI", "Data", "Cloud", "Software", "Enterprise Applications", "Digital Learning", "Transformation"];

export interface Insight {
  slug: string;
  title: string;
  kind: string;
  topic: InsightTopic;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const INSIGHTS: Insight[] = [
  {
    slug: "learning-system-around-a-technology-roadmap",
    title: "How to build a learning system around your technology roadmap",
    kind: "Field note",
    topic: "Digital Learning",
    summary: "A way to connect the systems you plan to adopt with the skills people need to run them.",
    sections: [
      { heading: "Start from the roadmap, not the course catalogue", paragraphs: [
        "A technology roadmap already says which systems will arrive and roughly when. Training planned separately tends to arrive too early, too late, or aimed at the wrong role. Begin by listing each roadmap item and the people who will operate, support or depend on it.",
        "For each group, write down what they must be able to do on the first day the system is live. That sentence, not a course title, is the learning goal.",
      ] },
      { heading: "Map skills to roles and stages", paragraphs: [
        "Split the goal into levels: awareness for people who only consume the output, working skill for those who use it daily, and depth for the few who configure and fix it. Different levels need different formats. A short briefing suits awareness. Depth needs labs and review.",
        "Keep the map small. A page that a manager can read in five minutes gets used. A forty-row matrix does not.",
      ] },
      { heading: "Check what changed", paragraphs: [
        "Pick one observable behaviour per goal, such as a report built without help or a request handled through the new workflow. Look for it a few weeks after training. If it is missing, the fix may be process or tooling rather than more teaching.",
      ] },
    ],
  },
  {
    slug: "operating-model-behind-responsible-automation",
    title: "The operating model behind responsible automation",
    kind: "Field note",
    topic: "AI",
    summary: "Who decides, who checks, and who can stop an automated process before it goes wrong.",
    sections: [
      { heading: "Automation needs an owner", paragraphs: [
        "Every automated process should have a named owner in the business, not only a technical maintainer. The owner decides what the automation may do on its own and what needs a person to approve.",
      ] },
      { heading: "Separate the decision from the action", paragraphs: [
        "Write the decision rule down before building anything. Then decide which actions are safe to run without review and which are not. Low-risk, reversible actions can run alone. Anything that moves money, changes records that are hard to restore, or contacts customers should have an approval step at first.",
      ] },
      { heading: "Make it stoppable and visible", paragraphs: [
        "Keep a log of what the automation did and why. Give the owner a simple way to pause it. Review the log on a schedule and loosen or tighten approval rules based on what you see. Trust in an automated process should be earned from records, not assumed.",
      ] },
    ],
  },
  {
    slug: "what-a-modern-data-platform-changes",
    title: "What a modern data platform actually changes",
    kind: "Technology explainer",
    topic: "Data",
    summary: "The practical differences a team notices after moving from scattered spreadsheets and reports to one governed platform.",
    sections: [
      { heading: "One place for agreed numbers", paragraphs: [
        "The main change is not speed. It is that a figure has one definition and one source. When finance and operations pull the same measure, they should get the same answer. Reaching that point means agreeing definitions first, then building pipelines.",
      ] },
      { heading: "Ownership moves closer to the data", paragraphs: [
        "Someone must own each dataset: its meaning, its quality checks and who may see it. Without owners, a platform becomes a bigger version of the old mess.",
      ] },
      { heading: "What does not change", paragraphs: [
        "People still need to ask good questions. A platform shortens the path to an answer but does not choose the question. Plan for training and for a small group who help others use the data well.",
      ] },
    ],
  },
  {
    slug: "choosing-what-to-measure-after-a-rollout",
    title: "Choosing what to measure after a system rollout",
    kind: "Field note",
    topic: "Transformation",
    summary: "A short approach to picking a few measures that show whether a new system is helping.",
    sections: [
      { heading: "Measure the work, not the launch", paragraphs: [
        "Go-live dates and user logins say a system exists. They do not say it helps. Choose measures tied to the task the system was meant to improve, such as time to complete a request, rework, or how often people fall back to the old method.",
      ] },
      { heading: "Take a baseline first", paragraphs: [
        "Record how the work looked before the change, even roughly. Without a baseline you can only describe the new state, not the difference. A sample of real cases is enough to start.",
      ] },
      { heading: "Keep the list short and review it", paragraphs: [
        "Three to five measures are enough. Review them with the people doing the work, and drop any that nobody acts on.",
      ] },
    ],
  },
];

export const getInsight = (slug: string) => INSIGHTS.find((i) => i.slug === slug);

const WORDS_PER_MINUTE = 200;

export function wordCount(i: Insight): number {
  const text = [i.title, i.summary, ...i.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

/** Reading time in whole minutes, never below 1, computed from word count. */
export function readingTime(i: Insight): number {
  return Math.max(1, Math.ceil(wordCount(i) / WORDS_PER_MINUTE));
}
