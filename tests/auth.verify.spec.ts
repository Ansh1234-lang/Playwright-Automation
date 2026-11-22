
import { test } from '@playwright/test';

test('diagnose PO Create route access', async ({ page }) => {
  await page.goto('/po/create');

  console.log('URL after navigation:', page.url());
  console.log('Page title:', await page.title());
  console.log('Page content:', (await page.locator('body').innerText()).slice(0, 1500));
});
