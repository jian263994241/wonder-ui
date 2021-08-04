import { Divider, Space } from '@wonder-ui/core';

export default () => (
  <Space split={<Divider direction="vertical" style={{ height: '1em' }} />}>
    Text
    <a href="#">Link</a>
    <a href="#">Link</a>
  </Space>
);
