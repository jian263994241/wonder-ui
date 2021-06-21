/**
 * title: 线性进度条标签
 * desc:
 */
import { LinearProgress, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <LinearProgress value={20} color="primary">
      20%
    </LinearProgress>
  </Space>
);
