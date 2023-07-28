# ASSIGNMENT Episode 1

## What is Emmet?

Emmet (formerly Zen Coding[1]) is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.

## Difference between a Library and Framework?

- #### A library performs specific, well-defined operations
  - Network protocols, compression, image manipulation, string utilities, regular expression evaluation, math. Operations are self-contained.

- #### A framework is a skeleton where the application define

  - Web application system, Plug-in manager, GUI system. The framework defines the concept but the application defines the fundamental functionality that end-users care about.

# What is CDN? why do you use it?

A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

we use CDN for

- Improving website load times.
- Reducing bandwidth costs.
- Increasing content availability and redundancy.
- Improving website security.

# Why React is known as React?

React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.

# What is cross-origin in the ```<script>``` tag?

The crossorigin attribute is used to control how the browser handles cross-origin requests when loading the script. It is an attribute that can be added to the ```<script>``` tag when including external JavaScript files. CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

To use CORS in React, you can add the crossorigin attribute to your ```<script>``` tags when loading React from a CDN. Alternatively, you can modify the server to add the header Access-Control-Allow-Origin: * to enable cross-origin requests from anywhere.

# What is the difference between React and ReactDOM?

## React

   React is the javascript library for building User interfaces.
## ReactDOM
    ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render().
    ReactDOM is the part of React.

# What is the difference between ```react.development.js``` and ```react.production.js``` via cdn link?

React.development.js and React.production.js are functionally the same. 
The development version is used for debugging and development purposes, and includes source maps and other features that make it better for debugging. 
The production version is optimized for smaller file size and runs on the client's machine. The development version is slower than the production version because they are not optimized, minified.

# What are async and defer?