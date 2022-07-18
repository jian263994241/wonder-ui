import {
  ActivityIndicator,
  ContentBlock,
  Space,
  WhiteSpace
} from '@wonder-ui/core';

export default () => (
  <div>
    <ContentBlock title="样式">
      <Space>
        <ActivityIndicator />
        <ActivityIndicator type="spinner" />
      </Space>
    </ContentBlock>

    <ContentBlock title="尺寸">
      <Space>
        <ActivityIndicator iconSize="large" />
        <ActivityIndicator iconSize="medium" />
        <ActivityIndicator iconSize="small" />
      </Space>
      <WhiteSpace />
      <Space>
        <ActivityIndicator type="spinner" iconSize="large" />
        <ActivityIndicator type="spinner" iconSize="medium" />
        <ActivityIndicator type="spinner" iconSize="small" />
      </Space>
    </ContentBlock>

    <ContentBlock title="颜色">
      <Space>
        <ActivityIndicator color="primary" />
        <ActivityIndicator color="secondary" />
        <ActivityIndicator color="light" />
        <ActivityIndicator color="dark" />
      </Space>
      <WhiteSpace />
      <Space>
        <ActivityIndicator type="spinner" color="primary" />
        <ActivityIndicator type="spinner" color="secondary" />
        <ActivityIndicator type="spinner" color="light" />
        <ActivityIndicator type="spinner" color="dark" />
      </Space>
    </ContentBlock>

    <ContentBlock title="文案">
      <Space>
        <ActivityIndicator text="加载中..." />
        <ActivityIndicator type="spinner" text="加载中..." />
      </Space>
      <WhiteSpace />
      <Space>
        <ActivityIndicator text="加载中..." vertical />
        <ActivityIndicator type="spinner" text="加载中..." vertical />
      </Space>
    </ContentBlock>
  </div>
);
