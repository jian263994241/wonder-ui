import { Button, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <Button color="primary" variant="contained">
      Default
    </Button>
    <Button color="primary" variant="contained" shape="square">
      Square
    </Button>
    <Button color="primary" variant="contained" shape="round">
      Round
    </Button>
  </Space>
);
