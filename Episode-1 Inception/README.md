# Episode 1 - Inception 
## Tropic
- VSCode setup
- Hello World Program by using plain HTMl
- Hello World Program using Vanilla JavaScript
- What is CDN
- Hello World Program in React
- Nested Elements
- Need of JSX
- Library v/s Framework
- Advantages/Specialties of React
# NOTES


## What is CDN?
A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

## Benefits of CDN:
- Improving website load times.
- Reducing bandwidth costs.
- Increasing content availability and redundancy.
- Improving website security.

## CDN in React
In React, CDN is used to deliver the React library to the user’s browser. This can be useful when you want to quickly prototype an application or when you want to include React in an existing website. You can use a CDN link to include React in your project without having to download and host the library yourself.

## What is crossorigin?
The crossorigin attribute is used to control how the browser handles cross-origin requests when loading the script. It is an attribute that can be added to the ```<script>``` tag when including external JavaScript files. CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

To use CORS in React, you can add the crossorigin attribute to your ```<script>``` tags when loading React from a CDN. Alternatively, you can modify the server to add the header Access-Control-Allow-Origin: * to enable cross-origin requests from anywhere.