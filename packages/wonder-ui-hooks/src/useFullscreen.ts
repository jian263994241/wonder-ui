import * as React from 'react';
import screenfull from 'screenfull';
import { BasicTarget, getTargetElement } from './utils/dom';
import { useSafeState } from './useSafeState';
import { useUnmount } from './useUnmount';

interface Options {
  onExitFull?: () => void;
  onFull?: () => void;
}

export const useFullscreen = (target: BasicTarget, options?: Options) => {
  const { onExitFull, onFull } = options || {};

  const onExitFullRef = React.useRef(onExitFull);
  onExitFullRef.current = onExitFull;

  const onFullRef = React.useRef(onFull);
  onFullRef.current = onFull;

  const [state, setState] = useSafeState(false);

  const onChange = React.useCallback(() => {
    if (screenfull.isEnabled) {
      const { isFullscreen } = screenfull;
      if (isFullscreen) {
        onFullRef.current && onFullRef.current();
      } else {
        screenfull.off('change', onChange);
        onExitFullRef.current && onExitFullRef.current();
      }
      setState(isFullscreen);
    }
  }, []);

  const setFull = React.useCallback(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    if (screenfull.isEnabled) {
      try {
        screenfull.request(el as HTMLElement);
        screenfull.on('change', onChange);
      } catch (error) {}
    }
  }, [target, onChange]);

  const exitFull = React.useCallback(() => {
    if (!state) {
      return;
    }
    if (screenfull.isEnabled) {
      screenfull.exit();
    }
  }, [state]);

  const toggleFull = React.useCallback(() => {
    if (state) {
      exitFull();
    } else {
      setFull();
    }
  }, [state, setFull, exitFull]);

  useUnmount(() => {
    if (screenfull.isEnabled) {
      screenfull.off('change', onChange);
    }
  });

  return [
    state,
    {
      setFull,
      exitFull,
      toggleFull
    }
  ] as const;
};

export default useFullscreen;
