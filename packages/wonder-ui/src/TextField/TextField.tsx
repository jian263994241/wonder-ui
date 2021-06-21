import * as React from 'react';
import InputBase from '../InputBase';

export interface TextFieldProps {}

const TextField = React.forwardRef((inProps, ref) => {
  return (
    <div>
      <InputBase></InputBase>
    </div>
  );
});

export default TextField;
