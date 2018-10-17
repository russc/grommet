"use strict";

exports.__esModule = true;
exports.RangeSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _recompose = require("recompose");

var _Box = require("../Box");

var _hocs = require("../hocs");

var _EdgeControl = require("./EdgeControl");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RangeSelector =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RangeSelector, _Component);

  function RangeSelector() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "containerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "valueForMouseCoord", function (event) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step;
      /* eslint-disable-next-line react/no-find-dom-node */

      var rect = (0, _reactDom.findDOMNode)(_this.containerRef.current).getBoundingClientRect();

      if (direction === 'vertical') {
        var y = event.clientY - (rect.y || 0); // unit test resilience

        var scaleY = rect.height / (max - min + step) || 1; // unit test resilience

        return Math.floor(y / scaleY);
      }

      var x = event.clientX - (rect.x || 0); // unit test resilience

      var scaleX = rect.width / (max - min + step) || 1; // unit test resilience

      return Math.floor(x / scaleX);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (event) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          values = _this$props2.values;
      var lastChange = _this.state.lastChange;

      var value = _this.valueForMouseCoord(event);

      if (value <= values[0] || value < values[1] && lastChange === 'lower') {
        _this.setState({
          lastChange: 'lower'
        }, function () {
          return onChange([value, values[1]]);
        });
      } else if (value >= values[1] || value > values[0] && lastChange === 'upper') {
        _this.setState({
          lastChange: 'upper'
        }, function () {
          return onChange([values[0], value]);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lowerMouseDown", function () {
      _this.setState({
        changing: 'lower'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "upperMouseDown", function () {
      _this.setState({
        changing: 'upper'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectionMouseDown", function (event) {
      var moveValue = _this.valueForMouseCoord(event);

      _this.setState({
        changing: 'selection',
        moveValue: moveValue
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseMove", function (event) {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min,
          onChange = _this$props3.onChange,
          values = _this$props3.values;
      var _this$state = _this.state,
          changing = _this$state.changing,
          moveValue = _this$state.moveValue;

      var value = _this.valueForMouseCoord(event);

      var nextValues;

      if (changing === 'lower' && value <= values[1] && value !== moveValue) {
        nextValues = [value, values[1]];
      } else if (changing === 'upper' && value >= values[0] && value !== moveValue) {
        nextValues = [values[0], value];
      } else if (changing === 'selection' && value !== moveValue) {
        var delta = value - moveValue;

        if (values[0] + delta >= min && values[1] + delta <= max) {
          nextValues = [values[0] + delta, values[1] + delta];
        }
      }

      if (nextValues) {
        _this.setState({
          lastChange: changing,
          moveValue: value
        }, function () {
          onChange(nextValues);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseUp", function () {
      _this.setState({
        changing: undefined
      });

      window.removeEventListener('mousemove', _this.mouseMove);
      window.removeEventListener('mouseup', _this.mouseMove);
    });

    return _this;
  }

  var _proto = RangeSelector.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseMove);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        color = _this$props4.color,
        direction = _this$props4.direction,
        forwardRef = _this$props4.forwardRef,
        invert = _this$props4.invert,
        max = _this$props4.max,
        messages = _this$props4.messages,
        min = _this$props4.min,
        onChange = _this$props4.onChange,
        opacity = _this$props4.opacity,
        round = _this$props4.round,
        size = _this$props4.size,
        step = _this$props4.step,
        theme = _this$props4.theme,
        values = _this$props4.values,
        rest = _objectWithoutPropertiesLoose(_this$props4, ["color", "direction", "forwardRef", "invert", "max", "messages", "min", "onChange", "opacity", "round", "size", "step", "theme", "values"]);

    var _this$state2 = this.state,
        nextLower = _this$state2.nextLower,
        nextUpper = _this$state2.nextUpper;
    var scale = (max - min) / (max - min + step);
    var lower = nextLower !== undefined ? nextLower : values[0];
    var upper = nextUpper !== undefined ? nextUpper : values[1];
    var fill = direction === 'vertical' ? 'horizontal' : 'vertical';
    return _react.default.createElement(_Box.Box, _extends({
      ref: this.containerRef,
      direction: direction === 'vertical' ? 'column' : 'row',
      fill: fill
    }, rest, {
      onClick: onChange ? this.onClick : undefined
    }), _react.default.createElement(_Box.Box, {
      style: {
        flex: (lower - min) * scale + " 0 0"
      },
      background: invert ? {
        color: color || 'light-4',
        opacity: opacity
      } : undefined,
      fill: fill,
      round: round
    }), _react.default.createElement(_EdgeControl.EdgeControl, {
      a11yTitle: messages.lower,
      tabIndex: 0,
      ref: forwardRef,
      color: color,
      direction: direction,
      edge: "lower",
      theme: theme,
      onMouseDown: onChange ? this.lowerMouseDown : undefined,
      onDecrease: onChange && lower > min ? function () {
        return onChange([lower - step, upper]);
      } : undefined,
      onIncrease: onChange && lower < upper ? function () {
        return onChange([lower + step, upper]);
      } : undefined
    }), _react.default.createElement(_Box.Box, {
      style: {
        flex: (upper - lower + step) * scale + " 0 0",
        cursor: direction === 'vertical' ? 'ns-resize' : 'ew-resize'
      },
      background: invert ? undefined : {
        color: color || 'control',
        opacity: opacity
      },
      fill: fill,
      round: round,
      onMouseDown: onChange ? this.selectionMouseDown : undefined
    }), _react.default.createElement(_EdgeControl.EdgeControl, {
      a11yTitle: messages.upper,
      tabIndex: 0,
      color: color,
      direction: direction,
      edge: "upper",
      theme: theme,
      onMouseDown: onChange ? this.upperMouseDown : undefined,
      onDecrease: onChange && upper > lower ? function () {
        return onChange([lower, upper - step]);
      } : undefined,
      onIncrease: onChange && upper < max ? function () {
        return onChange([lower, upper + step]);
      } : undefined
    }), _react.default.createElement(_Box.Box, {
      style: {
        flex: (max - upper) * scale + " 0 0"
      },
      background: invert ? {
        color: color || 'light-4',
        opacity: opacity
      } : undefined,
      fill: fill,
      round: round
    }));
  };

  return RangeSelector;
}(_react.Component);

_defineProperty(RangeSelector, "defaultProps", {
  direction: 'horizontal',
  max: 100,
  messages: {
    lower: 'Lower Bounds',
    upper: 'Upper Bounds'
  },
  min: 0,
  opacity: 'medium',
  size: 'medium',
  step: 1,
  values: []
});

var RangeSelectorDoc;

if (process.env.NODE_ENV !== 'production') {
  RangeSelectorDoc = require('./doc').doc(RangeSelector); // eslint-disable-line global-require
}

var RangeSelectorWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(RangeSelectorDoc || RangeSelector);
exports.RangeSelector = RangeSelectorWrapper;