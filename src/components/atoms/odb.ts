import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

const odbVisibleAtom = atom(false);
export const useOdbVisible = () => useAtom(odbVisibleAtom);
export const useSetOdbVisible = () => useSetAtom(odbVisibleAtom);
export const useOdbVisibleValue = () => useAtomValue(odbVisibleAtom);
