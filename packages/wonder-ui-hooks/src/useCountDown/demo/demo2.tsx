/**
 * title: 手动控制状态
 * desc: 手动控制状态实现一个短信发送按钮
 *
 */
import * as React from 'react';
import { useCountDown } from '@wonder-ui/hooks';

export default () => {
  const [sended, setSendState] = React.useState(false);
  const [timeLeft, setTargetDate] = useCountDown();

  return (
    <button
      disabled={timeLeft !== 0}
      onClick={() => {
        if (!sended) {
          setSendState(true);
        }

        setTargetDate(Date.now() + 10 * 1000);
      }}
    >
      {timeLeft === 0
        ? sended
          ? '重新获取验证码'
          : '获取验证码'
        : `${Math.round(timeLeft / 1000)}s`}
    </button>
  );
};
