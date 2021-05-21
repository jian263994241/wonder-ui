import * as React from 'react';

export type IRefObject<T> =
  | RefObject<T>
  | React.RefObject<T>
  | React.RefCallback<T>;

export type RefObject<T> = {
  (component: T | null): void;
  current: T | null;
};
