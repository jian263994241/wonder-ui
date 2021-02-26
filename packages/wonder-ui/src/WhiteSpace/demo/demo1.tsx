/**
 * title: 基础用法
 * desc:
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Typography, WhiteSpace, styled } from '@wonder-ui/core';

const Block = styled('div')({
  background: '#0092ff',
  paddingTop: 16,
  paddingBottom: 16,
  color: '#fff',
  textAlign: 'center',
  '&:nth-child(odd)': {
    background: '#0586e9'
  }
});

export default function Example() {
  return (
    <div>
      <Block>default size md</Block>
      <WhiteSpace />
      <Block>size sm</Block>
      <WhiteSpace size="sm" />
      <Block>size lg</Block>
      <WhiteSpace size="lg" />
      <Block />
    </div>
  );
}
