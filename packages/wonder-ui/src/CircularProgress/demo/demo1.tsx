/**
 * title: 不定量的环形进度条
 * desc:
 */
import { CircularProgress, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <CircularProgress color="primary" />
    <CircularProgress color="secondary" />
    <CircularProgress color="success" />
    <CircularProgress color="danger" />
    <CircularProgress color="warning" />
    <CircularProgress color="info" />
    <CircularProgress color="light" />
    <CircularProgress color="dark" />
  </Space>
);
