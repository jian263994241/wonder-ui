import { Swipe, styled } from '@wonder-ui/core';

const Image = styled('div')`
  color: #fff;
  background-color: #39a9ed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export default () => {
  return (
    <Swipe autoplay vertical style={{ height: 200 }}>
      <Image>1</Image>
      <Image>2</Image>
      <Image>3</Image>
    </Swipe>
  );
};
