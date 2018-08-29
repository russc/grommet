function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import { StyledTable, StyledTableDataCaption } from './StyledTable';
import { doc } from './doc';

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Table.prototype.render = function render() {
    var _props = this.props,
        caption = _props.caption,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['caption', 'children']);

    return React.createElement(
      StyledTable,
      rest,
      caption ? React.createElement(
        StyledTableDataCaption,
        null,
        caption
      ) : null,
      children
    );
  };

  return Table;
}(Component);

var TableWrapper = compose(withTheme)(process.env.NODE_ENV !== 'production' ? doc(Table) : Table);

export { TableWrapper as Table };