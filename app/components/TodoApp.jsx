var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return ({
      todos:[
        {
          id:1,
          text: 'Watch soccer'
        },
        {
          id: 2,
          text: 'working out '
        }
      ]
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <TodoList todos={todos}/>
    );
  }
});


module.exports = TodoApp;
