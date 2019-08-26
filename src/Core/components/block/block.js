import React from 'react';
import PropTypes from 'prop-types';
import { WUI_block } from './styles';

/**
 * 内容块用来设置统一的边距, 边距大小为 `theme.spacing` 的倍数
 * 
 * `blank` 左右留白的边距, `space` 上下留白的边距
 * 
 * `top`, `right`, `bottom`, `left` 单独设置四周的边距, 优先级高于 `blank`, `space`
 * 
 * @visibleName Block 内容块
 */
const Block = React.forwardRef((props, ref) => (
  <WUI_block ref={ref} {...props}/>
));

Block.defaultProps = {
  blank: 0,
  space: 0,
}

Block.propTypes = {
  /** 左右留白的边距 */
  blank: PropTypes.number,
  /** 上下留白的边距 */
  space: PropTypes.number,
  /** 左边的距离 */
  left: PropTypes.number,
  /** 右边的距离 */
  right: PropTypes.number,
  /** 上边的距离 */
  top: PropTypes.number,
  /** 下边的距离 */
  bottom: PropTypes.number,

}


export default Block;