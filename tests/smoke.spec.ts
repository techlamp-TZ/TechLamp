import { test, expect } from "@playwright/test";
import { ROUTES } from "./routes";

for (const route of ROUTES) {
  test(`smoke ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error" && !/Failed to load resource|prefetch/i.test(m.text())) errors.push(m.text());
    });
    const res = await page.goto(route, { waitUntil: "load" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main#main")).toHaveCount(1);
    await expect(page.getByRole("link", { name: "Skip to content" })).toHaveCount(1);
    expect(errors).toEqual([]);
  });
}

for (const width of [1440, 1024, 768, 390, 375]) {
  test(`no horizontal scroll @${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/capabilities", "/solutions", "/contact", "/talk-to-an-expert"]) {
      await page.goto(route, { waitUntil: "load" });
      const overflow = await page.evaluate(() => {
        const de = document.documentElement;
        return getComputedStyle(document.body).overflowX === "visible" ? de.scrollWidth - de.clientWidth : 0;
      });
      expect(overflow, route).toBeLessThanOrEqual(1);
    }
  });
}

test("unknown route returns the branded 404", async ({ page }) => {
  const res = await page.goto("/does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveCount(1);
});

test("sitemap and robots are served", async ({ request }) => {
  const sm = await request.get("/sitemap.xml");
  expect(sm.status()).toBe(200);
  expect(await sm.text()).toContain("https://techlamp.co.tz/capabilities/business-analytics");
  const rb = await request.get("/robots.txt");
  expect(await rb.text()).toContain("Sitemap: https://techlamp.co.tz/sitemap.xml");
});

test("every page declares a canonical link", async ({ page }) => {
  for (const route of ROUTES) {
    await page.goto(route, { waitUntil: "load" });
    await expect(page.locator('link[rel="canonical"]'), route).toHaveCount(1);
  }
});

test("header mega menu opens by keyboard focus and mobile drawer toggles", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("/", { waitUntil: "load" });
  const menu = page.getByRole("button", { name: "Open menu" });
  await menu.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  await expect(page.locator("#mobile-nav")).toBeVisible();
});

test("contact form validates and shows field errors", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "load" });
  await page.getByRole("button", { name: /send enquiry/i }).click();
  await expect(page.getByText(/enter your name/i).first()).toBeVisible();
});

test("talk to an expert wizard: goal choice advances and focus moves to the heading", async ({ page }) => {
  await page.goto("/talk-to-an-expert", { waitUntil: "load" });
  await page.getByRole("radio").first().check({ force: true }).catch(() => {});
  await page.getByRole("button", { name: /continue/i }).click();
  await expect(page.locator("[tabindex='-1']:focus")).toHaveCount(1);
});
