import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/My App/);
  });

  test("should have working navigation", async ({ page }) => {
    await page.goto("/");
    // Add your navigation test logic here
    // Example:
    // await page.click('a[href="/about"]');
    // await expect(page).toHaveURL(/.*about/);
  });
});
