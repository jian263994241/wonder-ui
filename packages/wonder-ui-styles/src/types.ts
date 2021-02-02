import * as JSS from 'jss';
import * as CSS from 'csstype';
import { DefaultTheme } from './theme/defaultTheme';
import { Theming } from 'theming';

export type PropsFunc<Props extends object, T> = (props: Props) => T;

export interface BaseCSSProperties extends CSS.Properties<number | string> {}

export interface CSSProperties extends BaseCSSProperties {
  [k: string]: unknown | CSSProperties;
}

export type BaseCreateCSSProperties<Props extends object = {}> = {
  [P in keyof BaseCSSProperties]:
    | BaseCSSProperties[P]
    | PropsFunc<Props, BaseCSSProperties[P]>;
};

export interface CreateCSSProperties<Props extends object = {}>
  extends BaseCreateCSSProperties<Props> {
  // Allow pseudo selectors and media queries
  [k: string]:
    | BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>]
    | CreateCSSProperties<Props>;
}

export type StyleProperties<Props extends object = {}> =
  // JSS property bag
  | CSSProperties
  // JSS property bag where values are based on props
  | CreateCSSProperties<Props>
  // JSS property bag based on props
  | PropsFunc<Props, CreateCSSProperties<Props>>;

export type StyleRules<
  Props extends object = {},
  ClassKey extends string = string
> = Record<ClassKey, StyleProperties<Props>>;

export type StyleRulesCallback<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
> = (theme: Theme) => StyleRules<Props, ClassKey>;

export type Styles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
> = StyleRules<Props, ClassKey> | StyleRulesCallback<Theme, Props, ClassKey>;

export type ClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string
  ? StylesOrClassKey
  : StylesOrClassKey extends StyleRulesCallback<any, any, infer ClassKey>
  ? ClassKey
  : StylesOrClassKey extends StyleRules<any, infer ClassKey>
  ? ClassKey
  : never;

export type ClassKeysOfStyles<StylesOrClassKey> = Record<
  ClassKeyOfStyles<StylesOrClassKey>,
  string
>;

/**
 * infers the type of the props used in the styles
 */
export type PropsOfStyles<StylesType> = StylesType extends Styles<
  any,
  infer Props
>
  ? Props
  : {};

/**
 * infers the type of the theme used in the styles
 */
export type ThemeOfStyles<StylesType> = StylesType extends Styles<
  infer Theme,
  any
>
  ? Theme
  : {};

export type AnyProps<Props> = keyof Props extends never ? any : Props;

export interface Managers {
  [key: string]: JSS.SheetsManager;
}

export type Context = {
  jss?: JSS.Jss;
  registry?: JSS.SheetsRegistry;
  managers?: Managers;
  id?: JSS.CreateGenerateIdOptions;
  classNamePrefix?: string;
  disableStylesGeneration?: boolean;
  media?: string;
  generateId?: JSS.GenerateId;
};

export interface SheetOptions<Theme = DefaultTheme>
  extends JSS.StyleSheetFactoryOptions {
  context: Context;
  name?: string;
  theme: Theme;
  index: number;
  styles: Styles<Theme, any>;
}

export interface HookOptions<Theme = DefaultTheme>
  extends JSS.StyleSheetFactoryOptions {
  index?: number;
  name?: string;
  defaultTheme?: Theme;
  theming?: Theming<Theme>;
}

export interface HOCOptions<Theme = DefaultTheme> extends HookOptions<Theme> {}

interface BaseOptions<Theme = DefaultTheme>
  extends JSS.StyleSheetFactoryOptions {
  index?: number;
  theming?: Theming<Theme>;
}

export interface WithStylesOptions<Theme = DefaultTheme>
  extends BaseOptions<Theme> {
  injectTheme?: boolean;
  jss?: JSS.Jss;
}

export interface CreateUseStylesOptions<Theme = DefaultTheme>
  extends BaseOptions<Theme> {
  name?: string;
}

export interface DynamicRules {
  [key: string]: JSS.Rule;
}

export type ClassNameMap<ClassKey extends string = string> = Record<
  ClassKey,
  string
>;

/**
 * `T extends ConsistentWith<T, U>` means that where `T` has overlapping properties with
 * `U`, their value types do not conflict.
 *
 * @internal
 */
export type ConsistentWith<DecorationTargetProps, InjectedProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P];
};

/**
 * a function that takes {component} and returns a component that passes along
 * all the props to {component} except the {InjectedProps} and will accept
 * additional {AdditionalProps}
 */
export type PropInjector<InjectedProps, AdditionalProps = {}> = <
  C extends React.ComponentType<
    ConsistentWith<React.ComponentProps<C>, InjectedProps>
  >
>(
  component: C
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<
    JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> &
      InjectedProps &
      AdditionalProps
  > &
    React.RefAttributes<C>
>;
