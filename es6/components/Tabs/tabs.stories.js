function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Attraction } from "grommet-icons/es6/icons/Attraction";
import { Car } from "grommet-icons/es6/icons/Car";
import { CircleInformation } from "grommet-icons/es6/icons/CircleInformation";
import { Currency } from "grommet-icons/es6/icons/Currency";
import { TreeOption } from "grommet-icons/es6/icons/TreeOption";
import { Box, Grommet, FormField, Tab, Tabs, Text, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';

var UncontrolledTabs = function UncontrolledTabs() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Tabs, null, React.createElement(Tab, {
    title: "Tab 1"
  }, React.createElement(Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-1"
  }, React.createElement(Attraction, {
    size: "xlarge"
  }))), React.createElement(Tab, {
    title: "Tab 2"
  }, React.createElement(Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, React.createElement(TreeOption, {
    size: "xlarge"
  }))), React.createElement(Tab, {
    title: "Tab 3"
  }, React.createElement(Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-3"
  }, React.createElement(Car, {
    size: "xlarge"
  })))));
};

var ControlledTabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ControlledTabs, _Component);

  function ControlledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onActive", function (index) {
      return _this.setState({
        index: index
      });
    });

    return _this;
  }

  var _proto = ControlledTabs.prototype;

  _proto.render = function render() {
    var index = this.state.index;
    return React.createElement(Grommet, {
      theme: grommet
    }, React.createElement(Tabs, {
      activeIndex: index,
      onActive: this.onActive
    }, React.createElement(Tab, {
      title: "Tab 1"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 2"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 3"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    })))));
  };

  return ControlledTabs;
}(Component);

var ResponsiveTabs =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(ResponsiveTabs, _Component2);

  function ResponsiveTabs() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onActive", function (index) {
      return _this2.setState({
        index: index
      });
    });

    return _this2;
  }

  var _proto2 = ResponsiveTabs.prototype;

  _proto2.render = function render() {
    var index = this.state.index;
    return React.createElement(Grommet, {
      theme: grommet
    }, React.createElement(Tabs, {
      activeIndex: index,
      onActive: this.onActive
    }, React.createElement(Tab, {
      title: "Tab 1"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 2"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 3"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 4"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 5"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 6"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 7"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 8"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 9"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 10"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 11"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 12"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 13"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 14"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 15"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 16"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 17"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 18"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, React.createElement(TreeOption, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 19"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, React.createElement(Car, {
      size: "xlarge"
    }))), React.createElement(Tab, {
      title: "Tab 20"
    }, React.createElement(Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, React.createElement(Attraction, {
      size: "xlarge"
    })))));
  };

  return ResponsiveTabs;
}(Component);

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, React.createElement(Text, {
    size: "small"
  }, React.createElement("strong", null, label)));
};

RichTabTitle.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};

var RichTabs = function RichTabs() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Tabs, null, React.createElement(Tab, {
    title: React.createElement(RichTabTitle, {
      icon: React.createElement(CircleInformation, {
        color: "accent-1"
      }),
      label: "Personal Data"
    })
  }, React.createElement(FormField, {
    label: "Name"
  }, React.createElement(TextInput, {
    placeholder: "Enter your name..."
  }))), React.createElement(Tab, {
    title: React.createElement(RichTabTitle, {
      icon: React.createElement(Currency, {
        color: "neutral-5"
      }),
      label: "Payment"
    })
  }, React.createElement(FormField, {
    label: "Card Number"
  }, React.createElement(TextInput, {
    placeholder: "Enter your card number..."
  })))));
};

storiesOf('Tabs', module).add('Uncontrolled Tabs', function () {
  return React.createElement(UncontrolledTabs, null);
}).add('Controlled Tabs', function () {
  return React.createElement(ControlledTabs, null);
}).add('Responsive Tabs', function () {
  return React.createElement(ResponsiveTabs, null);
}).add('Rich Tabs', function () {
  return React.createElement(RichTabs, null);
});