"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

var _theme = require("./theme");

var _SearchInputContext = require("./components/SearchInputContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customRoundedTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    control: {
      border: {
        radius: '24px'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '12px'
    }
  },
  text: {
    medium: '13px'
  },
  textInput: {
    extend: 'padding: 0 12px;'
  },
  select: {
    control: {
      extend: 'padding: 3px 6px;'
    }
  }
});

var SimpleSelect =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleSelect, _Component);

  function SimpleSelect() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      options: ['one', 'two'],
      value: ''
    });

    return _this;
  }

  var _proto = SimpleSelect.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var theme = this.props.theme;
    var _this$state = this.state,
        options = _this$state.options,
        value = _this$state.value;
    return _react.default.createElement(_grommet.Grommet, {
      theme: theme || _themes.grommet
    }, _react.default.createElement(_grommet.Select, {
      id: "select",
      name: "select",
      placeholder: "Select",
      value: value,
      options: options,
      onChange: function onChange(_ref) {
        var option = _ref.option;
        return _this2.setState({
          value: option
        });
      }
    }));
  };

  return SimpleSelect;
}(_react.Component);

_defineProperty(SimpleSelect, "propTypes", {
  theme: _propTypes.default.shape({})
});

_defineProperty(SimpleSelect, "defaultProps", {
  theme: undefined
});

var DEFAULT_OPTIONS = [];

for (var i = 1; i <= 200; i += 1) {
  DEFAULT_OPTIONS.push("option " + i);
}

var SearchSelect =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(SearchSelect, _Component2);

  function SearchSelect() {
    var _this3;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _Component2.call.apply(_Component2, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      options: DEFAULT_OPTIONS,
      value: ''
    });

    return _this3;
  }

  var _proto2 = SearchSelect.prototype;

  _proto2.render = function render() {
    var _this4 = this;

    var _this$state2 = this.state,
        options = _this$state2.options,
        value = _this$state2.value;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Select, {
      size: "medium",
      placeholder: "Select",
      value: value,
      options: options,
      onChange: function onChange(_ref2) {
        var option = _ref2.option;
        return _this4.setState({
          value: option
        });
      },
      onClose: function onClose() {
        return _this4.setState({
          options: DEFAULT_OPTIONS
        });
      },
      onSearch: function onSearch(text) {
        var exp = new RegExp(text, 'i');

        _this4.setState({
          options: DEFAULT_OPTIONS.filter(function (o) {
            return exp.test(o);
          })
        });
      }
    }));
  };

  return SearchSelect;
}(_react.Component);

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var SeasonsSelect =
/*#__PURE__*/
function (_Component3) {
  _inheritsLoose(SeasonsSelect, _Component3);

  function SeasonsSelect() {
    var _this5;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _Component3.call.apply(_Component3, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "state", {
      selectedSeasons: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "onRemoveSeason", function (season) {
      var selectedSeasons = _this5.state.selectedSeasons;
      var newSeasons = selectedSeasons.concat();
      newSeasons.splice(selectedSeasons.indexOf(season), 1);

      _this5.setState({
        selectedSeasons: newSeasons
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "renderSeason", function (season) {
      return _react.default.createElement(_grommet.Button, {
        key: "season_tag_" + season,
        href: "#",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();

          _this5.onRemoveSeason(season);
        },
        onFocus: function onFocus(event) {
          return event.stopPropagation();
        }
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        direction: "row",
        gap: "xsmall",
        pad: {
          vertical: 'xsmall',
          horizontal: 'small'
        },
        margin: "xsmall",
        background: "accent-1",
        round: "large"
      }, _react.default.createElement(_grommet.Text, {
        size: "small",
        color: "white"
      }, season), _react.default.createElement(_grommet.Box, {
        background: "white",
        round: "full",
        margin: {
          left: 'xsmall'
        }
      }, _react.default.createElement(_grommetIcons.FormClose, {
        color: "accent-1",
        size: "small",
        style: {
          width: '12px',
          height: '12px'
        }
      }))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "renderOption", function (option) {
      var selectedSeasons = _this5.state.selectedSeasons;
      return _react.default.createElement(_grommet.Box, {
        pad: "small",
        background: selectedSeasons.indexOf(option) >= 0 ? 'active' : undefined
      }, option);
    });

    return _this5;
  }

  var _proto3 = SeasonsSelect.prototype;

  _proto3.render = function render() {
    var _this6 = this;

    var selectedSeasons = this.state.selectedSeasons;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Box, {
      direction: "row"
    }, _react.default.createElement(_grommet.Box, {
      align: "start",
      basis: "medium",
      direction: "row"
    }, _react.default.createElement(_grommet.Select, {
      size: "medium",
      placeholder: "Select Season",
      multiple: true,
      value: selectedSeasons && selectedSeasons.length ? _react.default.createElement(_grommet.Box, {
        wrap: true,
        direction: "row",
        style: {
          width: '208px'
        }
      }, selectedSeasons.map(this.renderSeason)) : undefined,
      options: allSeasons,
      onChange: function onChange(_ref3) {
        var option = _ref3.option;
        var newSelectedSeasons = selectedSeasons.concat();
        var seasonIndex = newSelectedSeasons.indexOf(option);

        if (seasonIndex >= 0) {
          newSelectedSeasons.splice(seasonIndex, 1);
        } else {
          newSelectedSeasons.push(option);
        }

        _this6.setState({
          selectedSeasons: newSelectedSeasons.sort()
        });
      }
    }, this.renderOption))));
  };

  return SeasonsSelect;
}(_react.Component);

var allContentPartners = [{
  name: 'Test Partner',
  id: '32131232'
}, {
  name: 'Test Partner 1',
  id: '32131232'
}, {
  name: 'Test Partner 2',
  id: '32131242'
}, {
  name: 'Test Partner 3',
  id: '32131252'
}, {
  name: 'Test Partner 4',
  id: '32131262'
}, {
  name: 'Test Partner 5',
  id: '32131272'
}, {
  name: 'Test Partner 6',
  id: '32131231'
}, {
  name: 'Test Partner 7',
  id: '32131234'
}, {
  name: 'Test Partner 8',
  id: '32131245'
}, {
  name: 'Test Partner 9',
  id: '32131256'
}, {
  name: 'Test Partner 10',
  id: '32131269'
}, {
  name: 'Test Partner 11',
  id: '32131244'
}];

var CustomSearchSelect =
/*#__PURE__*/
function (_Component4) {
  _inheritsLoose(CustomSearchSelect, _Component4);

  function CustomSearchSelect() {
    var _this7;

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this7 = _Component4.call.apply(_Component4, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "state", {
      contentPartners: allContentPartners,
      selectedContentPartners: [],
      searching: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "selectRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "clearContentPartners", function () {
      return _this7.setState({
        selectedContentPartners: []
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "renderOption", function (_ref4) {
      var name = _ref4.name;
      var selectedContentPartners = _this7.state.selectedContentPartners;
      return _react.default.createElement(_grommet.Box, {
        direction: "row",
        align: "center",
        pad: "small",
        flex: false
      }, _react.default.createElement(_grommet.CheckBox, {
        tabIndex: "-1",
        checked: selectedContentPartners.some(function (partner) {
          return partner.name === name;
        }),
        label: _react.default.createElement(_grommet.Text, {
          size: "small"
        }, name),
        onChange: function onChange() {}
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "renderContentPartners", function () {
      var selectedContentPartners = _this7.state.selectedContentPartners;
      return _react.default.createElement(_grommet.Box, {
        direction: "row",
        gap: "xsmall",
        pad: {
          left: 'small',
          vertical: 'small'
        },
        align: "center",
        flex: true
      }, _react.default.createElement(_grommet.Box, {
        background: "brand",
        round: "medium",
        align: "center",
        justify: "center",
        pad: {
          horizontal: 'xsmall'
        },
        style: {
          minWidth: '21px'
        }
      }, _react.default.createElement(_grommet.Text, {
        size: "small"
      }, selectedContentPartners.length)), _react.default.createElement(_grommet.Box, {
        flex: true
      }, _react.default.createElement(_grommet.Text, {
        size: "small",
        truncate: true
      }, selectedContentPartners.map(function (_ref5) {
        var name = _ref5.name;
        return name;
      }).join(', '))), _react.default.createElement(_grommet.Button, {
        href: "#",
        onFocus: function onFocus(event) {
          return event.stopPropagation();
        },
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();

          _this7.clearContentPartners();
          /* eslint-disable-next-line react/no-find-dom-node */


          (0, _reactDom.findDOMNode)(_this7.selectRef.current).focus();
        }
      }, _react.default.createElement(_grommet.Box, {
        background: "gray",
        round: "full"
      }, _react.default.createElement(_grommetIcons.FormClose, {
        style: {
          width: '12px',
          height: '12px'
        }
      }))));
    });

    return _this7;
  }

  var _proto4 = CustomSearchSelect.prototype;

  _proto4.render = function render() {
    var _this8 = this;

    var _this$state3 = this.state,
        contentPartners = _this$state3.contentPartners,
        searching = _this$state3.searching,
        selectedContentPartners = _this$state3.selectedContentPartners;
    var selectedPartnerNames = selectedContentPartners.map(function (_ref6) {
      var name = _ref6.name;
      return name;
    });
    return _react.default.createElement(_grommet.Grommet, {
      theme: _theme.theme
    }, _react.default.createElement(_grommet.Box, {
      align: "start",
      width: "medium",
      direction: "row"
    }, _react.default.createElement(_SearchInputContext.SearchInputContext.Provider, {
      value: {
        searching: searching
      }
    }, _react.default.createElement(_grommet.Select, {
      ref: this.selectRef,
      closeOnChange: false,
      placeholder: "Select Content Partners",
      searchPlaceholder: "Search Content Partners",
      multiple: true,
      value: selectedContentPartners.length ? this.renderContentPartners() : undefined,
      options: contentPartners,
      onChange: function onChange(_ref7) {
        var option = _ref7.option;
        var newSelectedPartners = selectedContentPartners.concat();
        var seasonIndex = newSelectedPartners.map(function (_ref8) {
          var name = _ref8.name;
          return name;
        }).indexOf(option.name);

        if (seasonIndex >= 0) {
          newSelectedPartners.splice(seasonIndex, 1);
        } else {
          newSelectedPartners.push(option);
        }

        _this8.setState({
          selectedContentPartners: newSelectedPartners
        });
      },
      onClose: function onClose() {
        return _this8.setState({
          contentPartners: allContentPartners.sort(function (p1, p2) {
            var p1Exists = selectedPartnerNames.includes(p1.name);
            var p2Exists = selectedPartnerNames.includes(p2.name);

            if (!p1Exists && p2Exists) {
              return 1;
            }

            if (p1Exists && !p2Exists) {
              return -1;
            }

            if (p1.name.toLowerCase() < p2.name.toLowerCase()) {
              return -1;
            }

            return 1;
          })
        });
      },
      onSearch: function onSearch(query) {
        _this8.setState({
          searching: true
        }, function () {
          setTimeout(function () {
            _this8.setState({
              searching: false,
              contentPartners: allContentPartners.filter(function (s) {
                return s.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
              })
            });
          }, 500);
        });
      }
    }, this.renderOption))));
  };

  return CustomSearchSelect;
}(_react.Component);

var DarkSelect =
/*#__PURE__*/
function (_Component5) {
  _inheritsLoose(DarkSelect, _Component5);

  function DarkSelect() {
    var _this9;

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this9 = _Component5.call.apply(_Component5, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this9)), "state", {
      options: ['one', 'two'],
      value: ''
    });

    return _this9;
  }

  var _proto5 = DarkSelect.prototype;

  _proto5.render = function render() {
    var _this10 = this;

    var _this$state4 = this.state,
        options = _this$state4.options,
        value = _this$state4.value;
    return _react.default.createElement(_grommet.Grommet, _extends({
      full: true,
      theme: _themes.grommet
    }, this.props), _react.default.createElement(_grommet.Box, {
      fill: true,
      background: "dark-1",
      align: "center",
      justify: "center"
    }, _react.default.createElement(_grommet.Select, {
      placeholder: "Select",
      value: value,
      options: options,
      onChange: function onChange(_ref9) {
        var option = _ref9.option;
        return _this10.setState({
          value: option
        });
      }
    })));
  };

  return DarkSelect;
}(_react.Component);

(0, _react2.storiesOf)('Select', module).add('Simple Select', function () {
  return _react.default.createElement(SimpleSelect, null);
}).add('Search Select', function () {
  return _react.default.createElement(SearchSelect, null);
}).add('Seasons Select', function () {
  return _react.default.createElement(SeasonsSelect, null);
}).add('Custom Search', function () {
  return _react.default.createElement(CustomSearchSelect, null);
}).add('Dark', function () {
  return _react.default.createElement(DarkSelect, null);
}).add('Custom Colors', function () {
  return _react.default.createElement(DarkSelect, {
    theme: {
      global: {
        font: {
          family: 'Arial'
        }
      },
      select: {
        background: '#000000',
        iconColor: '#d3d3d3'
      }
    }
  });
}).add('Custom Rounded', function () {
  return _react.default.createElement(SimpleSelect, {
    theme: customRoundedTheme
  });
});