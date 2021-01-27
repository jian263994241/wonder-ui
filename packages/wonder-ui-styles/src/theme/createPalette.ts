import {
  darken,
  getContrastRatio,
  lighten,
  fade
} from '../utils/colorManipulator';
import {
  blue,
  green,
  grey,
  orange,
  pink,
  red,
  ColorKeys,
  ColorType
} from './colors';
import * as colors from './colors'

export interface ThemeColor {
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
}

type Direction = 'light' | 'dark';

type ColorIntent = {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
} & Partial<ColorType>;

export interface Palette {
  primary: ColorIntent;
  secondary: ColorIntent;
  error: ColorIntent;
  warning: ColorIntent;
  info: ColorIntent;
  success: ColorIntent;
  type: Direction;
  contrastThreshold: number;
  tonalOffset: number;
}

export interface CommonColor {
  black: string;
  white: string;
}

const common: CommonColor = {
  black: '#000',
  white: '#fff'
};

export const light: ThemeColor = {
  text: {
    primary: fade(common.black, 0.87),
    secondary: fade(common.black, 0.54),
    disabled: fade(common.black, 0.38),
    hint: fade(common.black, 0.38)
  },
  divider: grey[300],
  background: {
    paper: common.white,
    default: grey[50]
  },
  action: {
    // The color of an active action like an icon button.
    active: fade(common.black, 0.54),
    // The color of an hovered action.
    hover: fade(common.black, 0.08),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: fade(common.black, 0.14),
    // The color of a disabled action.
    disabled: fade(common.black, 0.26),
    // The background color of a disabled action.
    disabledBackground: fade(common.black, 0.12)
  }
};

export const dark: ThemeColor = {
  text: {
    primary: fade(common.white, 0.87),
    secondary: fade(common.white, 0.7),
    disabled: fade(common.white, 0.5),
    hint: fade(common.white, 0.5)
  },
  divider: fade(common.white, 0.12),
  background: {
    paper: grey[800],
    default: grey.A400
  },
  action: {
    // The color of an active action like an icon button.
    active: common.white,
    // The color of an hovered action.
    hover: fade(common.white, 0.1),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: fade(common.white, 0.2),
    // The color of a disabled action.
    disabled: fade(common.white, 0.3),
    // The background color of a disabled action.
    disabledBackground: fade(common.white, 0.12)
  }
};

function addLightOrDark(
  intent: ColorIntent,
  direction: Direction,
  shade: ColorKeys,
  tonalOffset: number
) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffset * 1.5);
    }
  }
}

export default function createPalette(palette: Partial<Palette> = {}) {
  const {
    primary = {
      light: blue.A200,
      main: blue.A400,
      dark: blue.A700
    },
    secondary = {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    },
    error = {
      light: red[300],
      main: red[500],
      dark: red[700]
    },
    warning = {
      light: orange[300],
      main: orange[500],
      dark: orange[700]
    },
    info = {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    success = {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette;

  const types = { dark, light };

  function getContrastText(background: string) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(
          [
            `The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
            'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
            'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'
          ].join('\n')
        );
      }
    }

    return contrastText;
  }

  function augmentColor(
    color: ColorIntent,
    mainShade: ColorKeys = '500',
    lightShade: ColorKeys = '300',
    darkShade: ColorKeys = '700'
  ): ColorIntent {
    color = { ...color };

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade] as string;
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  }

  return {
    common,
    type,
    primary: augmentColor(primary),
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    error: augmentColor(error),
    warning: augmentColor(warning),
    info: augmentColor(info),
    success: augmentColor(success),
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
    ...types[type],
    ...colors
  };
}
