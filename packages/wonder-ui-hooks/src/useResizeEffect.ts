import * as React from 'react';
import { useEventCallback } from './useEventCallback';
import { BasicTarget, getTargetElement } from './utils/dom';

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  target: BasicTarget<T>
) {
  const fn = useEventCallback(effect);

  React.useEffect(() => {
    const _target = getTargetElement(target);

    if (!_target) return;
    //@ts-ignore
    if (window.ResizeObserver) {
      //@ts-ignore
      const observer = new ResizeObserver(() => {
        fn(_target);
      });
      observer.observe(_target);
      return () => {
        observer.disconnect();
      };
    } else {
      fn(_target);
    }
  }, [target]);
}
