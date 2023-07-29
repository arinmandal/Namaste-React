# In your existing project

### initialize npm into your repo
  
  ```
   npm init
  ```

### install react and react-dom

  ```
  npm install react
  npm install react-dom
  ```
### remove CDN links of react
  ```
  </script> -->
    <!-- <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script> -->
  ```  
### install parcel

  ```
  npm install -D parcel
  ```  
### ignite your app with parcel  

  ```
  npx parcel index.html
  ```
### add script for start and build with parcel commands
  
  ```
  "scripts": {
    "start": "parcel ./index.html",
    "build": "parcel build ./index.html"
  },
  ```
### add .gitignore file 
  
  ```
  .gitignore
  ```
  ```
  /node_modules
.parcel-cache
/dist
  ```
### add browserlists

  ```
  "browserslist": {
    "last 2 version"
  }
  ```
### build a production version of your code using parcel build  

  ```
  npm run build
  ```