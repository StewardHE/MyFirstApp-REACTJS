// Here, import react and reactDOM
import React from "react";
import { ReactDOM } from "react";

// create a div element using react(Without using JSX)
    // React.createElement('div', {}, React.createElement('div', {}))

// create a div element using JSX
// <div>This is a div</div>

// This is for add a div in the root div that is in the public/index.html
ReactDOM.render(
    <div>
        Hello World
    </div>, 
document.getElementById('root'))