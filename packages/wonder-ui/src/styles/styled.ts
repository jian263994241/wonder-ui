import type { DefaultTheme } from './theme/defaultTheme';
declare module '@wonder-ui/styled' {
  export interface Theme extends DefaultTheme {}
}

export type StyledPropsType<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = Omit<Partial<React.ComponentProps<T>>, 'as'>;

export {
  default,
  ThemeContext,
  keyframes,
  css,
  jsx,
  StyledEngineProvider
} from '@wonder-ui/styled';
export type { Theme } from '@wonder-ui/styled';
