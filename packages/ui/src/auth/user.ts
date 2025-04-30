/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
interface BaseUser {
  id: string;
}

export interface GuestUser extends BaseUser {
  type: 'guest';
}

export interface ServiceUser extends BaseUser {
  type: 'service';
  name: string;
}

export interface StandardRole {
  type: 'pi' | 'ngo' | 'staff' | 'admin';
  id: string;
  partner?: string;
}

export interface OrcidProfile {
  orcidId: string;
  profile: {
    givenName?: string;
    familyName?: string;
    creditName?: string;
    primaryEmail?: string;
  };
}

export interface StandardUser extends BaseUser {
  type: 'standard';
  role: StandardRole;
  otherRoles: StandardRole[];
  profile: OrcidProfile;
}

export type User = GuestUser | ServiceUser | StandardUser;

export function displayName(user: User) {
  if (user.type === 'guest') {
    return 'Guest User';
  } else if (user.type === 'service') {
    return `Service user (${user.name})`;
  } else if (user.type === 'standard') {
    const p = user.profile.profile;

    return (
      p.creditName ||
      (p.givenName && p.familyName && `${p.givenName} ${p.familyName}`) ||
      p.familyName ||
      p.givenName ||
      user.profile.orcidId
    );
  }
}
