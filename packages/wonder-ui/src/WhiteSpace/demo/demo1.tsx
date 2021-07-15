/**
 * title: 基本使用
 * desc: 通过`size`来设置间隔大小
 */
import { WhiteSpace, Divider, styled } from '@wonder-ui/core';

const WhiteSpaceDemo = styled(WhiteSpace)({
  background: '#0092ff'
});

export default () => (
  <div>
    <Divider>Size sm</Divider>
    <WhiteSpaceDemo size="small" />

    <Divider>Size md (default)</Divider>
    <WhiteSpaceDemo />

    <Divider>Size lg</Divider>
    <WhiteSpaceDemo size="large" />
  </div>
);
