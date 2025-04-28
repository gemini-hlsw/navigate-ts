import { createStore } from 'jotai';

import type { OrcidProfile } from '@/auth/user';

import {
  canEditAtom,
  decodedTokenPayloadAtom,
  isLoggedInAtom,
  odbTokenAtom,
  type OdbTokenPayload,
  tokenExpAtom,
  userAtom,
} from './auth';

describe('auth atoms', () => {
  let store: ReturnType<typeof createStore>;
  beforeEach(() => {
    store = createStore();
  });

  describe('decodedTokenPayloadAtom', () => {
    it('should decode the token payload', () => {
      const { token, payload } = createJwt(Date.now() / 1000 + 60);

      store.set(odbTokenAtom, token);
      expect(store.get(decodedTokenPayloadAtom)).toEqual(payload);
    });

    it('is null if the token is not set', () => {
      store.set(odbTokenAtom, null);
      expect(store.get(decodedTokenPayloadAtom)).toBeNull();
    });

    it('is null if the token is invalid', () => {
      store.set(odbTokenAtom, 'invalid token');
      expect(store.get(decodedTokenPayloadAtom)).toBeNull();
    });
  });

  describe('userAtom', () => {
    it('gets the user from the payload', () => {
      const { token, payload } = createJwt();

      store.set(odbTokenAtom, token);
      expect(store.get(userAtom)).toEqual(payload['lucuma-user']);
    });
  });

  describe('tokenExpAtom', () => {
    it('gets the expiration date from the payload', () => {
      const expDate = Date.now();
      const { token } = createJwt(expDate / 1000);

      store.set(odbTokenAtom, token);
      expect(store.get(tokenExpAtom)).toEqual(new Date(expDate));
    });

    it('is null if the token is not set', () => {
      store.set(odbTokenAtom, null);
      expect(store.get(tokenExpAtom)).toBeNull();
    });
  });

  describe('isLoggedInAtom', () => {
    it('is true if the user is logged in and the token is not expired', () => {
      const { token } = createJwt(Date.now() / 1000 + 60);

      store.set(odbTokenAtom, token);
      expect(store.get(isLoggedInAtom)).toBe(true);
    });

    it('is false if the user is logged in and the token is expired', () => {
      const { token } = createJwt(Date.now() / 1000 - 60);

      store.set(odbTokenAtom, token);
      expect(store.get(isLoggedInAtom)).toBe(false);
    });

    it('is false if the user is not logged in', () => {
      store.set(odbTokenAtom, null);
      expect(store.get(isLoggedInAtom)).toBe(false);
    });
  });

  describe('canEditAtom', () => {
    it('is true if the user is logged in and not a guest', () => {
      const { token } = createJwt();

      store.set(odbTokenAtom, token);
      expect(store.get(canEditAtom)).toBe(true);
    });

    it('is false if the user is not logged in', () => {
      store.set(odbTokenAtom, null);
      expect(store.get(canEditAtom)).toBe(false);
    });
  });
});

function createJwt(overrideExp = Date.now() / 1000 + 60, overrideProfile: Partial<OrcidProfile> = {}) {
  const payload: OdbTokenPayload = {
    exp: overrideExp,
    'lucuma-user': {
      id: '123',
      type: 'standard',
      role: {
        type: 'pi',
        id: '123',
      },
      otherRoles: [],
      profile: {
        orcidId: '0000-0000-0000-0000',
        ...overrideProfile,
        profile: {
          ...overrideProfile?.profile,
        },
      },
    },
  };

  const base64Payload = btoa(JSON.stringify(payload));
  const base64Header = btoa(JSON.stringify({ typ: 'JWT', alg: 'RS512' }));
  const signature = 'signature'; // Placeholder for the signature
  return { token: `${base64Header}.${base64Payload}.${signature}`, payload };
}
