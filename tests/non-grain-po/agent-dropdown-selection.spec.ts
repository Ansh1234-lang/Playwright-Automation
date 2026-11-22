import { expect, test } from '@playwright/test';

test.describe('Create PO Agent dropdown', () => {
  test('Create PO — Agent dropdown selection', async ({ page }) => {
    // Plan: tests/plans/create-po-agent-dropdown-selection.plan.md
    await page.goto('/po/create');
    await expect(page).toHaveTitle('Create PO | ERP Farm');

    const agentDropdown = page.getByRole('combobox', { name: 'Agent *' });
    await expect(agentDropdown).toBeVisible();
    await expect(agentDropdown).toBeEnabled();

    const approvedAgent = process.env['ERP_TEST_AGENT_OPTION'];
    if (!approvedAgent) {
      test.skip(
        true,
        'Set ERP_TEST_AGENT_OPTION to an Agent value approved for the authorized test environment before execution.',
      );
      return;
    }

    await expect(agentDropdown.locator('option')).toContainText(approvedAgent);
    await agentDropdown.selectOption({ label: approvedAgent });
    await expect(agentDropdown.locator('option:checked')).toHaveText(approvedAgent);

    // No documented dependent-field behavior is available to assert.
    // Do not save or submit the purchase order.
  });
});
