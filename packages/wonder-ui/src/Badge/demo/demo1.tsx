import { Badge, ContentBlock, Space, styled } from '@wonder-ui/core';
import React from 'react';

const DemoBlock = styled('div')`
  background: #eee;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 8px;
  &.dark {
    background: #666666;
  }
`;

export default () => (
  <>
    <ContentBlock title="基础使用">
      <Space gap={20}>
        <Badge text="1">
          <DemoBlock />
        </Badge>
        <Badge text="99+">
          <DemoBlock />
        </Badge>

        <Badge text="新">
          <DemoBlock />
        </Badge>

        <Badge dot>
          <DemoBlock />
        </Badge>
      </Space>
    </ContentBlock>

    <ContentBlock title="独立使用">
      <Space>
        <Badge color="primary" text="primary" />
        <Badge color="secondary" text="secondary" />
        <Badge color="success" text="success" />
        <Badge color="danger" text="danger" />
        <Badge color="warning" text="warning" />
        <Badge color="info" text="info" />
        <Badge color="light" text="light" />
        <Badge color="dark" text="dark" />
      </Space>
    </ContentBlock>

    <ContentBlock title="自定义颜色">
      <Space gap={30}>
        <Badge
          text="有边框"
          style={{ '--wui-badge-border-width': '2px' } as React.CSSProperties}
        >
          <DemoBlock className="dark" />
        </Badge>

        <Badge
          text="颜色"
          style={
            {
              '--wui-badge-border-width': '2px',
              '--wui-badge-border-color': '#0083ff',
              '--wui-badge-color': '#000'
            } as React.CSSProperties
          }
        >
          <DemoBlock />
        </Badge>
      </Space>
    </ContentBlock>
  </>
);
