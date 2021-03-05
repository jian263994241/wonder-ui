/**
 * title: 不定量的环形进度条
 * desc:
 */

/** @jsx jsx */
import { jsx, Space, CircularProgress } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="danger" />
      <CircularProgress color="warning" />
      <CircularProgress color="info" />
    </Space>
  );
}