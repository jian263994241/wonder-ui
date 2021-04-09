/**
 * title: 基础使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Dialog } from '@wonder-ui/core';

export default function Example() {
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
          primary: true,
          onClick: () => {
            console.log('ok');
          }
        }
      ]}
    >
      <Button>Show Dialog</Button>
    </Dialog>
  );
}
