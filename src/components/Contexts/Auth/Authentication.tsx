import { subSeconds } from 'date-fns';
import { useInterval, useMountEffect } from 'primereact/hooks';
import type { ToastMessage } from 'primereact/toast';
import { useEffect } from 'react';

import { useRefreshToken, useSetRole } from '@/auth/hooks';
import { useTokenExp, useUser } from '@/components/atoms/auth';
import { useToast } from '@/Helpers/toast';

const expirationAnticipationSeconds = 30;

/**
 * Authentication component that handles token expiration and refresh.
 */
export function Authentication() {
  const exp = useTokenExp();
  const user = useUser();
  const toast = useToast();

  const refreshToken = useRefreshToken();
  const setRole = useSetRole();

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

  // If the user has staff role available, switch to it
  useEffect(() => {
    if (user && user.type === 'standard' && user.role.type !== 'staff') {
      const staffRole = user.otherRoles.find((role) => role.type === 'staff');
      if (staffRole) {
        console.log('Switching to staff role');
        void setRole(staffRole);
      } else {
        const t: ToastMessage = {
          severity: 'warn',
          summary: 'Warning',
          detail: `You are not a staff user (${user.role.type}). Some functionality might be unavailable.`,
        };
        toast?.show(t);
        return () => toast?.remove(t);
      }
    }
  }, [user, setRole, toast]);

  return <></>;
}
