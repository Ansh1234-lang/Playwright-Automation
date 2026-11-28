
import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';

const roles = [
  {
    name: 'Purchase Executive',
    emailEnv: 'ERP_ARJUN_PURCHASE_EXECUTIVE_EMAIL',
    passwordEnv: 'ERP_ARJUN_PURCHASE_EXECUTIVE_PASSWORD',
    stateFile: '.auth/purchase-executive.json',
  },
  {
    name: 'Security Guard',
    emailEnv: 'ERP_ADITYA_SECURITY_GUARD_EMAIL',
    passwordEnv: 'ERP_ADITYA_SECURITY_GUARD_PASSWORD',
    stateFile: '.auth/security-guard.json',
  },
  {
    name: 'Accounts Executive',
    emailEnv: 'ERP_MIRA_ACCOUNTANT_EMAIL',
    passwordEnv: 'ERP_MIRA_ACCOUNTANT_PASSWORD',
    stateFile: '.auth/accounts-executive.json',
  },
  {
    name: 'Weight Executive',
  emailEnv: 'ERP_ARJUN_WEIGHT_EXECUTIVE_EMAIL',
  passwordEnv: 'ERP_ARJUN_WEIGHT_EXECUTIVE_PASSWORD',
  stateFile: '.auth/weight-executive.json',
  },
  
];

for (const role of roles) {
  test(`save authenticated session: ${role.name}`, async ({
    page,
    context,
  }) => {
    const email = process.env[role.emailEnv];
    const password = process.env[role.passwordEnv];

    if (!email || !password) {
      throw new Error(
        `Missing ${role.emailEnv} or ${role.passwordEnv} for ${role.name}`,
      );
    }

    await page.goto('/login');

    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/home\/task/);
    await expect(
      page.getByText('All tasks assigned to you that are yet to be completed.')
    ).toBeVisible();

    await fs.mkdir('.auth', { recursive: true });
    await context.storageState({ path: role.stateFile });
  });
}
