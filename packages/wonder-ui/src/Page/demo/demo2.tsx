import {
  Button,
  Divider,
  Page,
  Paper,
  WhiteSpace,
  Space,
  SafeArea,
  Grid,
  GridItem
} from '@wonder-ui/core';
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
    footer={
      <Paper>
        <Space itemEqual gap={0} split={<Divider direction="vertical" />}>
          <Button fullWidth shape="square">
            我再想想
          </Button>
          <Button fullWidth shape="square">
            已阅读并签约
          </Button>
        </Space>
        <SafeArea position="bottom" />
      </Paper>
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
