import React, { useEffect,useState } from "react";




function Login()
{
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const [isLoggedIn,setIsLoggedIn]=useState(false);
  

    function HandleLogic()
    {
        if(username==="admin" && password ==="123")
        {
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
            }
    }

return(

    <>
   
    
    <input type="text"  
         placeholder="UserName" 
         value={username} 
         onChange={(e)=>{setUserName(e.target.value)}}
    />
    <br />
    <input type="text" 
            placeholder="Password" 
            value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}
    />

    <button onClick={HandleLogic}>Submit</button>
    
    {
        isLoggedIn?<h1>logged in successfully</h1> : <h1>invalid username or password</h1>
    }
     </>
)
}

export default Login;