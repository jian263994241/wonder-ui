import React from 'react';
import SvgIcon from '../SvgIcon';


export default function createIcon(paths) {
  return React.forwardRef(function Icon(props, ref){
    return (
      <SvgIcon {...props} ref={ref}>
        <path d={paths}/>
      </SvgIcon>
    )
  })
}