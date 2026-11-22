import { expect, test } from '@playwright/test';

test.describe('Create PO', () => {
  test('Non-Grain PO required-field scenario', async ({ page }) => {
    // Navigate directly to the Create PO page.
    await page.goto('/po/create');

    // Verify the required PO fields are visible and have the native required property.
    const requiredFields = [
      page.getByRole('combobox', { name: 'Agent *' }),
      page.getByRole('combobox', { name: 'Supplier *' }),
      page.getByRole('combobox', { name: 'Category *' }),
      page.getByRole('combobox', { name: 'Payment Status *' }),
      page.getByRole('textbox', { name: 'Remarks *' }),
    ];

    for (const field of requiredFields) {
      await expect(field).toBeVisible();
      await expect(field).toHaveJSProperty('required', true);
    }
  });
});
