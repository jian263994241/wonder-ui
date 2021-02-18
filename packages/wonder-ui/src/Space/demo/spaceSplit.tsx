/**
 * title: 分隔符
 * desc: 设置分割符
 */
/** @jsx jsx */
import { Space, Typography, jsx } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space split={<span>|</span>}>
      <Typography>text</Typography>
      <Typography>text</Typography>
      <Typography>text</Typography>
    </Space>
  );
}
