/// <reference types="react" />
import * as JSS from 'jss';
import * as CSS from 'csstype';
import { DefaultTheme } from './theme/defaultTheme';
import { Theming } from 'theming';
export declare type PropsFunc<Props extends object, T> = (props: Props) => T;
export interface BaseCSSProperties extends CSS.Properties<number | string> {
}
export interface CSSProperties extends BaseCSSProperties {
    [k: string]: unknown | CSSProperties;
}
export declare type BaseCreateCSSProperties<Props extends object = {}> = {
    [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
};
export interface CreateCSSProperties<Props extends object = {}> extends BaseCreateCSSProperties<Props> {
    [k: string]: BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>] | CreateCSSProperties<Props>;
}
export declare type StyleProperties<Props extends object = {}> = CSSProperties | CreateCSSProperties<Props> | PropsFunc<Props, CreateCSSProperties<Props>>;
export declare type StyleRules<Props extends object = {}, ClassKey extends string = string> = Record<ClassKey, StyleProperties<Props>>;
export declare type StyleRulesCallback<Theme = DefaultTheme, Props extends object = {}, ClassKey extends string = string> = (theme: Theme) => StyleRules<Props, ClassKey>;
export declare type Styles<Theme = DefaultTheme, Props extends object = {}, ClassKey extends string = string> = StyleRules<Props, ClassKey> | StyleRulesCallback<Theme, Props, ClassKey>;
export declare type ClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string ? StylesOrClassKey : StylesOrClassKey extends StyleRulesCallback<any, any, infer ClassKey> ? ClassKey : StylesOrClassKey extends StyleRules<any, infer ClassKey> ? ClassKey : never;
export declare type ClassKeysOfStyles<StylesOrClassKey> = Partial<Record<ClassKeyOfStyles<StylesOrClassKey>, string>>;
/**
 * infers the type of the props used in the styles
 */
export declare type PropsOfStyles<StylesType> = StylesType extends Styles<any, infer Props> ? Props : {};
/**
 * infers the type of the theme used in the styles
 */
export declare type ThemeOfStyles<StylesType> = StylesType extends Styles<infer Theme, any> ? Theme : {};
export declare type AnyProps<Props> = keyof Props extends never ? any : Props;
export interface Managers {
    [key: string]: JSS.SheetsManager;
}
export declare type Context = {
    jss?: JSS.Jss;
    registry?: JSS.SheetsRegistry;
    managers?: Managers;
    id?: JSS.CreateGenerateIdOptions;
    classNamePrefix?: string;
    disableStylesGeneration?: boolean;
    media?: string;
    generateId?: JSS.GenerateId;
};
export interface SheetOptions<Theme = DefaultTheme> extends JSS.StyleSheetFactoryOptions {
    context: Context;
    name?: string;
    theme: Theme;
    index: number;
    styles: Styles<Theme, any>;
}
export interface HookOptions<Theme = DefaultTheme> extends JSS.StyleSheetFactoryOptions {
    index?: number;
    name?: string;
    defaultTheme?: Theme;
    theming?: Theming<Theme>;
}
export interface HOCOptions<Theme = DefaultTheme> extends HookOptions<Theme> {
}
interface BaseOptions<Theme = DefaultTheme> extends JSS.StyleSheetFactoryOptions {
    index?: number;
    theming?: Theming<Theme>;
}
export interface WithStylesOptions<Theme = DefaultTheme> extends BaseOptions<Theme> {
    injectTheme?: boolean;
    jss?: JSS.Jss;
}
export interface CreateUseStylesOptions<Theme = DefaultTheme> extends BaseOptions<Theme> {
    name?: string;
}
export interface DynamicRules {
    [key: string]: JSS.Rule;
}
export declare type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
/**
 * `T extends ConsistentWith<T, U>` means that where `T` has overlapping properties with
 * `U`, their value types do not conflict.
 *
 * @internal
 */
export declare type ConsistentWith<DecorationTargetProps, InjectedProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps ? InjectedProps[P] extends DecorationTargetProps[P] ? DecorationTargetProps[P] : InjectedProps[P] : DecorationTargetProps[P];
};
/**
 * a function that takes {component} and returns a component that passes along
 * all the props to {component} except the {InjectedProps} and will accept
 * additional {AdditionalProps}
 */
export declare type PropInjector<InjectedProps, AdditionalProps = {}> = <C extends React.ComponentType<ConsistentWith<React.ComponentProps<C>, InjectedProps>>>(component: C) => React.ForwardRefExoticComponent<React.PropsWithoutRef<JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> & InjectedProps & AdditionalProps> & React.RefAttributes<C>>;
export {};
