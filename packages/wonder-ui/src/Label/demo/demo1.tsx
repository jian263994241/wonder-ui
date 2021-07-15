/**
 * title: 基本使用
 */
import { Label, Space, Input } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Label>I'm a Label</Label>
    <Label required requiredMark={false}>
      I'm a required Label
    </Label>
    <Label required>I'm a required Label</Label>
    <Label disalbed>I'm a disabled Label</Label>

    <Space>
      <Label required colon>
        A Label for An Input
      </Label>
      <Input />
    </Space>
  </Space>
);
