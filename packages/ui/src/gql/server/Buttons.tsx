/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import type { DocumentNode, OperationVariables } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { useConfiguration } from '@gql/configs/Configuration';
import { useSlewFlags } from '@gql/configs/SlewFlags';
import type { VariablesOf } from '@graphql-typed-document-node/core';
import { useTcsConfigInput } from '@Telescope/Targets/inputs';
import { clsx } from 'clsx';
import type { ButtonProps } from 'primereact/button';
import { Button } from 'primereact/button';
import type { ReactNode } from 'react';

import { Crosshairs, CrosshairsSlash, Parking, ParkingSlash } from '@/components/Icons';
import { BTN_CLASSES } from '@/Helpers/constants';
import type { SetStale } from '@/Helpers/hooks';
import type { SlewFlagsType } from '@/types';

import {
  MOUNT_FOLLOW_MUTATION,
  OIWFS_FOLLOW_MUTATION,
  PWFS1_FOLLOW_MUTATION,
  PWFS2_FOLLOW_MUTATION,
  ROTATOR_FOLLOW_MUTATION,
  SCS_FOLLOW_MUTATION,
} from './follow';
import { graphql } from './gen';
import type { MechSystemState, RunSlewMutationVariables } from './gen/graphql';
import {
  MOUNT_PARK_MUTATION,
  OIWFS_PARK_MUTATION,
  PWFS1_PARK_MUTATION,
  PWFS2_PARK_MUTATION,
  ROTATOR_PARK_MUTATION,
} from './park';

// Generic mutation button
function MutationButton<T extends DocumentNode>({
  mutation,
  variables,
  setStale,
  icons,
  label,
  ...props
}: {
  mutation: T;
  variables: VariablesOf<T> extends OperationVariables ? VariablesOf<T> : never;
  icons?: ReactNode[];
  setStale?: SetStale;
} & ButtonProps) {
  const [mutationFunction, { loading }] = useMutation<T>(mutation, {
    variables: variables,
    onCompleted: () => setStale?.(true),
  });

  return (
    <Button {...props} onClick={() => mutationFunction({ variables })} loading={props.loading || loading}>
      {icons?.length && <span className="mutation-button-icons">{icons}</span>}
      {label && <span className="p-button-label">{label}</span>}
    </Button>
  );
}

// BUTTONS

export function MCS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title, icons } = classNameForState(state, true);

  return (
    <MutationButton
      mutation={MOUNT_FOLLOW_MUTATION}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      icons={icons}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function SCS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title, icons } = classNameForState(state, true);
  return (
    <MutationButton
      mutation={SCS_FOLLOW_MUTATION}
      icons={icons}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function CRCS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title, icons } = classNameForState(state, true);
  return (
    <MutationButton
      mutation={ROTATOR_FOLLOW_MUTATION}
      icons={icons}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function PWFS1({
  className,
  state,
  inUse,
  ...props
}: ButtonProps & { state: MechSystemState | undefined; inUse: boolean }) {
  const { classes, title, icons } = classNameForState(state, inUse);
  return (
    <MutationButton
      mutation={PWFS1_FOLLOW_MUTATION}
      icons={icons}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function PWFS2({
  className,
  state,
  inUse,
  ...props
}: ButtonProps & { state: MechSystemState | undefined; inUse: boolean }) {
  const { classes, title, icons } = classNameForState(state, inUse);
  return (
    <MutationButton
      mutation={PWFS2_FOLLOW_MUTATION}
      icons={icons}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function AOWFS({ className, ...props }: ButtonProps) {
  // TODO: Implement AOWFS mutation and state
  return <Button {...props} className={clsx(className, BTN_CLASSES.INACTIVE)} />;
}

export function OIWFS({
  className,
  state,
  inUse,
  ...props
}: ButtonProps & { state: MechSystemState | undefined; inUse: boolean }) {
  const { classes, title, icons } = classNameForState(state, inUse);
  return (
    <MutationButton
      mutation={OIWFS_FOLLOW_MUTATION}
      icons={icons}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function McsPark(props: ButtonProps) {
  return <MutationButton mutation={MOUNT_PARK_MUTATION} variables={{}} {...props} />;
}

export function CrcsPark(props: ButtonProps) {
  return <MutationButton mutation={ROTATOR_PARK_MUTATION} variables={{}} {...props} />;
}

export function OiwfsPark(props: ButtonProps) {
  return <MutationButton mutation={OIWFS_PARK_MUTATION} variables={{}} {...props} />;
}

export function Pwfs1Park(props: ButtonProps) {
  return <MutationButton mutation={PWFS1_PARK_MUTATION} variables={{}} {...props} />;
}

export function Pwfs2Park(props: ButtonProps) {
  return <MutationButton mutation={PWFS2_PARK_MUTATION} variables={{}} {...props} />;
}

// SLEW
export const SLEW_MUTATION = graphql(`
  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!, $obsId: ObservationId) {
    slew(slewOptions: $slewOptions, config: $config, obsId: $obsId) {
      result
    }
  }
`);

export function Slew(props: ButtonProps) {
  const { data, loading: slewLoading } = useSlewFlags();
  const slewFlags = data?.slewFlags ?? ({} as SlewFlagsType);

  const { data: configData, loading: configLoading } = useConfiguration();
  const configuration = configData?.configuration;

  const { data: tcsConfig, loading: tcsConfigInputLoading, detail } = useTcsConfigInput();
  const loading = slewLoading || configLoading || tcsConfigInputLoading;

  if (detail) {
    return (
      <Button
        {...props}
        label={detail ? `${props.label ?? ''} (${detail})` : props.label}
        loading={loading}
        disabled={true}
      />
    );
  }

  const variables: RunSlewMutationVariables = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    slewOptions: (({ pk, __typename, ...o }) => o)(slewFlags),
    config: tcsConfig!,
    obsId: configuration?.obsId,
  };

  return (
    <MutationButton
      mutation={SLEW_MUTATION}
      variables={variables}
      {...props}
      loading={props.loading || loading}
      disabled={props.disabled}
    />
  );
}

/**
 *
 * @param state State of the subsystem
 * @param usedSubsystem If the subsystem is being used. Everything is always used, except the guiders (PWFS1, PWFS2, OIWFS, AOWFS), which are optional. Which one is used is given by the guide environment. But right now, we can use only OIWFS
 */
function classNameForState(
  state: MechSystemState | undefined,
  usedSubsystem: boolean,
): { classes: string; title: string; icons: ReactNode[] } {
  const title =
    (state?.follow === 'FOLLOWING' ? 'Following' : 'Not following') +
    ', ' +
    (state?.parked === 'PARKED' ? 'Parked' : 'Not parked') +
    ', ' +
    (usedSubsystem ? 'Used subsystem' : 'Not used subsystem');

  if (!state) return { classes: '', icons: [], title };

  const icons = [
    state.follow === 'FOLLOWING' ? (
      <Crosshairs width="16px" key="follow" />
    ) : (
      <CrosshairsSlash width="16px" key="follow" />
    ),
    state.parked === 'PARKED' ? <Parking width="16px" key="parked" /> : <ParkingSlash width="16px" key="parked" />,
  ];

  if (!usedSubsystem) {
    return { classes: 'p-button-secondary', title, icons };
  } else if (state.follow === 'FOLLOWING' && state.parked === 'NOT_PARKED') {
    return { classes: '', title, icons };
  } else {
    return { classes: BTN_CLASSES.ACTIVE, title, icons };
  }
}
