import { expect, test } from '@playwright/test';

const PAYMENT_STATUSES = ['Prepaid', 'Postpaid'] as const;

test.describe('Grain PO creation form', () => {
  test('renders the Create PO page and primary form controls', async ({ page }) => {
    await page.goto('/po/create');

    await expect(
      page.getByRole('heading', { name: 'Create PO', exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: /PO Number:/ })).toBeVisible();
    await expect(page.getByText('* marked fields are required')).toBeVisible();

    await expect(page.getByRole('combobox', { name: 'Agent *' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Supplier *' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Category *' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Payment Status *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Date & Time *' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Remarks *' })).toBeVisible();
    await expect(page.getByText('Submitted Products', { exact: true })).toBeVisible();

    await expect(
      page.getByRole('row', {
        name: /Product \* Sub-Product \* Child \* Sub-Child \* Sub-Sub-Child \* Details \* Unit \* Lab Sample Range \* Action/,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole('row', {
        name: 'Product Sub-Product Child Sub-Child Sub-Sub-Child Details Unit Lab Sample Range Action',
      }),
    ).toBeVisible();
  });

  test('lists both documented payment status options', async ({ page }) => {
    await page.goto('/po/create');

    const paymentStatus = page.getByRole('combobox', {
      name: 'Payment Status *',
    });

    await expect(paymentStatus).toBeVisible();
    for (const status of PAYMENT_STATUSES) {
      await expect(
        paymentStatus.getByRole('option', { name: status, exact: true }),
      ).toHaveCount(1);
    }
  });

  test.skip('BLOCKED — complete Grain PO entry, Submitted Products verification, and record creation', async () => {
    // Requires the source test-case document to be reviewed, an approved category and business-data fixture,
    // verified product field mappings, and explicit authorization for a non-production environment.
    // The observed application host is the live ERP. Do not enable this test against that host.
    // No product selection, Add Product, or Create PO action is included until those prerequisites are met.
  });
});
