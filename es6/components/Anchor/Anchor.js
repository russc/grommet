var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { Text } from '../Text';
import { withFocus, withForwardRef, withTheme } from '../hocs';

import { StyledAnchor } from './StyledAnchor';

var Anchor = function (_Component) {
  _inherits(Anchor, _Component);

  function Anchor(props) {
    _classCallCheck(this, Anchor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }
    return _this;
  }

  Anchor.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        disabled = _props.disabled,
        forwardRef = _props.forwardRef,
        href = _props.href,
        icon = _props.icon,
        focus = _props.focus,
        label = _props.label,
        primary = _props.primary,
        onClick = _props.onClick,
        reverse = _props.reverse,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'disabled', 'forwardRef', 'href', 'icon', 'focus', 'label', 'primary', 'onClick', 'reverse', 'theme']);

    var anchorLabel = typeof label === 'string' ? React.createElement(
      Text,
      null,
      React.createElement(
        'strong',
        null,
        label
      )
    ) : label;

    var first = reverse ? anchorLabel : icon;
    var second = reverse ? icon : anchorLabel;

    return React.createElement(
      StyledAnchor,
      _extends({}, rest, {
        ref: forwardRef,
        'aria-label': a11yTitle,
        disabled: disabled,
        hasIcon: !!icon,
        focus: focus,
        hasLabel: label,
        primary: primary,
        reverse: reverse,
        theme: theme,
        href: !disabled ? href : undefined,
        onClick: !disabled ? onClick : undefined
      }),
      first || second ? React.createElement(
        Box,
        { tag: 'span', direction: 'row', align: 'center', gap: 'small', style: { display: 'inline-flex' } },
        first,
        second
      ) : children
    );
  };

  return Anchor;
}(Component);

var AnchorDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  AnchorDoc = require('./doc').doc(Anchor); // eslint-disable-line global-require
}
var AnchorWrapper = compose(withFocus, withTheme, withForwardRef)(AnchorDoc || Anchor);

export { AnchorWrapper as Anchor };