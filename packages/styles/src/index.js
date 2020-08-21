import createTheme from './createTheme';
import createUseStyles from './createUseStyles';
import defaultTheme from './defaultTheme';
import styled from './styled';
import theme from './theming';
import withStyles from './withStyles';

const { withTheme, useTheme, ThemeProvider } = theme;

export default withStyles;
export {
  createTheme,
  createUseStyles,
  defaultTheme,
  styled,
  ThemeProvider,
  useTheme,
  withStyles,
  withTheme,
};
