import { Button, Space, Paper } from '@wonder-ui/core';

export default () => (
  <Paper>
    <Space>
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Button color="success" variant="contained">
        Success
      </Button>
      <Button color="danger" variant="contained">
        Danger
      </Button>
      <Button color="warning" variant="contained">
        Warning
      </Button>
      <Button color="info" variant="contained">
        Info
      </Button>
      <Button color="light" variant="contained">
        Light
      </Button>
      <Button color="dark" variant="contained">
        Dark
      </Button>
    </Space>
  </Paper>
);
