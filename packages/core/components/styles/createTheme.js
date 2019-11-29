import palette from './palette';
import shadows from './shadows';
import shape from './shape';
import typography from './typography';
import createSpacing from './createSpacing';
import * as transitions from './transitions';
import disabled from './disabled';
import * as hairline from './hairline';
import zIndex from './zIndex';
import * as utils from './utils';


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
      create: hairline.createHairline,
      remove: hairline.removeHairline
    },
    transitions,
    disabled,
    shape,
    zIndex,
    utils,
    ...rest
  }
  
  return theme;
}
