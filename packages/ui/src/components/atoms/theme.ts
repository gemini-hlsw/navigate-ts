import { atom, useAtom, useAtomValue } from 'jotai';

import type { ThemeType } from '@/types';

const themeAtom = atom<ThemeType>('dark');
export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return [theme, toggleTheme] as const;
};
export const useThemeValue = () => useAtomValue(themeAtom);
