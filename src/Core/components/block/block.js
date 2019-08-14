import React from 'react';
import PropTypes from 'prop-types';
import { WUI_block } from './styles';

const Block = WUI_block;

Block.defaultProps = {
  blank: 0,
  space: 0,
}

Block.propTypes = {
  /**两边留白 */
  blank: PropTypes.number,
  /** 上下留白 */
  space: PropTypes.number,

  left: PropTypes.number,

  right: PropTypes.number,

  top: PropTypes.number,

  bottom: PropTypes.number,

}


export default Block;