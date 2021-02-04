import * as transitions from './transitions';
import createPalette, { Palette } from './createPalette';
import createTypography, { Typography } from './createTypography';
import createSpacing from './createSpacing';
import createShape from './createShape';
import shadows from './shadows';
import zIndex from './zIndex';

interface ThemeComponent {
  components?: {
    [name: string]: {
      defaultProps: Record<string, any>;
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
