import { Swipe, SwipeItem, styled } from '@wonder-ui/core';

const Image = styled('div')`
  color: #fff;
  background-color: #39a9ed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const items = Array(6).fill('');

export default () => {
  return (
    <Swipe autoplay vertical style={{ height: 200 }}>
      {items.map((item, index) => (
        <SwipeItem key={index}>
          <Image>{index + 1}</Image>
        </SwipeItem>
      ))}
    </Swipe>
  );
};
