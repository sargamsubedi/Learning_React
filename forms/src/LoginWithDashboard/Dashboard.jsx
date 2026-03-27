import { useContext } from "react";
import { AuthContext } from "./container";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

function Dashboard()
{
    const {isLoggedIn,setIsLoggedIn}= useContext(AuthContext);
    const navigate =useNavigate();
    if(isLoggedIn)
    {
        return(
            <>

            <h1>this is dashboard</h1>
            </>
        )
    }
    else{
       return <Navigate to="/" />
    }

}
export default Dashboard;