
import { expect, test } from '@playwright/test';

test.describe('Non-Grain Purchase Order', () => {
  test('Create PO — Non-Grain: required-field validation', async ({ page }) => {
    await page.goto('/po/create');
    await expect(page).toHaveTitle('Create PO | ERP Farm');

    const requiredFields = [
      page.getByLabel('Agent *'),
      page.getByLabel('Supplier *'),
      page.getByLabel('Category *'),
      page.getByLabel('Payment Status *'),
      page.getByLabel('Remarks *'),
    ];

    for (const field of requiredFields) {
      await expect(field).toBeVisible();
      await expect(field).toHaveAttribute('required');

      const isValid = await field.evaluate(
        (element) =>
          (element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
            .validity.valid,
      );

      expect(isValid).toBe(false);
    }
  });
});
