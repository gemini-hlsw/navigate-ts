import { subSeconds } from 'date-fns';
import { useInterval, useMountEffect } from 'primereact/hooks';

import { useRefreshToken } from '@/auth/hooks';
import { useTokenExp } from '@/components/atoms/auth';

const expirationAnticipationSeconds = 30;

/**
 * Authentication component that handles token expiration and refresh.
 */
export function Authentication() {
  const exp = useTokenExp();

  const refreshToken = useRefreshToken();

  // On mount, check if the token is expired and refresh it if necessary
  useMountEffect(() => {
    if (!exp) {
      console.log('No token on mount, refreshing');
      void refreshToken();
    }
  });

  // Afterwards, check every second if the token is about to expire
  useInterval(async () => {
    if (exp) {
      const expDate = subSeconds(exp, expirationAnticipationSeconds);
      if (expDate < new Date()) {
        console.log('Refreshing token');
        await refreshToken();
      }
    }
  }, 1000);
  return <></>;
}
