/**
 * title: 水平方向-水平对齐
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
    <SpaceDemo horizontalAlign="start">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    Center:
    <SpaceDemo horizontalAlign="center">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    End:
    <SpaceDemo horizontalAlign="end">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    Space around:
    <SpaceDemo horizontalAlign="space-around">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    Space between:
    <SpaceDemo horizontalAlign="space-between">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
    Space evenly:
    <SpaceDemo horizontalAlign="space-evenly">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </SpaceDemo>
  </Space>
);
