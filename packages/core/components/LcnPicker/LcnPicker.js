import React from 'react';
import Picker from '../Picker';
import lcnForm from 'lcn/lcn-form';

const LcnPicker = React.forwardRef((props, ref)=>(
  <Picker ref={ref} data={lcnForm} cols={3} {...props}/>
));

LcnPicker.propTypes = {
  ...Picker.propTypes
}

export default LcnPicker;