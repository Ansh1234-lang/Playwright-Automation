import { expect, test } from '@playwright/test';

test.describe('Create PO read-only form', () => {
  test('Create PO — required fields and dropdown controls are available', async ({ page }) => {
    // Plan: tests/plans/create-po-dropdown-options-selection.plan.md
    // Workflow: Inward > Manage PO > Create PO.
    await page.goto('/po/create');

    await expect(
      page.getByRole('heading', { name: 'Create PO', exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: /PO Number:/ })).toBeVisible();

    const requiredDropdowns = [
      page.getByRole('combobox', { name: 'Agent *' }),
      page.getByRole('combobox', { name: 'Supplier *' }),
      page.getByRole('combobox', { name: 'Category *' }),
      page.getByRole('combobox', { name: 'Payment Status *' }),
    ];

    for (const dropdown of requiredDropdowns) {
      await expect(dropdown).toBeVisible();
      await expect(dropdown).toBeEnabled();
      await expect(dropdown).toHaveJSProperty('required', true);
      await expect
        .poll(() => dropdown.locator('option').count())
        .toBeGreaterThan(1);
    }

    const paymentStatus = page.getByRole('combobox', {
      name: 'Payment Status *',
    });
    for (const status of ['Prepaid', 'Postpaid']) {
      await expect(
        paymentStatus.getByRole('option', { name: status, exact: true }),
      ).toHaveCount(1);
    }
  });
});
