import * as svg from './svg';
import * as transitions from './transitions';
import createHairline from './createHairline';
import createPalette from './createPalette';
import createSpacing from './createSpacing';
import createTypography from './createTypography';
import shadows from './shadows';
import createShape from './createShape';
import zIndex from './zIndex';

export default function createTheme(options={}){

  const {
    palette: paletteInput = {},
    shadows: shadowsInput,
    spacing: spacingInput = 8,
    typography: typographyInput = {},
    shape: shapeInput = {},
    ...rest
  } = options;

  const palette = createPalette(paletteInput);

  const theme = {
    hairline: createHairline(palette),
    palette,
    shadows: shadowsInput || shadows,
    shape: createShape(shapeInput),
    spacing: createSpacing(spacingInput),
    svg,
    transitions,
    typography: createTypography(palette, typographyInput),
    zIndex,
    ...rest
  }
  
  return theme;
}
