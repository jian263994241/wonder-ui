import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';

const WUI_toolbar = styled(Flex) `
  width: 100%;
  height: 44px;
`
/**
 * 提供一个44像素的通栏, 子元素Flex布局
 * @see 基于[Flex组件](#/组件?id=flex)扩展, props相同 
 * @visibleName Toolbar 工具栏
 */
const Toolbar = React.forwardRef((props, ref)=>(
  <WUI_toolbar role="toolbar" ref={ref} gutter={1} {...props}/>
))


export default Toolbar;