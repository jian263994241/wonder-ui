'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Styled = require('./Styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = function (_Component) {
  (0, _inherits3.default)(Keyboard, _Component);

  function Keyboard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Keyboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Keyboard.__proto__ || (0, _getPrototypeOf2.default)(Keyboard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this.input = null, _this.getInput = function (input) {
      var currentInput = document.getElementById(input);
      var blur = document.activeElement.blur;

      if (_this.input && _this.input !== currentInput) {
        _this.input.removeEventListener('click', blur);
      }

      if (currentInput) {
        _this.input = currentInput;
        _this.input.readOnly = true;
        _this.input.addEventListener('click', blur);
        _this.setState({ value: currentInput.value });
      }
    }, _this.getElement = function () {
      return _this.modal;
    }, _this.getCancelIgnore = function () {
      return _this.input;
    }, _this.cancelIgnore = function (e) {
      var _target = e.target;
      var getCancelIgnore = _this.getCancelIgnore;
      var onCancel = _this.props.onCancel;

      if (!getCancelIgnore || !getCancelIgnore() || _this.getElement().contains(_target)) return false;
      var elements = getCancelIgnore();
      var result = false;
      if (Array.isArray(elements)) {
        elements.every(function (element, i) {
          if (element.contains(_target)) {
            result = true;
            return false;
          } else {
            return true;
          }
        });
      } else {
        if (elements.contains(_target)) {
          result = true;
        }
      }

      if (!result && _this.props.visible && onCancel) {

        onCancel();
      }

      return result;
    }, _this.reset = function () {
      _this.setState({ value: '' });
      _this.input.value = '';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Keyboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getInput(this.props.input);
      if (!this.props.inline) {
        document.addEventListener('touchstart', this.cancelIgnore);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.input != this.props.input) {
        this.getInput(nextProps.input);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.props.inline) {
        document.removeEventListener('touchstart', this.cancelIgnore);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          input = _props.input,
          children = _props.children,
          inline = _props.inline,
          dark = _props.dark,
          extraKey = _props.extraKey,
          random = _props.random,
          keypad = _props.keypad,
          maxLength = _props.maxLength,
          visible = _props.visible,
          onCancel = _props.onCancel,
          onChange = _props.onChange,
          title = _props.title,
          closeButton = _props.closeButton,
          closeText = _props.closeText,
          rest = (0, _objectWithoutProperties3.default)(_props, ['input', 'children', 'inline', 'dark', 'extraKey', 'random', 'keypad', 'maxLength', 'visible', 'onCancel', 'onChange', 'title', 'closeButton', 'closeText']);


      var setValue = function setValue(a) {

        if (_this2.input) {
          _this2.setState({ value: a });
          _this2.input.value = a;
          _this2.input.scrollLeft = _this2.input.scrollWidth;
          onChange && onChange(a);
        }
      };

      var props = null;

      if (keypad.uiName == 'Numpad') {
        props = {
          value: this.state.value,
          onChange: setValue,
          random: random,
          maxLength: maxLength,
          extraKey: extraKey
        };
      } else {
        props = {
          value: this.state.value,
          onChange: setValue,
          done: onCancel,
          maxLength: maxLength
        };
      }

      var toolbar = _react2.default.createElement(
        _Styled.StyleToolbar,
        null,
        _react2.default.createElement(
          'div',
          { className: 'right' },
          closeButton && _react2.default.createElement(
            'span',
            { onClick: onCancel },
            closeText
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'center' },
          title
        )
      );

      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: { mode: dark ? 'dark' : 'light' } },
        _react2.default.createElement(
          _Modal2.default,
          (0, _extends3.default)({
            visible: visible,
            inline: inline,
            fade: false,
            overlay: false,
            getContainer: function getContainer(x) {
              return _this2.modal = x;
            }
          }, rest),
          toolbar,
          (0, _react.createElement)(keypad, props)
        )
      );
    }
  }]);
  return Keyboard;
}(_react.Component);

Keyboard.propTypes = {

  /**
   * 是否显示关闭按钮
   */
  closeButton: _propTypes2.default.bool,

  /**
   * 关闭按钮的文本
   */
  closeText: _propTypes2.default.string,

  /**
   * keypad = {Numpad} 时 定义左下角按键, 可以是 '00', 'x', '.' , null
   */

  extraKey: _propTypes2.default.any,

  /**
   * 是否显示为暗色主题
   */

  dark: _propTypes2.default.bool,

  /**
   * Input Id
   */

  input: _propTypes2.default.string,

  /**
   * 为ture时, 直接显示
   */
  inline: _propTypes2.default.bool,

  /**
   * 忽略点击的区域
   */
  getCancelIgnore: _propTypes2.default.func,

  /**
   * 键盘套件  Enpad/Numpad
   */
  keypad: _propTypes2.default.func.isRequired,

  /**
   * 设置标题栏显示的内容
   */
  title: _propTypes2.default.element,

  /**
   * 关闭时回调方法
   */
  onCancel: _propTypes2.default.func,

  /**
   * 是否显示键盘
   */
  visible: _propTypes2.default.bool,

  /**
   * 按键时触发
   */
  onChange: _propTypes2.default.func

};
Keyboard.defaultProps = {
  title: null,
  dark: false,
  inline: false,
  closeButton: true,
  closeText: '关闭',
  getCancelIgnore: null,
  visible: false,
  onCancel: null,
  input: ''
};
exports.default = Keyboard;