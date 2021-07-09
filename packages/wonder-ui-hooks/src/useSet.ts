import * as React from 'react';
import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';

function useSet<K>(initialValue?: Iterable<K>) {
  const initialSet = React.useMemo<Set<K>>(
    () =>
      (initialValue === undefined ? new Set() : new Set(initialValue)) as Set<
        K
      >,
    []
  );
  const [set, setSet] = useSafeState(initialSet);

  const stableActions = React.useMemo(
    () => ({
      add: (key: K) => {
        setSet((prevSet) => {
          const temp = new Set(prevSet);
          temp.add(key);
          return temp;
        });
      },
      remove: (key: K) => {
        setSet((prevSet) => {
          const temp = new Set(prevSet);
          temp.delete(key);
          return temp;
        });
      },
      reset: () => setSet(initialSet)
    }),
    [setSet, initialSet]
  );

  const utils = {
    has: useEventCallback((key: K) => set.has(key)),
    ...stableActions
  };

  return [set, utils] as const;
}

export default useSet;
