
import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

const AuthContext = React.createContext();

function Home() {
    return (
        <h2>Please login to see dashboard</h2>
    )
}
function Dashboard() {
    return (
        <h2>hi, thanks for login . You are in dashboard </h2>
    )
}


function Protected() {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) return <Navigate to="/" />

    return <Dashboard />
}
function RouteDefiner() {
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{localStorage.getItem("auth")==="true"})

    useEffect(()=>{
        localStorage.setItem("auth",isLoggedIn);
    },[isLoggedIn])

    return (
        <>
            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <button onClick={() => {
                    setIsLoggedIn(prev=>!prev)
                }}>{isLoggedIn ? "logout" : "login"}</button>

                <NavLink to="/dashboard">see dashboard</NavLink>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Protected />} />
                </Routes>
            </AuthContext.Provider>

        </>
    )

}
export default RouteDefiner;