import { atom, useAtomValue, useSetAtom } from 'jotai';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

export const toastAtom = atom<Toast | null>(null);

export function useToast() {
  return useAtomValue(toastAtom);
}

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
