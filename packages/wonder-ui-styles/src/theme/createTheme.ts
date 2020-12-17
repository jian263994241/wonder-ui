import * as colors from './colors';
import * as colorManipulator from './colorManipulator';
import * as transitions from './transitions';
import createPalette, { Palette } from './createPalette';
import createTypography, { Typography } from './createTypography';
import createSpacing from './createSpacing';
import shadows from './shadows';

type ThemeOptions = {
  palette?: Partial<Palette>;
  spacing?: number;
  typography?: Partial<Typography>;
};

export interface Theme {
  colors: typeof colors;
  shadows: typeof shadows;
  palette: ReturnType<typeof createPalette>;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  spacing: ReturnType<typeof createSpacing>;
  colorManipulator: typeof colorManipulator;
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const { palette, spacing = 8, typography } = options;

  return {
    palette: createPalette(palette),
    typography: createTypography(typography),
    spacing: createSpacing(spacing),
    transitions,
    shadows,
    colors,
    colorManipulator
  };
}
