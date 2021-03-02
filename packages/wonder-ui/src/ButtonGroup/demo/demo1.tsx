/**
 * title: 基础用法
 * desc: 配合 Divider 分割
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Divider, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Button</Button>
        <Divider direction="vertical" flexItem />
        <Button>Button</Button>
        <Divider direction="vertical" flexItem />
        <Button>Button</Button>
      </ButtonGroup>
    </Space>
  );
}
