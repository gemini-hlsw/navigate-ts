import { useSetAtom } from 'jotai';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

import { toastAtom } from './toast';

export function ToastProvider({ children }: React.PropsWithChildren) {
  const ref = useRef<Toast>(null);
  const setToast = useSetAtom(toastAtom);

  useEffect(() => {
    setToast(ref.current);
  }, [setToast]);

  return (
    <>
      <Toast ref={ref} />
      {children}
    </>
  );
}
