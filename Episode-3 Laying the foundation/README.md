# Episode 3 - Laying the foundation
## NOTES
## JSX

JSX is a JavaScript syntax which is easier to create react element. without any createElement() or appendChild() methods.

```
JSX
---
const heading = <h1 id="heading">Hello World!!</h1>;
```

```
Without JSX
---
const heading = React.createElement("h1", {id="heading"}, "Hello World!!")
```

## Babel

Babel is the transpiler / compiler of JavaScript, that convert the modern javascript code that JS Engine / Browser can understand.

```
JSX - const heading = <h1 id="heading">Hello World!!</h1>;
Babel - const heading = /*#__PURE__*/React.createElement("h1", {id="heading"}, "Hello World!!")

```

## JSX => React.createElement => ReactElement => JS Object => HTML Element(render)

### `If you have to give an attribute to JSX, you have to use camelCase`

## React Component

A React component is a self-contained piece of code that defines a specific piece of user interface (UI)

#### When creating a React component, the component's name must start with an upper case letter.

#### Components come in two types, Class components and Function components

- Class Based Component
  ```    
   class HeadingComponent extends React.Component {
    render() {
    return <h2>Hi, I am a Car!</h2>;
    }
  }
   ```
- Functional Component
  #### The React Functional component is a function that return piece of JSX or React Element
  ```
  const HeadingComponent = () => {
    return <h1> React Functional Component </h1>;
  }
  ```    
  ```
  const HeadingComponent = () => <h1>React Functional Component</h1>;
  ```
  Both are valid functional component syntax.

## How to render Components
  ```
  root.render(<HeadingComponent/>)
  ```