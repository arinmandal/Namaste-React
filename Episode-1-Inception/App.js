const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heading) this an object that return to the console.
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

{/* <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div> */}
// ? ReactElement(Object) => HTML(Browser Understands)
//! CORE REACT
// const parent = React.createElement("div", { id: "parent" },
//   React.createElement("div", { id: "child" },
//     React.createElement("h1", {}, "I'm h1 tag")
//   )
// );

{/* <div id="parent">
  <div id="child">
    <h1>Hello World</h1>
  </div>
  <div id="child2">
    <h2>Hello World 2</h2>
  </div>
</div> */}

const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello H1 from First Child Div"
  ))], [React.createElement("div", { id: "child2" }, React.createElement("h2", {}, "Hello H2 from Second Child Div"
  ))]

)




root.render(parent)