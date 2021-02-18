/**
 * title: 基本用法
 * desc: 相邻组件水平间距
 */
/** @jsx jsx */
import { Space, Button, jsx } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      间距:
      <Button>Button</Button>
      <Button>Button</Button>
    </Space>
  );
}
