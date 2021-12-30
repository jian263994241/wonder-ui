import * as React from 'react';
import { Checkbox } from '@wonder-ui/core';

export default () => (
  <Checkbox
    style={
      {
        '--checkbox-primary-color': 'red',
        '--checkbox-size': '100px',
        '--checkbox-border-color': 'red',
        '--checkobx-bg-color': 'grey'
      } as React.CSSProperties
    }
  ></Checkbox>
);
