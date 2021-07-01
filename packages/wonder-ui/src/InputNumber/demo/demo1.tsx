/**
 * title: 基本使用
 * desc: 基本使用
 */
import { InputNumber, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <InputNumber placeholder="Basic" defaultValue={3} />
    <InputNumber placeholder="Disable StepHandler" disableStepHandler />
    <InputNumber placeholder="Disabled" disabled />
  </Space>
);
