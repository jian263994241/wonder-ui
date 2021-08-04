import { ActivityIndicator, Space, Label } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Space direction="vertical">
      <Label colon>加载类型</Label>
      <Space>
        <ActivityIndicator />
        <ActivityIndicator type="spinner" />
      </Space>
    </Space>

    <Space direction="vertical">
      <Label colon>尺寸</Label>
      <Space>
        <ActivityIndicator iconSize="small" />
        <ActivityIndicator iconSize="medium" />
        <ActivityIndicator iconSize="large" />
      </Space>
      <Space>
        <ActivityIndicator type="spinner" iconSize="small" />
        <ActivityIndicator type="spinner" iconSize="medium" />
        <ActivityIndicator type="spinner" iconSize="large" />
      </Space>
    </Space>

    <Space direction="vertical">
      <Label colon>颜色</Label>
      <Space>
        <ActivityIndicator color="primary" />
        <ActivityIndicator color="secondary" />
        <ActivityIndicator color="success" />
        <ActivityIndicator color="danger" />
        <ActivityIndicator color="warning" />
        <ActivityIndicator color="info" />
        <ActivityIndicator color="light" />
        <ActivityIndicator color="dark" />
      </Space>
      <Space>
        <ActivityIndicator type="spinner" color="primary" />
        <ActivityIndicator type="spinner" color="secondary" />
        <ActivityIndicator type="spinner" color="success" />
        <ActivityIndicator type="spinner" color="danger" />
        <ActivityIndicator type="spinner" color="warning" />
        <ActivityIndicator type="spinner" color="info" />
        <ActivityIndicator type="spinner" color="light" />
        <ActivityIndicator type="spinner" color="dark" />
      </Space>
    </Space>

    <Space direction="vertical">
      <Label colon>文案</Label>
      <Space>
        <ActivityIndicator text="加载中..." />
        <ActivityIndicator type="spinner" text="加载中..." />
      </Space>
    </Space>

    <Space direction="vertical">
      <Label colon>垂直文案</Label>
      <Space>
        <ActivityIndicator text="加载中..." vertical />
        <ActivityIndicator type="spinner" text="加载中..." vertical />
      </Space>
    </Space>
  </Space>
);
