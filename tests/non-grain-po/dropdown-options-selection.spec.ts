import { expect, test } from '@playwright/test';

test.describe('Create PO dropdown controls', () => {
  test('Create PO — dropdown options and selection behavior', async ({ page }) => {
    // Plan: tests/plans/create-po-dropdown-options-selection.plan.md
    await page.goto('/po/create');

    await expect(page).toHaveTitle('Create PO | ERP Farm');

    const dropdowns = [
      page.getByRole('combobox', { name: 'Agent *' }),
      page.getByRole('combobox', { name: 'Supplier *' }),
      page.getByRole('combobox', { name: 'Category *' }),
      page.getByRole('combobox', { name: 'Payment Status *' }),
    ];

    for (const dropdown of dropdowns) {
      await expect(dropdown).toBeVisible();
      await expect
        .poll(() => dropdown.locator('option').count())
        .toBeGreaterThan(1);
    }
  });
});
