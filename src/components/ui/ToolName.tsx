import { cn } from "@/lib/cn";

/**
 * Official product marks for platforms we work with, shown next to their names.
 * Marks belong to their owners and appear only to identify the product; nothing here implies a partnership.
 * Wide marks already spell the name, so they render alone with the name kept for screen readers.
 */
interface Mark {
  file: string;
  /** width / height of the artwork */
  aspect: number;
}

const MARKS: Record<string, Mark> = {
  aws: { file: "aws", aspect: 1.67 },
  azure: { file: "azure", aspect: 1.06 },
  "azure ai": { file: "azure", aspect: 1.06 },
  "microsoft azure": { file: "azure", aspect: 1.06 },
  "google cloud": { file: "google-cloud", aspect: 1.24 },
  "google workspace": { file: "google-workspace", aspect: 7.76 },
  "power bi": { file: "power-bi", aspect: 0.75 },
  "microsoft 365": { file: "microsoft", aspect: 1 },
  "microsoft power platform": { file: "microsoft", aspect: 1 },
  "microsoft teams": { file: "teams", aspect: 1.07 },
  salesforce: { file: "salesforce", aspect: 1.42 },
  zendesk: { file: "zendesk", aspect: 1.31 },
  zoho: { file: "zoho", aspect: 2.33 },
  "zoho crm": { file: "zoho", aspect: 2.33 },
  sap: { file: "sap", aspect: 2.02 },
  odoo: { file: "odoo", aspect: 1 },
  python: { file: "python", aspect: 1 },
  postgresql: { file: "postgresql", aspect: 0.97 },
  kubernetes: { file: "kubernetes", aspect: 1.03 },
  docker: { file: "docker", aspect: 1.38 },
  terraform: { file: "terraform", aspect: 0.88 },
  github: { file: "github", aspect: 1.02 },
  openai: { file: "openai", aspect: 0.98 },
  snowflake: { file: "snowflake", aspect: 1 },
  databricks: { file: "databricks", aspect: 0.93 },
  tableau: { file: "tableau", aspect: 1.02 },
  slack: { file: "slack", aspect: 1 },
  jira: { file: "jira", aspect: 1 },
  "techlamp agents": { file: "../brand/techlamp-symbol", aspect: 1 },
};

export function hasMark(name: string) {
  return name.toLowerCase() in MARKS;
}

export function ToolName({
  name,
  size = 16,
  className,
  logoOnly,
}: {
  name: string;
  size?: number;
  className?: string;
  /** Force the mark alone (used where space is tight). Wide wordmarks are always mark-only. */
  logoOnly?: boolean;
}) {
  const mark = MARKS[name.toLowerCase()];
  if (!mark) return <span className={className}>{name}</span>;
  const wide = mark.aspect > 1.6;
  const w = Math.round(size * mark.aspect);
  return (
    <span className={cn("inline-flex items-center justify-center gap-[7px]", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/logos/${mark.file}.svg`} alt="" width={w} height={size} loading="lazy" decoding="async" style={wide ? { height: "auto", width: Math.min(Math.round(size * mark.aspect * 1.35), 96) } : { height: size, width: "auto", maxWidth: 28 }} className="shrink-0" />
      {wide || logoOnly ? <span className="sr-only">{name}</span> : <span>{name}</span>}
    </span>
  );
}
