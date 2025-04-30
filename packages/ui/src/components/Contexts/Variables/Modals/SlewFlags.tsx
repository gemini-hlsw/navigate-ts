import type { UpdateSlewFlagsMutationVariables } from '@gql/configs/gen/graphql';
import { useSlewFlags, useUpdateSlewFlags } from '@gql/configs/SlewFlags';
import { Dialog } from 'primereact/dialog';
import { InputSwitch } from 'primereact/inputswitch';
import { useCallback, useId } from 'react';

import { useCanEdit } from '@/components/atoms/auth';
import { useSlewVisible } from '@/components/atoms/slew';
import type { SlewFlagsType } from '@/types';

export function SlewFlags() {
  const [slewVisible, setSlewVisible] = useSlewVisible();

  const onHide = useCallback(() => setSlewVisible(false), [setSlewVisible]);

  const { data } = useSlewFlags();
  const slewFlags = data?.slewFlags ?? ({} as SlewFlagsType);

  return (
    <Dialog header="Set slew flags" visible={slewVisible} modal onHide={onHide}>
      <div className="slew-flags">
        <SlewFlagInput flags={slewFlags} flag="zeroChopThrow" label="Zero Chop Throw" />
        <SlewFlagInput flags={slewFlags} flag="zeroSourceOffset" label="Zero Source Offset" />
        <SlewFlagInput flags={slewFlags} flag="zeroSourceDiffTrack" label="Zero Source Diff Track" />
        <SlewFlagInput flags={slewFlags} flag="zeroMountOffset" label="Zero Mount Offset" />
        <SlewFlagInput flags={slewFlags} flag="zeroMountDiffTrack" label="Zero Mount Diff Track" />
        <SlewFlagInput flags={slewFlags} flag="shortcircuitTargetFilter" label="Shortcircuit Target Filter" />
        <SlewFlagInput flags={slewFlags} label="Shortcircuit Mount Filter" flag="shortcircuitMountFilter" />
        <SlewFlagInput flags={slewFlags} label="Reset Pointing" flag="resetPointing" />
        <SlewFlagInput flags={slewFlags} label="Stop Guide" flag="stopGuide" />
        <SlewFlagInput flags={slewFlags} label="Zero Guide Offset" flag="zeroGuideOffset" />
        <SlewFlagInput flags={slewFlags} label="Zero Instrument Offset" flag="zeroInstrumentOffset" />
        <SlewFlagInput flags={slewFlags} label="Autopark P1 WFS" flag="autoparkPwfs1" />
        <SlewFlagInput flags={slewFlags} label="Autopark P2 WFS" flag="autoparkPwfs2" />
        <SlewFlagInput flags={slewFlags} label="Autopark OI WFS" flag="autoparkOiwfs" />
        <SlewFlagInput flags={slewFlags} label="Autopark Gems" flag="autoparkGems" />
        <SlewFlagInput flags={slewFlags} label="Autopark AO WFS" flag="autoparkAowfs" />
      </div>
    </Dialog>
  );
}

function SlewFlagInput<T extends keyof UpdateSlewFlagsMutationVariables>({
  flag,
  label,
  flags,
}: {
  flag: T;
  label: string;
  flags: SlewFlagsType;
}) {
  const canEdit = useCanEdit();
  const id = useId();
  const [updateSlewFlags, { loading: updateLoading }] = useUpdateSlewFlags();

  function updateFlags() {
    void updateSlewFlags({
      variables: {
        pk: flags.pk,
        [flag]: !flags[flag],
      },
      optimisticResponse: {
        updateSlewFlags: {
          ...flags,
          [flag]: !flags[flag],
        },
      },
    });
  }
  const inputId = `${flag}-${id}`;

  return (
    <>
      <label htmlFor={inputId} style={{ textAlign: 'center', alignSelf: 'center' }}>
        {label}
      </label>
      <InputSwitch
        inputId={inputId}
        disabled={!canEdit || updateLoading || flags[flag] === undefined}
        checked={Boolean(flags[flag])}
        onChange={updateFlags}
      />
    </>
  );
}
