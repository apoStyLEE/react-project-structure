// helloword-child.jsx
var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorldChild = React.createClass({
  render: function() {
    return (
      <span>
        Child Component
      </span>
    );
  }
});

module.exports = HelloWorldChild;