import { Grid, GridItem, Paper, Page, styled } from '@wonder-ui/core';

const Wrapper = styled('div')`
  padding: 16px;

  .paper-demo {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
`;

export default () => (
  <Page>
    <Wrapper>
      <Grid columns={3} gap={20}>
        {Array(25)
          .fill('')
          .map((_, index) => (
            <GridItem key={index}>
              <Paper className="paper-demo" elevation={index}>
                {index}
              </Paper>
            </GridItem>
          ))}
      </Grid>
    </Wrapper>
  </Page>
);
