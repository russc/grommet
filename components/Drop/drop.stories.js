'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommet = require('grommet');

var _themes = require('grommet/themes');

var _contexts = require('grommet/contexts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleDrop = function (_Component) {
  _inherits(SimpleDrop, _Component);

  function SimpleDrop() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleDrop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.targetRef = (0, _react.createRef)(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleDrop.prototype.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  SimpleDrop.prototype.render = function render() {
    return _react2.default.createElement(
      _grommet.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _grommet.Box,
        { align: 'start' },
        _react2.default.createElement(
          _grommet.Box,
          {
            background: 'dark-4',
            pad: 'medium',
            align: 'center',
            justify: 'start',
            ref: this.targetRef
          },
          'Target'
        ),
        this.targetRef.current && _react2.default.createElement(
          _grommet.Drop,
          {
            align: { top: 'bottom', left: 'left' },
            target: this.targetRef.current
          },
          _react2.default.createElement(
            _grommet.Box,
            { pad: 'large' },
            'Drop Contents'
          )
        )
      )
    );
  };

  return SimpleDrop;
}(_react.Component);

var OneDrop = function OneDrop(_ref) {
  var align = _ref.align,
      target = _ref.target;
  return _react2.default.createElement(
    _grommet.Drop,
    {
      align: align,
      target: target,
      stretch: false
    },
    _react2.default.createElement(_grommet.Box, { pad: 'small' })
  );
};

var Set = function (_Component2) {
  _inherits(Set, _Component2);

  function Set() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, Set);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.targetRef = (0, _react.createRef)(), _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  Set.prototype.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  Set.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        aligns = _props.aligns,
        label = _props.label;

    return _react2.default.createElement(
      _grommet.Box,
      { border: true, pad: 'small' },
      _react2.default.createElement(
        _grommet.Text,
        null,
        label
      ),
      _react2.default.createElement(
        _grommet.Box,
        {
          margin: 'xlarge',
          background: 'dark-4',
          pad: { horizontal: 'large', vertical: 'medium' },
          align: 'center',
          justify: 'center',
          ref: this.targetRef
        },
        '\xA0'
      ),
      this.targetRef.current && _react2.default.createElement(
        _react.Fragment,
        null,
        aligns.map(function (align, index) {
          return _react2.default.createElement(OneDrop, {
            key: '' + index,
            align: align,
            target: _this3.targetRef.current
          });
        })
      )
    );
  };

  return Set;
}(_react.Component);

var AllDrops = function (_Component3) {
  _inherits(AllDrops, _Component3);

  function AllDrops() {
    var _temp3, _this4, _ret3;

    _classCallCheck(this, AllDrops);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this4 = _possibleConstructorReturn(this, _Component3.call.apply(_Component3, [this].concat(args))), _this4), _this4.targetRef = (0, _react.createRef)(), _temp3), _possibleConstructorReturn(_this4, _ret3);
  }

  AllDrops.prototype.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  AllDrops.prototype.render = function render() {
    return _react2.default.createElement(
      _grommet.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _contexts.ThemeContext.Extend,
        { value: { global: { drop: { background: { color: 'white', opacity: 'medium' } } } } },
        _react2.default.createElement(
          _grommet.Box,
          { direction: 'row', wrap: true, pad: 'medium', align: 'center' },
          _react2.default.createElement(Set, {
            label: 'left: left',
            aligns: [{ top: 'top', left: 'left' }, { top: 'bottom', left: 'left' }, { bottom: 'top', left: 'left' }, { bottom: 'bottom', left: 'left' }]
          }),
          _react2.default.createElement(Set, {
            label: 'left: right',
            aligns: [{ top: 'top', left: 'right' }, { top: 'bottom', left: 'right' }, { bottom: 'top', left: 'right' }, { bottom: 'bottom', left: 'right' }]
          }),
          _react2.default.createElement(Set, {
            label: '(center horizontal)',
            aligns: [{ top: 'top' }, { top: 'bottom' }, { bottom: 'top' }, { bottom: 'bottom' }]
          }),
          _react2.default.createElement(Set, {
            label: 'right: left',
            aligns: [{ top: 'top', right: 'left' }, { top: 'bottom', right: 'left' }, { bottom: 'top', right: 'left' }, { bottom: 'bottom', right: 'left' }]
          }),
          _react2.default.createElement(Set, {
            label: 'right: right',
            aligns: [{ top: 'top', right: 'right' }, { top: 'bottom', right: 'right' }, { bottom: 'top', right: 'right' }, { bottom: 'bottom', right: 'right' }]
          }),
          _react2.default.createElement(Set, {
            label: 'top: top',
            aligns: [{ left: 'left', top: 'top' }, { left: 'right', top: 'top' }, { right: 'left', top: 'top' }, { right: 'right', top: 'top' }]
          }),
          _react2.default.createElement(Set, {
            label: 'top: bottom',
            aligns: [{ left: 'left', top: 'bottom' }, { left: 'right', top: 'bottom' }, { right: 'left', top: 'bottom' }, { right: 'right', top: 'bottom' }]
          }),
          _react2.default.createElement(Set, {
            label: '(center vertical)',
            aligns: [{ left: 'left' }, { left: 'right' }, { right: 'left' }, { right: 'right' }]
          }),
          _react2.default.createElement(Set, {
            label: 'bottom: top',
            aligns: [{ left: 'left', bottom: 'top' }, { left: 'right', bottom: 'top' }, { right: 'left', bottom: 'top' }, { right: 'right', bottom: 'top' }]
          }),
          _react2.default.createElement(Set, {
            label: 'bottom: bottom',
            aligns: [{ left: 'left', bottom: 'bottom' }, { left: 'right', bottom: 'bottom' }, { right: 'left', bottom: 'bottom' }, { right: 'right', bottom: 'bottom' }]
          }),
          _react2.default.createElement(Set, {
            label: '(center vertical and horizontal)',
            aligns: [{}]
          })
        )
      )
    );
  };

  return AllDrops;
}(_react.Component);

var ProgressiveDrop = function (_Component4) {
  _inherits(ProgressiveDrop, _Component4);

  function ProgressiveDrop() {
    var _temp4, _this5, _ret4;

    _classCallCheck(this, ProgressiveDrop);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp4 = (_this5 = _possibleConstructorReturn(this, _Component4.call.apply(_Component4, [this].concat(args))), _this5), _this5.boxRef = (0, _react.createRef)(), _this5.state = {
      openDrop: false,
      openInnerDrop: false
    }, _this5.onCloseDrop = function () {
      return _this5.setState({ openDrop: false, openInnerDrop: false });
    }, _this5.onOpenDrop = function () {
      return _this5.setState({ openDrop: true, openInnerDrop: false });
    }, _temp4), _possibleConstructorReturn(_this5, _ret4);
  }

  ProgressiveDrop.prototype.render = function render() {
    var _this6 = this;

    var _state = this.state,
        openDrop = _state.openDrop,
        openInnerDrop = _state.openInnerDrop;

    return _react2.default.createElement(
      _grommet.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _grommet.Box,
        { align: 'start' },
        _react2.default.createElement(_grommet.Button, {
          ref: this.boxRef,
          primary: true,
          label: 'Click me',
          onClick: this.onOpenDrop
        }),
        openDrop && _react2.default.createElement(
          _grommet.Drop,
          {
            target: this.boxRef.current,
            align: { top: 'bottom' },
            onClickOutside: this.onCloseDrop,
            onEsc: this.onCloseDrop
          },
          !openInnerDrop && _react2.default.createElement(
            _grommet.Box,
            { pad: 'large' },
            _react2.default.createElement(_grommet.Button, {
              primary: true,
              label: 'Click me again',
              onClick: function onClick() {
                return _this6.setState({ openInnerDrop: true });
              }
            })
          ),
          openInnerDrop && _react2.default.createElement(
            _grommet.Box,
            { pad: 'large' },
            'You can click outside now'
          )
        )
      )
    );
  };

  return ProgressiveDrop;
}(_react.Component);

(0, _react3.storiesOf)('Drop', module).add('Simple', function () {
  return _react2.default.createElement(SimpleDrop, null);
}).add('All not stretch', function () {
  return _react2.default.createElement(AllDrops, null);
}).add('Progressive', function () {
  return _react2.default.createElement(ProgressiveDrop, null);
});