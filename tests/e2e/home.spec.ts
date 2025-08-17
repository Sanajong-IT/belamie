import { test, expect } from '@playwright/test';

test('homepage shows hero and CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Bel‑Amie/);
  await expect(page.getByText('Catering die scoort')).toBeVisible();
});
