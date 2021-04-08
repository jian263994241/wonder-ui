/**
 * title: 按钮禁用
 * desc:
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
