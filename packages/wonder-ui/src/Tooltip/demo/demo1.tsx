/**
 * title: 基本使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Space, Tooltip } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Tooltip title="Button tooltip text">
        <Button>按钮提示</Button>
      </Tooltip>

      <Tooltip title="Button tooltip text" arrow placement="auto">
        <Button>按钮提示(arrow)</Button>
      </Tooltip>
    </Space>
  );
}
