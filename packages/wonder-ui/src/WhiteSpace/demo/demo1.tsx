/**
 * title: 基础用法
 * desc: 通过`size`来设置间隔大小
 */

/** @jsx jsx */
import { jsx, WhiteSpace, styled } from '@wonder-ui/core';

const Block = styled('div')({
  background: '#0092ff',
  paddingTop: 16,
  paddingBottom: 16,
  color: '#fff',
  textAlign: 'center',
  '&:nth-of-type(odd)': {
    background: '#0586e9'
  }
});

export default function Example() {
  return (
    <div>
      <Block>default size md</Block>
      <WhiteSpace />
      <Block>size sm</Block>
      <WhiteSpace size="small" />
      <Block>size lg</Block>
      <WhiteSpace size="large" />
      <Block />
    </div>
  );
}
