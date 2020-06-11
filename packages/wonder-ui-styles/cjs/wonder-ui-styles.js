'use strict';

function _interopDefault(ex) {
  return ex && ex.__esModule ? ex.default : ex;
}

var deepmerge = _interopDefault(require('@wonder-ui/utils/deepmerge'));
var device = _interopDefault(require('@wonder-ui/utils/device'));
var React = _interopDefault(require('react'));
var reactJss = require('react-jss');

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var create = function create(svgString) {
  return 'url(data:image/svg+xml;utf8,' + encodeURIComponent(svgString) + ')';
};

var svg = /*#__PURE__*/ Object.freeze({
  create: create,
});

var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  //
  ease: 'cubic-bezier(0.25, 0.01, 0.25, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195,
};
var formatMs = function formatMs(milliseconds) {
  return Math.round(milliseconds) + 'ms';
};
var create$1 = function create(props, options) {
  if (props === void 0) {
    props = ['all'];
  }

  if (options === void 0) {
    options = {};
  }

  var _options = options,
    _options$duration = _options.duration,
    durationOption =
      _options$duration === void 0 ? duration.standard : _options$duration,
    _options$easing = _options.easing,
    easingOption =
      _options$easing === void 0 ? easing.easeInOut : _options$easing,
    _options$delay = _options.delay,
    delay = _options$delay === void 0 ? 0 : _options$delay;
  return (Array.isArray(props) ? props : [props])
    .map(function (animatedProp) {
      return (
        animatedProp +
        ' ' +
        (typeof durationOption === 'string'
          ? durationOption
          : formatMs(durationOption)) +
        ' ' +
        easingOption +
        ' ' +
        (typeof delay === 'string' ? delay : formatMs(delay))
      );
    })
    .join(',');
};

var transitions = /*#__PURE__*/ Object.freeze({
  easing: easing,
  duration: duration,
  formatMs: formatMs,
  create: create$1,
});

function _create(position, color, coverStyles) {
  if (color === void 0) {
    color = '#999';
  }

  if (coverStyles === void 0) {
    coverStyles = {};
  }

  var styles;
  var base = {
    content: '""',
    position: 'absolute',
    backgroundColor: color,
    display: 'block',
    zIndex: 15,
  };
  var pixelRatio = device.desktop ? 2 : device.pixelRatio;
  var scaleY = {
    transform: 'scaleY(' + 1 / pixelRatio + ')',
  };
  var scaleX = {
    transform: 'scaleX(' + 1 / pixelRatio + ')',
  };

  switch (position) {
    case 'top':
      styles = {
        '&:before': _extends(
          {},
          base,
          scaleY,
          {
            left: 0,
            top: 0,
            bottom: 'auto',
            right: 'auto',
            height: 1,
            width: '100%',
            transformOrigin: '50% 0%',
          },
          coverStyles,
        ),
      };
      break;

    case 'left':
      styles = {
        '&:before': _extends(
          {},
          base,
          scaleX,
          {
            left: 0,
            top: 0,
            bottom: 'auto',
            right: 'auto',
            width: 1,
            height: '100%',
            transformOrigin: '100% 50%',
          },
          coverStyles,
        ),
      };
      break;

    case 'bottom':
      styles = {
        '&:after': _extends(
          {},
          base,
          scaleY,
          {
            left: 0,
            bottom: 0,
            right: 'auto',
            top: 'auto',
            height: 1,
            width: '100%',
            transformOrigin: '50% 100%',
          },
          coverStyles,
        ),
      };
      break;

    case 'right':
      styles = {
        '&:after': _extends(
          {},
          base,
          scaleX,
          {
            right: 0,
            top: 0,
            left: 'auto',
            bottom: 'auto',
            width: 1,
            height: '100%',
            transformOrigin: '0% 50%',
          },
          coverStyles,
        ),
      };
      break;
  }

  return styles;
}

function remove(position) {
  var result = {};

  switch (position) {
    case 'left':
    case 'top':
      result = {
        '&:before': {
          display: 'none',
        },
      };
      break;

    case 'right':
    case 'bottom':
      result = {
        '&:after': {
          display: 'none',
        },
      };
      break;
  }

  return result;
}

function createHairline(palette) {
  return {
    create: function create(position, coverStyles) {
      return _create(position, palette.divider, coverStyles);
    },
    remove: remove,
  };
}

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 1;
  }

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */

function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp('.{1,' + color.length / 3 + '}', 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors
    ? 'rgb(' +
        colors
          .map(function (n) {
            return parseInt(n, 16);
          })
          .join(', ') +
        ')'
    : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */

function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
    values = _decomposeColor.values;

  return (
    '#' +
    values
      .map(function (n) {
        return intToHex(n);
      })
      .join('')
  );
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
    values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n, k) {
    if (k === void 0) {
      k = (n + h / 30) % 12;
    }

    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb,
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(
      [
        'Colors: unsupported `' + color + '` color.',
        'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
      ].join('\n'),
    );
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values,
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = values[1] + '%';
    values[2] = values[2] + '%';
  }

  return type + '(' + values.join(', ') + ')';
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb =
    color.type === 'hsl'
      ? decomposeColor(hslToRgb(color)).values
      : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3),
  );
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color, coefficient) {
  if (coefficient === void 0) {
    coefficient = 0.15;
  }

  return getLuminance(color) > 0.5
    ? darken(color, coefficient)
    : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

var colorManipulator = /*#__PURE__*/ Object.freeze({
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  hslToRgb: hslToRgb,
  decomposeColor: decomposeColor,
  recomposeColor: recomposeColor,
  getContrastRatio: getContrastRatio,
  getLuminance: getLuminance,
  emphasize: emphasize,
  fade: fade,
  darken: darken,
  lighten: lighten,
});

var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff',
};

var common = {
  black: '#000',
  white: '#fff',
};

var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853',
};

var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
};

var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00',
};

var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162',
};

var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
};

var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  // The color used to divide different elements.
  divider: '#E0E0E0',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: grey[50],
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
};
var dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030',
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
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

function createPalette(palette) {
  var _palette$primary = palette.primary,
    primary =
      _palette$primary === void 0
        ? {
            light: blue.A200,
            main: blue.A400,
            dark: blue.A700,
          }
        : _palette$primary,
    _palette$secondary = palette.secondary,
    secondary =
      _palette$secondary === void 0
        ? {
            light: pink.A200,
            main: pink.A400,
            dark: pink.A700,
          }
        : _palette$secondary,
    _palette$error = palette.error,
    error =
      _palette$error === void 0
        ? {
            light: red[300],
            main: red[500],
            dark: red[700],
          }
        : _palette$error,
    _palette$warning = palette.warning,
    warning =
      _palette$warning === void 0
        ? {
            light: orange[300],
            main: orange[500],
            dark: orange[700],
          }
        : _palette$warning,
    _palette$info = palette.info,
    info =
      _palette$info === void 0
        ? {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
          }
        : _palette$info,
    _palette$success = palette.success,
    success =
      _palette$success === void 0
        ? {
            light: green[300],
            main: green[500],
            dark: green[700],
          }
        : _palette$success,
    _palette$type = palette.type,
    type = _palette$type === void 0 ? 'light' : _palette$type,
    _palette$contrastThre = palette.contrastThreshold,
    contrastThreshold =
      _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
    _palette$tonalOffset = palette.tonalOffset,
    tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
    other = _objectWithoutPropertiesLoose(palette, [
      'primary',
      'secondary',
      'error',
      'warning',
      'info',
      'success',
      'type',
      'contrastThreshold',
      'tonalOffset',
    ]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    if (!background) {
      throw new TypeError(
        'Material-UI: missing background argument in getContrastText(' +
          background +
          ').',
      );
    }

    var contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    {
      var contrast = getContrastRatio(background, contrastText);

      if (contrast < 3) {
        console.error(
          [
            'Material-UI: the contrast ratio of ' +
              contrast +
              ':1 for ' +
              contrastText +
              ' on ' +
              background,
            'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
            'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
          ].join('\n'),
        );
      }
    }

    return contrastText;
  }

  function augmentColor(color, mainShade, lightShade, darkShade) {
    if (mainShade === void 0) {
      mainShade = 500;
    }

    if (lightShade === void 0) {
      lightShade = 300;
    }

    if (darkShade === void 0) {
      darkShade = 700;
    }

    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    {
      if (!color.main) {
        throw new Error(
          [
            'Material-UI: the color provided to augmentColor(color) is invalid.',
            'The color object needs to have a `main` property or a `' +
              mainShade +
              '` property.',
          ].join('\n'),
        );
      }
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  }

  var types = {
    dark: dark,
    light: light,
  };

  {
    if (!types[type]) {
      console.error(
        'Material-UI: the palette type `' + type + '` is not supported.',
      );
    }
  }

  var paletteOutput = deepmerge(
    _extends(
      {
        // A collection of common colors.
        common: common,
        // The palette type, can be light or dark.
        type: type,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor(primary),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor(error),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor(warning),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor(info),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor(success),
        // The grey colors.
        grey: grey,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText: getContrastText,
        // Generate a rich color object.
        augmentColor: augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: tonalOffset,
      },
      types[type],
    ),
    other,
  );
  return paletteOutput;
}

function createShape(cover) {
  return _extends(
    {
      barHeight: 46,
      borderRadius: 4,
      buttonBorderRadius: 23,
      listItemHeight: 46,
    },
    cover,
  );
}

function createSpacing(spacingInput) {
  if (spacingInput === void 0) {
    spacingInput = 8;
  }

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/design/layout/understanding-layout.html#pixel-density

  var transform;

  if (typeof spacingInput === 'function') {
    transform = spacingInput;
  } else {
    transform = function transform(factor) {
      return spacingInput * factor;
    };
  }

  var spacing = function spacing() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args
      .map(function (factor) {
        var output = transform(factor);
        return typeof output === 'number' ? output + 'px' : output;
      })
      .join(' ');
  };

  spacing.mui = true;
  return spacing;
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase',
};
var defaultFontFamily =
  'PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif';
var ellipsis = {
  width: 'auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref =
      typeof typography === 'function' ? typography(palette) : typography,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily =
      _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
    _ref$fontWeightLight = _ref.fontWeightLight,
    fontWeightLight =
      _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
    _ref$fontWeightRegula = _ref.fontWeightRegular,
    fontWeightRegular =
      _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
    _ref$fontWeightMedium = _ref.fontWeightMedium,
    fontWeightMedium =
      _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
    _ref$fontWeightBold = _ref.fontWeightBold,
    fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
    _ref$htmlFontSize = _ref.htmlFontSize,
    htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
    allVariants = _ref.allVariants,
    pxToRem2 = _ref.pxToRem,
    other = _objectWithoutPropertiesLoose(_ref, [
      'fontFamily',
      'fontSize',
      'fontWeightLight',
      'fontWeightRegular',
      'fontWeightMedium',
      'fontWeightBold',
      'htmlFontSize',
      'allVariants',
      'pxToRem',
    ]);

  {
    if (typeof fontSize !== 'number') {
      console.error('`fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('`htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem =
    pxToRem2 ||
    function (size) {
      return (size / htmlFontSize) * coef + 'rem';
    };

  var buildVariant = function buildVariant(
    fontWeight,
    size,
    lineHeight,
    letterSpacing,
    casing,
  ) {
    return _extends(
      {
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontSize: pxToRem(size),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight: lineHeight,
      },
      fontFamily === defaultFontFamily
        ? {
            letterSpacing: round(letterSpacing / size) + 'em',
          }
        : {},
      casing,
      allVariants,
    );
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 40, 1, -1.5),
    h2: buildVariant(fontWeightLight, 36, 1, -0.5),
    h3: buildVariant(fontWeightRegular, 32, 1.04, 0),
    h4: buildVariant(fontWeightRegular, 28, 1.17, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
  };
  return deepmerge(
    _extends(
      {
        ellipsis: ellipsis,
        htmlFontSize: htmlFontSize,
        pxToRem: pxToRem,
        round: round,
        // TODO To remove in v5?
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeightLight: fontWeightLight,
        fontWeightRegular: fontWeightRegular,
        fontWeightMedium: fontWeightMedium,
        fontWeightBold: fontWeightBold,
      },
      variants,
    ),
    other,
    {
      clone: false, // No need to clone deep
    },
  );
}

var shadowKeyUmbraOpacity = 0.16;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return [
    (arguments.length <= 0 ? undefined : arguments[0]) +
      'px ' +
      (arguments.length <= 1 ? undefined : arguments[1]) +
      'px ' +
      (arguments.length <= 2 ? undefined : arguments[2]) +
      'px ' +
      (arguments.length <= 3 ? undefined : arguments[3]) +
      'px rgba(0,0,0,' +
      shadowKeyUmbraOpacity +
      ')',
    (arguments.length <= 4 ? undefined : arguments[4]) +
      'px ' +
      (arguments.length <= 5 ? undefined : arguments[5]) +
      'px ' +
      (arguments.length <= 6 ? undefined : arguments[6]) +
      'px ' +
      (arguments.length <= 7 ? undefined : arguments[7]) +
      'px rgba(0,0,0,' +
      shadowKeyPenumbraOpacity +
      ')',
    (arguments.length <= 8 ? undefined : arguments[8]) +
      'px ' +
      (arguments.length <= 9 ? undefined : arguments[9]) +
      'px ' +
      (arguments.length <= 10 ? undefined : arguments[10]) +
      'px ' +
      (arguments.length <= 11 ? undefined : arguments[11]) +
      'px rgba(0,0,0,' +
      shadowAmbientShadowOpacity +
      ')',
  ].join(',');
}

var shadows = [
  'none',
  createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];

var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

function createTheme(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    _options$palette = _options.palette,
    paletteInput = _options$palette === void 0 ? {} : _options$palette,
    shadowsInput = _options.shadows,
    _options$spacing = _options.spacing,
    spacingInput = _options$spacing === void 0 ? 8 : _options$spacing,
    _options$typography = _options.typography,
    typographyInput = _options$typography === void 0 ? {} : _options$typography,
    _options$shape = _options.shape,
    shapeInput = _options$shape === void 0 ? {} : _options$shape,
    rest = _objectWithoutPropertiesLoose(_options, [
      'palette',
      'shadows',
      'spacing',
      'typography',
      'shape',
    ]);

  var palette = createPalette(paletteInput);

  var theme = _extends(
    {
      hairline: createHairline(palette),
      palette: palette,
      shadows: shadowsInput || shadows,
      shape: createShape(shapeInput),
      spacing: createSpacing(spacingInput),
      svg: svg,
      transitions: transitions,
      typography: createTypography(palette, typographyInput),
      zIndex: zIndex,
      device: device,
    },
    rest,
  );

  return theme;
}

var defaultTheme = createTheme();

var ThemeContext = React.createContext(defaultTheme);
var theming = reactJss.createTheming(ThemeContext);
var withTheme = theming.withTheme,
  useTheme = theming.useTheme,
  ThemeProvider = theming.ThemeProvider;

function createUseStyles(stylesOrCreator, options) {
  return reactJss.createUseStyles(
    stylesOrCreator,
    _extends(
      {
        theming: theming,
      },
      options,
    ),
  );
}

function styled(Component, options) {
  return reactJss.styled(
    Component,
    _extends(
      {
        theming: theming,
      },
      options,
    ),
  );
}

function withStyles(stylesOrCreator, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    name = _options.name,
    rest = _objectWithoutPropertiesLoose(_options, ['name']);

  return function (StyledComponent) {
    if (name) {
      StyledComponent.displayName = name;
    }

    return reactJss.withStyles(
      stylesOrCreator,
      _extends(
        {
          theming: theming,
        },
        rest,
      ),
    )(StyledComponent);
  };
}

exports.colorManipulator = colorManipulator;
exports.transitions = transitions;
exports.createTheme = createTheme;
exports.createUseStyles = createUseStyles;
exports.defaultTheme = defaultTheme;
exports.styled = styled;
exports.withStyles = withStyles;
exports.ThemeContext = ThemeContext;
exports.withTheme = withTheme;
exports.useTheme = useTheme;
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=wonder-ui-styles.js.map
