import * as React from 'react';
import { useCountDown } from '@wonder-ui/hooks';

type TDate = Date | number | string | undefined;

export interface CountDownProps {
  /**
   * 未来时间
   */
  targetDate?: TDate;
  /**
   * 变化时间间隔（ms）
   */
  interval?: number;
  /**
   * 结束后的回调
   */
  onEnd?: () => void;
  /**
   * 渲染方法
   */
  children: (data: {
    countdown: number;
    formattedRes: FormattedRes;
    setTargetDate: React.Dispatch<React.SetStateAction<TDate>>;
  }) => JSX.Element;
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
