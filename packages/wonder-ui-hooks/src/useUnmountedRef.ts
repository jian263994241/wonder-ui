import * as React from 'react';

export const useUnmountedRef = () => {
  const unmountedRef = React.useRef(false);

  React.useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  });
  return unmountedRef;
};

export default useUnmountedRef;
