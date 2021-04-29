/**
 * title: 基本用法
 * desc:
 */
/** @jsx jsx */
import * as React from 'react';
import { jsx, Button, Space, Swipe, styled, Container } from '@wonder-ui/core';

const SwipeItem = styled('div')`
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
`;

export default function Example() {
  const swipeRef = React.useRef<any>();

  return (
    <Container>
      <Swipe ref={swipeRef}>
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
      </Swipe>

      <div style={{ textAlign: 'center', paddingTop: 10 }}>
        <Space>
          <Button onClick={() => swipeRef.current.prev()}>上一个</Button>
          <Button onClick={() => swipeRef.current.next()}>下一个</Button>
        </Space>
      </div>
    </Container>
  );
}
