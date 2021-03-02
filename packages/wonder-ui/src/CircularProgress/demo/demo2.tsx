/**
 * title: 环形进度尺寸
 * desc: 设置尺寸 `size`
 */

/** @jsx jsx */
import { jsx, Space, CircularProgress } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <CircularProgress />
      <CircularProgress size={24} />
    </Space>
  );
}
