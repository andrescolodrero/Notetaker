var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

var routes = require("../config/routes.js");


// We will render the route
ReactDOM.render(
    // pass the router, this will handle routes
    <Router>{routes}</Router>,
    document.getElementById('app')
)