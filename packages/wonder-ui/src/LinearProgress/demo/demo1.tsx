/**
 * title: 线性进度条
 * desc:
 */

/** @jsx jsx */
import { jsx, LinearProgress, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space direction="vertical">
      <LinearProgress value={20} color="primary" />
      <LinearProgress value={40} color="secondary" />
      <LinearProgress value={60} color="success" />
      <LinearProgress value={80} color="danger" />
      <LinearProgress value={80} color="warning" />
      <LinearProgress value={80} color="info" />
    </Space>
  );
}