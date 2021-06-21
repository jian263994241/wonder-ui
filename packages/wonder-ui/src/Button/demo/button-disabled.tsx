/**
 * title: 按钮禁用
 * desc:
 */
import { Button, Space } from '@wonder-ui/core';

export default () => (
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
