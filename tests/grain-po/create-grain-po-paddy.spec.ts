import { expect, test, type Locator } from '@playwright/test';

function normalizeOption(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLocaleLowerCase();
}

async function expectOptionAvailable(
  dropdown: Locator,
  expected: string,
): Promise<void> {
  const options = await dropdown.locator('option').allTextContents();
  expect(
    options.map(normalizeOption),
    `Expected option "${expected}" to be available in the dropdown`,
  ).toContain(normalizeOption(expected));
}

test.describe('Create PO — Grain Product (Paddy)', () => {
  test('PO-GRAIN-001/002 — Create PO page and required form controls are visible', async ({ page }) => {
    await page.goto('/po/create');

    await expect(page).toHaveTitle('Create PO | ERP Farm');
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
  });

  test('PO-GRAIN-003/004/006 — Requested Agent, Supplier, and Prepaid options are available', async ({ page }) => {
    await page.goto('/po/create');

    await expectOptionAvailable(
      page.getByRole('combobox', { name: 'Agent *' }),
      'Manay Interprises',
    );
    await expectOptionAvailable(
      page.getByRole('combobox', { name: 'Supplier *' }),
      'Siri Firm',
    );
    await expectOptionAvailable(
      page.getByRole('combobox', { name: 'Payment Status *' }),
      'Prepaid',
    );
  });

  test.skip('PO-GRAIN-005/007-020 — BLOCKED: populate and submit approved Paddy PO', async () => {
    // Do not enable until all blockers are resolved. The configured host observed so far is the live ERP.
    // Category approval is missing; field mapping for Bags, Quantity, Unit Price, GST, Unit, sample range,
    // and product remark is unverified; Add Product control behavior and post-create evidence are also unverified.
    // No Create PO action is included because non-production authorization and approved test data are unconfirmed.
    // Requested candidate values: Agent Manay Interprises, Supplier Siri Firm, Payment Status Prepaid,
    // Product Paddy, Sub-Product Paddy 30 (only if present), Bags 100, Quantity 5000 kg,
    // Unit Price 30 only if confirmed, GST 0, range 0-7, and '-' remarks if accepted.
  });
});
