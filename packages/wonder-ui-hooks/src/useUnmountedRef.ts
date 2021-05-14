import * as React from 'react';
import useUnmount from './useUnmount';

export const useUnmountedRef = () => {
  const unmountedRef = React.useRef(false);

  useUnmount(() => {
    unmountedRef.current = true;
  });

  return unmountedRef;
};

export default useUnmountedRef;
