import UserClass from "../Components/UserClass"
import UserContext from "../Utils/UserContext"

const Contact = () => {
  return (
    // <div className="contact h-[calc(100vh-105px)] px-2">
    //   <h1 className="text-3xl font-bold p-4">Contact</h1>
    //   {/* Accepting UserContext into class component */}
    //   <div className="mx-4">
    //     <UserContext.Consumer>
    //       {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
    //     </UserContext.Consumer>
    //   </div>
    //   <UserClass />

    // </div>
    <div>
      <h1>Contact Page</h1>
      <button className="bg-red-400 p-4">Click</button>
    </div>
  )
}

export default Contact