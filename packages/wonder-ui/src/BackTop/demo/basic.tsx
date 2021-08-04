import { BackTop, Button, Container, Page, Typography } from '@wonder-ui/core';

export default () => {
  return (
    <Page title="Back top">
      <Container>
        {Array(120)
          .fill('')
          .map((_, index) => (
            <Typography key={index}>{index}.text....</Typography>
          ))}
      </Container>

      <BackTop>
        <Button variant="contained">UP</Button>
      </BackTop>
    </Page>
  );
};
