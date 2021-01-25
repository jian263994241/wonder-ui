import * as React from 'react';

export function useInterval(
  fn: () => void,
  delay: number | null | undefined,
  options: {
    immediate?: boolean;
  } = {}
): void {
  const immediate = options.immediate;

  const fnRef = React.useRef<() => void>();
  fnRef.current = fn;

  React.useEffect(() => {
    if (delay === undefined || delay === null) return;
    if (immediate && fnRef.current) {
      fnRef.current();
    }
    const timer = setInterval(() => {
      if (fnRef.current) {
        fnRef.current();
      }
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
}

export default useInterval;
