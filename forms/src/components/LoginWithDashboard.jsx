// task: integrate login form with Context and Routing

import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Route, Routes ,Navigate } from "react-router-dom";


const AuthContext = createContext();

function Dashboard()
{   
    const isLoggedIn =useContext(AuthContext);
    console.log("navigated into dashboard");
    
    if(!isLoggedIn) return <Navigate to="/" />

    return(
        <h2>This is dashboard, if you are seeing this your login is successful</h2>
    )
}

function LogIn()
{
    
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const [isLoggedIn,setIsLoggedIn]=useState(()=>{
        localStorage.getItem("auth")==="true"
    });

    function Validate()
    {
        
        if(username==="admin" && password==="123")
        {
            setIsLoggedIn(true);
            localStorage.setItem("auth",true);
        console.log("validation successful");

        }
        else{
            setIsLoggedIn(false);

            localStorage.removeItem("auth");
            console.log("validation failled");
            
        }
        // return <Navigate to="/dashboard" />
    }
    
return(
    <AuthContext.Provider value={isLoggedIn}>

        <input type="text"  placeholder="UserName"  value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="text"  placeholder="Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={Validate}>Submit</button>
        {
            isLoggedIn? <Navigate to="dashboard" /> : <Navigate to="/" />
        }
        <Routes >
            <Route path="/" element={<h1>this is base root</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<p>no route found</p> } />

        </Routes>
    </AuthContext.Provider>
)    

}

export default LogIn;