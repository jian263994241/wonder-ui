/**
 * title: 基本使用
 * desc:
 */
import { Space, Tag } from '@wonder-ui/core';

export default () => (
  <Space>
    <Tag>Default</Tag>
    <Tag color="primary">Primary</Tag>
    <Tag color="secondary">Secondary</Tag>
    <Tag color="success">Success</Tag>
    <Tag color="danger">Danger</Tag>
    <Tag color="warning">Warning</Tag>
    <Tag color="info">Info</Tag>

    <Tag color="primary" variant="contained">
      Primary
    </Tag>
    <Tag color="secondary" variant="contained">
      Secondary
    </Tag>
    <Tag color="success" variant="contained">
      Success
    </Tag>
    <Tag color="danger" variant="contained">
      Danger
    </Tag>
    <Tag color="warning" variant="contained">
      Warning
    </Tag>
    <Tag color="info" variant="contained">
      Info
    </Tag>
  </Space>
);
