/**
 * title: 圆角徽章
 * desc: 设置 `rounded=true`
 */
import { Badge, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <Badge color="primary" text="primary" rounded />
    <Badge color="secondary" text="secondary" rounded />
    <Badge color="success" text="success" rounded />
    <Badge color="danger" text="danger" rounded />
    <Badge color="warning" text="warning" rounded />
    <Badge color="info" text="info" rounded />
    <Badge color="light" text="light" rounded />
    <Badge color="dark" text="dark" rounded />
  </Space>
);
