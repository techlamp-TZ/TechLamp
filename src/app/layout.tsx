import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});
const mono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://techlamp.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechLamp — Engineering intelligent progress",
    template: "%s — TechLamp",
  },
  description:
    "TechLamp connects business signals, analytics, optimization, human judgment and intelligent agents so every decision becomes measurable action.",
  applicationName: "TechLamp",
  openGraph: {
    type: "website",
    siteName: "TechLamp",
    url: SITE_URL,
    title: "TechLamp — Engineering intelligent progress",
    description: "From signal to decision to action: analytics, optimization and agentic engineering for real business operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechLamp — Engineering intelligent progress",
    description: "From signal to decision to action.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f9f1e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
