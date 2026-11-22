import { test, expect } from '@playwright/test';

test('server is up and login page loads', async ({ page }) => {
  const response = await page.goto('/login');
  expect(response?.status()).toBe(200);

  await expect(page).toHaveTitle(/Login/);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});