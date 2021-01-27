import * as React from 'react';
import { createTheming, Theming } from 'react-jss';
import { DefaultTheme } from './theme/defaultTheme';
declare const theming: Theming<DefaultTheme>;
declare const ThemeProvider: React.ComponentType<import("theming").ThemeProviderProps<DefaultTheme>>, ThemeContext: React.Context<DefaultTheme>, useTheme: <CustomTheme = DefaultTheme>() => CustomTheme, withTheme: <InnerProps extends {
    theme: DefaultTheme;
}, InnerComponent extends React.ComponentType<InnerProps>, OuterProps extends InnerProps & {
    theme?: DefaultTheme | undefined;
}>(comp: InnerComponent) => React.ComponentType<OuterProps>;
export type { Theming };
export { createTheming, ThemeContext, withTheme, useTheme, ThemeProvider, theming };
