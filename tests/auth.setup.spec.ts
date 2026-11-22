
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
import fs from 'node:fs/promises';

const roles = [
  {
    email: process.env.ERP_PURCHASE_EXECUTIVE_EMAIL,
    password: process.env.ERP_PURCHASE_EXECUTIVE_PASSWORD,
    stateFile: '.auth/purchase-executive.json',
  },
  {
    email: process.env.ERP_SECURITY_GUARD_EMAIL,
    password: process.env.ERP_SECURITY_GUARD_PASSWORD,
    stateFile: '.auth/security-guard.json',
  },
];

for (const role of roles) {
  test(`save authenticated session: ${role.stateFile}`, async ({
    page,
    context,
  }) => {
    if (!role.email || !role.password) {
      throw new Error(`Missing credentials for ${role.stateFile}`);
    }

    await page.goto('/login');

    await page.locator('input[name="email"]').fill(role.email);
    await page.locator('input[name="password"]').fill(role.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/home\/task/);
    await expect(
      page.getByText('All tasks assigned to you that are yet to be completed.')
    ).toBeVisible();

    await fs.mkdir('.auth', { recursive: true });
    await context.storageState({ path: role.stateFile });
  });
}
