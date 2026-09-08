import { test, expect } from "@playwright/test";

test("CRM identity persists and new contacts appear without reloading", async ({ page }) => {
  await page.goto("/admin/login");
  await page.getByLabel("Email").fill("e2e@example.com");
  await page.getByLabel("Contraseña").fill("Local-e2e-password-123!");
  await page.getByRole("button", { name: "Iniciar Sesión" }).click();
  await page.waitForURL(/\/admin\/(?!login)/);
  await page.goto("/admin/crm");
  await page.getByRole("button", { name: "Add contact" }).click();
  const dialog = page.getByRole("dialog");
  await dialog.locator("input").nth(0).fill("Browser Contact");
  await dialog.locator("input").nth(1).fill("browser@example.com");
  await dialog.locator("input").nth(2).fill("Original Company");
  await dialog.getByRole("button", { name: "Create contact" }).click();
  await expect(page.getByText("Browser Contact", { exact: true }).first()).toBeVisible();
  await page.getByText("Browser Contact", { exact: true }).first().click();
  await page.getByLabel("Name", { exact: true }).fill("Updated Contact");
  await page.getByLabel("Name", { exact: true }).press("Tab");
  await expect.poll(async () => {
    const response = await page.request.get("/api/admin/crm/contacts");
    return (await response.json()).find((c: {email: string}) => c.email === "browser@example.com")?.name;
  }).toBe("Updated Contact");
  await page.reload();
  await expect(page.getByText("Updated Contact", { exact: true }).first()).toBeVisible();
});

test("admin APIs reject unauthenticated requests", async ({ request }) => {
  for (const url of ["/api/admin/leads", "/api/admin/applications", "/api/admin/crm/contacts"]) {
    expect((await request.get(url)).status()).toBe(401);
  }
});

test("application status preserves notes and deletion updates the list", async ({ page }) => {
  await page.goto("/admin/login");
  await page.getByLabel("Email").fill("e2e@example.com");
  await page.getByLabel("Contraseña").fill("Local-e2e-password-123!");
  await page.getByRole("button", { name: "Iniciar Sesión" }).click();
  await page.waitForURL(/\/admin\/(?!login)/);
  const headers = { origin: "http://127.0.0.1:3197" };
  const submitted = await page.request.post("/api/applications", { headers, multipart: {
    name: "Browser Candidate", email: "candidate@example.com", phone: "+1 555 0100", position: "Developer", experience: "5 years", cover_letter: "Browser regression test",
    cv: { name: "cv.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4\n%EOF\n") },
  } });
  expect(submitted.ok()).toBe(true);
  const { id } = await submitted.json();
  expect((await page.request.patch("/api/admin/applications", { headers, data: { id, notes: "Preserve interview notes" } })).ok()).toBe(true);
  await page.goto("/admin/applications");
  await page.getByRole("button", { name: "Ver Detalles" }).click();
  await expect(page.locator("textarea")).toHaveValue("Preserve interview notes");
  await page.getByRole("button", { name: "Entrevistar" }).click();
  await expect.poll(async () => {
    const response = await page.request.get("/api/admin/applications");
    return (await response.json()).find((app: {id: string}) => app.id === id)?.status;
  }).toBe("interviewed");
  await page.keyboard.press("Escape");
  await expect(page.getByText("interviewed", { exact: true })).toBeVisible();
  const rows = await (await page.request.get("/api/admin/applications")).json();
  expect(rows.find((app: {id: string}) => app.id === id)?.notes).toBe("Preserve interview notes");
  page.once("dialog", dialog => dialog.accept());
  await page.getByRole("button", { name: "Eliminar", exact: true }).click();
  await expect(page.getByText("Browser Candidate", { exact: true })).toHaveCount(0);
  expect((await page.request.get(`/api/admin/applications/${id}/cv`)).status()).toBe(404);
});
