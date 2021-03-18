/**
 * title: 和按钮一起使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Badge, Button } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Button>
        Notifications <Badge color="secondary">1</Badge>
      </Button>
    </div>
  );
}
