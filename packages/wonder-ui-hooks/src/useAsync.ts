import * as React from 'react';
import { Async } from '@wonder-ui/utils';
import { useCreation } from './useCreation';

/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
export function useAsync() {
  const async = useCreation<Async>(() => new Async(), []);

  // Function that returns a function in order to dispose the async instance on unmount
  React.useEffect(() => () => async.dispose(), [async]);

  return async;
}
