import * as React from 'react';
import useEnhancedEffect from './useEnhancedEffect';
/**
 * Hook which asynchronously executes a callback once the component has been mounted.
 *
 * @param callback - Function to call before mount.
 */
export function useMount(callback: () => void = () => {}) {
  const [mounted, setMounted] = React.useState(false);
  const mountRef = React.useRef(callback);
  mountRef.current = callback;

  useEnhancedEffect(() => {
    setMounted(true);
    mountRef.current?.();

    () => {
      setMounted(false);
    };
  }, []);

  return mounted;
}
