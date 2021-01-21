import * as React from 'react';
import useEnhancedEffect from './useEnhancedEffect';
import ResizeObserver from 'resize-observer-polyfill';
import { getTargetElement, BasicTarget } from './utils/dom';

type Size = { width?: number; height?: number };

export function useSize(target: BasicTarget): Size {
  const [state, setState] = React.useState<Size>(() => {
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

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
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
