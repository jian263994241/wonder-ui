import * as colors from './colors';
import { darken, getContrastRatio, lighten } from '../colorManipulator';
import { getDevice } from '@wonder-ui/utils';
import type { ColorKeys, ColorType } from './colors';

type ColorObj = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

type CommonColor = {
  black: string;
  white: string;
};

type TextColor = {
  primary: string;
  secondary: string;
  disabled: string;
};

type BackgroundColor = {
  paper: string;
  default: string;
};

type ActionColor = {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledBackground: string;
  disabledOpacity: number;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
};

type Mode = 'light' | 'dark';

type ColorIntent = Partial<ColorObj> & Partial<ColorType>;

export interface Palette {
  common: CommonColor;
  colors: typeof colors;
  text: TextColor;
  divider: string;
  background: BackgroundColor;
  action: ActionColor;
  primary: ColorObj;
  secondary: ColorObj;
  danger: ColorObj;
  warning: ColorObj;
  info: ColorObj;
  success: ColorObj;
  error: ColorObj;
  light: ColorObj;
  dark: ColorObj;
  mode: Mode;
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

export interface PaletteOptions {
  mode?: Mode | 'auto';
  common?: Partial<CommonColor>;
  text?: Partial<TextColor>;
  divider?: string;
  background?: Partial<BackgroundColor>;
  action?: Partial<ActionColor>;
  primary?: Partial<ColorObj>;
  secondary?: Partial<ColorObj>;
  danger?: Partial<ColorObj>;
  warning?: Partial<ColorObj>;
  info?: Partial<ColorObj>;
  success?: Partial<ColorObj>;
  error?: Partial<ColorObj>;
  light?: Partial<ColorObj>;
  dark?: Partial<ColorObj>;
  contrastThreshold?: number;
  tonalOffset?: number;
}

const common = {
  black: '#000',
  white: '#fff'
};

const defaultPrimary = '#2979ff';
const defaultSecondary = '#6c757d';
const defaultError = '#ee0a24';
const defaultDanger = '#dc3545';
const defaultWarning = '#ffc107';
const defaultInfo = '#0dcaf0';
const defaultSuccess = '#039245';
const defaultLight = '#fff';
const defaultDark = '#000';

const darkenCoefficient = 0.08;

export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: common.white,
    default: '#f7f7fa'
  },
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The color of a disabled action.
    disabledOpacity: 0.26,
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};

export const dark = {
  text: {
    primary: 'rgba(255, 255, 255, 0.85)',
    secondary: 'rgba(255, 255, 255, 0.65)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#141414',
    default: '#1d1d1d'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
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

function getMode(mode: PaletteOptions['mode']): Palette['mode'] {
  const doc = document;

  const prefersColor =
    doc.documentElement && doc.documentElement.dataset['prefersColor'];

  if (prefersColor === 'light' || prefersColor === 'dark') {
    return prefersColor;
  }

  if (mode === 'light') return 'light';
  if (mode === 'dark') return 'dark';

  return getDevice().prefersColorScheme();
}

export default function createPalette(palette: PaletteOptions = {}): Palette {
  const {
    primary = {
      light: defaultPrimary,
      dark: darken(defaultPrimary, darkenCoefficient)
    },
    secondary = {
      light: defaultSecondary,
      dark: darken(defaultSecondary, darkenCoefficient)
    },
    danger = {
      light: defaultDanger,
      dark: darken(defaultDanger, darkenCoefficient)
    },
    warning = {
      light: defaultWarning,
      dark: darken(defaultWarning, darkenCoefficient)
    },
    info = {
      light: defaultInfo,
      dark: darken(defaultInfo, darkenCoefficient)
    },
    success = {
      light: defaultSuccess,
      dark: darken(defaultSuccess, darkenCoefficient)
    },
    error = {
      light: defaultError,
      dark: darken(defaultError, darkenCoefficient)
    },
    light: lightProp = {
      light: defaultLight,
      dark: darken(defaultLight, darkenCoefficient)
    },
    dark: darkProp = {
      light: defaultDark,
      dark: darken(defaultDark, darkenCoefficient)
    },
    mode: modeProp = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette;

  const mode = getMode(modeProp);

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
    colors,
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
    ...modes[mode]
  };
}
