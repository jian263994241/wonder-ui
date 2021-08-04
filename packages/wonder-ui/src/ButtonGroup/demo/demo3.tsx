import { Button, ButtonGroup, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <ButtonGroup direction="vertical">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>

    <ButtonGroup direction="vertical" ButtonProps={{ variant: 'contained' }}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>

    <ButtonGroup direction="vertical" ButtonProps={{ variant: 'outlined' }}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  </Space>
);
