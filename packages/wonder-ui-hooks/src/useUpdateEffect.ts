import * as React from 'react';
import useEnhancedEffect from './useEnhancedEffect';

export function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList
) {
  const isMounted = React.useRef(false);

  useEnhancedEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
