import { test, expect } from '@playwright/test';

test('server is up and login page loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Login/i);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible()
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('wrong password is rejected', async ({ page }) => {
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('maheshsecurityguard@mail.com');
  await page.locator('input[name="password"]').fill('rice-123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/login/); // still on login
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});