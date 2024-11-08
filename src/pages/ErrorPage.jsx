import { NavLink, useRouteError } from "react-router-dom"
import Oops from "../assets/Oops.png"
import "../App.css"
function ErrorPage() {
    const error = useRouteError()
  
    return (
    
    <div className="errorContainer">
        <div className="text-error">
            <h1>Oops, Wrong Turn...</h1>
            <p>{error && error.message}</p>
            <NavLink to="./"><button className="btn">Back To Home</button></NavLink>
        </div>
        <img src={Oops} alt="" height={200} width={200} />
    </div>
  )
}

export default ErrorPage