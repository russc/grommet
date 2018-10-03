'use strict';

exports.__esModule = true;
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box');

var _hocs = require('../hocs');

var _utils = require('../../utils');

var _StyledButton = require('./StyledButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isDarkBackground = function isDarkBackground(props) {
  var backgroundColor = (0, _utils.normalizeBackground)((0, _utils.normalizeColor)(props.color || props.theme.button.primary.color || props.theme.global.control.color || 'brand', props.theme), props.theme);

  return (0, _utils.colorIsDark)((0, _utils.colorForName)(backgroundColor, props.theme));
};

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Button should not have children if icon or label is provided');
    }
    return _this;
  }

  Button.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        color = _props.color,
        forwardRef = _props.forwardRef,
        children = _props.children,
        icon = _props.icon,
        fill = _props.fill,
        focus = _props.focus,
        href = _props.href,
        label = _props.label,
        onClick = _props.onClick,
        plain = _props.plain,
        primary = _props.primary,
        reverse = _props.reverse,
        theme = _props.theme,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'color', 'forwardRef', 'children', 'icon', 'fill', 'focus', 'href', 'label', 'onClick', 'plain', 'primary', 'reverse', 'theme', 'type']);

    var buttonIcon = icon;
    // only change color if user did not specify the color themselves...
    if (primary && icon && !icon.props.color) {
      buttonIcon = (0, _react.cloneElement)(icon, {
        color: this.props.theme.global.text.color[isDarkBackground(this.props) ? 'dark' : 'light']
      });
    }
    var first = reverse ? label : buttonIcon;
    var second = reverse ? buttonIcon : label;

    var disabled = !href && !onClick && ['reset', 'submit'].indexOf(type) === -1;

    return _react2.default.createElement(
      _StyledButton.StyledButton,
      _extends({}, rest, {
        as: href ? 'a' : undefined,
        ref: forwardRef,
        'aria-label': a11yTitle,
        colorValue: color,
        disabled: disabled,
        hasIcon: !!icon,
        hasLabel: !!label,
        fillContainer: fill,
        focus: focus,
        href: href,
        onClick: onClick,
        plain: typeof plain !== 'undefined' ? plain : _react.Children.count(children) > 0 || icon && !label,
        primary: primary,
        theme: theme,
        type: !href ? type : undefined
      }),
      first || second ? _react2.default.createElement(
        _Box.Box,
        {
          direction: 'row',
          align: 'center',
          justify: 'center',
          gap: 'small'
        },
        first,
        second
      ) : children
    );
  };

  return Button;
}(_react.Component);

Button.defaultProps = {
  type: 'button',
  focusIndicator: true
};


var ButtonDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  ButtonDoc = require('./doc').doc(Button); // eslint-disable-line global-require
}
var ButtonWrapper = (0, _recompose.compose)(_hocs.withFocus, _hocs.withTheme, _hocs.withForwardRef)(ButtonDoc || Button);

exports.Button = ButtonWrapper;