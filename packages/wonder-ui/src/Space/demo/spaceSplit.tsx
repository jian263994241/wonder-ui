/**
 * title: 分隔符
 * desc: 设置分割符
 */
/** @jsx jsx */
import { Divider, Space, Typography, jsx } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space split={<Divider direction="vertical" style={{ height: '1em' }} />}>
      <Typography>text</Typography>
      <Typography>text</Typography>
      <Typography>text</Typography>
    </Space>
  );
}
