/**
 * title: 按钮颜色
 * desc: 按钮分下面几种类型 `primary` | `secondary` | `success` | `danger` | `warning` | `info` | `light` | `dark`
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Button color="success" variant="contained">
        Success
      </Button>
      <Button color="danger" variant="contained">
        Danger
      </Button>
      <Button color="warning" variant="contained">
        Warning
      </Button>
      <Button color="info" variant="contained">
        Info
      </Button>
      <Button color="light" variant="contained">
        Light
      </Button>
      <Button color="dark" variant="contained">
        Dark
      </Button>
    </Space>
  );
}
