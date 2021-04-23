import { getDevice } from '@wonder-ui/utils';
import { darken, getContrastRatio, lighten, alpha } from '../colorManipulator';
import {
  blue,
  green,
  grey,
  lightBlue,
  orange,
  red,
  ColorKeys,
  ColorType
} from './colors';
import * as colors from './colors';

interface ColorObj {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

type ColorIntent = Partial<ColorObj> & Partial<ColorType>;

export interface Palette {
  common: {
    black: string;
    white: string;
  };

  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    disabled: string;
    disabledBackground: string;
  };
  primary: ColorObj;
  secondary: ColorObj;
  error: ColorObj;
  danger: ColorObj;
  warning: ColorObj;
  info: ColorObj;
  success: ColorObj;
  light: ColorObj;
  dark: ColorObj;
  mode: 'light' | 'dark';
  contrastThreshold: number;
  tonalOffset: number;
  augmentColor: (
    color: ColorIntent,
    mainShade?: ColorKeys,
    lightShade?: ColorKeys,
    darkShade?: ColorKeys
  ) => ColorObj;
  getContrastText: (background: string) => string;
}

const common = {
  black: '#000',
  white: '#fff'
};

export const light = {
  text: {
    primary: alpha(common.black, 0.87),
    secondary: alpha(common.black, 0.45),
    disabled: alpha(common.black, 0.38),
    hint: alpha(common.black, 0.38)
  },
  divider: grey[300],
  background: {
    paper: common.white,
    default: '#F3F4F5'
  },
  action: {
    // The color of an active action like an icon button.
    active: alpha(common.black, 0.54),
    // The color of an hovered action.
    hover: alpha(common.black, 0.08),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: alpha(common.black, 0.14),
    // The color of a disabled action.
    disabled: alpha(common.black, 0.26),
    // The background color of a disabled action.
    disabledBackground: alpha(common.black, 0.12)
  }
};

export const dark = {
  text: {
    primary: alpha(common.white, 0.87),
    secondary: alpha(common.white, 0.7),
    disabled: alpha(common.white, 0.5),
    hint: alpha(common.white, 0.5)
  },
  divider: alpha(common.white, 0.12),
  background: {
    paper: grey[800],
    default: grey.A400
  },
  action: {
    // The color of an active action like an icon button.
    active: common.white,
    // The color of an hovered action.
    hover: alpha(common.white, 0.1),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: alpha(common.white, 0.2),
    // The color of a disabled action.
    disabled: alpha(common.white, 0.3),
    // The background color of a disabled action.
    disabledBackground: alpha(common.white, 0.12)
  }
};

function addLightOrDark(
  intent: ColorIntent,
  direction: Palette['mode'],
  shade: ColorKeys,
  tonalOffset: number
) {
  if (!intent[direction] && intent.main) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffset * 1.5);
    }
  }
}

export interface PaletteOptions extends Partial<Palette> {}

export default function createPalette(palette: PaletteOptions = {}): Palette {
  const {
    primary = {
      light: blue.A400,
      dark: blue.A700
    },
    secondary = {
      light: grey[600],
      dark: grey[800]
    },
    error = {
      light: red[500],
      dark: red[700]
    },
    danger = {
      light: red[500],
      dark: red[700]
    },
    warning = {
      light: orange[500],
      dark: orange[700]
    },
    info = {
      light: lightBlue[500],
      dark: lightBlue[700]
    },
    success = {
      light: green[700],
      dark: green[900]
    },
    light: lightProp = {
      light: grey[50],
      dark: grey[900]
    },
    dark: darkProp = {
      light: grey[900],
      dark: grey[900]
    },
    mode: modeProp,
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette;

  const device = getDevice();

  const mode = !modeProp ? device.prefersColorScheme() : modeProp;

  function getContrastText(background: string) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    return contrastText;
  }

  const augmentColor: Palette['augmentColor'] = (
    color,
    mainShade = '500',
    lightShade = '300',
    darkShade = '700'
  ) => {
    color = { ...color };

    if (!color.main) {
      color.main = color[mode] || color[mainShade];
    }

    if (color.main) {
      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }
    }

    const { main, light, dark, contrastText } = color;

    return { main, light, dark, contrastText } as ColorObj;
  };

  const modes = { dark, light };

  return {
    mode,
    common,
    primary: augmentColor(primary),
    secondary: augmentColor(secondary),
    error: augmentColor(error),
    danger: augmentColor(danger),
    warning: augmentColor(warning),
    info: augmentColor(info),
    success: augmentColor(success),
    light: augmentColor(lightProp),
    dark: augmentColor(darkProp),
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    ...modes[mode],
    ...colors
  };
}
