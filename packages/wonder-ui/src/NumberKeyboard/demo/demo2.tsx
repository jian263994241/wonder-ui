import { NumberKeyboard, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical" gap={20}>
    <NumberKeyboard showSlidebar />

    <NumberKeyboard showSlidebar extraKey="." />

    <NumberKeyboard showSlidebar extraKey={['00', '.']} />
  </Space>
);
