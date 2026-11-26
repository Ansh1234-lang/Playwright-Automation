import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';

test('server is up and login page loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Login/i);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible()
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('wrong password is rejected', async ({ page }) => {
  const email = process.env.ERP_MAHESH_SECURITY_GUARD_EMAIL;
  if (!email) {
    throw new Error('Missing ERP_MAHESH_SECURITY_GUARD_EMAIL');
  }

  await page.goto('/login');
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(randomUUID());
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/login/); // still on login
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});