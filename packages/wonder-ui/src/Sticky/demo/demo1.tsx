/**
 * title: 基本使用
 * desc: 将内容包裹在 `Sticky` 组件内即可
 */
import * as React from 'react';
import { Button, Sticky, Space, styled } from '@wonder-ui/core';
const Box = styled('div')`
  border: 1px solid blue;
  padding-left: 200px;
  height: 150px;
`;

export default () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <Space direction="vertical" gap={100}>
      <Sticky>
        <Button variant="contained">基本使用</Button>
      </Sticky>
      <div style={{ marginLeft: 100 }}>
        <Sticky offsetTop={10}>
          <Button variant="contained">吸顶距离</Button>
        </Sticky>
      </div>
      <Box
        ref={(node) => {
          setContainer(node);
        }}
      >
        <Sticky container={container} offsetTop={0} zIndex={30}>
          <Button variant="contained">指定容器</Button>
        </Sticky>
      </Box>
      <div style={{ height: 1000 }}></div>
    </Space>
  );
};
