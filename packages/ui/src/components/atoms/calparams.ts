import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { atomWithToggle } from './atomWithToggle';

const calParamsVisibleAtom = atomWithToggle(false);
export const useCalParamsVisible = () => useAtom(calParamsVisibleAtom);
export const useSetCalParamsVisible = () => useSetAtom(calParamsVisibleAtom);
export const useCalParamsVisibleValue = () => useAtomValue(calParamsVisibleAtom);
