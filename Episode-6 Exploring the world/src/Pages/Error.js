import { useRouteError } from "react-router-dom"

const errStyle = {
  color: "Red",
  fontSize: "3rem",
  textAlign:"Center"
}

const Error = () => {
  const err = useRouteError();
  return (
    <div style={errStyle}>
      <h1 >Oops!</h1>
      <p>Something went wrong 😞</p>
      <p>{err.status} {err.statusText}</p>
    </div>
  )
}
export default Error;