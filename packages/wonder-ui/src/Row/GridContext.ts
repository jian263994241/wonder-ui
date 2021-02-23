import * as React from 'react';
import type { RowProps } from './Row';
import breakpoints from './breakpoints';

export type ContextProps<
  T extends Required<RowProps> = Required<RowProps>
> = Pick<T, 'gutterX' | 'gutterY' | 'columns' | 'breakpoints'> &
  Partial<
    Pick<
      T,
      | 'rowCols'
      | 'rowColsXs'
      | 'rowColsSm'
      | 'rowColsMd'
      | 'rowColsLg'
      | 'rowColsXl'
      | 'rowColsXxl'
    >
  >;

const Context = React.createContext<ContextProps>({
  gutterX: 0,
  gutterY: 0,
  columns: 12,
  breakpoints
});

export default Context;
