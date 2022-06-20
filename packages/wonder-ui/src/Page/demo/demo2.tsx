import { Button, Page, WhiteSpace, Space } from '@wonder-ui/core';
import styled from '@wonder-ui/styled';

const Block = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #448aff;
`;

export default () => (
  <Page
    title="导航栏"
    showBackButton
    toolbar={
      <div
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          zIndex: 3,
          backgroundColor: '#fff'
        }}
      >
        <Space itemEqual>
          <Button fullWidth>我再想想</Button>
          <Button fullWidth>已阅读并签约</Button>
        </Space>
      </div>
    }
  >
    <WhiteSpace />
    <Space direction="vertical">
      <Block>Block</Block>
      <Block>Block</Block>
      <Block>Block</Block>
      <Block>Block</Block>
    </Space>
    <WhiteSpace />
  </Page>
);
