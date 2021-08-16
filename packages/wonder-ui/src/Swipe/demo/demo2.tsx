import { Swipe, SwipeItem, styled } from '@wonder-ui/core';
import { useMount } from '@wonder-ui/hooks';

const ImageNode = styled('div')`
  color: #fff;
  background-color: #39a9ed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Image = (props: any) => {
  useMount(() => {
    console.log('Mouned');
  });

  return <ImageNode>{props.children}</ImageNode>;
};

const items = Array(6).fill('');

export default () => {
  return (
    <Swipe loop={false}>
      {items.map((item, index) => (
        <SwipeItem key={index}>
          <Image>{index + 1}</Image>
        </SwipeItem>
      ))}
    </Swipe>
  );
};
