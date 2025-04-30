import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { atomWithToggle } from './atomWithToggle';

const aboutVisible = atomWithToggle(false);

export const useAboutVisible = () => useAtom(aboutVisible);
export const useSetAboutVisible = () => useSetAtom(aboutVisible);
export const useAboutVisibleValue = () => useAtomValue(aboutVisible);
