import * as React from 'react';
import useEventCallback from './useEventCallback';

export const useUnmount = (fn: any) => {
  const fnPersist = useEventCallback(fn);

  React.useEffect(
    () => () => {
      fnPersist();
    },
    []
  );
};

export default useUnmount;
