import React from 'react';
import PropTypes from 'prop-types';
import { WUI_flex, WUI_flexItem } from './styles';


const Flex = React.forwardRef((props, ref)=>(
  <WUI_flex {...props} ref={ref}/>
))


Flex.Item = WUI_flexItem;

Flex.propTypes = {
  align: PropTypes.oneOf(['start','center','end','baseline','stretch']),
  alignContent: PropTypes.oneOf(['start','end','center','between','around','stretch']),
  justify: PropTypes.oneOf(['start','end','center','between','around']),
  wrap: PropTypes.oneOf(['nowrap','wrap','wrap-reverse']),
  direction: PropTypes.oneOf(['row','row-reverse','column','column-reverse']),
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

export default Flex;