import { Badge, Space, styled } from '@wonder-ui/core';

const Block = styled('div')`
  width: 42px;
  height: 42px;
  border-radius: 2px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
`;

export default () => (
  <Space gap={20} style={{ padding: 16 }}>
    <Badge color="danger">
      <Block></Block>
    </Badge>
    <Badge color="danger" text="99+">
      <Block></Block>
    </Badge>
  </Space>
);
