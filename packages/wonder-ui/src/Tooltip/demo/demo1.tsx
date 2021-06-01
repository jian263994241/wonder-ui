/**
 * title: 基本使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Space, Tooltip, Typography } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Tooltip title="Button tooltip text">
        <Button variant="contained">按钮提示</Button>
      </Tooltip>
      <Tooltip title="Button tooltip text" arrow placement="auto">
        <Button variant="contained">按钮提示(arrow)</Button>
      </Tooltip>
      ,
      <Tooltip title="Tooltip text" arrow>
        <Typography>tooltip?</Typography>
      </Tooltip>
    </Space>
  );
}
