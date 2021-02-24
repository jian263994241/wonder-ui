import * as React from 'react';
import type { RowProps } from './Row';

export type ContextProps<
  T extends Required<RowProps> = Required<RowProps>
> = Pick<T, 'columns'> & Partial<Pick<T, 'gutter' | 'rowCols'>>;

const Context = React.createContext<ContextProps>({
  columns: 12
});

export default Context;
