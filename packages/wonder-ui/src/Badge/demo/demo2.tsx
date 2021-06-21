/**
 * title: 和按钮一起使用
 * desc:
 */
import { Badge, Button } from '@wonder-ui/core';

export default () => (
  <Button variant="contained">
    Notifications
    <Badge style={{ marginLeft: 3 }} color="secondary" text="1" />
  </Button>
);
