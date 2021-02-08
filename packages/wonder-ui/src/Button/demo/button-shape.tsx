/**
 * title: 按钮形状
 * desc: 按钮分下面几种类型 `circle` | `round` | `rect`
 */
/** @jsx jsx */
import { Button, jsx } from '@wonder-ui/core';
import { AddCircleOutline } from '@wonder-ui/icons';

export default function Example() {
  return (
    <div
      css={{
        button: {
          margin: '.25rem .125rem'
        }
      }}
    >
      <Button shape="circle">
        <AddCircleOutline />
      </Button>
      <Button shape="round">Round button</Button>
      <Button shape="rect">Rect button</Button>
      <Button shape="rect" disabledBorderRadius>
        Rect button2
      </Button>
    </div>
  );
}
