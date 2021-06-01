/**
 * title: 异步使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Preloader } from '@wonder-ui/core';

const loadData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });

export default function Example() {
  return (
    <Preloader onLoad={loadData}>
      <Button variant="contained">Open</Button>
    </Preloader>
  );
}
