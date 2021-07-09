/**
 * title: 异步使用
 * desc:
 */
import { Button, Preloader } from '@wonder-ui/core';

const loadData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });

export default () => (
  <Preloader onLoad={loadData}>
    <Button variant="contained">Onload</Button>
  </Preloader>
);
