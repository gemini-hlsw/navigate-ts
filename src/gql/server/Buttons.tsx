/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import type { DocumentNode, OperationVariables } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useConfiguration } from '@gql/configs/Configuration';
import { useInstrument } from '@gql/configs/Instrument';
import { useRotator } from '@gql/configs/Rotator';
import { useSlewFlags } from '@gql/configs/SlewFlags';
import { useTargets } from '@gql/configs/Target';
import type { VariablesOf } from '@graphql-typed-document-node/core';
import { clsx } from 'clsx';
import type { ButtonProps } from 'primereact/button';
import { Button } from 'primereact/button';
import { useEffect } from 'react';

import { BTN_CLASSES } from '@/Helpers/constants';
import { useToast } from '@/Helpers/toast';
import type { SlewFlagsType } from '@/types';

import { MOUNT_FOLLOW_MUTATION, OIWFS_FOLLOW_MUTATION, ROTATOR_FOLLOW_MUTATION, SCS_FOLLOW_MUTATION } from './follow';
import { graphql } from './gen';
import type { Instrument, MechSystemState } from './gen/graphql';
import { MOUNT_PARK_MUTATION, OIWFS_PARK_MUTATION, ROTATOR_PARK_MUTATION } from './park';

// Generic mutation button
function MutationButton<T extends DocumentNode>({
  mutation,
  variables,
  ...props
}: {
  mutation: T;
  variables: VariablesOf<T> extends OperationVariables ? VariablesOf<T> : never;
} & ButtonProps) {
  const TOAST_LIFE = 5000;
  const toast = useToast();
  const [mutationFunction, { loading, error }] = useMutation<T>(mutation, {
    variables: variables,
  });

  useEffect(() => {
    if (error) {
      toast?.show({
        severity: 'error',
        summary: error.name,
        detail: error.message,
        life: TOAST_LIFE,
      });
    }
  }, [error]);

  return <Button {...props} onClick={() => void mutationFunction({ variables })} loading={props.loading || loading} />;
}

// BUTTONS

export function MCS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title } = classNameForState(state, true);

  return (
    <MutationButton
      mutation={MOUNT_FOLLOW_MUTATION}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function SCS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title } = classNameForState(state, true);
  return (
    <MutationButton
      mutation={SCS_FOLLOW_MUTATION}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function CRCS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title } = classNameForState(state, true);
  return (
    <MutationButton
      mutation={ROTATOR_FOLLOW_MUTATION}
      variables={{ enable: state?.follow === 'NOT_FOLLOWING' }}
      {...props}
      title={title}
      className={clsx(className, classes)}
    />
  );
}

export function PWFS1({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  // TODO: Implement PWFS1 mutation
  const { classes, title } = classNameForState(state, true);
  return <Button {...props} title={title} className={clsx(className, classes)} />;
}

export function PWFS2({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  // TODO: Implement PWFS2 mutation
  const { classes, title } = classNameForState(state, true);
  return <Button {...props} title={title} className={clsx(className, classes)} />;
}

export function AOWFS({ className, ...props }: ButtonProps) {
  // TODO: Implement AOWFS mutation and state
  return <Button {...props} className={clsx(className, BTN_CLASSES.INACTIVE)} />;
}

export function OIWFS({ className, state, ...props }: ButtonProps & { state: MechSystemState | undefined }) {
  const { classes, title } = classNameForState(state, true);
  return (
    <MutationButton
      mutation={OIWFS_FOLLOW_MUTATION}
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

// SLEW
const SLEW_MUTATION = graphql(`
  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!) {
    slew(slewOptions: $slewOptions, config: $config) {
      result
    }
  }
`);

export function Slew(props: ButtonProps) {
  const { data: targetsData, loading: targetsLoading } = useTargets();
  const { oiTargets, baseTargets } = targetsData;

  const { data, loading: slewLoading } = useSlewFlags();
  const slewFlags = data?.slewFlags ?? ({} as SlewFlagsType);

  const { data: rotatorData, loading: rotatorLoading } = useRotator();
  const rotator = rotatorData?.rotator;
  const { data: configData, loading: configLoading } = useConfiguration();
  const configuration = configData?.configuration;

  const { data: instrumentData, loading: instrumentLoading } = useInstrument({
    variables: {
      name: configuration?.obsInstrument ?? '',
      issPort: 3,
      wfs: 'NONE',
    },
  });
  const instrument = instrumentData?.instrument;

  const loading = targetsLoading || slewLoading || rotatorLoading || configLoading || instrumentLoading;

  const selectedTarget = baseTargets.find((t) => t.pk === configuration?.selectedTarget);
  const selectedOiTarget = oiTargets.find((t) => t.pk === configuration?.selectedOiTarget);

  if (!selectedTarget?.id || !instrument || !rotator) {
    const missing = !selectedTarget?.id ? 'target' : !instrument ? 'instrument' : !rotator ? 'rotator' : '';
    return (
      <Button
        {...props}
        label={missing ? `${props.label} (No ${missing})` : props.label}
        loading={loading}
        disabled={true}
      />
    );
  }

  const variables: VariablesOf<typeof SLEW_MUTATION> = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    slewOptions: (({ __typename, pk, ...o }) => o)(slewFlags),
    config: {
      instParams: {
        iaa: { degrees: instrument.iaa },
        focusOffset: { micrometers: instrument.focusOffset },
        agName: instrument.name,
        origin: {
          x: { micrometers: instrument.originX },
          y: { micrometers: instrument.originY },
        },
      },
      sourceATarget: {
        id: selectedTarget.id,
        name: selectedTarget.name,
        sidereal: {
          ra: { hms: selectedTarget?.ra?.hms },
          dec: { dms: selectedTarget?.dec?.dms },
          epoch: selectedTarget?.epoch,
        },
        wavelength: { nanometers: 400 },
      },
      instrument: instrument.name as Instrument,
      rotator: { ipa: { degrees: rotator.angle }, mode: rotator.tracking },
      ...(selectedOiTarget && {
        oiwfs: {
          target: {
            name: selectedOiTarget.name,
            sidereal: {
              ra: { hms: selectedOiTarget.ra?.hms },
              dec: { dms: selectedOiTarget.dec?.dms },
              epoch: selectedOiTarget.epoch,
            },
          },
          tracking: {
            nodAchopA: true,
            nodAchopB: false,
            nodBchopA: false,
            nodBchopB: false,
          },
        },
      }),
    },
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
): { classes: string; title: string } {
  const title =
    (state?.follow === 'FOLLOWING' ? 'Following' : 'Not following') +
    ', ' +
    (state?.parked === 'PARKED' ? 'Parked' : 'Not parked') +
    ', ' +
    (usedSubsystem ? 'Used subsystem' : 'Not used subsystem');

  if (!state) return { classes: '', title };

  if (!usedSubsystem) {
    return { classes: 'p-button-secondary', title };
  } else if (state.follow === 'FOLLOWING' && state.parked === 'NOT_PARKED') {
    return { classes: '', title };
  } else {
    return { classes: BTN_CLASSES.ACTIVE, title };
  }
}
