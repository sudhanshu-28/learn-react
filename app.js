/* <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div> */

// React.createElement (Object) => Object => with render method => it is converted to => HTML(Browser Understands)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "text-green" },
      "This is Child Div H1 Tag Data"
    ),
    React.createElement(
      "h2",
      { style: { color: "red" } },
      "This is Child Div H2 Tag Data"
    ),
  ])
);

// We can create any number of elments with React
const heading = React.createElement(
  "h1",
  { style: { color: "red" }, className: "text-green" },
  "Hello World from React!"
);

// createElement takes 3 inputs (1. Element Name, 2. Element attribues, 3. InnerHTML)

// But keep in note when we create root that is always created by ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now we have to render ---------- render means display
// heading here retuns Javascript object
// render method is reposible to convert object to html element and add it to DOM
console.log("SSR parent => ", parent);
root.render(parent);
