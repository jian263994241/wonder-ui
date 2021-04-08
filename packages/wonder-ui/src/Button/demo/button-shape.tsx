/**
 * title: 按钮形状
 * desc: 按钮分下面几种类型 `round` | `rect`
 */
/** @jsx jsx */
import { Button, IconButton, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Button shape="round">Round button</Button>
      <Button shape="rect">Rect button</Button>
      <Button shape="rect" disabledBorderRadius>
        Rect button2
      </Button>
    </Space>
  );
}
