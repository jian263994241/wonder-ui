import type { Context as JssContextValue } from './types';
import * as React from 'react';

const JssContext = React.createContext<JssContextValue>({
  classNamePrefix: '',
  disableStylesGeneration: false
});

export default JssContext;
