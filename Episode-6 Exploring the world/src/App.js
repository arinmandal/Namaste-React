import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

// *! not using key(not acceptable in react it will give you an error) <<< index as key <<< using unique id 

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
