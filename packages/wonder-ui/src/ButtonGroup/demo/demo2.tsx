/**
 * title: 空心按钮
 * desc:
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <ButtonGroup ButtonProps={{ variant: 'outlined' }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </Space>
  );
}
