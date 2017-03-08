//Create a reactjs component

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!app.scss');
ReactDOM.render(
    // <Router history ={hashHistory}>
    //   <Route path='/' component={Main}>
    //     <Route path="countdown" component={Countdown}/>
    //     <IndexRoute component={Timer}/>
    //   </Route>
    // </Router>,
    <TodoApp/>,
    document.getElementById('app')
);
