import React from "react";
import ReactDOM from "react-dom/client";

//-------------------------- Nested Header-------------------------
// react .createElements

const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "This is heading1"),
  React.createElement("h2", {}, "This is heading 2 "),
  React.createElement("h3", {}, "This is heading 3 Tag"),
]);

// jsx---
const jsxHeading = (
  <div className="title">
    <h1>This is JSX Heading 1</h1>
    <h2>This is JSX Heading 2</h2>
    <h3>This is JSX Heading 3</h3>
  </div>
);
console.log(jsxHeading);

//Functional Component
// const HeadingComponent = () => (
//   <div className="title">
//     <h1>This is functional components Heading 1</h1>
//     <h2>This is functional Heading 2</h2>
//     <h3>This is functional Heading 3</h3>
//   </div>
// );

const HeadingComponent = () => {
  return (
    <div className="title">
      <h1>This is functional components Heading 1</h1>
      <h2>This is functional Heading 2</h2>
      <h3>This is functional Heading 3</h3>
    </div>
  );
};
//Passing attributes in JSX-

const HeadingComponent2 = () => {
  return (
    <div className="title">
      <h1 id="heading 1" style={{ color: "orange" }}>
        This is functional components Heading 1
      </h1>
      <h2 id="heading2" style={{ color: "gray" }}>
        This is functional Heading 2
      </h2>
      <h3 id="heading3" style={{ color: "green" }}>
        This is functional Heading 3
      </h3>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div id="headerComponent">
        
      <div id="logo">
        <img
          src="https://bilginc.com/editorFiles/3147aa77.png"
          alt="Logo Image"
        />
      </div>

      <div id="Search">
        <label for="input-search">Search:</label>
        <input type="search" name="q" id="input-search" />
      </div>

      <div id="userIcon">
        <img
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="User Icon"
        />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
// root.render(<HeadingComponent />);
// root.render(<HeadingComponent2 />);
root.render(<HeaderComponent />);

/*
✅ React.createElement creates elements without JSX.
✅ JSX simplifies the syntax.
✅ Functional components improve reusability.
✅ Attributes (like style, id, className) can be passed in JSX.
*/
