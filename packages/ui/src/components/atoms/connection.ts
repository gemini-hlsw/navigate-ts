import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

export const wsIsConnectedAtom = atom(false);

export const useWsIsConnected = () => useAtom(wsIsConnectedAtom);
export const useSetWsIsConnected = () => useSetAtom(wsIsConnectedAtom);
export const useWsIsConnectedValue = () => useAtomValue(wsIsConnectedAtom);
