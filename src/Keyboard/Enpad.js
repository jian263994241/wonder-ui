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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('./Styled');

var _Backspace = require('../icons/Backspace');

var _Backspace2 = _interopRequireDefault(_Backspace);

var _Shift = require('../icons/Shift');

var _Shift2 = _interopRequireDefault(_Shift);

var _ShiftFill = require('../icons/ShiftFill');

var _ShiftFill2 = _interopRequireDefault(_ShiftFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Enpad = function (_Component) {
  (0, _inherits3.default)(Enpad, _Component);

  function Enpad(props) {
    (0, _classCallCheck3.default)(this, Enpad);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Enpad.__proto__ || (0, _getPrototypeOf2.default)(Enpad)).call(this, props));

    _this.state = {
      padId: 'lowerCase'
    };

    _this.renderKeys = function (keys) {
      return keys.split('').map(function (item, index) {
        return _react2.default.createElement(
          _Styled.StyleEnpadButton,
          { key: index, onClick: _this.keypress('main', item), dark: _this.props.dark },
          item
        );
      });
    };

    _this.renderSpecialkey = function (keys, name, click) {
      return (
        // <button className={`${styles['specialkey']} ${styles[keys]}`} onClick={click}>{name}</button>
        _react2.default.createElement(
          _Styled.StyleEnpadButton,
          { className: 'specialkey ' + keys, onClick: click, dark: _this.props.dark },
          name
        )
      );
    };

    _this.del = function (value) {
      return String(value).slice(0, value.length - 1);
    };

    _this.add = function (value, key) {
      var maxLength = _this.props.maxLength;

      if (maxLength && value.length >= maxLength) {
        return value;
      }
      return value + key;
    };

    _this.done = function () {
      var done = _this.props.done;

      done && done();
    };

    _this.keypress = function (type, key) {
      return function () {
        var onChange = _this.props.onChange;
        var value = _this.props.value;
        switch (type) {
          case 'backspace':
            onChange && onChange(_this.del(value));
            break;
          case 'main':
            onChange && onChange(_this.add(value, key));
            break;
          default:
        }
      };
    };

    _this.reset = function () {
      return _this.setState({ padId: 'lowerCase' });
    };

    _this.switchPad = function (id) {
      return function () {
        return _this.setState({ padId: id });
      };
    };

    var renderKeys = _this.renderKeys;
    var renderSpecialkey = _this.renderSpecialkey;
    var pads = _this.pads = {};

    pads['lowerCase'] = _react2.default.createElement(
      _Styled.StyleKeyboard,
      null,
      _react2.default.createElement(
        'li',
        null,
        renderKeys('qwertyuiop')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderKeys('asdfghjkl')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('shift', _react2.default.createElement(_Shift2.default, null), _this.switchPad('upperCase')),
        renderKeys('zxcvbnm'),
        renderSpecialkey('backspace', _react2.default.createElement(_Backspace2.default, null), _this.keypress('backspace'))
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('numbers', '.?123', _this.switchPad('numbers')),
        renderSpecialkey('space', '空格', _this.keypress('main', ' ')),
        renderSpecialkey('return', '完成', _this.done)
      )
    );

    pads['upperCase'] = _react2.default.createElement(
      _Styled.StyleKeyboard,
      null,
      _react2.default.createElement(
        'li',
        null,
        renderKeys('QWERTYUIOP')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderKeys('ASDFGHJKL')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('shift', _react2.default.createElement(_ShiftFill2.default, null), _this.switchPad('lowerCase')),
        renderKeys('ZXCVBNM'),
        renderSpecialkey('backspace', _react2.default.createElement(_Backspace2.default, null), _this.keypress('backspace'))
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('numbers', '.?123', _this.switchPad('numbers')),
        renderSpecialkey('space', '空格', _this.keypress('main', ' ')),
        renderSpecialkey('return', '完成', _this.done)
      )
    );

    pads['numbers'] = _react2.default.createElement(
      _Styled.StyleKeyboard,
      null,
      _react2.default.createElement(
        'li',
        null,
        renderKeys('1234567890')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderKeys('-/:()$&@"')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('shift', '#+=', _this.switchPad('symbol')),
        renderKeys('.,?!\''),
        renderSpecialkey('backspace', _react2.default.createElement(_Backspace2.default, null), _this.keypress('backspace'))
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('numbers', 'ABC', _this.switchPad('lowerCase')),
        renderSpecialkey('space', '空格', _this.keypress('main', ' ')),
        renderSpecialkey('return', '完成', _this.done)
      )
    );

    pads['symbol'] = _react2.default.createElement(
      _Styled.StyleKeyboard,
      null,
      _react2.default.createElement(
        'li',
        null,
        renderKeys('[]{}#%^*+=')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderKeys('_\|~<>€£￥⦁')
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('shift', '123', _this.switchPad('numbers')),
        renderKeys('.,?!\''),
        renderSpecialkey('backspace', _react2.default.createElement(_Backspace2.default, null), _this.keypress('backspace'))
      ),
      _react2.default.createElement(
        'li',
        null,
        renderSpecialkey('numbers', 'ABC', _this.switchPad('lowerCase')),
        renderSpecialkey('space', '空格', _this.keypress('main', ' ')),
        renderSpecialkey('return', '完成', _this.done)
      )
    );
    return _this;
  }

  (0, _createClass3.default)(Enpad, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.padId != this.state.padId) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {

      return this.pads[this.state.padId];
    }
  }]);
  return Enpad;
}(_react.Component);

Enpad.defaultProps = {
  value: ''
};
Enpad.uiName = 'Enpad';
exports.default = Enpad;