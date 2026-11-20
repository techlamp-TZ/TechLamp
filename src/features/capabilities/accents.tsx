import { Bot, ChartLine, Cloud, Compass, Database, GraduationCap, LayoutGrid, Terminal, Waypoints, Workflow, type LucideIcon } from "lucide-react";
import type { Accent, IconKey } from "@/data/capabilities";
import type { PanelTone, Tone } from "@/data/capability-details";

export const ICONS: Record<IconKey, LucideIcon> = {
  bot: Bot,
  database: Database,
  chart: ChartLine,
  route: Waypoints,
  workflow: Workflow,
  cloud: Cloud,
  terminal: Terminal,
  grid: LayoutGrid,
  graduation: GraduationCap,
  compass: Compass,
};

/** Static class strings so Tailwind can see every value. */
export const ACCENTS: Record<Accent, { solid: string; text: string; border: string; hoverBg: string; dot: string }> = {
  orange: { solid: "bg-[#ff5a00]", text: "text-brand-ink", border: "border-[#ff5a00]", hoverBg: "hover:bg-[#ff5a00]", dot: "bg-[#ff5a00]" },
  blue: { solid: "bg-[#3e6fd9]", text: "text-[#2f5bbd]", border: "border-[#3e6fd9]", hoverBg: "hover:bg-[#3e6fd9]", dot: "bg-[#3e6fd9]" },
  teal: { solid: "bg-[#1f8f8a]", text: "text-[#17706c]", border: "border-[#1f8f8a]", hoverBg: "hover:bg-[#1f8f8a]", dot: "bg-[#1f8f8a]" },
  violet: { solid: "bg-[#7a4fc2]", text: "text-[#6a3fb0]", border: "border-[#7a4fc2]", hoverBg: "hover:bg-[#7a4fc2]", dot: "bg-[#7a4fc2]" },
  green: { solid: "bg-[#2e8b5e]", text: "text-[#237049]", border: "border-[#2e8b5e]", hoverBg: "hover:bg-[#2e8b5e]", dot: "bg-[#2e8b5e]" },
  brown: { solid: "bg-[#5a2a10]", text: "text-[#5a2a10]", border: "border-[#5a2a10]", hoverBg: "hover:bg-[#5a2a10]", dot: "bg-[#5a2a10]" },
  amber: { solid: "bg-[#c77700]", text: "text-[#8f5600]", border: "border-[#c77700]", hoverBg: "hover:bg-[#c77700]", dot: "bg-[#c77700]" },
  rose: { solid: "bg-[#c2456b]", text: "text-[#a3345a]", border: "border-[#c2456b]", hoverBg: "hover:bg-[#c2456b]", dot: "bg-[#c2456b]" },
  indigo: { solid: "bg-[#4f5bd5]", text: "text-[#3f49b8]", border: "border-[#4f5bd5]", hoverBg: "hover:bg-[#4f5bd5]", dot: "bg-[#4f5bd5]" },
  slate: { solid: "bg-[#5b5855]", text: "text-[#5b5855]", border: "border-[#5b5855]", hoverBg: "hover:bg-[#5b5855]", dot: "bg-[#5b5855]" },
};

export const PANEL_BAR: Record<PanelTone, string> = { blue: "bg-[#5b8def]", violet: "bg-[#8a63d2]", orange: "bg-[#ff5a00]", green: "bg-[#2fcf94]" };
export const PANEL_TEXT: Record<PanelTone, string> = { blue: "text-[#3e6fd9]", violet: "text-[#7a4fc2]", orange: "text-[#e05000]", green: "text-[#2e8b5e]" };
export const TONE_TEXT: Record<Tone, string> = { blue: "text-[#2f5bbd]", violet: "text-[#6a3fb0]", teal: "text-[#17706c]", orange: "text-brand-ink", green: "text-[#237049]" };
export const STAGE_BORDER = { blue: "border-[#8fb0f0]", violet: "border-[#b39be0]", orange: "border-[#ff9a5c]" } as const;
export const STAGE_TEXT = { blue: "text-[#2f5bbd]", violet: "text-[#6a3fb0]", orange: "text-brand-ink" } as const;

export function CapabilityIcon({ icon, accent, className = "h-11 w-11 rounded-[12px]" }: { icon: IconKey; accent: Accent; className?: string }) {
  const I = ICONS[icon];
  return (
    <span aria-hidden className={`inline-flex shrink-0 items-center justify-center text-white ${ACCENTS[accent].solid} ${className}`}>
      <I className="h-[55%] w-[55%]" strokeWidth={2} />
    </span>
  );
}
