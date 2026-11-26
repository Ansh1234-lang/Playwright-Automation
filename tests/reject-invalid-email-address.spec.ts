import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';

test.describe('Login validation', () => {
  test('Reject invalid email address', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('/login');

    // 2. Enter an invalid email address in the Email field.
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('invalid-email');

    // 3. Enter a password in the Password field.
    await page.getByRole('textbox', { name: 'Password' }).fill(randomUUID());

    // 4. Submit the login form.
    await page.getByRole('button', { name: 'Login' }).click();

    // 5. Verify the invalid email is rejected and the user remains on the login page.
    await expect(page.getByText('The email must be a valid email address.')).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });
});