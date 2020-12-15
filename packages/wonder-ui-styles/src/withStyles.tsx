import * as React from 'react';
import type {
  Styles,
  ClassNameMap,
  HOCOptions,
  PropsOfStyles,
  ThemeOfStyles,
  ConsistentWith,
  PropInjector,
  ClassKeyOfStyles
} from './types';
import { ThemeContext as DefaultThemeContext } from 'theming';
import createUseStyles from './createUseStyles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from './utils/getDisplayName';

export type StyledComponentProps<Theme, ClassKey extends string = string> = {
  classes?: Partial<ClassNameMap<ClassKey>>;
  ref?: React.Ref<any>;
  theme?: Theme;
};

export type WithStylesType<StylesType extends Styles<any, any>> = {
  theme?: ThemeOfStyles<StylesType>;
} & StyledComponentProps<
  ThemeOfStyles<StylesType>,
  ClassKeyOfStyles<StylesType>
> &
  PropsOfStyles<StylesType>;

export default function createWithStyles<StylesType extends Styles<any, any>>(
  styles: StylesType,
  options: HOCOptions<ThemeOfStyles<StylesType>> = {}
): PropInjector<
  WithStylesType<StylesType>
> {
  const { theming, name, ...stylesOptions } = options;
  const ThemeContext = (theming && theming.context) || DefaultThemeContext;

  return function <
    C extends React.ComponentType<
      ConsistentWith<React.ComponentProps<C>, WithStylesType<StylesType>>
    >
  >(Component: C) {
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

    const displayName = getDisplayName(Component);

    const useStyles = createUseStyles(styles, {
      name: name || displayName,
      ...stylesOptions
    });

    const WithStyles = React.forwardRef<C, JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> & WithStylesType<StylesType>>(function WithStyles(
      props,
      ref
    ) {
      const { classes: classesInput = {}, children, ...rest } = props;

      const classes = useStyles({
        ...Component.defaultProps,
        ...rest
      } as PropsOfStyles<StylesType>);

      for (const key in classes) {
        if (classesInput[key]) {
          classes[key] = `${classes[key]} ${classesInput[key]}`;
        }
      }

      const newProps: any = { classes, ref };

      newProps.theme =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useContext<any>(ThemeContext) || options.defaultTheme;

      return <Component children={children} {...newProps} {...rest} />;
    });

    if (process.env.NODE_ENV !== 'production') {
      WithStyles.displayName = `WithStyles(${displayName})`;
    }

    hoistNonReactStatics(WithStyles, Component);

    return WithStyles;
  };
}
