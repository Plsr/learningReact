/** @jsx React.DOM */

'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var Hello = require('./Hello')
var Counter = require('./Counter')


ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
)

ReactDOM.render(
  <Counter />,
  document.getElementById('content')
)
