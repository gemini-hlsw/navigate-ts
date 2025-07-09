import type { ServerConfiguration } from '@gql/server/gen/graphql';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

export const serverConfigAtom = atom<Partial<ServerConfiguration>>({});

export const useServerConfig = () => useAtom(serverConfigAtom);
export const useServerConfigValue = () => useAtomValue(serverConfigAtom);
export const useSetServerConfig = () => useSetAtom(serverConfigAtom);
