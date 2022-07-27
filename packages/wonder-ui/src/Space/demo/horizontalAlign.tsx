/**
 * title: 水平方向-水平对齐
 * desc:
 */
import { ContentBlock, Space, styled } from '@wonder-ui/core';

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
  <>
    <ContentBlock title="horizontalAlign: start">
      <SpaceDemo horizontalAlign="start">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="horizontalAlign: center">
      <SpaceDemo horizontalAlign="center">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="horizontalAlign: end">
      <SpaceDemo horizontalAlign="end">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="horizontalAlign: space-around">
      <SpaceDemo horizontalAlign="space-around">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="horizontalAlign: space-between">
      <SpaceDemo horizontalAlign="space-between">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="horizontalAlign: space-evenly">
      <SpaceDemo horizontalAlign="space-evenly">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="verticalAlign: start">
      <SpaceDemo verticalAlign="start">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="verticalAlign: center">
      <SpaceDemo verticalAlign="center">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>

    <ContentBlock title="verticalAlign: end">
      <SpaceDemo verticalAlign="end">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </SpaceDemo>
    </ContentBlock>
  </>
);
