/**
 * title: 按钮禁用
 * desc: 按钮禁用会添加 `pointer-events none` 阻止触发事件
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Button disabled>Disabled button</Button>
      <Button color="secondary" disabled>
        Disabled button
      </Button>
    </Space>
  );
}
