import * as React from 'react';

export const useUnmount = (callback: () => void) => {
  const fnPersist = React.useRef(callback);

  React.useEffect(
    () => () => {
      fnPersist.current();
    },
    []
  );
};

export default useUnmount;
