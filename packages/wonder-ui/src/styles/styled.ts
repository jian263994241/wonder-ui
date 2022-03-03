import { getTheme } from './createTheme';
import styled, { CreateStyled, CSSObject } from '@wonder-ui/styled';
import { Theme as WuiTheme } from './createTheme';

declare module '@wonder-ui/styled' {
  export interface Theme extends WuiTheme {}
}

type Options = {
  name?: string;
  slot?: string;
  overridesResolver?: (props: any, styleOverrides: any) => CSSObject;
};

export const shouldForwardProp = (prop: string) =>
  prop !== 'styleProps' &&
  prop !== 'theme' &&
  prop !== 'isRtl' &&
  prop !== 'sx' &&
  prop !== 'as' &&
  prop !== 'classes';

const lowercaseFirstLetter = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

const getStyleOverrides = (name: string, theme: any) => {
  if (
    theme.components &&
    theme.components[name] &&
    theme.components[name].styleOverrides
  ) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

const wuiStyled: CreateStyled<Options> = (tag: any, options: any = {}) => {
  const {
    name: componentName,
    slot: componentSlot,
    overridesResolver,
    ...styledOptions
  } = options;

  let displayName: string | undefined = tag.displayName
    ? `styled(${tag.displayName})`
    : undefined;
  let name: string | undefined;
  let className: string | undefined;

  if (componentName) {
    displayName = `${componentName}${componentSlot || ''}`;
    name =
      !componentSlot || componentSlot === 'Root' ? componentName : undefined;
    className = `${componentName}-${lowercaseFirstLetter(
      componentSlot || 'Root'
    )}`;
  }

  const defaultStyledResolver = styled(tag, {
    shouldForwardProp: (prop: string) => shouldForwardProp(prop),
    label: className || componentName || '',
    // target: className,
    ...styledOptions
  });

  const styledResolver = (...stylesArgs: any[]) => {
    const styleArgsWithDefaultTheme = stylesArgs.map((stylesArg) => {
      return typeof stylesArg === 'function'
        ? (props: any) => {
            return stylesArg({
              ...props,
              theme: isEmpty(props.theme) ? getTheme() : props.theme
            });
          }
        : stylesArg;
    });

    if (name && overridesResolver) {
      styleArgsWithDefaultTheme.push((props: any) => {
        const theme = isEmpty(props.theme) ? getTheme() : props.theme;
        const styleOverrides = getStyleOverrides(name as string, theme);

        if (styleOverrides) {
          return overridesResolver(props, styleOverrides);
        }

        return null;
      });
    }

    const Component = defaultStyledResolver(...styleArgsWithDefaultTheme);

    if (displayName || name) {
      Component.displayName = displayName || name;
    }

    return Component;
  };

  return styledResolver;
};

export default wuiStyled;
