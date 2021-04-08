/**
 * title: 图标按钮
 * desc:
 */
/** @jsx jsx */
import { jsx, IconButton, Space } from '@wonder-ui/core';
import { Trash } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Space>
      <IconButton size="small">
        <Trash size="small" />
      </IconButton>
      <IconButton>
        <Trash size="small" />
      </IconButton>
      <IconButton>
        <Trash size="medium" />
      </IconButton>
      <IconButton>
        <Trash size="large" />
      </IconButton>
    </Space>
  );
}
