/**
 * title: 空心按钮
 * desc: 配合 Divider 分割
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <ButtonGroup>
        <Button variant="outlined">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="outlined">Button</Button>
      </ButtonGroup>
    </Space>
  );
}
