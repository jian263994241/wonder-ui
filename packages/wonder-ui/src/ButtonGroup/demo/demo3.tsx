/**
 * title: 垂直按钮组
 * desc:
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Space, Divider } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <ButtonGroup direction="vertical">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction="vertical">
        <Button>Button</Button>
        <Divider />
        <Button>Button</Button>
        <Divider />
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction="vertical">
        <Button variant="outlined">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="outlined">Button</Button>
      </ButtonGroup>
    </Space>
  );
}
