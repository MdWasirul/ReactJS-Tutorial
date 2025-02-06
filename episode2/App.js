import React from "react";
import ReactDom from "react-dom/client";

//React element  =====Its a Object not a html element-->react.create element is an object
//when it render to dom then it becomes html Element.

//React.createElement=>>object==>htmlElement(render);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is a React element!🚀🚀 "
);
console.log(heading);

//JSX -->HTML-like  or-XML Like syntax
//JSX(transpiled before it reaches JS)--Parcel--Babel
//JSX==>Babel transpiles it to React.createElement ==>ReactElement --JS Object ==>HTMLElement(render);

//React Elementx

const jsxHeading = (
  <h1 className="head" tableIndex="1">
    This is Namaste React Course😍
  </h1>
);
console.log(jsxHeading);

//Title Component
const Title = () => (
  <h1 className="head" tableIndex="1">
    This is Namaste React Course🚀
  </h1>
);
//REACT Element
const elem = <span>React Element</span>;

const title2 = (
  <h1 className="head" tableIndex="1">
    {elem}
    This is Namaste React Course🚀.
  </h1>
);
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);

//React components
/*
1. ClassBase Component
2. Functional Components.
*/

/*
--------Both are Same -----------
const fn=()=>{
  return true;
}
const fn2 = () => true;

*/

//React Functional components

// const HeadingComponent = () => {
//   return <h1 className="heading">This is Funtional React Componnents </h1>;
// };

//  nested jsx
//Component Compositions
const number = 10000;
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h2>{number}</h2>
    {title2}    {/*----->react Element*/}
    {/* 
    <Title />
    <Title></Title> */}
    {Title()}
    <h1 className="heading">This is Funtional React Components </h1>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));
//how to render functional components in root Babel Understand  lIKE: <HeadingComponent/>
root.render(<HeadingComponent2 />);
