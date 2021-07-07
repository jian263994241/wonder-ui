import * as React from 'react';
import { useCountDown } from '@wonder-ui/hooks';

type TDate = Date | number | string | undefined;

export interface CountDownProps {
  targetDate?: TDate;
  interval?: number;
  onEnd?: () => void;
  children?: (data: {
    countdown: number;
    formattedRes: FormattedRes;
    setTargetDate: React.Dispatch<React.SetStateAction<TDate>>;
  }) => React.ReactElement;
}

interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const CountDown = (props: CountDownProps) => {
  const { children, ...countDownOptions } = props;

  const [countdown, setTargetDate, formattedRes] =
    useCountDown(countDownOptions);

  if (typeof children === 'function') {
    return children({ countdown, setTargetDate, formattedRes });
  }

  return null;
};

export default CountDown;
