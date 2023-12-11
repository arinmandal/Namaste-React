# Chapter 02 - Igniting our App


## 1) What is NPM?
NPM is a package manager that used to managed dependencies for packages.
  ### NPM consists of two main parts:
      - a CLI (command-line interface) tool for publishing and downloading packages
      - an online repository that hosts JavaScript packages
  ### package.json - is a configuration for NPM
###  How to initialize npm ?
```
npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## 2) What is Parcel/Webpack? Why do we need it?
Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.
It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```

## 3) What is `.parcel-cache`?
 `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## 4) What is npx?
 `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.


## 5) What is difference between `dependencies` vs `devDependencies`?
 `Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 
`DevDependencies` should contain modules/packages a developer needs during development.
such as, `parcel, webpack, vite, mocha`.
`These packages` are `necessary only while you are developing your project`, not necessary on production.
To save a dependency as a devDependency on installation we need to do, 
```
npm install --save-dev
```
instead of just,
```
npm install --save
```


## 6) What is Tree Shaking?
 `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## 7) What is Hot Module Replacement?
`Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.


## 8) List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
 `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
* `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
* `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
* `Image optimization`
* `Caching while development`


## 9) What is `.gitignore`? What should we `add and not add` into it?
 The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
`package-lock.json` should `not add` into your `.gitignore` file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


## 10) What is the difference between `package.json` and `package-lock.json`?
 `package.json`:
* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.


## 11) Why should I not modify `package-lock.json`?
 `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## 12) What is `node_modules` ? Is it a good idea to push that on git?
 `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## 13) What is the `dist` folder?
 The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## 14) What is `browserslist`?
 `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
 
## 15) Difference between Caret("^") & Tilde("~") ?

In the context of version numbers in software development, the caret (^) and tilde (~) are used as prefix characters in dependency declarations to indicate the acceptable range of versions for a package. However, they have slightly different behaviors:

- Caret (^):

Example: ^1.2.3
Behavior: Allows changes to the specified version but keeps the leftmost non-zero digit fixed. It's often used for specifying that you will accept any compatible new features or bug fixes, but not breaking changes.
Explanation: For version 1.2.3, the caret allows upgrading to any version that is compatible with 1.x.x but not to 2.0.0 or higher.
- Tilde (~):

Example: ~1.2.3
Behavior: Allows changes to the specified version but keeps the rightmost non-zero digit fixed. It's typically used to indicate that you will accept bug fixes but not new features or breaking changes.
Explanation: For version 1.2.3, the tilde allows upgrading to any version that is compatible with 1.2.x but not to 1.3.0 or higher.
Here's a quick summary:

Caret (^): Permits compatible updates, including new features, but not breaking changes. It fixes the leftmost non-zero digit.
Tilde (~): Permits only bug fix updates. It fixes the rightmost non-zero digit.
