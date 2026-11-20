import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CAPABILITIES } from "@/data/capabilities";
import { CASE_STUDIES } from "@/data/case-studies";
import { INSIGHTS } from "@/data/insights";
import { SOLUTION_AREAS } from "@/data/solutions";
import { PLATFORM_LAYERS } from "@/data/platforms";
import { COMPANY_SECTIONS } from "@/data/company";
import { INDUSTRIES } from "@/data/industries";
import { PRODUCT_FAMILIES } from "@/data/products";
import { ODOO_SERVICES } from "@/data/odoo-services";
import { ODOO_INDUSTRIES } from "@/data/odoo-industries";
import { ZOHO_APPS } from "@/data/zoho-services";

const STATIC_ROUTES = [
  "/",
  "/capabilities",
  "/solutions",
  "/platforms",
  "/products",
  "/capabilities/data-analytics-services",
  "/capabilities/cloud-managed-services",
  "/business-apps",
  "/odoo-services",
  "/odoo-industries",
  "/zoho-services",
  "/industries",
  "/case-studies",
  "/training",
  "/insights",
  "/company",
  "/contact",
  "/talk-to-an-expert",
  "/start-a-project",
  "/privacy",
  "/terms",
  "/accessibility",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamic = [
    ...CAPABILITIES.map((c) => `/capabilities/${c.slug}`),
    ...SOLUTION_AREAS.map((a) => `/solutions/${a.id}`),
    ...PLATFORM_LAYERS.map((l) => `/platforms/${l.id}`),
    ...COMPANY_SECTIONS.map((s) => `/company/${s.slug}`),
    ...INDUSTRIES.map((i) => `/industries/${i.id}`),
    ...PRODUCT_FAMILIES.map((f) => `/products/${f.id}`),
    ...ODOO_SERVICES.map((s) => `/odoo-services/${s.slug}`),
    ...ODOO_INDUSTRIES.map((i) => `/odoo-industries/${i.slug}`),
    ...ZOHO_APPS.map((a) => `/zoho-services/${a.slug}`),
    ...CASE_STUDIES.map((c) => `/case-studies/${c.slug}`),
    ...INSIGHTS.map((i) => `/insights/${i.slug}`),
  ];
  return [...STATIC_ROUTES, ...dynamic].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
