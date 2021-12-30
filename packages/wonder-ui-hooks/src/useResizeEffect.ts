import * as React from 'react';
import { useEventCallback } from './useEventCallback';

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  targetRef: React.RefObject<T>
) {
  const fn = useEventCallback(effect);
  React.useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        fn(target);
      });
      observer.observe(target);
      return () => {
        observer.disconnect();
      };
    } else {
      fn(target);
    }
  }, [targetRef]);
}
