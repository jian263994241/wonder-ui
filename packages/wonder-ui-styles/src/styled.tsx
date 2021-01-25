import * as React from 'react';
import type { StyleProperties } from './types';
import createUseStyles from './createUseStyles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from './utils/getDisplayName';

export function styled<C extends keyof React.ReactHTML>(
  Component: C
): (style: StyleProperties) => React.ReactHTML[C];

export function styled<C extends React.ComponentType<any>>(
  Component: C
): (style: StyleProperties) => React.ComponentType<any>;

export function styled<C extends React.ComponentType<any>>(Component: C) {
  if (process.env.NODE_ENV !== 'production') {
    if (Component === undefined) {
      throw new Error(
        [
          'You are calling styled(Component) with an undefined component.',
          'You may have forgotten to import it.'
        ].join('\n')
      );
    }
  }

  let displayName = getDisplayName(Component);

  if (displayName) {
    displayName = `Styled(${displayName})`;
  }

  return function (style: StyleProperties) {
    const useStyles = createUseStyles({ root: style }, { name: displayName });

    const StyledComponent = React.forwardRef<
      C,
      JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>
    >(function StyledComponent(props, ref) {
      const { className, children, ...rest } = props;

      const classes = useStyles(rest);

      const newProps: any = {
        className: className ? `${classes.root} ${className}` : classes.root,
        ref
      };

      return <Component children={children} {...newProps} {...rest} />;
    });

    if (typeof Component != 'string') {
      StyledComponent.defaultProps = Component.defaultProps;
    }

    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.displayName = displayName;
    }

    hoistNonReactStatics(StyledComponent, Component);

    return StyledComponent;
  };
}

export default styled;
