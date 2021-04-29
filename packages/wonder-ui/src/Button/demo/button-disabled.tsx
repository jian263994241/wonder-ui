/**
 * title: 按钮禁用
 * desc:
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Button variant="contained" disabled>
        Contained Button
      </Button>
      <Button variant="outlined" disabled>
        Outlined Button
      </Button>
      <Button variant="text" disabled>
        Text Button
      </Button>
    </Space>
  );
}
