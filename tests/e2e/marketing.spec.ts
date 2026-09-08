import { test, expect } from "@playwright/test";

test("public HTML includes content and share metadata before JavaScript", async ({ request }) => {
  for (const path of ["/", "/services"]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toMatch(/<h1[ >]/);
    expect(html).toMatch(/<title>/);
    expect(html).toContain('name="description"');
    expect(html).toContain('property="og:title"');
  }
});

test("unknown service returns a real 404", async ({ request }) => {
  expect((await request.get("/services/no-such-agentbiz-service")).status()).toBe(404);
});

test("marketing pages hydrate at desktop and mobile sizes", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/services?lang=es");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("home hydrates on mobile without runtime errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("h1").first()).toBeVisible();
  await page.screenshot({ path: "test-results/home-mobile.png" });
  expect(errors).toEqual([]);
});
