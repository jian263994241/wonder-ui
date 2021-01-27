'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');
var rjWithStyles = require('react-jss');
var rjWithStyles__default = _interopDefault(rjWithStyles);

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
var create = function create(props, options) {
  if (props === void 0) {
    props = 'all';
  }

  if (options === void 0) {
    options = {};
  }

  var _options = options,
    _options$duration = _options.duration,
    durationOption =
      _options$duration === void 0 ? 'standard' : _options$duration,
    _options$easing = _options.easing,
    easingOption = _options$easing === void 0 ? 'easeInOut' : _options$easing,
    _options$delay = _options.delay,
    delay = _options$delay === void 0 ? 0 : _options$delay;
  return (Array.isArray(props) ? props : [props])
    .map(function (animatedProp) {
      return (
        animatedProp +
        ' ' +
        (typeof durationOption === 'string'
          ? formatMs(duration[durationOption])
          : formatMs(durationOption)) +
        ' ' +
        easing[easingOption] +
        ' ' +
        (typeof delay === 'string' ? delay : formatMs(delay))
      );
    })
    .join(',');
};

var transitions = {
  __proto__: null,
  easing: easing,
  duration: duration,
  formatMs: formatMs,
  create: create,
};

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

var pixelRatio = 3;

function _create(position, color, coverStyles) {
  if (color === void 0) {
    color = '#999';
  }

  var styles;
  var base = {
    content: '""',
    position: 'absolute',
    backgroundColor: color,
    display: 'block',
    zIndex: 15,
  };
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
  if (typeof color !== 'string' && color.type) {
    return color;
  }

  if (typeof color === 'string' && color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  if (typeof color === 'string') {
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

    var values = color
      .substring(marker + 1, color.length - 1)
      .split(',')
      .map(function (value) {
        return parseFloat(value);
      });
    return {
      type: type,
      values: values,
    };
  }

  return color;
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
  if (typeof color === 'string' && color.indexOf('#') === 0) {
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
    type = 'rgba';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb,
  });
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

var colorManipulator = {
  __proto__: null,
  hexToRgb: hexToRgb,
  decomposeColor: decomposeColor,
  recomposeColor: recomposeColor,
  rgbToHex: rgbToHex,
  hslToRgb: hslToRgb,
  getLuminance: getLuminance,
  getContrastRatio: getContrastRatio,
  darken: darken,
  lighten: lighten,
  emphasize: emphasize,
  fade: fade,
};

var amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00',
};
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
var blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64',
};
var brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037',
};
var cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4',
};
var deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00',
};
var deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea',
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
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe',
};
var lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea',
};
var lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17',
};
var lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00',
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
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff',
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
var teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5',
};
var yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600',
};

var colors = {
  __proto__: null,
  amber: amber,
  blue: blue,
  blueGrey: blueGrey,
  brown: brown,
  cyan: cyan,
  deepOrange: deepOrange,
  deepPurple: deepPurple,
  green: green,
  grey: grey,
  indigo: indigo,
  lightBlue: lightBlue,
  lightGreen: lightGreen,
  lime: lime,
  orange: orange,
  pink: pink,
  purple: purple,
  red: red,
  teal: teal,
  yellow: yellow,
};

var common = {
  black: '#000',
  white: '#fff',
};
var light = {
  text: {
    primary: /*#__PURE__*/ fade(common.black, 0.87),
    secondary: /*#__PURE__*/ fade(common.black, 0.54),
    disabled: /*#__PURE__*/ fade(common.black, 0.38),
    hint: /*#__PURE__*/ fade(common.black, 0.38),
  },
  divider: grey[300],
  background: {
    paper: common.white,
    default: grey[50],
  },
  action: {
    // The color of an active action like an icon button.
    active: /*#__PURE__*/ fade(common.black, 0.54),
    // The color of an hovered action.
    hover: /*#__PURE__*/ fade(common.black, 0.08),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: /*#__PURE__*/ fade(common.black, 0.14),
    // The color of a disabled action.
    disabled: /*#__PURE__*/ fade(common.black, 0.26),
    // The background color of a disabled action.
    disabledBackground: /*#__PURE__*/ fade(common.black, 0.12),
  },
};
var dark = {
  text: {
    primary: /*#__PURE__*/ fade(common.white, 0.87),
    secondary: /*#__PURE__*/ fade(common.white, 0.7),
    disabled: /*#__PURE__*/ fade(common.white, 0.5),
    hint: /*#__PURE__*/ fade(common.white, 0.5),
  },
  divider: /*#__PURE__*/ fade(common.white, 0.12),
  background: {
    paper: grey[800],
    default: grey.A400,
  },
  action: {
    // The color of an active action like an icon button.
    active: common.white,
    // The color of an hovered action.
    hover: /*#__PURE__*/ fade(common.white, 0.1),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: /*#__PURE__*/ fade(common.white, 0.2),
    // The color of a disabled action.
    disabled: /*#__PURE__*/ fade(common.white, 0.3),
    // The background color of a disabled action.
    disabledBackground: /*#__PURE__*/ fade(common.white, 0.12),
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
  if (palette === void 0) {
    palette = {};
  }

  var _palette = palette,
    _palette$primary = _palette.primary,
    primary =
      _palette$primary === void 0
        ? {
            light: blue.A200,
            main: blue.A400,
            dark: blue.A700,
          }
        : _palette$primary,
    _palette$secondary = _palette.secondary,
    secondary =
      _palette$secondary === void 0
        ? {
            light: pink.A200,
            main: pink.A400,
            dark: pink.A700,
          }
        : _palette$secondary,
    _palette$error = _palette.error,
    error =
      _palette$error === void 0
        ? {
            light: red[300],
            main: red[500],
            dark: red[700],
          }
        : _palette$error,
    _palette$warning = _palette.warning,
    warning =
      _palette$warning === void 0
        ? {
            light: orange[300],
            main: orange[500],
            dark: orange[700],
          }
        : _palette$warning,
    _palette$info = _palette.info,
    info =
      _palette$info === void 0
        ? {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
          }
        : _palette$info,
    _palette$success = _palette.success,
    success =
      _palette$success === void 0
        ? {
            light: green[300],
            main: green[500],
            dark: green[700],
          }
        : _palette$success,
    _palette$type = _palette.type,
    type = _palette$type === void 0 ? 'light' : _palette$type,
    _palette$contrastThre = _palette.contrastThreshold,
    contrastThreshold =
      _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
    _palette$tonalOffset = _palette.tonalOffset,
    tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset;
  var types = {
    dark: dark,
    light: light,
  };

  function getContrastText(background) {
    var contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    {
      var contrast = getContrastRatio(background, contrastText);

      if (contrast < 3) {
        console.error(
          [
            'The contrast ratio of ' +
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
      mainShade = '500';
    }

    if (lightShade === void 0) {
      lightShade = '300';
    }

    if (darkShade === void 0) {
      darkShade = '700';
    }

    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  }

  return _extends(
    {
      common: common,
      type: type,
      primary: augmentColor(primary),
      secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
      error: augmentColor(error),
      warning: augmentColor(warning),
      info: augmentColor(info),
      success: augmentColor(success),
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
    colors,
  );
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase',
};
var defaultFontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
function createTypography(typography) {
  if (typography === void 0) {
    typography = {};
  }

  var _typography = typography,
    _typography$fontFamil = _typography.fontFamily,
    fontFamily =
      _typography$fontFamil === void 0
        ? defaultFontFamily
        : _typography$fontFamil,
    _typography$fontSize = _typography.fontSize,
    fontSize = _typography$fontSize === void 0 ? 14 : _typography$fontSize,
    _typography$fontWeigh = _typography.fontWeightLight,
    fontWeightLight =
      _typography$fontWeigh === void 0 ? 300 : _typography$fontWeigh,
    _typography$fontWeigh2 = _typography.fontWeightRegular,
    fontWeightRegular =
      _typography$fontWeigh2 === void 0 ? 400 : _typography$fontWeigh2,
    _typography$fontWeigh3 = _typography.fontWeightMedium,
    fontWeightMedium =
      _typography$fontWeigh3 === void 0 ? 500 : _typography$fontWeigh3,
    _typography$fontWeigh4 = _typography.fontWeightBold,
    fontWeightBold =
      _typography$fontWeigh4 === void 0 ? 700 : _typography$fontWeigh4,
    _typography$htmlFontS = _typography.htmlFontSize,
    htmlFontSize =
      _typography$htmlFontS === void 0 ? 16 : _typography$htmlFontS;
  var coef = fontSize / 14;

  var pxToRem = function pxToRem(size) {
    return (size / htmlFontSize) * coef + 'rem';
  };

  function buildVariant(
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    allVariants,
  ) {
    return _extends(
      {
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontSize: pxToRem(fontSize),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight: lineHeight,
      },
      fontFamily === defaultFontFamily
        ? {
            letterSpacing: round(letterSpacing / fontSize) + 'em',
          }
        : {},
      allVariants,
    );
  }

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
  return _extends(
    {
      htmlFontSize: htmlFontSize,
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeightLight: fontWeightLight,
      fontWeightRegular: fontWeightRegular,
      fontWeightMedium: fontWeightMedium,
      fontWeightBold: fontWeightBold,
      pxToRem: pxToRem,
    },
    variants,
  );
}

function createSpacing(spacingInput) {
  if (spacingInput === void 0) {
    spacingInput = 8;
  }

  var transform =
    typeof spacingInput === 'function'
      ? spacingInput
      : function (factor) {
          return spacingInput * factor;
        };

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

  return spacing;
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
  /*#__PURE__*/ createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  /*#__PURE__*/ createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  /*#__PURE__*/ createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  /*#__PURE__*/ createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  /*#__PURE__*/ createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  /*#__PURE__*/ createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  /*#__PURE__*/ createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  /*#__PURE__*/ createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  /*#__PURE__*/ createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  /*#__PURE__*/ createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  /*#__PURE__*/ createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  /*#__PURE__*/ createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  /*#__PURE__*/ createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  /*#__PURE__*/ createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  /*#__PURE__*/ createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  /*#__PURE__*/ createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  /*#__PURE__*/ createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  /*#__PURE__*/ createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  /*#__PURE__*/ createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  /*#__PURE__*/ createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  /*#__PURE__*/ createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  /*#__PURE__*/ createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  /*#__PURE__*/ createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  /*#__PURE__*/ createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
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

var create$1 = function create(svgString) {
  return 'url(data:image/svg+xml;utf8,' + encodeURIComponent(svgString) + ')';
};

var svg = {
  __proto__: null,
  create: create$1,
};

function createTheme(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    paletteInput = _options.palette,
    _options$spacing = _options.spacing,
    spacing = _options$spacing === void 0 ? 8 : _options$spacing,
    shapeInput = _options.shape,
    typography = _options.typography;
  var palette = createPalette(paletteInput);
  return {
    palette: palette,
    typography: createTypography(typography),
    spacing: createSpacing(spacing),
    hairline: createHairline(palette),
    transitions: transitions,
    shape: createShape(shapeInput),
    shadows: shadows,
    zIndex: zIndex,
    svg: svg,
  };
}

var theme = /*#__PURE__*/ createTheme();

var ThemeContext_ = /*#__PURE__*/ React.createContext(theme);
var theming = /*#__PURE__*/ rjWithStyles.createTheming(ThemeContext_);
var ThemeProvider = theming.ThemeProvider,
  ThemeContext = theming.context,
  useTheme = theming.useTheme,
  withTheme = theming.withTheme;

function createUseStyles(styles, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    _options$theming = _options.theming,
    theming$1 = _options$theming === void 0 ? theming : _options$theming,
    rest = _objectWithoutPropertiesLoose(_options, ['theming']);

  return rjWithStyles.createUseStyles(
    styles,
    _extends(
      {
        theming: theming$1,
      },
      rest,
    ),
  );
}

function createWithStyles(styles, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    _options$theming = _options.theming,
    theming$1 = _options$theming === void 0 ? theming : _options$theming,
    rest = _objectWithoutPropertiesLoose(_options, ['theming']);

  return rjWithStyles__default(
    styles,
    _extends(
      {
        theming: theming$1,
      },
      rest,
    ),
  );
}

function createStyles(styles) {
  return styles;
}

Object.defineProperty(exports, 'JssContext', {
  enumerable: true,
  get: function () {
    return rjWithStyles.JssContext;
  },
});
Object.defineProperty(exports, 'JssProvider', {
  enumerable: true,
  get: function () {
    return rjWithStyles.JssProvider;
  },
});
Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function () {
    return rjWithStyles.SheetsRegistry;
  },
});
Object.defineProperty(exports, 'createGenerateId', {
  enumerable: true,
  get: function () {
    return rjWithStyles.createGenerateId;
  },
});
Object.defineProperty(exports, 'createTheming', {
  enumerable: true,
  get: function () {
    return rjWithStyles.createTheming;
  },
});
Object.defineProperty(exports, 'jss', {
  enumerable: true,
  get: function () {
    return rjWithStyles.jss;
  },
});
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
exports.colorManipulator = colorManipulator;
exports.createStyles = createStyles;
exports.createTheme = createTheme;
exports.createUseStyles = createUseStyles;
exports.defaultTheme = theme;
exports.theming = theming;
exports.transitions = transitions;
exports.useTheme = useTheme;
exports.withStyles = createWithStyles;
exports.withTheme = withTheme;
//# sourceMappingURL=styles.cjs.development.js.map
