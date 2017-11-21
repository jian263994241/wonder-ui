'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleNumpadButton = exports.StyleEnpadButton = exports.StyleButton = exports.StyleKeyboard = exports.StyleToolbar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheming = require('styled-theming');

var _styledTheming2 = _interopRequireDefault(_styledTheming);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyboardBgColor = (0, _styledTheming2.default)('mode', {
  light: '#D2D5DB',
  dark: '#6A7286'
});

var toolbarTextColor = (0, _styledTheming2.default)('mode', {
  light: '#007AFF',
  dark: '#fff'
});

var toolbarBgColor = (0, _styledTheming2.default)('mode', {
  light: '#BCC4CA',
  dark: '#5A6274'
});

var returnTextColor = (0, _styledTheming2.default)('mode', {
  light: '#000',
  dark: '#fff'
});

var returnBgColor = (0, _styledTheming2.default)('mode', {
  light: '#ACAEB4',
  dark: '#F54D4F'
});

var shadowColor = (0, _styledTheming2.default)('mode', {
  light: '#848688',
  dark: '#6A7286'
});

var spaceBgColor = (0, _styledTheming2.default)('mode', {
  light: '#ACAEB4',
  dark: '#fff'
});

var StyleToolbar = _styledComponents2.default.div(['font-size:12px;color:', ';background-color:', ';height:44px;text-align:center;padding:12px;font-size:16px;line-height:1;box-sizing:border-box;white-space:nowrap;overflow:hidden;width:100%;position:relative;&::after{content:\'\';clear:both;display:block;height:0;overflow:hidden;}.center{position:absolute;display:block;width:100%;height:100%;padding:0;margin:0 -10px;text-align:center;white-space:nowrap;box-sizing:border-box;z-index:1;box-sizing:border-box;}.left{float:left;position:relative;z-index:2;}.right{float:right;position:relative;z-index:2;span,a{vertical-align:middle;}}'], toolbarTextColor, toolbarBgColor);

var StyleKeyboard = _styledComponents2.default.ul(['width:100%;box-sizing:border-box;list-style:none;padding:0;margin:0;overflow:hidden;user-select:none;padding:5px 0;background-color:', ';> li{padding:5px 0;display:flex;justify-content:center;}'], keyboardBgColor);

var StyleButton = _styledComponents2.default.div(['width:', ';height:', ';display:block;color:#000;font-size:', ';font-family:HelveticaNeue,Helvetica,Arial,sans-serif;background-color:#fff;text-decoration:none;text-align:center;outline:none;border:0;border-bottom:1px solid ', ';border-radius:4px;box-sizing:border-box;margin:0 3px;padding:', ';;user-select:none;-webkit-tap-highlight-color:transparent;&.specialkey{background-color:#ACAEB4;}&.block{visibility:hidden;}&.transparent{background-color:transparent;border-bottom:none;}&:active,&.active-state{opacity:0.6;}'], function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.fontSize;
}, shadowColor, function (props) {
  return props.padding;
});

var StyleEnpadButton = (0, _styledComponents2.default)(StyleButton).attrs({
  width: '8.6%',
  height: '42px',
  padding: '8px 3px',
  fontSize: '22.5px'
})(['> svg{position:relative;vertical-align:middle;}&.specialkey{font-size:16px;padding:3px;line-height:2;}&.backspace,&.shift{width:10%;flex-grow:2;}&.numbers{width:25%;}&.space{flex-grow:2;background-color:', ';}&.return{width:25%;color:', ';background-color:', ';}'], spaceBgColor, returnTextColor, returnBgColor);

var StyleNumpadButton = (0, _styledComponents2.default)(StyleButton).attrs({
  width: '33%',
  height: '46px',
  padding: '7px 3px',
  fontSize: '25px'
})(['']);

exports.StyleToolbar = StyleToolbar;
exports.StyleKeyboard = StyleKeyboard;
exports.StyleButton = StyleButton;
exports.StyleEnpadButton = StyleEnpadButton;
exports.StyleNumpadButton = StyleNumpadButton;