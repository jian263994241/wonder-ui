/**
 * title: 按钮形状
 * desc: 按钮分下面几种类型 `circle` | `round` | `rect`
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';
import { SuitHeart } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Space>
      <Button shape="circle">
        <SuitHeart />
      </Button>
      <Button shape="round">Round button</Button>
      <Button shape="rect">Rect button</Button>
      <Button shape="rect" disabledBorderRadius>
        Rect button2
      </Button>
    </Space>
  );
}
