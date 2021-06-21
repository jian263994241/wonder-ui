/**
 * title: 图标按钮
 * desc:
 */
import { IconButton, Space } from '@wonder-ui/core';
import { Trash } from '@wonder-ui/icons';

export default () => (
  <Space>
    <IconButton size="small">
      <Trash fontSize="small" />
    </IconButton>
    <IconButton>
      <Trash fontSize="small" />
    </IconButton>
    <IconButton>
      <Trash fontSize="medium" />
    </IconButton>
    <IconButton>
      <Trash fontSize="large" />
    </IconButton>
  </Space>
);
