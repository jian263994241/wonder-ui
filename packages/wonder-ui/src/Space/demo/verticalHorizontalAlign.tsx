/**
 * title: 垂直方向-水平对齐
 * desc:
 */
import { Space, styled } from '@wonder-ui/core';

const SpaceDemo = styled(Space)`
  background: #eee;
`;

const Box = styled('div')`
  background: rgb(0, 120, 212);
  color: rgb(255, 255, 255);
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export default () => (
  <Space direction="vertical">
    Start:
    <SpaceDemo direction="vertical" horizontalAlign="start">
      <Box>1</Box>
      <Box>2</Box>
    </SpaceDemo>
    <div>Center:</div>
    <SpaceDemo direction="vertical" horizontalAlign="center">
      <Box>1</Box>
      <Box>2</Box>
    </SpaceDemo>
    End:
    <SpaceDemo direction="vertical" horizontalAlign="end">
      <Box>1</Box>
      <Box>2</Box>
    </SpaceDemo>
  </Space>
);
