/**
 * title: 分隔符
 * desc: 设置分割符
 */
import { Divider, Space, Typography } from '@wonder-ui/core';

export default () => (
  <Space split={<Divider direction="vertical" style={{ height: '1em' }} />}>
    <Typography>text</Typography>
    <Typography>text</Typography>
    <Typography>text</Typography>
  </Space>
);
