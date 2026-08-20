import { test, expect } from "@playwright/test";

test.describe("navigating from a project card into its case study", () => {
  test("clicking a card's title/image opens the internal case study page", async ({ page }) => {
    await page.goto("/");

    const card = page.locator(".card", { hasText: "Freelance Portfolio" });
    await card.getByRole("link", { name: /freelance portfolio/i }).click();

    await expect(page).toHaveURL(/\/projects\/freelance-portfolio$/);
    await expect(page.getByRole("heading", { level: 1, name: "Freelance Portfolio" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Problem" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Approach" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Outcome" })).toBeVisible();
  });

  test("the case study's back link returns to the home page", async ({ page }) => {
    await page.goto("/projects/chil-data-app");
    await page.getByRole("link", { name: /back to projects/i }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole("heading", { level: 1, name: "JOSHUA SADLEIR" })).toBeVisible();
  });

  test("a card's 'View live' control is a separate external link, not the case study link", async ({ page }) => {
    await page.goto("/");

    const card = page.locator(".card", { hasText: "CHIL Data App" });
    const viewLive = card.getByRole("link", { name: /view live/i });

    await expect(viewLive).toHaveAttribute("href", "https://chil-data-app.up.railway.app/home");
    await expect(viewLive).toHaveAttribute("target", "_blank");

    // Clicking it must not navigate the current page away from the portfolio.
    await viewLive.click({ modifiers: ["Control"] });
    await expect(page).toHaveURL(/\/$/);
  });

  test("an unknown project id shows a not-found message with a way back", async ({ page }) => {
    await page.goto("/projects/does-not-exist");

    await expect(page.getByRole("heading", { level: 1, name: /project not found/i })).toBeVisible();
    await page.getByRole("link", { name: /back/i }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});
