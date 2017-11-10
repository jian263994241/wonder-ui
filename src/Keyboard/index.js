'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enpad = exports.Numpad = exports.Keyboard = undefined;

var _Numpad = require('./Numpad');

var _Numpad2 = _interopRequireDefault(_Numpad);

var _Enpad = require('./Enpad');

var _Enpad2 = _interopRequireDefault(_Enpad);

var _Keyboard = require('./Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RcKeyboard = { Keyboard: _Keyboard2.default, Numpad: _Numpad2.default, Enpad: _Enpad2.default };

exports.Keyboard = _Keyboard2.default;
exports.Numpad = _Numpad2.default;
exports.Enpad = _Enpad2.default;
exports.default = RcKeyboard;