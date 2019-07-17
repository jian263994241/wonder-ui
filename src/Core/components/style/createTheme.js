import Utils from '../../utils/utils';

export default function createTheme (theme) {

  const defaultTheme = {
    colors: {
      red: '#ff3b30',
      green: '#4cd964',
      blue: '#2196f3',
      pink: '#ff2d55',
      yellow: '#ffcc00',
      orange: '#ff9500',
      purple: '#9c27b0',
      deeppurple: '#673ab7',
      lightblue: '#5ac8fa',
      teal: '#009688',
      lime: '#cddc39',
      deeporange: '#ff6b22',
      gray: '#8e8e93',
      white: '#ffffff',
      black: '#000000'
    }
  };

  return Utils.extend({}, defaultTheme, theme);
}