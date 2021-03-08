/**
 * title: 圆角徽章
 * desc: 设置 `rounded=true`
 */

/** @jsx jsx */
import { jsx, Badge, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Badge color="primary" rounded text="primary"></Badge>
      <Badge color="secondary" rounded text="secondary"></Badge>
      <Badge color="success" rounded text="success"></Badge>
      <Badge color="danger" rounded text="danger"></Badge>
      <Badge color="warning" rounded text="warning"></Badge>
      <Badge color="info" rounded text="info"></Badge>
    </Space>
  );
}
