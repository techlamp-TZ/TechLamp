import { defineConfig } from "@playwright/test";

const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

export default defineConfig({
  testDir: "./tests",
  snapshotPathTemplate: "{testDir}/__screenshots__/{arg}{ext}",
  timeout: 60_000,
  fullyParallel: false,
  reporter: [["list"]],
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.02, animations: "disabled" } },
  use: {
    baseURL: "http://localhost:3111",
    reducedMotion: "reduce",
    launchOptions: { executablePath: process.env.CI ? undefined : CHROME },
  },
  webServer: {
    command: "npm run build && npm run start -- -p 3111",
    url: "http://localhost:3111",
    reuseExistingServer: true,
    timeout: 240_000,
  },
});
