import * as React from 'react';
import useEventCallback from './useEventCallback';

export function useMount(fn: () => void = () => {}) {
  const [mounted, setMounted] = React.useState(false);
  const callback = useEventCallback(fn);

  React.useEffect(() => {
    setMounted(true);

    callback();
  }, []);

  return mounted;
}
