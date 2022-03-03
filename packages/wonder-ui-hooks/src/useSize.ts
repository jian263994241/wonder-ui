import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { BasicTarget, getTargetElement } from './utils/dom';
import { useSafeState } from './useSafeState';

type Size = { width: number; height: number };

export function useSize(target: BasicTarget): Size {
  const [state, setState] = useSafeState<Size>(() => {
    const el = getTargetElement(target);

    return {
      width: ((el || {}) as HTMLElement).clientWidth || 0,
      height: ((el || {}) as HTMLElement).clientHeight || 0
    };
  });

  React.useEffect(() => {
    const el = getTargetElement(target);

    if (!el) {
      return () => {};
    }

    const resizeObserver = new ResizeObserver((entries: any) => {
      entries.forEach((entry: any) => {
        setState({
          width: entry.target.clientWidth || 0,
          height: entry.target.clientHeight || 0
        });
      });
    });

    resizeObserver.observe(el as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);

  return state;
}

export default useSize;
