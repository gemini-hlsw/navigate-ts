import { expect } from '@playwright/test';

import { test } from './base';

test('has loaded page and enabled buttons', async ({ page }) => {
  await expect(page.locator('.acquisition-camera').getByLabel('Start')).toBeEnabled();
});
