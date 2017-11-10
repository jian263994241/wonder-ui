'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _rcMounter = require('rc-mounter');

var _rcMounter2 = _interopRequireDefault(_rcMounter);

var _TransitionMotion = require('react-motion/lib/TransitionMotion');

var _TransitionMotion2 = _interopRequireDefault(_TransitionMotion);

var _spring = require('react-motion/lib/spring');

var _spring2 = _interopRequireDefault(_spring);

var _Styled = require('./Styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.getStyles = function () {

      var config = { stiffness: 120, damping: 17 };

      if (_this.props.visible) {
        return [{ key: 'a', style: { x: (0, _spring2.default)(0, config) } }];
      }

      return [{ key: 'a', style: { x: (0, _spring2.default)(100, config) } }];
    }, _this.getModal = function () {
      return (0, _reactDom.findDOMNode)(_this.refs.modal);
    }, _this.renderModal = function (interpolatedStyles) {

      return _react2.default.createElement(
        'div',
        null,
        interpolatedStyles.map(function (_ref2) {
          var key = _ref2.key,
              style = _ref2.style;

          return _react2.default.createElement(
            _Styled.StyleModal,
            {
              key: key,
              style: { transform: 'translate3d(0, ' + style.x + '%, 0)', display: style.x >= 98 ? 'none' : 'block' } },
            _this.props.children
          );
        })
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      var _styles = this.getStyles();
      var Element = this.props.inline ? 'div' : _rcMounter2.default;

      return _react2.default.createElement(
        Element,
        {
          className: className,
          style: style
        },
        _react2.default.createElement(
          _TransitionMotion2.default,
          { styles: _styles, ref: 'modal' },
          this.renderModal
        )
      );
    }
  }]);
  return Modal;
}(_react.Component);

exports.default = Modal;