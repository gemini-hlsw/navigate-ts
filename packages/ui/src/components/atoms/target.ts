import { atom, useAtom, useSetAtom } from 'jotai';

import type { TargetEditType, TargetType } from '@/types';

const targetEditAtom = atom<TargetEditType>({
  isVisible: false,
  target: {} as TargetType,
  targetIndex: undefined,
});
export const useTargetEdit = () => useAtom(targetEditAtom);
export const useTargetEditValue = () => useSetAtom(targetEditAtom);
export const useSetTargetEdit = () => useSetAtom(targetEditAtom);
