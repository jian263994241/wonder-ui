/**
 * title: 异步使用
 * desc:
 */
import {
  Button,
  Container,
  Page,
  Preloader,
  WhiteSpace
} from '@wonder-ui/core';

const loadData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });

export default () => (
  <Page title="Preloader">
    <WhiteSpace />

    <Container>
      <Preloader onLoad={loadData}>
        <Button variant="contained">Onload</Button>
      </Preloader>
    </Container>
  </Page>
);
