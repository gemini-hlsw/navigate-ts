import { expect } from '@playwright/test';

import { test } from './base';

test('has loaded page and enabled buttons', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.acquisition-camera').getByLabel('Start')).toBeEnabled({ timeout: 10000 });
});
