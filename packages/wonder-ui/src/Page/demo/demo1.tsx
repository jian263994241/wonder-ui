import { Page, Paper, Space, WhiteSpace, styled } from '@wonder-ui/core';

const Block = styled(Paper)`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #2979ff;
`;

export default () => (
  <Page>
    <WhiteSpace />
    <Space direction="vertical">
      <Block>Block</Block>
      <Block>Block</Block>
      <Block>Block</Block>
    </Space>
    <WhiteSpace />
  </Page>
);
