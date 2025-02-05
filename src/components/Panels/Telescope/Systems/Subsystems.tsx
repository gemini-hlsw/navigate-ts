import type { UpdateMechanismMutationVariables } from '@gql/configs/gen/graphql';
import { useMechanism, useUpdateMechanism } from '@gql/configs/Mechanism';
import { CrcsPark, McsPark, OiwfsPark } from '@gql/server/Buttons';
import { clsx } from 'clsx';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Slider } from 'primereact/slider';
import { useState } from 'react';

import { BTN_CLASSES } from '@/Helpers/constants';
import type { MechanismType } from '@/types';

export function TopSubsystems({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="top-left">
      <McsPark disabled={!canEdit} style={{ gridArea: 'g11' }} label="Park" />
      <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g12' }} label="Unwrap" />
      <CrcsPark disabled={!canEdit} style={{ gridArea: 'g31' }} label="Park" />
      <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g32' }} label="Unwrap" />
      <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g41' }} label="Park" />
      <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g42' }} label="Unwrap" />
      <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g51' }} label="Park" />
      <Button className="under-construction" disabled={!canEdit} style={{ gridArea: 'g52' }} label="Unwrap" />
    </div>
  );
}

const DOME_MODE = [
  { label: 'MinVibration', value: 'MinVibration' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

const SHUTTER_MODE = [
  { label: 'Tracking', value: 'Tracking' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export function BotSubsystems({ canEdit }: { canEdit: boolean }) {
  const [domeMode, setDomeMode] = useState('MinVibration');
  const [shutterMode, setShutterMode] = useState('Tracking');
  const [aperture, setAperture] = useState(90);
  const [WVGate, setWVGate] = useState(50);
  const [EVGate, setEVGate] = useState(50);

  const { data, loading } = useMechanism({
    onCompleted(data) {
      if (data.mechanism) {
        setDomeMode(data.mechanism.domeMode);
        setShutterMode(data.mechanism.shutterMode);
        setAperture(data.mechanism.shutterAperture);
        setWVGate(data.mechanism.wVGateValue);
        setEVGate(data.mechanism.eVGateValue);
      }
    },
  });
  const state = data?.mechanism ?? ({} as MechanismType);

  const updateMechanism = useUpdateMechanism();

  function modifyMechanism(vars: Omit<UpdateMechanismMutationVariables, 'pk'>) {
    void updateMechanism({
      variables: {
        pk: state.pk,
        ...vars,
      },
    });
  }

  return (
    <div className="bottom">
      <OiwfsPark disabled={!canEdit} loading={loading} style={{ gridArea: 'g11' }} label="Park" />
      {/* <Button
        disabled={!canEdit}
        loading={loading}
        style={{ gridArea: 'g11' }}
        label="Park"
        className={clsx(BTN_CLASSES[state.oiwfsPark], 'under-construction')}
      /> */}
      <Button
        disabled={!canEdit}
        loading={loading}
        style={{ gridArea: 'g21' }}
        label="Park"
        className={clsx(BTN_CLASSES[state.odgwPark], 'under-construction')}
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g31' }}
        label="Park"
        className={clsx(BTN_CLASSES[state.aowfsPark], 'under-construction')}
      />
      <Button
        disabled={!canEdit}
        loading={loading}
        style={{ gridArea: 'g41' }}
        label="Park"
        className={clsx(BTN_CLASSES[state.domePark], 'under-construction')}
      />
      <span
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          gridArea: 'g42',
        }}
      >
        Mode
      </span>
      <Dropdown
        disabled={!canEdit}
        style={{ gridArea: 'g43' }}
        value={domeMode}
        options={DOME_MODE}
        onChange={(e) => setDomeMode(e.value as string)}
        placeholder="Select a Dome Mode"
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g46' }}
        label="Set"
        onClick={() => modifyMechanism({ domeMode: domeMode })}
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g51' }}
        label="Park"
        className={clsx(BTN_CLASSES[state.shuttersPark], 'under-construction')}
      />
      <span
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          gridArea: 'g52',
        }}
      >
        Mode
      </span>
      <Dropdown
        disabled={!canEdit}
        style={{ gridArea: 'g53' }}
        value={shutterMode}
        options={SHUTTER_MODE}
        onChange={(e) => setShutterMode(e.value as string)}
        placeholder="Select a Shutter Mode"
        className="under-construction"
      />
      <span
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          gridArea: 'g54',
        }}
      >
        Aperture
      </span>
      <InputNumber
        disabled={!canEdit}
        style={{ gridArea: 'g55' }}
        value={aperture}
        onValueChange={(e) => setAperture(e.value ?? 0)}
        mode="decimal"
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g56' }}
        label="Set"
        onClick={() =>
          modifyMechanism({
            shutterMode: shutterMode,
            shutterAperture: aperture,
          })
        }
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g61' }}
        label="Close"
        className={clsx(BTN_CLASSES[state.wVGateClose], 'under-construction')}
      />
      <InputNumber
        disabled={!canEdit}
        style={{ gridArea: 'g62' }}
        value={WVGate}
        onValueChange={(e) => setWVGate(e.value ?? 0)}
        mode="decimal"
        className="under-construction"
      />
      <Slider
        disabled={!canEdit || true} // under construction!
        style={{ gridArea: 'g63', marginTop: '10px' }}
        value={WVGate}
        onChange={(e) => setWVGate(e.value as number)}
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g66' }}
        label="Move"
        onClick={() => modifyMechanism({ wVGateValue: WVGate })}
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g71' }}
        label="Close"
        className={clsx(BTN_CLASSES[state.eVGateClose], 'under-construction')}
      />
      <InputNumber
        disabled={!canEdit}
        style={{ gridArea: 'g72' }}
        value={EVGate}
        onValueChange={(e) => setEVGate(e.value ?? 0)}
        mode="decimal"
        className="under-construction"
      />
      <Slider
        disabled={!canEdit || true} // under construction!
        style={{ gridArea: 'g73', marginTop: '10px' }}
        value={EVGate}
        onChange={(e) => setEVGate(e.value as number)}
        className="under-construction"
      />
      <Button
        disabled={!canEdit}
        style={{ gridArea: 'g76' }}
        label="Move"
        onClick={() => modifyMechanism({ eVGateValue: EVGate })}
        className="under-construction"
      />
    </div>
  );
}
