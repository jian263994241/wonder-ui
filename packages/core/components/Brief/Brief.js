import React from 'react';
import Typography from '../Typography';

const Brief = React.forwardRef(function Brief(props, ref) {
  return (
    <Typography type="caption" role="brief" ref={ref} {...props}/>
  )
});

Brief.displayName = 'Brief';

export default Brief;