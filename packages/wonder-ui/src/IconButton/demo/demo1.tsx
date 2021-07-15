/**
 * title: 图标按钮
 * desc:
 */
import { IconButton, Space } from '@wonder-ui/core';
import { Trash } from '@wonder-ui/icons';

export default () => (
  <Space direction="vertical">
    <Space>
      <IconButton size="small">
        <Trash />
      </IconButton>
      <IconButton size="medium">
        <Trash />
      </IconButton>
    </Space>

    <Space>
      <IconButton size="small" color="primary">
        <Trash />
      </IconButton>
      <IconButton size="medium" color="primary">
        <Trash />
      </IconButton>
    </Space>
  </Space>
);
