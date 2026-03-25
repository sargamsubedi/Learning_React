
import React, { useContext, useState } from "react";
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
    const { isloggedin } = useContext(AuthContext);

    if (!isloggedin) return <Navigate to="/" />

    return <Dashboard />
}
function RouteDefiner() {
    const [isloggedin, setisLoggedin] = useState(false)

    return (
        <>
            <AuthContext.Provider value={{ isloggedin, setisLoggedin }}>
                <button onClick={() => {
                    setisLoggedin(!isloggedin)
                }}>{isloggedin ? "log out" : "logn in"}</button>

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