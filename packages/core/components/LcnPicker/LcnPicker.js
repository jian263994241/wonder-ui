import React from 'react';
import Picker from '../Picker';
import lcnForm from 'lcn/lcn-form';

const LcnPicker = React.forwardRef(function LcnPicker(props, ref) {
  return (
    <Picker ref={ref} data={lcnForm} cols={3} {...props}/>
  )
});


export default LcnPicker;