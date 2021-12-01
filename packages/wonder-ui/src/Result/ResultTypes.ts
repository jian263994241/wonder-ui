import * as React from 'react';
import { ResultClassesType } from './ResultClasses';

export interface ResultProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<ResultClassesType>;
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning';
  title: string;
  description?: string;
  icon?: React.ReactNode;
}
