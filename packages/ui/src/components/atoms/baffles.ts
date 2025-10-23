import type { BaffleManualInput } from '@gql/server/gen/graphql';
import { atom, useAtom, useAtomValue } from 'jotai';

export interface M2BaffleConfig {
  mode: 'MANUAL' | 'AUTO';
  input: Partial<BaffleManualInput>;
}

const m2BaffleConfig = atom<M2BaffleConfig>({
  mode: 'AUTO',
  input: { centralBaffle: undefined, deployableBaffle: undefined },
});

export const useM2BaffleConfig = () => useAtom(m2BaffleConfig);
export const useM2BaffleConfigValue = () => useAtomValue(m2BaffleConfig);
