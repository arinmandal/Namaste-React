# Building first Hello World Program

- ### Using just HTML

  ```
  <html>
  <head>
    <title>Namaste React 🙏</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  </html>
  ```

- ### Using JS to Manipulate the DOM

  HTML

  ```
  <html>
  <head>
    <title> Namaste React</title>
  </head>
  <body>
      <div id="root">
      </div>
  </body>
  </html>
  ```

  JavaScript

    ```
    const root = document.getElementById("root");
    const heading = createElement("h1");
    heading.innerHTML = "Hello World"
    root.appendChild(heading)

    ```

# use CDN Link

  ```
    <html>
    <head>
      <title>Namaste React 🙏</title>
    </head>
    <body>
      <h1>Hello World</h1>

        <script
        crossorigin
        src="https://unpkg.com/react@18/umd/react.development.js"
        >
        </script>
        <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
        >
        </script>

      <script src="App.js"></script>
    </body>
    </html>
  ```

### Create an Element

  ```
  const parent = React.createElement("div", { id: "parent" } "children element");
  ```

### Create nested React Elements

  ```
  const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" },
    React.createElement("h1", {}, "Hello H1 from First Child Div"))],
  [React.createElement("div", { id: "child2" }, 
    React.createElement("h2", {}, "Hello H2 from Second Child Div"))]
  )
  ```

### Use ```root.render()```

  ```
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  ```
