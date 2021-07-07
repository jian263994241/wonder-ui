/**
 * title: 基本使用
 * desc: 手动控制状态实现一个短信发送按钮
 *
 */
import { Button, CountDown } from '@wonder-ui/core';
import * as React from 'react';

export default () => {
  const [sended, setSendState] = React.useState(false);

  return (
    <CountDown>
      {({ countdown, setTargetDate }) => (
        <Button
          variant="contained"
          disabled={countdown !== 0}
          onClick={() => {
            if (!sended) {
              setSendState(true);
            }

            setTargetDate(Date.now() + 10 * 1000);
          }}
        >
          {countdown === 0
            ? sended
              ? '重新获取验证码'
              : '获取验证码'
            : `${Math.round(countdown / 1000)}s`}
        </Button>
      )}
    </CountDown>
  );
};
