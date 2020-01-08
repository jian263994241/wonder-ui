import * as svg from './svg';
import * as transitions from './transitions';
import createHairline, {removeHairline} from './createHairline';
import createPalette from './createPalette';
import createSpacing from './createSpacing';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './shape';
import zIndex from './zIndex';

export default function createTheme(options={}){

  const {
    palette: paletteInput = {},
    shadows: shadowsInput,
    spacing: spacingInput = 8,
    typography: typographyInput = {},
    ...rest
  } = options;

  const palette = createPalette(paletteInput);

  const theme = {
    shadows: shadowsInput || shadows,
    spacing: createSpacing(spacingInput),
    typography: createTypography(palette, typographyInput),
    palette,
    hairline: {
      create: (position)=> createHairline(position, palette.divider),
      remove: removeHairline
    },
    transitions,
    shape,
    zIndex,
    svg,
    ...rest
  }
  
  return theme;
}
