import * as svg from './svg';
import * as transitions from './transitions';
import createHairline from './createHairline';
import createPalette from './createPalette';
import createShape from './createShape';
import createSpacing from './createSpacing';
import createTypography from './createTypography';
import device from '@wonder-ui/utils/device';
import shadows from './shadows';
import zIndex from './zIndex';

export default function createTheme(options = {}) {
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
    device,
    ...rest,
  };

  return theme;
}
