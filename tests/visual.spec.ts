import { test, expect } from "@playwright/test";
import { ALL_WIDTHS, CORE_ROUTES, CORE_WIDTHS, ROUTES } from "./routes";

/**
 * Visual regression: full-page screenshots per route and width.
 * Update baselines deliberately with `npm run test:visual:update` after a reviewed design change.
 */
const slug = (r: string) => (r === "/" ? "home" : r.slice(1).replace(/\//g, "-"));

for (const route of ROUTES) {
  const widths = CORE_ROUTES.includes(route) ? CORE_WIDTHS : ALL_WIDTHS;
  for (const width of widths) {
    test(`visual ${route} @${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot(`${slug(route)}-${width}.png`, { fullPage: true });
    });
  }
}
