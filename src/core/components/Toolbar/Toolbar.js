import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';
import Slot from '../Slot';
import Fade from '../Fade';

const WUI_toolbar = styled(Flex) `
  width: 100%;
  height: 44px;
  flex-shrink: 0;
`
/**
 * 提供一个44像素的通栏, 子元素Flex布局
 * Slot位置 `pageContentAfter`
 * @see 基于[Flex组件](#/组件?id=flex)扩展, props相同 
 * @visibleName Toolbar 工具栏
 */
const Toolbar = React.forwardRef((props, ref)=>{
  const { 
    slot, 
    gutter,
    children,
    ...rest
  } = props;

  if(React.Children.toArray(children).length === 0){
    return null;
  }

  return (
    <Slot name={slot}>
      <Fade in>
        <WUI_toolbar role="toolbar" ref={ref} gutter={gutter} {...rest}>
          {children}
        </WUI_toolbar>
      </Fade>
    </Slot>
  )
});

Toolbar.defaultProps = {
  slot: 'pageContentAfter',
  gutter: 1
}

Toolbar.propTypes = {
  /**
   * Toolbar 出现的位置 
   */
  slot: PropTypes.string,
  /**
   * 子元素间距
   */
  gutter: PropTypes.number
}


export default Toolbar;