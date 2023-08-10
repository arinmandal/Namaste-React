# Episode 05 - Let's get hooked


## Theory 📝

### What is the difference between Named Export, Default Export and * as Export.

- Default Export/Import
  - ` export default file_name/component from "path" ;`
  - ` import file_name/component from "path" ;`
- Named Export/Import
  - `export const file_name / component ;`
  - `import {file_name / component} from "path"`



### What is the importance of config.js file?
A config.js file is a file that contains configuration settings for a JavaScript project. It can be used to store variables, constants, functions, objects, or any other data that the project needs to access or modify. A config.js file can help to make the code more readable, maintainable, and reusable by separating the configuration data from the logic and presentation layers.

Some of the benefits of using a config.js file are:

- It can avoid hard-coding values inside the scripts or in JSON objects, which can make the code more flexible and adaptable to different environments.
It can allow developers to change the configuration settings without modifying the source code, which can make the deployment and testing process easier and faster.
- It can prevent accidental changes to the configuration data by setting the properties as constant after loading the JavaScript object from the file.
- It can support automatic reloading of the configuration data if the file is changed on disk, which can improve the development workflow and reduce errors.
A config.js file can be created as a separate JavaScript file with an export JavaScript object, or as a JSON file that can be read directly by using the require function. The config.js file can be included in the HTML document or in another JavaScript file by using a script tag or a module system.


### What are React Hooks?
React hooks are a new feature introduced in React 16.8 that allow you to use state and other React features without writing a class. They are functions that "hook into" React state and lifecycle features from function components. Some of the built-in hooks are useState, useEffect, useContext, and useReducer. Hooks make it easier to reuse stateful logic and manage side effects in functional components. You can also create your own custom hooks to extract and share common functionality.

To use hooks, you need to follow some rules:

- Only call hooks at the top level of your function component. Don't call them inside loops, conditions, or nested functions.
- Only call hooks from React function components or custom hooks. Don't call them from regular JavaScript functions or class components.

These rules ensure that hooks work correctly and consistently. You can use the eslint-plugin-react-hooks to enforce these rules automatically.