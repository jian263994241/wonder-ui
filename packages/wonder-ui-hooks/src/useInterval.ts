import * as React from 'react';
import { useAsync } from './useAsync';

export function useInterval(
  fn: () => void,
  delay: number | null | undefined,
  options: {
    immediate?: boolean;
  } = {}
): void {
  const async = useAsync();
  const immediate = options.immediate;

  const fnRef = React.useRef<() => void>();
  fnRef.current = fn;

  React.useEffect(() => {
    if (delay === undefined || delay === null) return;
    if (immediate && fnRef.current) {
      fnRef.current();
    }
    const timer = async.setInterval(() => {
      if (fnRef.current) {
        fnRef.current();
      }
    }, delay);
    return () => {
      async.clearInterval(timer);
    };
  }, [delay]);
}

export default useInterval;
