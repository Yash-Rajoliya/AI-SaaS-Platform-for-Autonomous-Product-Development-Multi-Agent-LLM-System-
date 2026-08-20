import { test, expect } from "@playwright/test";

test("generate product autonomously", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/AI Platform/i);
});