import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = (props)=>{
  const {
    holder= '\xa0', 
    children,
    ...rest
  } = props;

  return (
    <span {...rest}> {children || holder} </span>
  );
}

Placeholder.propTypes = {
  holder: PropTypes.node,
  children: PropTypes.any
};

export default Placeholder;