import type { OrcidProfile, User } from './user';
import { displayName } from './user';

describe(displayName.name, () => {
  it('shows guest for guest users', () => {
    const user: User = {
      type: 'guest',
      id: '123',
    };
    expect(displayName(user)).toBe('Guest User');
  });

  it('shows service name for service accounts', () => {
    const user: User = {
      type: 'service',
      id: '123',
      name: 'service-npa',
    };
    expect(displayName(user)).toBe('Service user (service-npa)');
  });

  it('shows the creditName if available', () => {
    const user: User = createUser({ profile: { creditName: 'Credit Name' } });
    expect(displayName(user)).toBe('Credit Name');
  });

  it('shows the givenName and familyName if available', () => {
    const user: User = createUser({
      profile: { givenName: 'Given', familyName: 'Name' },
    });
    expect(displayName(user)).toBe('Given Name');
  });

  it('shows the familyName if available', () => {
    const user: User = createUser({ profile: { familyName: 'Family' } });
    expect(displayName(user)).toBe('Family');
  });
  it('shows the givenName if available', () => {
    const user: User = createUser({ profile: { givenName: 'Given' } });
    expect(displayName(user)).toBe('Given');
  });
  it('shows the orcidId if no other name is available', () => {
    const user: User = createUser();
    expect(displayName(user)).toBe('0000-0000-0000-0000');
  });
});

function createUser(partial: Partial<OrcidProfile> = {}): User {
  return {
    type: 'standard',
    id: '123',
    role: {
      type: 'pi',
      id: '123',
    },
    otherRoles: [],
    profile: {
      orcidId: '0000-0000-0000-0000',
      ...partial,
      profile: {
        ...partial?.profile,
      },
    },
  };
}
