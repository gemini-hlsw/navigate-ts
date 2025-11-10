import { Dialog } from 'primereact/dialog';
import { lazy, startTransition, Suspense } from 'react';

import { useCalParamsVisible } from '@/components/atoms/calparams';

import { ModalSolarProgress } from '../ModalSolarProgress';

const CalParamsContent = lazy(() => import('../ModalContent').then((module) => ({ default: module.CalParamsContent })));

export function CalParams() {
  const [visible, setVisible] = useCalParamsVisible();

  const close = () => startTransition(() => setVisible(false));

  return (
    <Dialog header="Calibration Parameters" visible={visible} onHide={close}>
      <Suspense fallback={<ModalSolarProgress />}>
        <CalParamsContent />
      </Suspense>
    </Dialog>
  );
}
