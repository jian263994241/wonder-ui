import * as React from 'react';
import type { HookOptions, Styles, ClassNameMap, PropInjector } from './types';
import useTheme from './useTheme';
import createUseStyles from './createUseStyles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from './utils/getDisplayName';
import { DefaultTheme } from './defaultTheme';

export interface StyledComponentProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  ref?: React.Ref<any>;
}

export default function withStyles<
  Theme = DefaultTheme,
  Props extends object = object,
  ClassKey extends string = string
>(
  styles: Styles<Theme, keyof Props extends never ? any : Props, ClassKey>,
  options?: HookOptions<Theme>
) {
  return function ComponentWithStyles(
    Component: React.ComponentType<Props & StyledComponentProps<ClassKey>>
  ): PropInjector<
    Props,
    Partial<StyledComponentProps<ClassKey>> & {
      theme?: Theme & HookOptions<Theme>['defaultTheme'];
    }
  > {
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

    const { defaultTheme, themeContext, name, withTheme, ...createUseStylesOptions } =
      options || {};

    const displayName = getDisplayName(Component);

    const useStyles = createUseStyles(styles, {
      ...createUseStylesOptions,
      themeContext,
      defaultTheme,
      name: name || displayName
    });

    const WithStyles = React.forwardRef<
      React.ComponentType<Props>,
      Props &
        Partial<StyledComponentProps<any>> & {
          theme?: Theme & typeof defaultTheme;
        }
    >(function WithStyles(props, ref) {
      const { classes: classesInput = {}, children, theme, ...rest } = props;

      const classes = useStyles(rest as any, {
        themeContext: theme ? React.createContext(theme) : undefined
      });

      for (const key in classes) {
        if (classesInput[key]) {
          classes[key] = `${classes[key]} ${classesInput[key]}`;
        }
      }
      const newProps: any = { classes, ref };

      if(withTheme){
        newProps.theme = {
          ...defaultTheme,
          ...(theme
            ? theme
            : themeContext
            ? // eslint-disable-next-line react-hooks/rules-of-hooks
              React.useContext(themeContext)
            : // eslint-disable-next-line react-hooks/rules-of-hooks
              useTheme())
        };
      }


      return React.createElement(Component, { children, ...rest, ...newProps });
    });

    if (process.env.NODE_ENV !== 'production') {
      WithStyles.displayName = `WithStyles(${displayName})`;
    }

    hoistNonReactStatics(WithStyles, Component);

    return WithStyles;
  };
}
