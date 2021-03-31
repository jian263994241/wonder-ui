import * as React from 'react';
import type { RowProps } from './Row';

export interface ContextProps {
  columns: number;
  gutter: number | [number, number];
  rowCols?: RowProps['rowCols'];
}

const Context = React.createContext<ContextProps>({
  columns: 12,
  gutter: 0
});

export default Context;
