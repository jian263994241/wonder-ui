import createTheme, { Theme } from './createTheme';

export interface DefaultTheme extends Theme {}

const defaultTheme = createTheme();

export default defaultTheme;
