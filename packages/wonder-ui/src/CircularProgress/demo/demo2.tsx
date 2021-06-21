/**
 * title: 环形进度尺寸
 * desc: 设置尺寸 `size`
 */
import { CircularProgress, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <CircularProgress />
    <CircularProgress size={24} />
  </Space>
);
