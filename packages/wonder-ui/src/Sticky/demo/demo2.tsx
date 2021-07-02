/**
 * title: 吸顶距离
 * desc: 通过 `offsetTop` 属性可以设置组件在吸顶时与顶部的距离。
 */
import { Button, Sticky } from '@wonder-ui/core';

export default () => (
  <div style={{ marginLeft: 100 }}>
    <Sticky offsetTop={64}>
      <Button variant="contained">吸顶距离</Button>
    </Sticky>
  </div>
);
