/**
 * title: 基础使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Drawer } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle(false);
  return (
    <div>
      <Button onClick={() => toggle()}>Open</Button>
      <Drawer visible={visible} onClose={() => toggle()}>
        123
      </Drawer>
    </div>
  );
}
