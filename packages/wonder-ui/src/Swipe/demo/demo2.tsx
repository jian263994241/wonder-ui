import { Swipe, styled } from '@wonder-ui/core';
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

export default () => {
  return (
    <Swipe loop={false}>
      <Image>1</Image>
      <Image>2</Image>
      <Image>3</Image>
      <Image>4</Image>
      <Image>5</Image>
      <Image>6</Image>
    </Swipe>
  );
};
