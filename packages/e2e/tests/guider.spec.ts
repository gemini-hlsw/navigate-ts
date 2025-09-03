import { expect } from '@playwright/test';

import { test } from './base';

test('can start and stop', async ({ page }) => {
  const controls = page.getByTestId('oiwfs-controls');
  const oiwfsStartButton = controls.getByLabel('Start');
  const oiwfsStopButton = controls.getByLabel('Stop');
  await expect(oiwfsStartButton).toBeEnabled();
  await expect(oiwfsStopButton).not.toBeVisible();

  await oiwfsStartButton.click();
  await expect(oiwfsStopButton).toBeEnabled();
  await expect(oiwfsStartButton).not.toBeVisible();

  await oiwfsStopButton.click();
  await expect(oiwfsStartButton).toBeEnabled();
  await expect(oiwfsStopButton).not.toBeVisible();
});
