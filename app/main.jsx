var React = require('react');
var ReactDOM = require('react-dom');
//In order to render a React Component must start with a upper-case letter.
var App = require('./components/layout.jsx').App;

ReactDOM.render(
    (
        <App></App>
    ),
    document.getElementById("app")
);