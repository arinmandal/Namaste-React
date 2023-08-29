import React, { Component } from "react"
import burger from "/src/assets/burger.jpg"
class About extends Component {

  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {

    // console.log("Parent Render")
    return (
      <div className="main">
        <div className="AboutPage h-[calc(100vh-105px)] 
        ">
          <img className="h-full w-full object-cover" src={burger} />
          <h1 className="mx-[5em] text-white absolute font-extrabold text-7xl top-[30%] w-[300px] ">Your favorite food in one place.</h1>
        </div >
      </div>
    )
  }
}


export default About