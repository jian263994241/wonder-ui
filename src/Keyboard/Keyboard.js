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

var _Modal = require('./Modal');

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

      if (currentInput) {
        _this.input = currentInput;
        currentInput.readOnly = true;
        _this.setState({ value: currentInput.value });
      } else {
        _this.input = null;
      }
    }, _this.getElement = function () {
      return _this.refs.modal.getModal();
    }, _this.getCancelIgnore = function () {
      return _this.input;
    }, _this.cancelIgnore = function (e) {
      var _target = e.target;
      var getCancelIgnore = _this.getCancelIgnore;
      var onCancel = _this.props.onCancel;
      _this.refs.modal.getModal();
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Keyboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getInput(this.props.input);
      if (!this.props.inline) {
        document.addEventListener('click', this.cancelIgnore);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.input != this.props.input) {
        this.getInput(nextProps.input);
      }
      if (nextProps.visible != this.props.visible) {
        document.activeElement.blur();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.props.inline) {
        document.removeEventListener('click', this.cancelIgnore);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      if (prevProps.visible && prevProps.visible != this.props.visible) {
        var reset = this.refs.pad.reset;
        reset && reset();
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
          value = _props.value,
          dark = _props.dark,
          extraKey = _props.extraKey,
          random = _props.random,
          keypad = _props.keypad,
          maxLength = _props.maxLength,
          style = _props.style,
          visible = _props.visible,
          onCancel = _props.onCancel,
          title = _props.title,
          closeButton = _props.closeButton,
          closeText = _props.closeText,
          rest = (0, _objectWithoutProperties3.default)(_props, ['input', 'children', 'inline', 'value', 'dark', 'extraKey', 'random', 'keypad', 'maxLength', 'style', 'visible', 'onCancel', 'title', 'closeButton', 'closeText']);


      var setValue = function setValue(a) {
        _this2.setState({ value: a });
        if (_this2.input) {
          _this2.input.value = a;
          _this2.input.scrollLeft = _this2.input.scrollWidth;
        }
      };

      var props = null;

      if (keypad.uiName == 'Numpad') {
        props = {
          value: this.state.value,
          onChange: setValue,
          random: random,
          maxLength: maxLength,
          extraKey: extraKey,
          ref: 'pad'
        };
      } else {
        props = {
          value: this.state.value,
          onChange: setValue,
          done: onCancel,
          maxLength: maxLength,
          ref: 'pad'
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
          (0, _extends3.default)({ visible: visible, inline: inline }, rest, { ref: 'modal' }),
          toolbar,
          (0, _react.createElement)(keypad, props)
        )
      );
    }
  }]);
  return Keyboard;
}(_react.Component);

Keyboard.propTypes = {
  inline: _propTypes2.default.bool,
  keypad: _propTypes2.default.func.isRequired,
  getCancelIgnore: _propTypes2.default.func
};
Keyboard.defaultProps = {
  closeButton: true,
  closeText: '关闭'
};
exports.default = Keyboard;