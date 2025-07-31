import { test as base } from '@playwright/test';

export interface Fixture {
  auth: undefined;
}

/**
 * Test fixture that sets up authentication for the tests.
 */
export const test = base.extend<Fixture>({
  auth: [
    async ({ context }, use) => {
      const refreshToken = process.env.LUCUMA_REFRESH_TOKEN;
      if (!refreshToken) {
        throw new Error(
          'LUCUMA_REFRESH_TOKEN environment variable is not set. Set it to a token able to access the ODB.',
        );
      }

      // Set session storage in a new context
      await context.addInitScript((refreshToken) => {
        window.sessionStorage.setItem('lucuma-refresh-token', JSON.stringify(refreshToken));
      }, refreshToken);
      await use(undefined);
    },
    { auto: true },
  ],
});
