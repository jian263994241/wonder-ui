import React from 'react';
import PropTypes from 'prop-types';
import { WUI_tag, WUI_tag_label } from './styles';

const Tag = React.forwardRef(({children, ...rest}, ref)=> (
  <WUI_tag {...rest} ref={ref}>
    <WUI_tag_label>{children}</WUI_tag_label>
  </WUI_tag>
))

Tag.propTypes = {
  color: PropTypes.string, //primary, secondary, ...color
  size: PropTypes.oneOf(['large', 'small']),
  outlined: PropTypes.bool
}


export default Tag;