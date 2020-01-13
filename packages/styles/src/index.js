import createTheme from './createTheme';
import createUseStyles from './createUseStyles';
import defaultTheme from './defaultTheme';
import styled from './styled';
import theme from './theming';
import withStyles from './withStyles';

const { context: ThemeContext, withTheme, useTheme, ThemeProvider } = theme;

export default createUseStyles;
export {
  createTheme,
  createUseStyles,
  defaultTheme,
  styled,
  ThemeContext,
  ThemeProvider,
  useTheme,
  withStyles,
  withTheme,
}