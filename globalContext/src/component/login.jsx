import React,{ createContext, useContext, useState } from "react";

const AuthContext = React.createContext();

function Dashboard()
{
    const [isloggedin,setLoggedin] =useState(false);
return(

    <AuthContext.Provider value={{isloggedin,setLoggedin}} >
        <Login />
    </AuthContext.Provider>
    )
}

function Login()
{
    const {isloggedin,setLoggedin}= useContext(AuthContext);

    return(
        <>
            <h1>you are { isloggedin ? "logged in":"logged out" } </h1>
            <button onClick={()=>{
                setLoggedin(!isloggedin)
            }}>{isloggedin ? "log out":"logn in" }</button>
        
        </>
    )
}
export default Dashboard;