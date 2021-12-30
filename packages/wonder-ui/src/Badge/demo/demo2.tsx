import { Badge, Button } from '@wonder-ui/core';

export default () => (
  <div style={{ padding: 16 }}>
    <Button
      variant="contained"
      endIcon={
        <Badge style={{ fontSize: 14 }} color="light" rounded text="99+" />
      }
    >
      Notifications
    </Button>
  </div>
);
