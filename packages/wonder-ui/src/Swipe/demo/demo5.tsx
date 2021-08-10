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

const Indicator = styled('div')`
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  padding: 6px 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 12px;
`;

export default () => {
  return (
    <Swipe
      autoplay
      onRenderIndicator={(activeIndex) => (
        <Indicator>{activeIndex + 1}/3</Indicator>
      )}
    >
      <Image>1</Image>
      <Image>2</Image>
      <Image>3</Image>
    </Swipe>
  );
};
