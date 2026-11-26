import { expect, test } from '@playwright/test';

test('Security Guard can access Manage Vehicle Entry PO lookup', async ({
  page,
}) => {
  await page.goto('/po/vehicle');

  await expect(
    page.getByRole('heading', {
      name: 'Manage Vehicle Entry',
      exact: true,
    }),
  ).toBeVisible();

  const searchInput = page.getByPlaceholder('Search PO Number', {
    exact: true,
  });
  await expect(searchInput).toBeVisible();
  await expect(searchInput).toBeEnabled();

  const searchButton = page.getByRole('button', { name: /Search/ });
  await expect(searchButton).toBeVisible();
  await expect(searchButton).toBeEnabled();
});
