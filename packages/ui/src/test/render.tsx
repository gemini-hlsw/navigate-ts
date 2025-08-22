import type { MockLink } from '@apollo/client/testing';
import { MockedProvider } from '@apollo/client/testing/react';
import { GET_SLEW_FLAGS } from '@gql/configs/SlewFlags';
import type { MockedResponseOf } from '@gql/util';
import type { WritableAtom } from 'jotai';
import { createStore, Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import type { PropsWithChildren, ReactElement } from 'react';
import type { ComponentRenderOptions } from 'vitest-browser-react';
import { render } from 'vitest-browser-react';

import { odbTokenAtom } from '@/components/atoms/auth';
import { longExpirationJwt } from '@/test/helpers';

interface CreateOptions<T> {
  mocks?: MockLink.MockedResponse[];
  initialValues?: InferAtomTuples<T>;
}

function HydrateAtoms<T extends AtomTuples>({
  initialValues,
  children,
}: PropsWithChildren<{ initialValues: InferAtomTuples<T> }>) {
  useHydrateAtoms(initialValues);
  return children;
}

export type RenderResultWithStore = ReturnType<typeof renderWithContext>;

/**
 * Render the given UI with the given atoms hydrated, and sets up ApolloProvider with the given mocks
 */
export function renderWithContext<T extends AtomTuples>(
  ui: ReactElement,
  createOptions: CreateOptions<T> = {},
  options?: ComponentRenderOptions,
) {
  const store = createStore();

  // Add the default atom values to the initial value, if they are not already present
  const initialValues = createOptions?.initialValues?.find(([atom]) => atom === odbTokenAtom)
    ? createOptions.initialValues
    : ([[odbTokenAtom, longExpirationJwt], ...(createOptions.initialValues ?? [])] as InferAtomTuples<T>);

  const renderResult = render(
    <Provider store={store}>
      <HydrateAtoms initialValues={initialValues}>
        <MockedProvider mocks={[...mocks, ...(createOptions.mocks ?? [])]}>{ui}</MockedProvider>
      </HydrateAtoms>
    </Provider>,
    options,
  );

  return { ...renderResult, store };
}

const mocks: MockLink.MockedResponse[] = [
  {
    request: {
      query: GET_SLEW_FLAGS,
      variables: {},
    },
    result: {
      data: {
        slewFlags: {
          pk: 1,
          zeroChopThrow: true,
          zeroSourceOffset: true,
          zeroSourceDiffTrack: true,
          zeroMountOffset: true,
          zeroMountDiffTrack: true,
          shortcircuitTargetFilter: false,
          shortcircuitMountFilter: true,
          resetPointing: true,
          stopGuide: true,
          zeroGuideOffset: false,
          zeroInstrumentOffset: true,
          autoparkPwfs1: false,
          autoparkPwfs2: true,
          autoparkOiwfs: false,
          autoparkGems: true,
          autoparkAowfs: false,
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_SLEW_FLAGS>,
];

// Some typescript magic here 🧙
// Basically it allows the `initialValues` array to be type-safe with its values
// Copied from an internal Jotai type

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyWritableAtom = WritableAtom<unknown, any[], unknown>;

type AtomTuples = (readonly [AnyWritableAtom, ...unknown[]])[];

type InferAtomTuples<T> = {
  [K in keyof T]: T[K] extends readonly [infer A, ...infer Rest]
    ? A extends WritableAtom<unknown, infer Args, unknown>
      ? Rest extends Args
        ? readonly [A, ...Rest]
        : never
      : T[K]
    : never;
};
