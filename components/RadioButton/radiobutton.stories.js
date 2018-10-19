"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleRadioButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleRadioButton, _Component);

  function SimpleRadioButton(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      return _this.setState({
        selected: event.target.value
      });
    });

    _this.state = {
      selected: props.selected
    };
    return _this;
  }

  var _proto = SimpleRadioButton.prototype;

  _proto.render = function render() {
    var selected = this.state.selected;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Box, {
      gap: "small"
    }, _react.default.createElement(_grommet.RadioButton, _extends({
      label: "Choice 1",
      name: "radio",
      value: "c1",
      checked: selected === 'c1',
      onChange: this.onChange
    }, this.props)), _react.default.createElement(_grommet.RadioButton, _extends({
      label: "Choice 2",
      name: "radio",
      value: "c2",
      checked: selected === 'c2',
      onChange: this.onChange
    }, this.props))));
  };

  return SimpleRadioButton;
}(_react.Component);

var customTheme = (0, _utils.deepMerge)(_themes.grommet, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-4'
      }
    },
    check: {
      color: {
        light: 'neutral-1'
      }
    },
    icon: {
      size: '10px'
    }
  }
});

var CustomRadioButton =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(CustomRadioButton, _Component2);

  function CustomRadioButton() {
    var _this2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      selected: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onChange", function (event) {
      return _this2.setState({
        selected: event.target.value
      });
    });

    return _this2;
  }

  var _proto2 = CustomRadioButton.prototype;

  _proto2.render = function render() {
    var selected = this.state.selected;
    return _react.default.createElement(_grommet.Grommet, {
      theme: customTheme
    }, _react.default.createElement(_grommet.Box, {
      gap: "xsmall"
    }, _react.default.createElement(_grommet.RadioButton, {
      label: "Choice 1",
      name: "radio",
      value: "c1",
      checked: selected === 'c1',
      onChange: this.onChange
    }), _react.default.createElement(_grommet.RadioButton, {
      label: "Choice 2",
      name: "radio",
      value: "c2",
      checked: selected === 'c2',
      onChange: this.onChange
    })));
  };

  return CustomRadioButton;
}(_react.Component);

(0, _react2.storiesOf)('RadioButton', module).add('Simple RadioButton', function () {
  return _react.default.createElement(SimpleRadioButton, null);
}).add('Disabled RadioButton', function () {
  return _react.default.createElement(SimpleRadioButton, {
    disabled: true,
    selected: "c2"
  });
}).add('Custom Theme', function () {
  return _react.default.createElement(CustomRadioButton, null);
});