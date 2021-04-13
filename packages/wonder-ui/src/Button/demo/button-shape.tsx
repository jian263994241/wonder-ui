/**
 * title: 按钮形状
 * desc: 按钮分下面几种类型 `default`|`square`|`round`
 */
/** @jsx jsx */
import { Button, IconButton, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Button>Default</Button>
      <Button shape="square" square>
        Square
      </Button>
      <Button shape="round">Round</Button>
    </Space>
  );
}
