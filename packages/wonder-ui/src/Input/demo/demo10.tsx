/**
 * title: 控件尺寸
 */
import { Input, Space } from '@wonder-ui/core';

export default () => {
  return (
    <Space direction="vertical">
      <Input placeholder="Large" size="large" />

      <Input placeholder="Middle (default)" size="middle" />

      <Input placeholder="Small" size="small" />
    </Space>
  );
};
