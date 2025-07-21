import { useUpdateTarget } from '@gql/configs/Target';
import { isBaseTarget } from '@gql/util';
import { deg2dms, deg2hms, dms2deg, hms2deg } from 'lucuma-core';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';

import { useTargetEdit } from '@/components/atoms/target';
import type { TargetType } from '@/types';

export function Target() {
  const [targetEdit, setTargetEdit] = useTargetEdit();
  const [coordsType, setCoordsType] = useState('celestial');
  const [auxTarget, setAuxTarget] = useState<TargetType>({} as TargetType);
  const [c1String, setc1String] = useState<string | undefined>('');
  const [c2String, setc2String] = useState<string | undefined>('');

  const updateTarget = useUpdateTarget();

  useEffect(() => {
    if (targetEdit !== undefined) {
      setAuxTarget(targetEdit.target);
      if (targetEdit.target?.type === 'FIXED') {
        setc1String(targetEdit.target.az?.dms ?? '');
        setc2String(targetEdit.target.el?.dms ?? '');
        setCoordsType('horizontal');
      } else {
        setCoordsType('celestial');
        setc1String(targetEdit.target?.ra?.hms ?? '');
        setc2String(targetEdit.target?.dec?.dms ?? '');
      }
    }
  }, [targetEdit]);

  function updateObservation() {
    void updateTarget({
      variables: {
        ...auxTarget,
        coord1: auxTarget.ra ? auxTarget.ra.degrees : auxTarget.az?.degrees,
        coord2: auxTarget.dec ? auxTarget.dec.degrees : auxTarget.el?.degrees,
      },
    });

    setTargetEdit({
      isVisible: false,
      target: {} as TargetType,
      targetIndex: undefined,
    });
  }

  const footer = (
    <div className="modal-footer">
      <div className="right">
        <Button label="Update" onClick={updateObservation} />
        <Button
          severity="danger"
          label="Cancel"
          onClick={() =>
            setTargetEdit({
              isVisible: false,
              target: {} as TargetType,
              targetIndex: undefined,
            })
          }
        />
      </div>
    </div>
  );

  return (
    <Dialog
      header={`Edit target ${targetEdit.target.name}`}
      visible={targetEdit.isVisible}
      footer={footer}
      modal
      onHide={() =>
        setTargetEdit({
          isVisible: false,
          target: {} as TargetType,
          targetIndex: undefined,
        })
      }
    >
      <div className="target-edit">
        <label htmlFor="targetName" style={{ gridArea: 's1' }} className="label">
          Name
        </label>
        <InputText
          id="targetName"
          style={{ gridArea: 's2' }}
          value={auxTarget.name ?? ''}
          onChange={(e) => setAuxTarget({ ...auxTarget, name: e.target.value })}
        />
        <label htmlFor="coordsType" style={{ gridArea: 'l1' }} className="label">
          Coordinates
        </label>
        <Dropdown
          inputId="coordsType"
          disabled={!isBaseTarget(auxTarget)}
          style={{ gridArea: 'd1' }}
          value={coordsType}
          options={['celestial', 'horizontal']}
          onChange={(e) => {
            let stringC1 = '';
            let stringC2 = '';
            if (e.target.value === 'celestial' && coordsType === 'horizontal') {
              stringC1 = deg2hms(auxTarget.az?.degrees ?? 0);
              stringC2 = deg2dms(auxTarget.el?.degrees ?? 0);
              setAuxTarget({
                ...auxTarget,
                ra: auxTarget.az && {
                  degrees: auxTarget.az.degrees,
                  hms: stringC1,
                },
                dec: auxTarget.el && {
                  degrees: auxTarget.el.degrees,
                  dms: stringC2,
                },
                az: null,
                el: null,
                type: 'SCIENCE',
              });
            } else if (e.target.value === 'horizontal' && coordsType === 'celestial') {
              stringC1 = deg2dms(auxTarget.ra?.degrees ?? 0);
              stringC2 = deg2dms(auxTarget.dec?.degrees ?? 0);
              setAuxTarget({
                ...auxTarget,
                az: auxTarget.ra && {
                  degrees: auxTarget.ra.degrees,
                  dms: deg2dms(auxTarget.ra?.degrees ?? 0),
                },
                el: auxTarget.dec && {
                  degrees: auxTarget.dec.degrees,
                  dms: deg2dms(auxTarget.dec?.degrees ?? 0),
                },
                ra: null,
                dec: null,
                type: 'FIXED',
              });
            }
            setc1String(stringC1);
            setc2String(stringC2);
            setCoordsType(e.target.value as string);
          }}
          placeholder="Select coordinates type"
        />
        <label htmlFor="raAzDegrees" style={{ gridArea: 't1' }} className="label">
          {coordsType === 'celestial' ? 'RA' : 'Az'}
        </label>
        <InputNumber
          inputId="raAzDegrees"
          style={{ gridArea: 'c11' }}
          value={coordsType === 'celestial' ? auxTarget.ra?.degrees : auxTarget.az?.degrees}
          onValueChange={(e) => {
            let stringC1 = '';
            if (coordsType === 'celestial') {
              stringC1 = deg2hms(e.target.value ?? 0);
              setAuxTarget({
                ...auxTarget,
                ra: {
                  degrees: e.target.value!,
                  hms: stringC1,
                },
              });
            } else {
              stringC1 = deg2dms(e.target.value ?? 0);
              setAuxTarget({
                ...auxTarget,
                az: {
                  degrees: e.target.value!,
                  dms: stringC1,
                },
              });
            }
          }}
          onBlur={() => {
            if (coordsType === 'celestial') {
              setc1String(auxTarget.ra?.hms ?? undefined);
            } else {
              setc1String(auxTarget.az?.dms ?? undefined);
            }
          }}
        />
        <label htmlFor="raAzDegrees" style={{ gridArea: 'f11' }} className="label">
          degrees
        </label>
        <InputText
          id="raAzHmsDms"
          style={{ gridArea: 'c12' }}
          value={c1String}
          onChange={(e) => {
            if (coordsType === 'celestial') {
              setAuxTarget({
                ...auxTarget,
                ra: { degrees: hms2deg(e.target.value), hms: e.target.value },
              });
            } else {
              setAuxTarget({
                ...auxTarget,
                az: { degrees: dms2deg(e.target.value), dms: e.target.value },
              });
            }
            setc1String(e.target.value);
          }}
        />
        <label htmlFor="raAzHmsDms" style={{ gridArea: 'f12' }} className="label">
          {coordsType === 'celestial' ? 'hms' : 'dms'}
        </label>
        <label htmlFor="decElDegrees" style={{ gridArea: 't2' }} className="label">
          {coordsType === 'celestial' ? 'Dec' : 'El'}
        </label>
        <InputNumber
          inputId="decElDegrees"
          style={{ gridArea: 'c21' }}
          value={coordsType === 'celestial' ? auxTarget.dec?.degrees : auxTarget.el?.degrees}
          onValueChange={(e) => {
            const stringC2 = deg2dms(e.target.value ?? 0);
            if (coordsType === 'celestial') {
              setAuxTarget({
                ...auxTarget,
                dec: {
                  degrees: e.target.value!,
                  dms: stringC2,
                },
              });
            } else {
              setAuxTarget({
                ...auxTarget,
                el: {
                  degrees: e.target.value!,
                  dms: stringC2,
                },
              });
            }
          }}
          onBlur={() => {
            if (coordsType === 'celestial') {
              setc2String(auxTarget.dec?.dms ?? undefined);
            } else {
              setc2String(auxTarget.el?.dms ?? undefined);
            }
          }}
        />
        <label htmlFor="decElDegrees" style={{ gridArea: 'f21' }} className="label">
          degrees
        </label>
        <InputText
          id="decElDms"
          style={{ gridArea: 'c22' }}
          value={c2String}
          onChange={(e) => {
            if (coordsType === 'celestial') {
              setAuxTarget({
                ...auxTarget,
                dec: { degrees: dms2deg(e.target.value), dms: e.target.value },
              });
            } else {
              setAuxTarget({
                ...auxTarget,
                el: { degrees: dms2deg(e.target.value), dms: e.target.value },
              });
            }
            setc2String(e.target.value);
          }}
        />
        <label htmlFor="decElDms" style={{ gridArea: 'f22' }} className="label">
          dms
        </label>
        <label htmlFor="targetEpoch" style={{ gridArea: 's3' }} className="label">
          Epoch
        </label>
        <InputText
          id="targetEpoch"
          style={{ gridArea: 's4' }}
          value={(auxTarget.type === 'FIXED' ? '' : auxTarget.epoch) ?? ''}
          onChange={(e) => setAuxTarget({ ...auxTarget, epoch: e.target.value })}
        />
      </div>
    </Dialog>
  );
}
