/**
 * title: 背景颜色
 * desc: 通过改变 `color` 徽记背景
 */

/** @jsx jsx */
import { jsx, Badge, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Badge color="primary" text="primary" />
      <Badge color="secondary" text="secondary" />
      <Badge color="success" text="success" />
      <Badge color="danger" text="danger" />
      <Badge color="warning" text="warning" />
      <Badge color="info" text="info" />
      <Badge color="light" text="light" />
      <Badge color="dark" text="dark" />
    </Space>
  );
}
