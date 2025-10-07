import { createStore } from 'jotai';
import type { Store } from 'jotai/vanilla/store';

import type { GuestUser, ServiceUser, StandardUser } from '@/auth/user';

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
  let store: Store;
  beforeEach(() => {
    store = createStore();
  });

  describe('decodedTokenPayloadAtom', () => {
    it('should decode the token payload', () => {
      const { token, payload } = createStandardUserToken(Date.now() / 1000 + 60);

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
      const { token, payload } = createStandardUserToken();

      store.set(odbTokenAtom, token);
      expect(store.get(userAtom)).toEqual(payload['lucuma-user']);
    });
  });

  describe('tokenExpAtom', () => {
    it('gets the expiration date from the payload', () => {
      const expDate = Date.now();
      const { token } = createStandardUserToken(expDate / 1000);

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
      const { token } = createStandardUserToken(Date.now() / 1000 + 60);

      store.set(odbTokenAtom, token);
      expect(store.get(isLoggedInAtom)).true;
    });

    it('is false if the user is logged in and the token is expired', () => {
      const { token } = createStandardUserToken(Date.now() / 1000 - 60);

      store.set(odbTokenAtom, token);
      expect(store.get(isLoggedInAtom)).false;
    });

    it('is false if the user is not logged in', () => {
      store.set(odbTokenAtom, null);
      expect(store.get(isLoggedInAtom)).false;
    });
  });

  describe('canEditAtom', () => {
    it('is true if the user is logged in as staff', () => {
      const { token } = createStandardUserToken(Date.now() / 1000 + 60, { role: { type: 'staff', id: '123' } });

      store.set(odbTokenAtom, token);
      expect(store.get(canEditAtom)).true;
    });

    it('is true if the user is logged in as admin', () => {
      const { token } = createStandardUserToken(Date.now() / 1000 + 60, { role: { type: 'admin', id: '123' } });

      store.set(odbTokenAtom, token);
      expect(store.get(canEditAtom)).true;
    });

    it('is false if the user is not staff', () => {
      const { token } = createStandardUserToken(Date.now() / 1000 + 60, { role: { type: 'pi', id: '123' } });
      store.set(odbTokenAtom, token);
      expect(store.get(canEditAtom)).false;
    });

    it('is false if the user is not logged in', () => {
      store.set(odbTokenAtom, null);
      expect(store.get(canEditAtom)).false;
    });

    it('is false if the user is logged in as guest', () => {
      const { token } = createGuestUserToken();

      store.set(odbTokenAtom, token);
      expect(store.get(canEditAtom)).false;
    });

    it('is true if the user is logged in as service user', () => {
      const { token } = createServiceUserToken({});

      store.set(odbTokenAtom, token);
      expect(store.get(canEditAtom)).true;
    });
  });
});

function createGuestUserToken(overrides: Partial<GuestUser> = {}) {
  const payload: OdbTokenPayload = {
    exp: Date.now() / 1000 + 60,
    'lucuma-user': {
      type: 'guest',
      id: '123',
      ...overrides,
    },
  };
  return createJwt(payload);
}

function createStandardUserToken(overrideExp = Date.now() / 1000 + 60, overrides: Partial<StandardUser> = {}) {
  const payload: OdbTokenPayload = {
    exp: overrideExp,
    'lucuma-user': {
      id: '123',
      type: 'standard',
      otherRoles: [],
      ...overrides,
      role: {
        type: 'pi',
        id: '123',
        ...overrides?.role,
      },
      profile: {
        orcidId: '0000-0000-0000-0000',
        ...overrides?.profile,
        profile: {
          ...overrides?.profile?.profile,
        },
      },
    },
  };
  return createJwt(payload);
}

function createServiceUserToken(overrides: Partial<ServiceUser>) {
  const payload: OdbTokenPayload = {
    exp: Date.now() / 1000 + 60,
    'lucuma-user': {
      type: 'service',
      id: '123',
      name: 'service-npa',
      ...overrides,
    },
  };
  return createJwt(payload);
}

function createJwt<T>(payload: T) {
  const base64Payload = btoa(JSON.stringify(payload));
  const base64Header = btoa(JSON.stringify({ typ: 'JWT', alg: 'RS512' }));
  const signature = 'signature'; // Placeholder for the signature
  return { token: `${base64Header}.${base64Payload}.${signature}`, payload };
}
