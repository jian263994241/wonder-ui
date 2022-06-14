import * as React from 'react';
import { ResultClassesType } from './ResultClasses';

export interface ResultProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  classes?: Partial<ResultClassesType>;
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning';
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}
