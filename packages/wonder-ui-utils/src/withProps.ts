import * as React from 'react';

const getDisplayName = (Component: React.ElementType) =>
  typeof Component === 'string'
    ? Component
    : !Component
    ? undefined
    : Component.displayName || Component.name || 'Component';

const withProps = <T extends React.ElementType, P = any>(
  BaseComponent: T,
  mapProps: (props: P) => React.ComponentProps<T>
) => {
  const hoc = React.forwardRef<T, Omit<React.ComponentProps<T>, keyof P> & P>(
    (props, ref) => {
      const newProps = { ...props, ...mapProps(props) };
      return React.createElement(BaseComponent, { ...newProps, ref });
    }
  );

  hoc.displayName = `withProps(${getDisplayName(BaseComponent)})`;

  return hoc;
};

export default withProps;
