import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

export const importInstrumentAtom = atom(false);
export const useImportInstrument = () => useAtom(importInstrumentAtom);
export const useSetImportInstrument = () => useSetAtom(importInstrumentAtom);
export const useImportInstrumentValue = () => useAtomValue(importInstrumentAtom);
