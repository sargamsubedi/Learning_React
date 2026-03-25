import React, { useContext, useState } from "react";

const ThemeContext =React.createContext();
function Toggle()
{
    const [theme,setTheme]=useState("light");
return(

    <ThemeContext.Provider value={{theme, setTheme}}>

        <Child />
        <Box />
    </ThemeContext.Provider>
    )
    
}

function Child()
{
    const {theme,setTheme}=useContext(ThemeContext);
    return(
        <div
        
        style={{
            padding: "20px",
            transition: "all 0.3s",
            backgroundColor: theme==="light"?"white":"black",
            color: theme==="light"?"black":"white"
        }}
        >
            <h2>the theme is {theme}</h2>
            
            <button onClick={()=>
                {setTheme((prev)=>
                    prev==="light"?"dark":"light")
                }
            }>Change theme</button>
        </div>
    )
}
function Box()
{
    const {theme,setTheme}=useContext(ThemeContext);

    return(
        <h1 
        style={{
            backgroundColor: theme==="light"?"white":"black",
            color: theme==="light"?"black":"white"
        }}
        
        >this is the box</h1>
    )
}

export default Toggle;