
import { useContext } from "react";
import { AuthContext } from "./container";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar()
{

    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
    const navigate =useNavigate();
    

    if(! isLoggedIn) return null;

    return(
             <nav>

            <NavLink >Home</NavLink>
            
            <NavLink >About</NavLink>
            
            <NavLink >Contact</NavLink>
            

            <button onClick={()=>{
                setIsLoggedIn(false);
                localStorage.removeItem("auth");
                navigate("/");
            }}>Logout</button>

            </nav>
    )
}

export default Navbar;