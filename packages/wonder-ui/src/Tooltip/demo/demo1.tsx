/**
 * title: 基本使用
 * desc:
 */
import { Button, Space, Tooltip, Typography } from '@wonder-ui/core';

export default () => (
  <Space>
    <Tooltip title="Button tooltip text">
      <Button variant="contained">按钮提示</Button>
    </Tooltip>
    <Tooltip title="Button tooltip text" arrow placement="auto">
      <Button variant="contained">按钮提示(arrow)</Button>
    </Tooltip>
  </Space>
);
