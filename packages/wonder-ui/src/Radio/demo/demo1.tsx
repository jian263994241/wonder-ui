/**
 * title: 基本的选择框
 * desc:
 *
 */
import { Radio, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Space>
      <Radio name="radio-demo" />
      <Radio name="radio-demo" color="secondary" />
    </Space>
    <Space>
      <Radio name="radio-demo">Primary</Radio>
      <Radio name="radio-demo" color="secondary">
        Secondary
      </Radio>
    </Space>
  </Space>
);
