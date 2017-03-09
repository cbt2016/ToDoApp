var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return ({
      showCompleted: false,
      searchText: '',
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
  handlerAddTodo: function (text){
    alert(text);
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handlerAddTodo}/>
      </div>

    );
  }
});


module.exports = TodoApp;
