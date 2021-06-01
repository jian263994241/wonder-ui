/**
 * title: 和按钮一起使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Badge, Button } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Button variant="contained">
        Notifications
        <Badge style={{ marginLeft: 3 }} color="secondary" text="1" />
      </Button>
    </div>
  );
}
