

import { createContext, useState } from "react";
import { Route, Routes ,Navigate } from "react-router-dom";
import LogIn from "./Login";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

 export  const AuthContext=createContext();

function Container()
{
    const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("auth")==="true");

    return(

        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            <Navbar />
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

    </AuthContext.Provider>
    )

}

export default Container;