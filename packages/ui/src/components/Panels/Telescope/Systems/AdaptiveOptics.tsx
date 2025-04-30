import { useAltairInstrument, useUpdateAltairInstrument } from '@gql/configs/AltairInstrument';
import { useGemsInstrument, useUpdateGemsInstrument } from '@gql/configs/GemsInstrument';
import type {
  UpdateAltairInstrumentMutationVariables,
  UpdateGemsInstrumentMutationVariables,
} from '@gql/configs/gen/graphql';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

import { isNotNullish } from '@/Helpers/functions';
import type { AltairInstrumentType, GemsInstrumentType } from '@/types';

import { Title } from '../../../Shared/Title/Title';

export function GeMS({ canEdit }: { canEdit: boolean }) {
  const state = useGemsInstrument().data?.gemsInstrument ?? ({} as GemsInstrumentType);
  const updateGemsInstrument = useUpdateGemsInstrument();

  function modifyGemsInstrument<T extends keyof UpdateGemsInstrumentMutationVariables>(
    name: T,
    value: NonNullable<UpdateGemsInstrumentMutationVariables[T]>,
  ) {
    if (state.pk)
      void updateGemsInstrument({
        variables: {
          pk: state.pk,
          [name]: value,
        },
        optimisticResponse: {
          updateGemsInstrument: {
            ...state,
            [name]: value,
          },
        },
      });
  }

  return (
    <div className="ao-gems under-construction">
      <Title title={'GeMS'} />
      <div className="body">
        <span className="label">ADC</span>
        <Checkbox disabled={!canEdit} checked={state.adc} onChange={() => modifyGemsInstrument('adc', !state.adc)} />
        <span className="label">Beamsplitter</span>
        <Dropdown
          disabled={!canEdit}
          value={state.beamsplitter}
          options={['400 nm', '550 nm', '700nm', '850 nm', '1000 nm']}
          onChange={(e) => modifyGemsInstrument('beamsplitter', e.target.value as string)}
          placeholder="Select a beamsplitter"
        />
        <span className="label">Astrometric mode</span>
        <Dropdown
          disabled={!canEdit}
          value={state.astrometricMode}
          options={['Best', 'Average']}
          onChange={(e) => modifyGemsInstrument('astrometricMode', e.target.value as string)}
          placeholder="Select a mode"
        />
      </div>
    </div>
  );
}

export function Altair({ canEdit }: { canEdit: boolean }) {
  const state = useAltairInstrument().data?.altairInstrument ?? ({} as AltairInstrumentType);
  const updateAltairInstrument = useUpdateAltairInstrument();

  function modifyAltairInstrument<T extends keyof UpdateAltairInstrumentMutationVariables>(
    name: T,
    value: UpdateAltairInstrumentMutationVariables[T],
  ) {
    if (isNotNullish(value) && state.pk)
      void updateAltairInstrument({
        variables: {
          pk: state.pk,
          [name]: value,
        },
        optimisticResponse: {
          updateAltairInstrument: {
            ...state,
            [name]: value,
          },
        },
      });
  }

  return (
    <div className="ao-altair under-construction">
      <Title title={'Altair'} />
      <div className="body">
        <span className="label">Beamsplitter</span>
        <Dropdown
          disabled={!canEdit}
          value={state.beamsplitter}
          options={['400 nm', '550 nm', '700nm', '850 nm', '1000 nm']}
          onChange={(e) => modifyAltairInstrument('beamsplitter', e.target.value as string)}
          placeholder="Select a tracking"
        />
        <span className="label">ND filter</span>
        <Checkbox
          disabled={!canEdit}
          checked={state.ndFilter}
          onChange={() => modifyAltairInstrument('ndFilter', !state.ndFilter)}
        />
        <span className="label">Star Mag</span>
        <InputNumber
          disabled={!canEdit}
          value={state.startMagnitude}
          onValueChange={(e) => modifyAltairInstrument('startMagnitude', e.target.value ?? 0.0)}
        />
        <span className="label">Field Lens</span>
        <Checkbox
          disabled={!canEdit}
          checked={state.fieldLens}
          onChange={() => modifyAltairInstrument('fieldLens', !state.fieldLens)}
        />
        <span className="label">Seeing r0</span>
        <InputNumber
          disabled={!canEdit}
          value={state.seeing}
          onValueChange={(e) => modifyAltairInstrument('seeing', e.target.value ?? 0.0)}
        />
        <span className="label">Deploy ADC</span>
        <Checkbox
          disabled={!canEdit}
          checked={state.deployAdc}
          onChange={() => modifyAltairInstrument('deployAdc', !state.deployAdc)}
        />
        <span className="label">Wind speed</span>
        <InputNumber
          disabled={!canEdit}
          value={state.windSpeed}
          onValueChange={(e) => modifyAltairInstrument('windSpeed', e.target.value ?? 0.0)}
        />
        <span className="label">Adjust ADC</span>
        <Checkbox
          disabled={!canEdit}
          checked={state.adjustAdc}
          onChange={() => modifyAltairInstrument('adjustAdc', !state.adjustAdc)}
        />
        <span className="label">Force Mode</span>
        <Checkbox
          disabled={!canEdit}
          checked={state.forceMode}
          onChange={() => modifyAltairInstrument('forceMode', !state.forceMode)}
        />
        <span className="label">Use LGS</span>
        <Checkbox disabled={!canEdit} checked={state.lgs} onChange={() => modifyAltairInstrument('lgs', !state.lgs)} />
      </div>
    </div>
  );
}
