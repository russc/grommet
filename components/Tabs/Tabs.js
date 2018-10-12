"use strict";

exports.__esModule = true;
exports.Tabs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = require("../Box");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "activateTab", function (index) {
      var _this$props = _this.props,
          activeIndex = _this$props.activeIndex,
          onActive = _this$props.onActive;

      if (activeIndex === undefined) {
        _this.setState({
          activeIndex: index
        });
      }

      if (onActive) {
        onActive(index);
      }
    });

    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndex = prevState.activeIndex;

    if (stateActiveIndex !== activeIndex && activeIndex !== undefined) {
      return {
        activeIndex: activeIndex
      };
    }

    return {
      activeIndex: stateActiveIndex || 0
    };
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        justify = _this$props2.justify,
        tabContents = _this$props2.messages.tabContents,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["children", "justify", "messages"]);

    delete rest.activeIndex;
    delete rest.onActive;
    var activeIndex = this.state.activeIndex;
    var activeContent;
    var activeTitle;

    var tabs = _react.Children.map(children, function (tab, index) {
      if (!tab) return undefined;
      var tabProps = tab.props || {};
      var isTabActive = index === activeIndex;

      if (isTabActive) {
        activeContent = tabProps.children;

        if (typeof tabProps.title === 'string') {
          activeTitle = tabProps.title;
        } else {
          activeTitle = index + 1;
        }
      }

      return (0, _react.cloneElement)(tab, {
        active: isTabActive,
        onActivate: function onActivate() {
          return _this2.activateTab(index);
        }
      });
    }, this);

    var tabContentTitle = (activeTitle || '') + " " + tabContents;
    return _react.default.createElement("div", {
      role: "tablist"
    }, _react.default.createElement(_Box.Box, _extends({
      direction: "row",
      justify: justify,
      wrap: true
    }, rest), tabs), _react.default.createElement("div", {
      "aria-label": tabContentTitle,
      role: "tabpanel"
    }, activeContent));
  };

  return Tabs;
}(_react.Component);

_defineProperty(Tabs, "defaultProps", {
  justify: 'center',
  messages: {
    tabContents: 'Tab Contents'
  },
  responsive: true
});

var TabsDoc;

if (process.env.NODE_ENV !== 'production') {
  TabsDoc = require('./doc').doc(Tabs); // eslint-disable-line global-require
}

var TabsWrapper = TabsDoc || Tabs;
exports.Tabs = TabsWrapper;