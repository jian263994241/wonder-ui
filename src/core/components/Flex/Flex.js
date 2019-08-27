import React from 'react';
import PropTypes from 'prop-types';
import { WUI_flex, WUI_flexItem } from './styles';
import styled from 'styled-components';

/**
 * flex box 样式
 * @visibleName Flex 布局
 */
const Flex = styled(WUI_flex) ``;

Flex.Item = WUI_flexItem;

Flex.propTypes = {
  /** 子元素在交叉轴上的对齐方式 */
  align: PropTypes.oneOf(['start','center','end','baseline','stretch']),
  /** 有多根轴线时的对齐方式 */
  alignContent: PropTypes.oneOf(['start','end','center','between','around','stretch']),
  /** 子元素在主轴上的对齐方式 */
  justify: PropTypes.oneOf(['start','end','center','between','around']),
  /** 子元素的换行方式 */
  wrap: PropTypes.oneOf(['nowrap','wrap','wrap-reverse']),
  /** 项目定位方向 */
  direction: PropTypes.oneOf(['row','row-reverse','column','column-reverse']),
  /** 子元素间距 */
  gutter: PropTypes.number.isRequired
}

Flex.defaultProps = {
  align: 'center',
  justify: 'start',
  wrap: 'nowrap',
  direction: 'row',
  alignContent: 'stretch',
  gutter: 8
}

/**
 * @component
 */
export default Flex;