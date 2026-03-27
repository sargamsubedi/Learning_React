import { useContext, useState } from "react";
import { AuthContext } from "./container";
import {  useNavigate } from "react-router-dom";

function LogIn()
{
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const {isLoggedIn,setIsLoggedIn}= useContext(AuthContext);
    const navigate =useNavigate();

    function Validate()
    {
        if(username==="admin" && password==="123")
        {
            setIsLoggedIn(true);
            localStorage.setItem("auth","true");
            navigate("/dashboard");
        }
        else{
            setIsLoggedIn(false);
            localStorage.removeItem("auth");
            alert("wrong login info");
        }
    }

    return(
        <>
            <input type="text"  placeholder="UserName"  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="text"  placeholder="Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={Validate}>Submit</button>
        </>
    )

}

export default LogIn;