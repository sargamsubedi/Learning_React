import React,{ useContext } from "react";


const ThemeContext = React.createContext();

function A()
{
    return(
        <ThemeContext.Provider value= {{theme: "dark" ,fontSize:"20px"}}>

            <B />

        </ThemeContext.Provider>
    )
}
function B()
{
    return <C />
}
function C()
{
    const {theme , fontSize}=useContext(ThemeContext);
    return(
        <>
        <h2>the theme is {theme}</h2>
        <h2>the font size is {fontSize}</h2>
        </>
    )
}
export default A;