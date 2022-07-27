import { ContentBlock, Grid, GridItem, styled } from '@wonder-ui/core';

const DemoBlock = styled('div')`
  border: 1px solid #999;
  background: #f5f5f5;
  text-align: center;
  color: #999;
  height: 100%;
`;

export default () => (
  <>
    <ContentBlock title="基本使用">
      <Grid columns={3} gap={8}>
        {Array(9)
          .fill('')
          .map((_, index) => (
            <GridItem key={index}>
              <DemoBlock>{index}</DemoBlock>
            </GridItem>
          ))}
      </Grid>
    </ContentBlock>

    <ContentBlock title="控制格子的跨度">
      <Grid columns={3} gap={8}>
        <GridItem>
          <DemoBlock>1</DemoBlock>
        </GridItem>
        <GridItem span={2}>
          <DemoBlock>2</DemoBlock>
        </GridItem>
        <GridItem span={3}>
          <DemoBlock>3</DemoBlock>
        </GridItem>
      </Grid>
    </ContentBlock>
  </>
);
