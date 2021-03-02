/**
 * title: 线性进度条标签
 * desc:
 */

/** @jsx jsx */
import { jsx, LinearProgress, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space direction="vertical">
      <LinearProgress value={20} color="primary">
        20%
      </LinearProgress>
    </Space>
  );
}
