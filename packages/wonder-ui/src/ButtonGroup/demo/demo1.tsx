/**
 * title: 基础用法
 * desc:
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <ButtonGroup ButtonProps={{ variant: 'contained' }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </Space>
  );
}
