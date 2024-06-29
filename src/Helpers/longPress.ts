import { useCallback, useRef, useState } from 'react';

export function useLongPress(
  onLongPress: Function,
  onClick: Function,
  { shouldPreventDefault = true, delay = 300 } = {},
) {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault],
  );

  const clear = useCallback(
    (event: React.MouseEvent | React.TouchEvent, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick(event);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered],
  );

  return {
    onMouseDown: (e: React.MouseEvent) => start(e),
    onTouchStart: (e: React.TouchEvent) => start(e),
    onMouseUp: (e: React.MouseEvent) => clear(e),
    onMouseLeave: (e: React.MouseEvent) => clear(e, false),
    onTouchEnd: (e: React.TouchEvent) => clear(e),
  };
}

const preventDefault = (event: Event) => {
  if (event instanceof TouchEvent) {
    if (event.touches.length < 2 && event.preventDefault) {
      event.preventDefault();
    }
  }
  return;
};
