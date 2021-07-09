import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { BasicTarget, getTargetElement } from './utils/dom';
import { useEnhancedEffect } from './useEnhancedEffect';
import { useSafeState } from './useSafeState';

type Size = { width?: number; height?: number };

export function useSize(target: BasicTarget): Size {
  const [state, setState] = useSafeState<Size>(() => {
    const el = getTargetElement(target);

    return {
      width: ((el || {}) as HTMLElement).clientWidth,
      height: ((el || {}) as HTMLElement).clientHeight
    };
  });

  useEnhancedEffect(() => {
    const el = getTargetElement(target);

    if (!el) {
      return () => {};
    }

    const resizeObserver = new ResizeObserver((entries: any) => {
      entries.forEach((entry: any) => {
        setState({
          width: entry.target.clientWidth,
          height: entry.target.clientHeight
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
