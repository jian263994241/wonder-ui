/**
 * title: 垂直按钮组
 * desc:
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
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
}
