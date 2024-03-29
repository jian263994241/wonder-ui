import { Badge, Space } from '@wonder-ui/core';

export default () => (
  <Space style={{ padding: 16 }}>
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
