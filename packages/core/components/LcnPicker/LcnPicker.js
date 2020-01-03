import React from 'react';
import lcnForm from 'lcn/lcn-form';
import Picker from '../Picker';

const LcnPicker = React.forwardRef(function LcnPicker(props, ref) {
  return (
    <Picker ref={ref} data={lcnForm} cols={3} {...props}/>
  )
});


export default LcnPicker;