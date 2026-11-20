import type { Metadata } from "next";

export const SITE_URL = "https://techlamp.co.tz";

/** Per-route metadata: title, description, canonical, Open Graph and Twitter in one place. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: "TechLamp" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechLamp",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/techlamp-logo-header.svg`,
  };
}
