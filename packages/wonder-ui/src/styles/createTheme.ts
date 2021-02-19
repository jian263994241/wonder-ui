import * as React from 'react';
import type { CSSObject } from './styled';
import * as transitions from './theme/transitions';
import createPalette, { Palette } from './theme/createPalette';
import createTypography, { Typography } from './theme/createTypography';
import createSpacing from './theme/createSpacing';
import createShape from './theme/createShape';
import shadows from './theme/shadows';
import zIndex from './theme/zIndex';

interface ThemeComponent {
  components?: {
    [name: string]: {
      defaultProps?: React.ComponentProps<any>;
      styleOverrides?: {
        [slot: string]: CSSObject;
      };
    };
  };
}

interface ThemeOptions extends ThemeComponent {
  palette?: Partial<Palette>;
  spacing?: number;
  typography?: Partial<Typography>;
  shape?: ReturnType<typeof createShape>;
}

export interface Theme extends ThemeComponent {
  shadows: typeof shadows;
  palette: ReturnType<typeof createPalette>;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  spacing: ReturnType<typeof createSpacing>;
  shape: ReturnType<typeof createShape>;
  zIndex: typeof zIndex;
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const {
    palette: paletteInput,
    spacing = 8,
    shape: shapeInput,
    typography,
    ...rest
  } = options;

  const palette = createPalette(paletteInput);

  return {
    palette,
    typography: createTypography(typography),
    spacing: createSpacing(spacing),
    transitions,
    shape: createShape(shapeInput),
    shadows,
    zIndex,
    ...rest
  };
}
