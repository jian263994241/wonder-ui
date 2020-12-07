import * as colors from './theme/colors';
import createPalette, { Palette } from './theme/createPalette';
import createTypography, { Typography } from './theme/createTypography';
import createSpacing from './theme/createSpacing';
import shadows from './theme/shadows';
import * as transitions from './theme/transitions';

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
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const { palette, spacing = 8, typography } = options;

  return {
    palette: createPalette(palette),
    typography: createTypography(typography),
    spacing: createSpacing(spacing),
    transitions,
    shadows,
    colors
  };
}
