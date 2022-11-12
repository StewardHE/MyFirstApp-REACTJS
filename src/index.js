// Here, import react and reactDOM
import React from "react";
import ReactDOM from "react";

// this import the App component from App.jsx
import { App } from "./App";

// create a div element using react(Without using JSX)
    // React.createElement('div', {}, React.createElement('div', {}))

// create a div element using JSX
// <div>This is a div</div>


// this render the component App 
ReactDOM.render(<App />, document.getElementById('root'))