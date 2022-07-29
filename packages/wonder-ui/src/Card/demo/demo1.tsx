import { Space, Button, Card, message } from '@wonder-ui/core';
import { ChevronRight } from '@wonder-ui/icons';

export default () => (
  <Space direction="vertical" gap={16} style={{ padding: 16 }}>
    <Card title="卡片标题">基本用法</Card>

    <Card title="没有卡片内容" />

    <Card>没有卡片标题</Card>

    <Card
      title="自定义卡片内容"
      extra={<ChevronRight />}
      footer={
        <Space horizontalAlign="end">
          <Button variant="outlined">取消</Button>
          <Button variant="contained">确定</Button>
        </Space>
      }
    >
      卡片内容
    </Card>
  </Space>
);
