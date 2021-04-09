/**
 * title: 垂直按钮
 * desc: 设置 `buttonsVertical` 按钮排列方向
 */

/** @jsx jsx */
import { jsx, Button, Dialog } from '@wonder-ui/core';

export default function Example() {
  return (
    <Dialog
      title="Vertical Buttons"
      buttonsVertical
      buttons={[
        {
          children: 'Option 1'
        },
        {
          children: 'Option 2'
        },
        {
          children: 'Option 3'
        }
      ]}
    >
      <Button>Show Dialog</Button>
    </Dialog>
  );
}
