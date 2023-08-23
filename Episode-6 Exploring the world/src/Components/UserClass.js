import React from "react"
import { json } from "react-router-dom";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Hello",
        location: "World"
      },
    }

  }

  componentDidUpdate() {
    console.log("compoment did update")
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arinmandal");
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
  }
  render() {
    const { name, location, avatar_url
    } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: arinmandal40@gmail.com</h3>

      </div>
    )
  }
}

export default UserClass;

// Lifecycle Method of Class based component
/*
----- MOUNTING -----
Constructor(Dummy)
Render(Dummy)
        Render <HTML>{Dummy Data}</HTML>
Component Did Mount
 <API call>
 <this.setState> - State Variable is Updated
------ UPDATE --------
render(API data)
    <HTML>(Render with new api data)
    ComponentDidUpdate()
*/