// helloword.jsx
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorldChild = require('./helloword-child.jsx')

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <HelloWorldChild />                
      </div>
    );
  }
});

ReactDOM.render(<HelloWorld />,document.getElementById('example'));