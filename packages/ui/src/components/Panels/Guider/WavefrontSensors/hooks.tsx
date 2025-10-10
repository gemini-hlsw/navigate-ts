import { useState } from 'react';

import { isNotNullish, isNullish } from '@/Helpers/functions';

export function useMovingLabel<T>(loading: boolean, state: T | undefined, options: { value: T; label: string }[]) {
  const [requestedState, setRequestedState] = useState<T | null>(null);

  if (!loading && requestedState === state && isNotNullish(state)) {
    setRequestedState(null);
  }

  // Moving if:
  // - query has loaded (after mounting component)
  // - state is nullish or different to requested state
  const isMoving = <T,>(state: T | undefined, requestedState: T | null) =>
    !loading && isNotNullish(requestedState) && (isNullish(state) || requestedState !== state);

  const findLabel = <T,>(options: { value: T; label: string }[], value: T | undefined) =>
    options.find((o) => o.value === value)?.label;

  return [
    isMoving(state, requestedState) ? (
      <>
        {findLabel(options, state) ?? 'moving'} ➡️ {findLabel(options, requestedState) ?? 'unknown'}
      </>
    ) : (
      <></>
    ),
    setRequestedState,
  ] as const;
}
