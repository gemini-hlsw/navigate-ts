import { userEvent } from '@vitest/browser/context';
import type { RenderResult } from 'vitest-browser-react';

/**
 * A long expiration JWT token for testing purposes. This JWT is not actually valid and should not be used for anything other than running unit tests.
 *
 * Expires 2045
 */
export const longExpirationJwt =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJsdWN1bWEtc3NvIiwic3ViIjoiMjE5OSIsImF1ZCI6Imx1Y3VtYSIsImV4cCI6MjM2ODI2NjA3MCwibmJmIjoxNzM3NTQ2MDYwLCJpYXQiOjE3Mzc1NDYwNjAsImx1Y3VtYS11c2VyIjp7InR5cGUiOiJzZXJ2aWNlIiwiaWQiOiJ1LTAwMCIsIm5hbWUiOiJpbnZhbGlkLXVzZXItZm9yLXRlc3RzIn19.fY4fM7DUSQRmEy';

export const expiredJwt =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJsdWN1bWEtc3NvIiwic3ViIjoiMjE5OSIsImF1ZCI6Imx1Y3VtYSIsImV4cCI6MTczNzU0NjA2MSwibmJmIjoxNzM3NTQ2MDYwLCJpYXQiOjE3Mzc1NDYwNjAsImx1Y3VtYS11c2VyIjp7InR5cGUiOiJzZXJ2aWNlIiwiaWQiOiJ1LTAwMCIsIm5hbWUiOiJpbnZhbGlkLXVzZXItZm9yLXRlc3RzIn19.fY4fM7DUSQRmEy';

/**
 * Select an option from a primereact dropdown
 */
export async function selectDropdownOption(sut: RenderResult, label: string, optionLabel: string) {
  const getWrapper = () => sut.getByLabelText(label, { exact: true }).element().parentElement?.parentElement;

  await userEvent.click(getWrapper()!.querySelector('.p-dropdown-trigger')!);

  const option = sut.getByText(optionLabel, { exact: true });
  await userEvent.click(option);
}
