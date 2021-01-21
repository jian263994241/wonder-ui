import * as React from 'react';
import useEventCallback from './useEventCallback';

/**
 * Force Update Components
 */
export function useForceUpdate() {
  const [, setState] = React.useState({});

  return useEventCallback(() => {
    setState({});
  });
}

export default useForceUpdate;
