import { expect, test } from "@playwright/test";

test("portada adaptable, imágenes y enlaces a los tres niveles", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/IEP Orlando Ortiz Ochoa/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Pequeños pasos.");
  await page.evaluate(() => document.fonts.ready);
  for (const id of ["niveles", "nosotros", "vida-escolar", "admisiones", "contacto", "preguntas"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  for (const level of ["inicial", "primaria", "secundaria"]) {
    await expect(page.locator(".levels-grid").getByRole("link", { name: `Descubre ${level}` })).toHaveAttribute("href", `/niveles/${level}`);
  }
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const heroBounds = await page.locator(".hero-content").boundingBox();
  expect(heroBounds).not.toBeNull();
  expect(heroBounds!.x + heroBounds!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
  const captionBounds = await page.locator(".image-caption").boundingBox();
  const noteBounds = await page.locator(".floating-note").boundingBox();
  expect(captionBounds!.y + captionBounds!.height).toBeLessThanOrEqual(noteBounds!.y);
  for (const image of await page.locator("main img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).complete && (element as HTMLImageElement).naturalWidth > 0)).toBe(true);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-viewport.png` });
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-home.png`, fullPage: true });
  expect(errors).toEqual([]);
});

test("menú móvil accesible y preguntas desplegables", async ({ page }) => {
  await page.goto("/");
  if ((page.viewportSize()?.width ?? 1440) <= 760) {
    const toggle = page.getByRole("button", { name: /Abrir menú|Cerrar menú/ });
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
    await toggle.click();
    await page.getByRole("navigation", { name: "Navegación móvil" }).getByRole("link", { name: "Niveles educativos" }).click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page).toHaveURL(/#niveles$/);
  }
  const question = page.getByText("¿Qué niveles educativos ofrece el colegio?", { exact: true });
  await question.click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await expect(page.locator("details").first().locator("p")).toBeVisible();
  await question.click();
  await expect(page.locator("details").first()).not.toHaveAttribute("open");
});

test("consulta validada y descargable, sin simular un envío", async ({ page }) => {
  await page.goto("/#contacto");
  await page.getByRole("button", { name: "Preparar mi consulta" }).click();
  await expect(page.getByRole("heading", { name: "Tu consulta está lista" })).not.toBeVisible();
  await page.getByLabel("Nombre del padre, madre o apoderado").fill("María Prueba");
  await page.getByLabel("Correo electrónico").fill("maria@example.com");
  await page.getByLabel("Nivel de interés").selectOption("Primaria");
  await page.getByLabel("¿En qué podemos ayudarte?").fill("Quisiera conocer el proceso de admisión.");
  await page.getByRole("button", { name: "Preparar mi consulta" }).click();
  await expect(page.getByRole("heading", { name: "Tu consulta está lista" })).toBeVisible();
  await expect(page.locator(".message-preview")).toContainText("María Prueba");
  await expect(page.locator(".message-preview")).toContainText("Primaria");
  await expect(page.getByText(/tu consulta no ha sido enviada/)).toBeVisible();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Descargar", exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("consulta-admisiones-orlando-ortiz-ochoa.txt");
  const stream = await download.createReadStream();
  const chunks: Buffer[] = [];
  for await (const chunk of stream!) chunks.push(chunk);
  expect(Buffer.concat(chunks).toString("utf8")).toContain("maria@example.com");
  await page.getByRole("button", { name: "Preparar otra consulta" }).click();
  await expect(page.getByLabel("Correo electrónico")).toHaveValue("");
});

test("cada nivel tiene contenido y metadatos propios", async ({ page }) => {
  for (const [level, title] of [["inicial", "Inicial"], ["primaria", "Primaria"], ["secundaria", "Secundaria"]]) {
    const response = await page.goto(`/niveles/${level}`);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(`Educación ${title} | IEP Orlando Ortiz Ochoa`);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", `Educación ${title} | IEP Orlando Ortiz Ochoa`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator(".skills-list h3")).toHaveCount(4);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  const notFound = await page.goto("/niveles/no-existe");
  expect(notFound?.status()).toBe(404);
  await expect(page.getByRole("link", { name: "Volver al inicio" })).toBeVisible();
});
