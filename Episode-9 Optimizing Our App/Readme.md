# Episode 09 - Optimising our app

## Tropic
- Custom Hooks.
- Single Responsibility Principle
- Creating our own Custom Hook!
- Dynamic bundling.
- Suspense Component.
## Single Responsibility Principle
- Reusability
- Maintainable
- Testable

## What is custom Hooks in React?
Custom React hooks are an essential tool that let you add special, unique functionality to your React applications.

- How to build online/offline status feature using custom hooks `useOnlineStatus`.

```
import {useState, useEffect} from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })    

         window.addEventListener("online", () => {
            setOnlineStatus(true);
        })  
    },[])

    return onlineStatus;
}

export default useOnlineStatus;
```
- How to import Custom Hooks

```
import useOnlineStatus from "../utils/useOnlineStatus";

const onlineStatus = useOnlineStatus();

```

## Lazy Loading 
Lazy loadings a design pattern for optimizing web and mobile apps.

`lazy` lets you defer loading component’s code until it is rendered for the first time.

- lazy()

```
const SomeComponent = lazy(load)
```
## Usage
### Lazy-loading components with Suspense 

Usually, you import components with the static import declaration:
```
import Grocery from "./Components/Grocery"
```
To defer loading this component’s code until it’s rendered for the first time, replace this import with:
```
import {Lazy} from "react";

const Grocery = lazy(() => import("./Components/Grocery"))
```
This code relies on `dynamic import()`, which might require support from your bundler or framework.

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a `<Suspense>` boundary:

<Suspense fallback={<Loading />}>
```
{
 path: "/grocery",
 element: (
     <Suspense fallback={<h1>Loading...</h1>}>
     <Grocery/>
     </Suspense>
     ),
},
```
Code Splitting, Dynamic Bundling, On Demand Loading, Dynamic Import all are same things with different term.