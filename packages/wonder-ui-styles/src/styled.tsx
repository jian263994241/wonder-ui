import * as React from 'react';
import type { StyleProperties } from './types';
import createUseStyles from './createUseStyles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from './utils/getDisplayName';

export default function styled<C extends React.ComponentType<any>>(
  Component: C
) {
  if (process.env.NODE_ENV !== 'production') {
    if (Component === undefined) {
      throw new Error(
        [
          'You are calling withTheme(Component) with an undefined component.',
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

      const classes = useStyles({ ...Component.defaultProps, ...rest });

      const newProps: any = {
        className: className ? `${className} ${classes.root}` : classes.root,
        ref
      };

      return <Component children={children} {...newProps} {...rest} />;
    });

    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.displayName = displayName;
    }

    hoistNonReactStatics(StyledComponent, Component);

    return StyledComponent;
  };
}
