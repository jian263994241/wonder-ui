/**
 * title: 按钮颜色
 * desc: 按钮分下面几种类型 `primary` | `secondary` | `success` | `danger` | `warning` | `info` | `light` | `dark`
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
      <Button color="light">Light</Button>
      <Button color="dark">Dark</Button>
    </Space>
  );
}
