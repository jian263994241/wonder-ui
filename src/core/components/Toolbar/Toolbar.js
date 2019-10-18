import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';
import Slot from '../Slot';
import { Fade } from '../Transition';
import { useDisabledRefTouchMove, useForkRef } from '../../utils/reactHelpers';

const WUI_toolbar = styled(Flex) `
  width: 100%;
  height: 44px;
  flex-shrink: 0;
  .device-iphone-x &{
    padding-bottom: env(safe-area-inset-bottom);
  }
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
    visible,
    style: styleInput,
    ...rest
  } = props;

  const rootRef = React.useRef(null);
  const handleRef = useForkRef(rootRef, ref);
  const isEmpty = (React.Children.toArray(children).length === 0);

  useDisabledRefTouchMove(rootRef);

  const style = Object.assign({}, styleInput, isEmpty? { display: 'none' }: null);
  
  return (
    <Slot name={slot}>
      <Fade in={visible}>
        <WUI_toolbar role="toolbar" style={style} ref={handleRef} gutter={gutter} {...rest}>
          {children}
        </WUI_toolbar>
      </Fade>
    </Slot>
  )
});

Toolbar.defaultProps = {
  slot: 'pageContentAfter',
  gutter: 1,
  visible: true,
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