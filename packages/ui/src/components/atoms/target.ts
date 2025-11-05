import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

import type { TargetEditType } from '@/types';

export const targetEditAtom = atomWithReset<TargetEditType>({
  isVisible: false,
  target: null,
  targetIndex: undefined,
});

export const useTargetEdit = () => useAtom(targetEditAtom);
export const useTargetEditValue = () => useAtomValue(targetEditAtom);
export const useSetTargetEdit = () => useSetAtom(targetEditAtom);
