import palette from './palette';
import shadows from './shadows';
import shape from './shape';
import typography from './typography';
import createSpacing from './createSpacing';
import * as transitions from './transitions';
import * as svg from './svg';
import zIndex from './zIndex';
import createHairline, {removeHairline} from './createHairline';

export default function createTheme(options={}){

  const {
    palette: paletteInput = {},
    shadows: shadowsInput,
    spacing: spacingInput = 8,
    typography: typographyInput = {},
    ...rest
  } = options;

  const theme = {
    shadows: shadowsInput || shadows,
    spacing: createSpacing(spacingInput),
    typography: Object.assign({}, typography, typographyInput),
    palette: Object.assign({}, palette, paletteInput),
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
