/**
 * title: 指定容器
 * desc: 通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。
 */
import { Button, Sticky, styled } from '@wonder-ui/core';
import * as React from 'react';

const Box = styled('div')`
  border: 1px solid blue;
  padding-left: 200px;
  height: 150px;
`;

export default () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <Box
      ref={(node) => {
        setContainer(node);
      }}
    >
      <Sticky container={container} offsetTop={64}>
        <Button variant="contained">指定容器</Button>
      </Sticky>
    </Box>
  );
};
