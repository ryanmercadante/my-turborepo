import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL,
    trace: "on-first-retry",
    video: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // webServer: {
  //   command: "yarn turbo dev --filter=@repo/api --no-daemon --no-deps",
  //   url: `http://localhost:${process.env.PORT || 8000}/health`,
  //   reuseExistingServer: !process.env.CI,
  //   env: {
  //     DATABASE_URL: process.env.DATABASE_URL ||
  //       "mysql://root:root@localhost:3306/test",
  //     REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  //   },
  // },
});
