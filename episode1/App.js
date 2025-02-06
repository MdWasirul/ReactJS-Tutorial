// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World form React JS!"
// );
// console.log(heading); //object

/* Nesting Structure ----------
 *<div id=parent >
    *<div id=child>
      * <h1> I am H1 Tag! </h1>
   * </div>
 *</div>
 
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hi I'm H1 Tag!")
//   )
// );
// console.log(parent);s

import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client'; //suport react 19 

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "This is Namaste React!🚀")
  ),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, " By Akshay Saini!")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "Hi I'm H2 Tag!")
  ),
]);
console.log(parent);

/*JSX is used to simplified the Above Code to write html  */
// const root = createRoot(document.getElementById('root'));

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

// root.render(heading); //Render method change object to heading tag h1
