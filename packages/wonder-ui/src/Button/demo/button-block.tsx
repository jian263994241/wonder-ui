/**
 * title: 块状按钮
 * desc: 通过辅助样式实现块状按钮
 */
import { Button, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Button variant="contained" fullWidth>
      Block button
    </Button>
    <Button variant="contained" fullWidth>
      Block button
    </Button>
  </Space>
);
