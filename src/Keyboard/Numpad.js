'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Backspace = require('../SvgIcon/Backspace');

var _Backspace2 = _interopRequireDefault(_Backspace);

var _Styled = require('./Styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Numpad = function (_Component) {
  (0, _inherits3.default)(Numpad, _Component);

  function Numpad() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Numpad);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Numpad.__proto__ || (0, _getPrototypeOf2.default)(Numpad)).call.apply(_ref, [this].concat(args))), _this), _this.getkeys = function (extraKeys, random) {
      var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

      if (random) {
        keys.sort(function () {
          return 0.5 - Math.random();
        });
      }

      keys.splice(keys.length - 1, 0, extraKeys[0]);
      keys.push(extraKeys[1]);

      return keys;
    }, _this.renderKeys = function (key) {
      var btn = key;

      if (btn === 'del') {
        btn = _react2.default.createElement(_Backspace2.default, null);
      }

      var valueFormat = function valueFormat(value, key, maxLength) {
        var val = String(value);
        key = String(key);

        if (key === 'del') {
          return val.slice(0, val.length - 1);
        }

        if (maxLength && val.length >= maxLength) {
          return val;
        }

        if (key === 'x') {
          return val + key;
        }

        if (key === '00' && val === '') {
          return '';
        }

        if (key === '.') {
          if (val.indexOf('.') > -1) {
            return val;
          }
          if (val === '') {
            return '0.' + val;
          }
        }

        return val + key;
      };

      var keyChange = function keyChange() {
        var maxLength = _this.props.maxLength;
        var onChange = _this.props.onChange;
        var value = _this.props.value;
        if (typeof key === 'number' || typeof key === 'string' || key === 'del') {
          var val = valueFormat(value, key, maxLength);
          if (value != val) {
            onChange && onChange(val);
          }
        } else if (key === 'close') {
          onCancel && onCancel();
        }
      };

      var specialkey = function specialkey(key) {

        if (key === 'del') {
          return 'specialkey backspace ' + (_this.props.extraKey === null ? 'transparent' : '');
        }
        if (key === null) {
          return 'specialkey block';
        }
        return '';
      };

      return _react2.default.createElement(
        _Styled.StyleNumpadButton,
        { key: key, onClick: keyChange, className: specialkey(key) },
        btn
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Numpad, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {

      return false;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          random = _props.random,
          extraKey = _props.extraKey;

      this.keys = this.getkeys([extraKey, 'del'], random);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          dark = _props2.dark,
          extraKeys = _props2.extraKeys,
          maxLength = _props2.maxLength,
          onChange = _props2.onChange,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'dark', 'extraKeys', 'maxLength', 'onChange']);


      var List = function List(_ref2) {
        var keys = _ref2.keys;


        var result = [];
        keys.forEach(function (k, i) {
          if (i % 3 === 0) {
            result.push(_react2.default.createElement(
              'li',
              { key: i + ',' + (i + 3) },
              keys.slice(i, i + 3)
            ));
          }
        });
        return _react2.default.createElement(
          _Styled.StyleKeyboard,
          null,
          result
        );
      };

      return _react2.default.createElement(List, { keys: this.keys.map(this.renderKeys) });
    }
  }]);
  return Numpad;
}(_react.Component);

Numpad.uiName = 'Numpad';
Numpad.propTypes = {
  className: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  random: _propTypes2.default.bool,
  extraKey: _propTypes2.default.any,
  maxLength: _propTypes2.default.number,
  value: _propTypes2.default.string.isRequired
};
Numpad.defaultProps = {
  value: '',
  extraKey: '00'
};
exports.default = Numpad;