/**
 * title: 背景颜色
 * desc: 通过改变 `color` 徽记背景
 */

/** @jsx jsx */
import { jsx, Badge, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Badge color="primary">primary</Badge>
      <Badge color="secondary">secondary</Badge>
      <Badge color="success">success</Badge>
      <Badge color="danger">danger</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="info">info</Badge>
    </Space>
  );
}
