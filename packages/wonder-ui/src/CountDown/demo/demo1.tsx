/**
 * title: 基本使用
 * desc: 用过`formattedRes`返回的数值定义自己需要的格式
 *
 */
import { CountDown } from '@wonder-ui/core';

export default () => {
  return (
    <CountDown targetDate="2333-12-31 24:00:00">
      {({ formattedRes }) => {
        const { days, hours, minutes, seconds, milliseconds } = formattedRes;
        return (
          <p>
            {days} 天 {hours} 时 {minutes} 分 {seconds} 秒
          </p>
        );
      }}
    </CountDown>
  );
};
