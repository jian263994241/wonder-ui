/**
 * title: 基本用法
 * desc:
 */
/** @jsx jsx */
import { jsx, Swipe, styled, Container } from '@wonder-ui/core';

const SwipeItem = styled('div')`
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
`;

export default function Example() {
  return (
    <Container>
      <Swipe autoplay arrows dots>
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
      </Swipe>
    </Container>
  );
}
