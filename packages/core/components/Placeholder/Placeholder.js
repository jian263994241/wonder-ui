import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = (props)=>{
  const {
    chars= '\xa0', 
    children,
    length=1,
    className,
    style,
  } = props;

  const arr = Array(length);

  for(var i=0;i<arr.length;i++){
    arr[i] = chars;
  }
  
  const content = children ? children : arr.join('');

  if((!!className||!!style)){
    return (
      <div className={className} style={style}>
        {content}
      </div>
    )
  }

  return content;
}

Placeholder.propTypes = {
  chars: PropTypes.string,
  length: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

export default Placeholder;