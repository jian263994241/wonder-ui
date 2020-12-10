import * as React from 'react';
import * as JSS from 'jss';
import * as CSS from 'csstype';
import { DefaultTheme } from './theme/defaultTheme';

type JSSFontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };

export type PropsFunc<Props extends object, T> = (props: Props) => T;

export interface BaseCSSProperties extends CSS.Properties<number | string> {
  '@font-face'?: JSSFontface | JSSFontface[];
}

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

export type StyleRules<
  Props extends object = {},
  ClassKey extends string = string
> = Record<
  ClassKey,
  // JSS property bag
  | CSSProperties
  // JSS property bag where values are based on props
  | CreateCSSProperties<Props>
  // JSS property bag based on props
  | PropsFunc<Props, CreateCSSProperties<Props>>
>;

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
  themeContext?: React.Context<Theme>;
  withTheme?: boolean;
}

export interface DynamicRules {
  [key: string]: JSS.Rule;
}

export type ClassNameMap<ClassKey extends string = string> = Record<
  ClassKey,
  string
>;

/**
 * a function that takes {component} and returns a component that passes along
 * all the props to {component} except the {InjectedProps} and will accept
 * additional {AdditionalProps}
 */
export type PropInjector<InjectedProps, AdditionalProps = {}> =
  | React.ForwardRefExoticComponent<
      React.PropsWithoutRef<InjectedProps> & AdditionalProps
    >
  | React.ComponentType<React.PropsWithoutRef<InjectedProps> & AdditionalProps>;
