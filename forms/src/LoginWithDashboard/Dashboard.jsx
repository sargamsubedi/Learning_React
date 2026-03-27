import { useContext } from "react";
import { AuthContext } from "./container";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard()
{
    const {isLoggedIn,setIsLoggedIn}= useContext(AuthContext);
    const navigate =useNavigate();
    if(isLoggedIn)
    {
        return(
            <>
            <button onClick={()=>{
                setIsLoggedIn(false);
                localStorage.removeItem("auth");
                navigate("/");
            }}>Logout</button>
            <h1>this is dashboard</h1>
            </>
        )
    }
    else{
       return <Navigate to="/" />
    }

}
export default Dashboard;