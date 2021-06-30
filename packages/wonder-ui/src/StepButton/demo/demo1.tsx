/**
 * title: 基本使用
 * desc: 长按连续执行`onStep`
 */
import { StepButton, Space } from '@wonder-ui/core';
import { useCounter } from '@wonder-ui/hooks';

export default () => {
  const [count, { inc, dec }] = useCounter(0, { min: 0, max: 10 });

  return (
    <Space direction="vertical">
      <div>Count: {count}</div>
      <Space>
        <StepButton onStep={inc}>增加</StepButton>
        <StepButton onStep={dec}>减少</StepButton>
      </Space>
    </Space>
  );
};
