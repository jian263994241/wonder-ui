import * as React from 'react';
import useEventCallback from './useEventCallback';
import useEnhancedEffect from './useEnhancedEffect';

interface State<T> {
  loading: boolean;
  ret: T | undefined;
}

interface Callback<P extends any[] = any[], V extends any = any> {
  (): Promise<V>;
  (...args: P): Promise<V>;
}

export function useAsync<P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>,
  options: {
    runOnMountd?: boolean;
    safe?: boolean;
  } = {}
) {
  const { runOnMountd = false, safe = true } = options;
  const [state, setState] = React.useState<State<V>>({
    loading: false,
    ret: undefined
  });
  const lockRef = React.useRef(false);

  const callback: Callback<P, V | undefined> = useEventCallback(
    async (...args: P) => {
      if (safe && lockRef.current) return;
      lockRef.current = true;
      setState({ loading: true, ret: undefined });

      try {
        const ret = await fn(...args);
        lockRef.current = false;
        setState({ loading: false, ret });
        return ret;
      } catch (e) {
        lockRef.current = false;
        setState({ loading: false, ret: undefined });
        throw e;
      }
    }
  );

  useEnhancedEffect(() => {
    if (runOnMountd) {
      callback();
    }
  }, []);

  return [state, callback] as const;
}

export default useAsync;
