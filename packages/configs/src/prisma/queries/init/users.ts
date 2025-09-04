import type { Prisma } from '../../gen/client.ts';

export const INITIAL_USERS: Prisma.UserCreateInput[] = [
  {
    name: 'Reader',
  },
];
