# Episode 2 - Ignite Our App
## Tropic
- What is NPM
- Installing important packages, Bundler
- What is Parcel
- What are node modules
- Various files inside a React App

## NOTES
## What is NPM?

NPM is a package manager that used to manage dependencies for packages.

## What is Parcel?

Parcel is a web application bundler which offers a blazing fast performance utilizing multicore processing and its required zero configuration.
## Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Image Optimization
- Minification file
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnosis
- Error handling
- HTTPs
- Tree Shaking- Different build and production
  - We need to remove "main": "app.js" from the package.json when building our app for production. 
## Type of dependencies

### Normal Dependency

- A dependency is a library that a project needs to function effectively.
- If a package doesn’t already exist in the node_modules directory, then it is automatically added.
- These are the libraries you need when you run your code.
- Included in the final code bundle. .
- Dependencies can be added to your project by running :`npm install <package_name>`

### devDependencies

- DevDependencies are the packages a developer needs during development.
- As you install a package, npm will automatically install the dev dependencies.
- These dependencies may be needed at some point during the development process, but not during execution.
- Included in the final code bundle .
- Dev dependencies can be added to your project by running : `npm install -D <package_name>`

## Whats the different between tilde(~) and caret(^) 5) in package.json?

- [ ~ ] version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.
- [^] version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

## Package-lock.json

- `package-lock.json` keeps all the exact version of all the dependencies.

## Transitive Dependency

#### A transitive dependency is a package that yours project indirectly depends on through another package

## NPX

#### Just like we have `npm` similarly we have something known as `npx`

- `npm` - npm means installing the package.
- `npx` - means execute that package.

### Exploring tools

- ### [Parcel](https://parceljs.org/)

- ### [browserslist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
