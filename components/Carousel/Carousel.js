'use strict';

exports.__esModule = true;
exports.Carousel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _ = require('../');

var _hocs = require('../hocs');

var _utils = require('../../utils');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _temp, _this, _ret;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { activeIndex: 0 }, _this.play = function () {
      clearInterval(_this.timer);
      _this.timer = setInterval(function () {
        var children = _this.props.children;
        var activeIndex = _this.state.activeIndex;

        var lastIndex = _react.Children.count(children) - 1;
        if (activeIndex < lastIndex) {
          _this.setState({ activeIndex: activeIndex + 1, priorActiveIndex: activeIndex });
        } else {
          _this.setState({ activeIndex: 0, priorActiveIndex: activeIndex });
        }
      }, _this.props.play);
    }, _this.onRight = function () {
      var activeIndex = _this.state.activeIndex;

      clearInterval(_this.timer);
      _this.setState({ activeIndex: activeIndex + 1, priorActiveIndex: activeIndex });
    }, _this.onLeft = function () {
      var activeIndex = _this.state.activeIndex;

      clearInterval(_this.timer);
      _this.setState({ activeIndex: activeIndex - 1, priorActiveIndex: activeIndex });
    }, _this.onSelect = function (index) {
      return function () {
        var activeIndex = _this.state.activeIndex;

        clearInterval(_this.timer);
        _this.setState({ activeIndex: index, priorActiveIndex: activeIndex });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Carousel.prototype.componentDidMount = function componentDidMount() {
    if (this.props.play) {
      this.play();
    }
  };

  Carousel.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var play = this.props.play;

    if (play && (!prevProps.play || play !== prevProps.play)) {
      this.play();
    } else if (!play && prevProps.play) {
      clearInterval(this.timer);
    }
  };

  Carousel.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  Carousel.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        fill = _props.fill,
        focus = _props.focus,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'fill', 'focus', 'theme']);

    var _state = this.state,
        activeIndex = _state.activeIndex,
        priorActiveIndex = _state.priorActiveIndex;


    var lastIndex = _react.Children.count(children) - 1;
    var onLeft = activeIndex > 0 ? this.onLeft : undefined;
    var onRight = activeIndex < lastIndex ? this.onRight : undefined;

    var CurrentIcon = theme.carousel.icons.current;
    var dark = theme.dark;
    var iconColor = (0, _utils.evalStyle)((theme.carousel.icons.color || theme.global.control.color)[dark ? 'dark' : 'light'], theme);

    var selectors = [];
    var wrappedChildren = _react.Children.map(children, function (child, index) {
      selectors.push(_react2.default.createElement(_.Button, {
        key: index,
        icon: _react2.default.createElement(CurrentIcon, {
          color: activeIndex === index ? iconColor : undefined
        }),
        onClick: _this2.onSelect(index)
      }));

      var animation = void 0;
      if (index === activeIndex) {
        if (priorActiveIndex !== undefined) {
          animation = {
            type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
            size: 'xlarge'
          };
        }
      } else if (index === priorActiveIndex) {
        animation = { type: 'fadeOut' };
      } else {
        animation = { type: 'fadeOut', duration: 0 };
      }

      return _react2.default.createElement(
        _.Box,
        { overflow: 'hidden' },
        _react2.default.createElement(
          _.Box,
          { animation: animation },
          child
        )
      );
    });

    var NextIcon = theme.carousel.icons.next;
    var PreviousIcon = theme.carousel.icons.previous;

    return _react2.default.createElement(
      _.Keyboard,
      { onLeft: onLeft, onRight: onRight },
      _react2.default.createElement(
        _.Stack,
        _extends({ guidingChild: activeIndex, fill: fill }, rest),
        wrappedChildren,
        _react2.default.createElement(
          _.Box,
          { tabIndex: '0', focus: focus, fill: true, direction: 'row', justify: 'between' },
          _react2.default.createElement(
            _.Box,
            { fill: 'vertical' },
            _react2.default.createElement(
              _.Button,
              { fill: true, onClick: onLeft, hoverIndicator: true },
              _react2.default.createElement(
                _.Box,
                { justify: 'center' },
                _react2.default.createElement(PreviousIcon, null)
              )
            )
          ),
          _react2.default.createElement(
            _.Box,
            { justify: 'end' },
            _react2.default.createElement(
              _.Box,
              { direction: 'row', justify: 'center' },
              selectors
            )
          ),
          _react2.default.createElement(
            _.Box,
            { fill: 'vertical' },
            _react2.default.createElement(
              _.Button,
              { fill: true, onClick: onRight, hoverIndicator: true },
              _react2.default.createElement(
                _.Box,
                { justify: 'center' },
                _react2.default.createElement(NextIcon, null)
              )
            )
          )
        )
      )
    );
  };

  return Carousel;
}(_react.Component);

var CarouselWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withFocus)(process.env.NODE_ENV !== 'production' ? (0, _doc.doc)(Carousel) : Carousel);

exports.Carousel = CarouselWrapper;