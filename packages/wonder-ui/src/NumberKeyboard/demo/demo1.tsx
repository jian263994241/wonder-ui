import { NumberKeyboard, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical" gap={20}>
    <NumberKeyboard />

    <NumberKeyboard extraKey="." />

    <NumberKeyboard extraKey="X" />
  </Space>
);
