import * as React from 'react';
import { Radio } from '@wonder-ui/core';

export default () => (
  <Radio
    style={
      {
        '--radio-primary-color': 'red',
        '--radio-size': '100px',
        '--radio-border-color': 'red',
        '--radio-bg-color': 'grey'
      } as React.CSSProperties
    }
  ></Radio>
);
