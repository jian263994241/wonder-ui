/**
 * title: 不定量的环形进度条
 * desc:
 */

/** @jsx jsx */
import { jsx, Space, CircularProgress } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
    </Space>
  );
}
