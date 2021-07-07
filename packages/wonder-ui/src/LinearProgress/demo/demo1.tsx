/**
 * title: 线性进度条颜色
 * desc:
 */
import { LinearProgress, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <LinearProgress variant="determinate" value={20} color="primary" />
    <LinearProgress variant="determinate" value={40} color="secondary" />
    <LinearProgress variant="determinate" value={60} color="success" />
    <LinearProgress variant="determinate" value={80} color="danger" />
    <LinearProgress variant="determinate" value={80} color="warning" />
    <LinearProgress variant="determinate" value={80} color="info" />
  </Space>
);
