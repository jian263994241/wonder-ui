import createTheme, { Theme as DefaultTheme } from './createTheme';

declare module '@wonder-ui/styled' {
  export interface Theme extends DefaultTheme {}
}

const theme: DefaultTheme = createTheme();

export default theme;

export type { DefaultTheme };
