import * as transitions from '../utils/transitions';
import createHairline from './createHairline';
import createPalette, { Palette } from './createPalette';
import createTypography, { Typography } from './createTypography';
import createSpacing from './createSpacing';
import createShape from './createShape';
import shadows from './shadows';
import zIndex from './zIndex';
import * as svg from './svg';

type ThemeOptions = {
  palette?: Partial<Palette>;
  spacing?: number;
  typography?: Partial<Typography>;
  shape?: ReturnType<typeof createShape>;
};

export interface Theme {
  shadows: typeof shadows;
  palette: ReturnType<typeof createPalette>;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  spacing: ReturnType<typeof createSpacing>;
  hairline: ReturnType<typeof createHairline>;
  shape: ReturnType<typeof createShape>;
  zIndex: typeof zIndex;
  svg: typeof svg;
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const {
    palette: paletteInput,
    spacing = 8,
    shape: shapeInput,
    typography
  } = options;

  const palette = createPalette(paletteInput);

  return {
    palette,
    typography: createTypography(typography),
    spacing: createSpacing(spacing),
    hairline: createHairline(palette),
    transitions,
    shape: createShape(shapeInput),
    shadows,
    zIndex,
    svg
  };
}
