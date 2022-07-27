import { SafeArea, Typography, styled } from '@wonder-ui/core';

const Wrapper = styled('div')`
  & > .WuiTypography-root:last-of-type {
    --wui-typography-paragraph-gutter: 0px;
  }
`;

export default () => (
  <div>
    <SafeArea position="top" style={{ background: 'red' }} />
    <Wrapper>
      {Array(30)
        .fill('')
        .map((_, index) => (
          <Typography key={index} paragraph>
            SafeArea
            组件是用来在全面屏下提供自适应的边距调整，它的底层实现其实是
            env(safe-area-inset-xxx)。需要注意的是，下方的 demo
            在桌面端浏览器下是看不到效果的
          </Typography>
        ))}
    </Wrapper>
    <SafeArea position="bottom" style={{ background: 'red' }} />
  </div>
);
