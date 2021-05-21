import * as React from 'react';
import { hoistStatics } from './hoistStatics';

export const getDisplayName = (Component: React.ElementType) =>
  typeof Component === 'string'
    ? Component
    : !Component
    ? undefined
    : Component.displayName || Component.name || 'Component';
/**
 * Map props
 * @param BaseComponent
 * @param mapProps
 * @returns
 */
export const withProps = <T extends React.ElementType, P = any>(
  BaseComponent: T,
  mapProps: (props: P) => React.ComponentProps<T>
) => {
  const hoc = React.forwardRef<T, Omit<React.ComponentProps<T>, keyof P> & P>(
    (props, ref) => {
      const newProps = { ...props, ...mapProps(props) };
      return React.createElement(BaseComponent, { ...newProps, ref });
    }
  );

  hoistStatics(BaseComponent, hoc);

  hoc.displayName = `withProps(${getDisplayName(BaseComponent)})`;

  return hoc;
};
