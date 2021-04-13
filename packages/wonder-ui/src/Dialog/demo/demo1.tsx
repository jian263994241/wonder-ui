/**
 * title: 基础使用
 * desc: 使用 `Fade` 过渡效果
 */

/** @jsx jsx */
import { jsx, Button, Dialog } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle();

  return (
    <Dialog
      title="Dialog Title"
      text="message..."
      buttons={[
        {
          children: 'CANCEL'
        },
        {
          children: 'OK',
          primary: true
        }
      ]}
    >
      <Button>Open</Button>
    </Dialog>
  );
}
