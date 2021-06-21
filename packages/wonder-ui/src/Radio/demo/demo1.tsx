/**
 * title: 基本的选择框
 * desc:
 *
 */
import { Radio, Space, Typography } from '@wonder-ui/core';

export default () => (
  <Space>
    <Typography component="label">
      <Radio name="radio-demo" />
      <span>Primary</span>
    </Typography>
    <Typography component="label">
      <Radio name="radio-demo" color="secondary" />
      <span>Secondary</span>
    </Typography>
  </Space>
);
