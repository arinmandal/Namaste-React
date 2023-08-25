import React, { Component } from "react"
import UserClass from "../Components/UserClass"

class About extends Component {

  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {

    console.log("Parent Render")
    return (
      <div className="main">
        <div className="AboutPage">
          <h1>About</h1>
          <UserClass name={"First"} location={"Tamluk"} />
        </div >
      </div>
    )
  }
}


export default About