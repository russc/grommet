"use strict";

exports.__esModule = true;
exports.StyledAnchor = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var StyledAnchor = _styledComponents.default.a.withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;font-size:inherit;line-height:inherit;color:", ";text-decoration:", ";cursor:pointer;outline:none;", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return (0, _utils.normalizeColor)(props.theme.anchor.color, props.theme);
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, _utils.genericStyles, function (props) {
  return !props.disabled && "\n    &:hover {\n      text-decoration: underline;\n    }\n  ";
}, function (props) {
  return !props.primary && props.hasIcon && props.hasLabel && "\n    color: " + (0, _utils.normalizeColor)('text', props.theme) + ";\n  ";
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.anchor.extend;
});

exports.StyledAnchor = StyledAnchor;