/**
 * title: 基本使用
 * desc: 将内容包裹在 `Sticky` 组件内即可
 */
import { Button, Sticky } from '@wonder-ui/core';

export default () => (
  <Sticky offsetTop={50}>
    <Button variant="contained">基础用法</Button>
  </Sticky>
);
