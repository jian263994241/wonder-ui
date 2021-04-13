/**
 * title: 提示框
 * desc: alert
 */

/** @jsx jsx */
import { jsx, Button, DialogAlert, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <DialogAlert title="Alert" text="message...">
        <Button>Alert</Button>
      </DialogAlert>
      <DialogAlert title="Confirm" text="message..." confirm>
        <Button>Confirm</Button>
      </DialogAlert>
    </Space>
  );
}
