function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';
import { Box } from '../Box';
import { Text } from '../Text';
import { withFocus, withForwardRef, withTheme } from '../hocs';
import { StyledAnchor } from './StyledAnchor';

var Anchor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Anchor, _Component);

  function Anchor(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }

    return _this;
  }

  var _proto = Anchor.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        a11yTitle = _this$props.a11yTitle,
        children = _this$props.children,
        disabled = _this$props.disabled,
        forwardRef = _this$props.forwardRef,
        href = _this$props.href,
        icon = _this$props.icon,
        focus = _this$props.focus,
        label = _this$props.label,
        primary = _this$props.primary,
        onClick = _this$props.onClick,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["a11yTitle", "children", "disabled", "forwardRef", "href", "icon", "focus", "label", "primary", "onClick", "reverse", "theme"]);

    var anchorLabel = typeof label === 'string' ? React.createElement(Text, null, React.createElement("strong", null, label)) : label;
    var first = reverse ? anchorLabel : icon;
    var second = reverse ? icon : anchorLabel;
    return React.createElement(StyledAnchor, _extends({}, rest, {
      ref: forwardRef,
      "aria-label": a11yTitle,
      disabled: disabled,
      hasIcon: !!icon,
      focus: focus,
      hasLabel: label,
      primary: primary,
      reverse: reverse,
      theme: theme,
      href: !disabled ? href : undefined,
      onClick: !disabled ? onClick : undefined
    }), first || second ? React.createElement(Box, {
      tag: "span",
      direction: "row",
      align: "center",
      gap: "small",
      style: {
        display: 'inline-flex'
      }
    }, first, second) : children);
  };

  return Anchor;
}(Component);

var AnchorDoc;

if (process.env.NODE_ENV !== 'production') {
  AnchorDoc = require('./doc').doc(Anchor); // eslint-disable-line global-require
}

var AnchorWrapper = compose(withFocus, withTheme, withForwardRef)(AnchorDoc || Anchor);
export { AnchorWrapper as Anchor };