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
    <div>
      <Button onClick={() => toggle()}>Show Dialog</Button>

      <Dialog
        visible={visible}
        title="Dialog Title"
        text="message..."
        buttonsVertical
        buttons={[
          {
            children: 'button-1',
            onClick: () => toggle()
          },
          {
            children: 'button-2',
            onClick: () => toggle()
          },
          {
            children: 'button-3',
            onClick: () => toggle()
          }
        ]}
      ></Dialog>
    </div>
  );
}
