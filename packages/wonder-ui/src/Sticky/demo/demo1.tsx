/**
 * title: 基本使用
 * desc: 将内容包裹在 `Sticky` 组件内即可
 */
import * as React from 'react';
import { Button, ContentBlock, Sticky, Page, styled } from '@wonder-ui/core';
const Box = styled('div')`
  border: 1px solid blue;
  padding-left: 200px;
  height: 150px;
`;

export default () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <Page>
      <ContentBlock title="基本使用">
        <Sticky>
          <Button variant="contained">基本使用</Button>
        </Sticky>
      </ContentBlock>

      <ContentBlock title="吸顶距离">
        <div style={{ marginLeft: 100 }}>
          <Sticky offsetTop={10}>
            <Button variant="contained">吸顶距离</Button>
          </Sticky>
        </div>
      </ContentBlock>

      <ContentBlock
        title="指定容器"
        ref={(node) => {
          setContainer(node);
        }}
      >
        <div style={{ marginLeft: 200, paddingBottom: 100 }}>
          <Sticky container={container} offsetTop={0} zIndex={30}>
            <Button variant="contained">指定容器</Button>
          </Sticky>
        </div>
      </ContentBlock>
      <div style={{ height: 1000 }}></div>
    </Page>
  );
};
