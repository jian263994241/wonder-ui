/**
 * title: 描边按钮
 * desc: 和实心按钮相比，描边按钮强调的更少；或者和文本按钮相比，描边按钮强调的更多。
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="outlined" color="danger">
        Danger
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
      <Button variant="outlined" color="info">
        Info
      </Button>
    </Space>
  );
}
