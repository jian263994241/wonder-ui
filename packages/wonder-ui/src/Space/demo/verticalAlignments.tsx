/**
 * title: 水平方向-垂直对齐
 * desc:
 */
import { Space, SpaceItem, styled } from '@wonder-ui/core';

const SpaceDemo = styled(Space)`
  background: #eee;
  height: 100px;
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
    <SpaceItem>Top:</SpaceItem>
    <SpaceDemo verticalAlign="start">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    Center:
    <SpaceDemo verticalAlign="center">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    Bottom:
    <SpaceDemo verticalAlign="end">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
  </Space>
);
