// We can create any number of elments with React
const heading = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello World from React!"
);

// createElement takes 3 inputs (1. Element Name, 2. Element attribues, 3. InnerHTML)

// But keep in note when we create root that is always created by ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now we have to render ---------- render means display
root.render(heading);
