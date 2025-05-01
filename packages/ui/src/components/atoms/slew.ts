import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

export const slewVisibleAtom = atom(false);
export const useSlewVisible = () => useAtom(slewVisibleAtom);
export const useSlewVisibleValue = () => useAtomValue(slewVisibleAtom);
export const useSetSlewVisible = () => useSetAtom(slewVisibleAtom);
