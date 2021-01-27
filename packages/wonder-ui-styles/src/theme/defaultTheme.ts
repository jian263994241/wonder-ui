import createTheme, { Theme } from './createTheme';

export interface DefaultTheme extends Theme {}

const theme: DefaultTheme = createTheme();

export default theme;
