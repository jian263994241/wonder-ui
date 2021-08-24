import * as React from 'react';
import { useEventCallback } from '../useEventCallback';
import { useSafeState } from '../useSafeState';

export type TDate = Date | number | string | undefined;

export type CountDownOptions = {
  targetDate?: TDate;
  interval?: number;
  onEnd?: () => void;
};

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const calcLeft = (t?: TDate) => {
  if (!t) {
    return 0;
  }

  // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
  const left = new Date(t).getTime() - new Date().getTime();
  if (left < 0) {
    return 0;
  }
  return left;
};

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000
  };
};

export function useCountDown(options?: CountDownOptions) {
  const {
    targetDate = Date.now(),
    interval = 1000,
    onEnd = () => 0
  } = options || {};

  const [target, setTargetDate] = useSafeState<TDate>(targetDate);
  const [timeLeft, setTimeLeft] = useSafeState(() => calcLeft(target));

  const onEndPersistFn = useEventCallback(() => {
    onEnd();
  });

  React.useEffect(() => {
    if (!target) {
      // for stop
      setTimeLeft(0);
      return;
    }

    // 立即执行一次
    setTimeLeft(calcLeft(target));

    const timer = setInterval(() => {
      const targetLeft = calcLeft(target);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndPersistFn();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  const formattedRes = React.useMemo(() => parseMs(timeLeft), [timeLeft]);

  return [timeLeft, setTargetDate, formattedRes] as const;
}

export default useCountDown;
