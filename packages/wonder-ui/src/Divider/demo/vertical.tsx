/**
 * title: 垂直分割线
 * desc: 使用 `direction="vertical"`设置为行内的垂直分割线。
 */
/** @jsx jsx */
import { jsx, Divider, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space split={<Divider direction="vertical" style={{ height: '1em' }} />}>
      Text
      <a href="#">Link</a>
      <a href="#">Link</a>
    </Space>
  );
}
