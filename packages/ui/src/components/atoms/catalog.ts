import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

const catalogVisibleAtom = atom(false);
export const useCatalogVisible = () => useAtom(catalogVisibleAtom);
export const useSetCatalogVisible = () => useSetAtom(catalogVisibleAtom);
export const useCatalogVisibleValue = () => useAtomValue(catalogVisibleAtom);
