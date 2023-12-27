import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 className="heading" tabIndex="1">
    Namaste React Element
  </h1>
);

// React Functional Components

const Title = function () {
  return (
    <h1 className="heading" tabIndex="1">
      Namaste React Title Compoents
    </h1>
  );
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {jsxHeading}
    <h1 className="heading">Namaste React Functional Compoents</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);

// episode 1

// const heading = React.createElement("h1", {id: 'heading', xyz: 'abc'}, "Hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// episode 2

/**
 *
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 *  </div>
 *
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i'm an h1 tag react"),
//     React.createElement("h2", {}, "i'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "i'm an h1 tag"),
//     React.createElement("h2", {}, "i'm an h2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
