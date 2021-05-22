import * as React from 'react';
import useEnhancedEffect from './useEnhancedEffect';

export const useUnmount = (callback: () => void) => {
  const fnPersist = React.useRef(callback);

  useEnhancedEffect(
    () => () => {
      fnPersist.current();
    },
    []
  );
};

export default useUnmount;
