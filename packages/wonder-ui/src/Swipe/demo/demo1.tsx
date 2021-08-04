import { Swipe, styled } from '@wonder-ui/core';

const SwipeItem = styled('div')`
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
`;

export default () => (
  <Swipe autoplay arrows dots infinite resistance>
    <SwipeItem>1</SwipeItem>
    <SwipeItem>2</SwipeItem>
    <SwipeItem>3</SwipeItem>
  </Swipe>
);
