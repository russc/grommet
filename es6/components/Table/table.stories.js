import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text } from 'grommet';
import { grommet } from 'grommet/themes'; // Always should store amount in cents to avoid precision errors

var DATA = [{
  id: 1,
  name: 'Eric',
  email: 'eric@local',
  amount: 3775
}, {
  id: 2,
  name: 'Chris',
  email: 'chris@local',
  amount: 5825
}, {
  id: 3,
  name: 'Alan',
  email: 'alan@local',
  amount: 4300
}];
var TOTAL = 0;
DATA.forEach(function (datum) {
  TOTAL += datum.amount;
});
var amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
var COLUMNS = [{
  property: 'name',
  label: 'Name',
  dataScope: 'row',
  format: function format(datum) {
    return React.createElement("strong", null, datum.name);
  }
}, {
  property: 'email',
  label: 'Email'
}, {
  property: 'amount',
  label: 'Amount',
  align: 'end',
  footer: amountFormatter.format(TOTAL / 100),
  format: function format(datum) {
    return amountFormatter.format(datum.amount / 100);
  }
}];

var SimpleTable = function SimpleTable() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Table, {
    caption: "Simple Table"
  }, React.createElement(TableHeader, null, React.createElement(TableRow, null, COLUMNS.map(function (c) {
    return React.createElement(TableCell, {
      key: c.property,
      scope: "col",
      border: "bottom",
      align: c.align
    }, React.createElement(Text, null, c.label));
  }))), React.createElement(TableBody, null, DATA.map(function (datum) {
    return React.createElement(TableRow, {
      key: datum.id
    }, COLUMNS.map(function (c) {
      return React.createElement(TableCell, {
        key: c.property,
        scope: c.dataScope,
        align: c.align
      }, React.createElement(Text, null, c.format ? c.format(datum) : datum[c.property]));
    }));
  })), React.createElement(TableFooter, null, React.createElement(TableRow, null, COLUMNS.map(function (c) {
    return React.createElement(TableCell, {
      key: c.property,
      border: "top",
      align: c.align
    }, React.createElement(Text, null, c.footer));
  })))));
};

storiesOf('Table', module).add('Simple Table', function () {
  return React.createElement(SimpleTable, null);
});